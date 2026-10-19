jest.mock("@/lib/prisma", () => ({
  prismadb: {
    crm_TargetLists: { findMany: jest.fn() },
    crm_campaign_steps: { findFirst: jest.fn() },
    crm_campaign_sends: { count: jest.fn() },
    crm_campaigns: { updateMany: jest.fn() },
  },
}));

import { prismadb } from "@/lib/prisma";
import {
  resolveCampaignRecipients,
  markCampaignSentIfComplete,
} from "@/lib/campaigns/campaign-recipients";

const listsWith = (...targets: Array<Record<string, unknown>>) => [
  { targets: targets.map((target) => ({ target })) },
];

describe("resolveCampaignRecipients", () => {
  beforeEach(() => jest.clearAllMocks());

  it("falls back to company_email when the target has no email (QA 'stuck on sending' case)", async () => {
    (prismadb.crm_TargetLists.findMany as jest.Mock).mockResolvedValue(
      listsWith({ id: "t1", email: null, company_email: "info@acme.test", personal_email: null })
    );
    await expect(resolveCampaignRecipients("c1")).resolves.toEqual([
      { id: "t1", email: "info@acme.test" },
    ]);
  });

  it("uses the shared chain email -> company_email -> personal_email, treating blanks as absent", async () => {
    (prismadb.crm_TargetLists.findMany as jest.Mock).mockResolvedValue(
      listsWith(
        { id: "t1", email: "a@x.test", company_email: "co@x.test", personal_email: "p@x.test" },
        { id: "t2", email: "  ", company_email: "", personal_email: "p2@x.test" },
        { id: "t3", email: null, company_email: null, personal_email: null }
      )
    );
    await expect(resolveCampaignRecipients("c1")).resolves.toEqual([
      { id: "t1", email: "a@x.test" },
      { id: "t2", email: "p2@x.test" },
    ]);
  });

  it("dedupes the same address across lists, case-insensitively", async () => {
    (prismadb.crm_TargetLists.findMany as jest.Mock).mockResolvedValue([
      ...listsWith({ id: "t1", email: "Same@x.test" }),
      ...listsWith({ id: "t2", email: null, company_email: "same@x.test" }),
    ]);
    await expect(resolveCampaignRecipients("c1")).resolves.toEqual([
      { id: "t1", email: "Same@x.test" },
    ]);
  });

  it("only joins targets that have not opted out, and selects every email field", async () => {
    (prismadb.crm_TargetLists.findMany as jest.Mock).mockResolvedValue([]);
    await resolveCampaignRecipients("c1");
    const arg = (prismadb.crm_TargetLists.findMany as jest.Mock).mock.calls[0][0];
    expect(arg.where).toEqual({ campaign_lists: { some: { campaign_id: "c1" } } });
    expect(arg.include.targets.where).toEqual({ target: { do_not_email: false } });
    expect(arg.include.targets.include.target.select).toEqual({
      id: true,
      email: true,
      company_email: true,
      personal_email: true,
    });
  });
});

describe("markCampaignSentIfComplete", () => {
  beforeEach(() => jest.clearAllMocks());

  it("marks a sending campaign 'sent' once no sendable step-0 sends are queued", async () => {
    (prismadb.crm_campaign_steps.findFirst as jest.Mock).mockResolvedValue({ id: "s0" });
    (prismadb.crm_campaign_sends.count as jest.Mock).mockResolvedValue(0);
    (prismadb.crm_campaigns.updateMany as jest.Mock).mockResolvedValue({ count: 1 });

    await expect(markCampaignSentIfComplete("c1")).resolves.toBe(true);
    expect(prismadb.crm_campaign_sends.count).toHaveBeenCalledWith({
      where: {
        step_id: "s0",
        status: "queued",
        unsubscribed_at: null,
        target: { do_not_email: false },
      },
    });
    // Guarded on status so a paused/deleted campaign is never flipped to sent.
    expect(prismadb.crm_campaigns.updateMany).toHaveBeenCalledWith({
      where: { id: "c1", status: "sending" },
      data: { status: "sent" },
    });
  });

  it("leaves the campaign alone while step-0 sends are still queued", async () => {
    (prismadb.crm_campaign_steps.findFirst as jest.Mock).mockResolvedValue({ id: "s0" });
    (prismadb.crm_campaign_sends.count as jest.Mock).mockResolvedValue(2);

    await expect(markCampaignSentIfComplete("c1")).resolves.toBe(false);
    expect(prismadb.crm_campaigns.updateMany).not.toHaveBeenCalled();
  });

  it("does nothing when the campaign has no step 0", async () => {
    (prismadb.crm_campaign_steps.findFirst as jest.Mock).mockResolvedValue(null);

    await expect(markCampaignSentIfComplete("c1")).resolves.toBe(false);
    expect(prismadb.crm_campaigns.updateMany).not.toHaveBeenCalled();
  });
});
