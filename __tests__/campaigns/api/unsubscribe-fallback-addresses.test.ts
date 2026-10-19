jest.mock("@/lib/prisma", () => ({
  prismadb: {
    crm_campaign_sends: { findUnique: jest.fn(), update: jest.fn() },
    crm_Targets: { updateMany: jest.fn() },
  },
}));

import { prismadb } from "@/lib/prisma";
import { POST } from "@/app/api/campaigns/unsubscribe/route";

// fork: campaigns can address a target via company_email / personal_email
// (lib/campaigns/campaign-recipients.ts), so an unsubscribe must suppress every
// target that would be reached at that address — not only those whose `email` matches.
describe("unsubscribe suppresses the address in every email field", () => {
  beforeEach(() => jest.clearAllMocks());

  it("matches company_email and personal_email case-insensitively", async () => {
    (prismadb.crm_campaign_sends.findUnique as jest.Mock).mockResolvedValue({
      id: "send-1",
      target_id: "t-1",
      email: "Info@Acme.test",
      unsubscribed_at: null,
    });
    (prismadb.crm_campaign_sends.update as jest.Mock).mockResolvedValue({});
    (prismadb.crm_Targets.updateMany as jest.Mock).mockResolvedValue({ count: 3 });

    await POST(
      new Request("http://localhost/api/campaigns/unsubscribe?token=tok", { method: "POST" })
    );

    const { where } = (prismadb.crm_Targets.updateMany as jest.Mock).mock.calls[0][0];
    expect(where.do_not_email).toBe(false);
    expect(where.OR).toEqual(
      expect.arrayContaining([
        { id: "t-1" },
        { email: { equals: "Info@Acme.test", mode: "insensitive" } },
        { company_email: { equals: "Info@Acme.test", mode: "insensitive" } },
        { personal_email: { equals: "Info@Acme.test", mode: "insensitive" } },
      ])
    );
  });
});
