jest.mock("@/lib/prisma", () => ({
  prismadb: {
    crm_campaign_sends: { updateMany: jest.fn(), count: jest.fn() },
    crm_campaign_steps: { findFirst: jest.fn() },
    crm_campaigns: { updateMany: jest.fn() },
  },
}));

import { prismadb } from "@/lib/prisma";
import { onCampaignSendStepFailure } from "@/lib/campaigns/campaign-recipients";

// Shape Inngest passes to onFailure: the original event is nested under event.data.event.
const failure = (data: unknown, message = "Resend 500") => ({
  event: { data: { event: { data } } },
  error: new Error(message),
});

describe("onCampaignSendStepFailure", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (prismadb.crm_campaign_sends.updateMany as jest.Mock).mockResolvedValue({ count: 1 });
    (prismadb.crm_campaign_steps.findFirst as jest.Mock).mockResolvedValue({ id: "s0" });
    (prismadb.crm_campaign_sends.count as jest.Mock).mockResolvedValue(0);
    (prismadb.crm_campaigns.updateMany as jest.Mock).mockResolvedValue({ count: 1 });
  });

  it("marks a still-queued send failed, so it stops blocking campaign completion", async () => {
    await onCampaignSendStepFailure(failure({ sendId: "send-1", campaignId: "c1" }));

    expect(prismadb.crm_campaign_sends.updateMany).toHaveBeenCalledWith({
      // only while queued: a send that already went out is never rewritten as failed
      where: { id: "send-1", status: "queued" },
      data: { status: "failed", error_message: "Resend 500" },
    });
  });

  it("then completes the campaign if that was the last waiting send", async () => {
    await onCampaignSendStepFailure(failure({ sendId: "send-1", campaignId: "c1" }));

    expect(prismadb.crm_campaigns.updateMany).toHaveBeenCalledWith({
      where: { id: "c1", status: "sending" },
      data: { status: "sent" },
    });
  });

  it("truncates a very long error message", async () => {
    await onCampaignSendStepFailure(failure({ sendId: "send-1", campaignId: "c1" }, "x".repeat(5000)));

    const { data } = (prismadb.crm_campaign_sends.updateMany as jest.Mock).mock.calls[0][0];
    expect(data.error_message.length).toBeLessThanOrEqual(1000);
  });

  it("ignores a malformed payload without touching the database", async () => {
    await onCampaignSendStepFailure(failure({ sendId: 42 }));
    await onCampaignSendStepFailure(failure(undefined));

    expect(prismadb.crm_campaign_sends.updateMany).not.toHaveBeenCalled();
    expect(prismadb.crm_campaigns.updateMany).not.toHaveBeenCalled();
  });
});
