jest.mock("@/lib/auth-server", () => ({ getSession: jest.fn() }));
jest.mock("@/lib/prisma", () => ({
  prismadb: {
    users: { findUnique: jest.fn() },
    crm_campaigns: { findFirst: jest.fn(), update: jest.fn() },
  },
}));
jest.mock("@/inngest/client", () => ({
  inngest: { send: jest.fn().mockResolvedValue({}) },
}));
jest.mock("@/lib/campaigns/campaign-recipients", () => ({
  ...jest.requireActual("@/lib/campaigns/campaign-recipients"),
  resolveCampaignRecipients: jest.fn(),
}));

import { prismadb } from "@/lib/prisma";
import { getSession } from "@/lib/auth-server";
import { inngest } from "@/inngest/client";
import {
  resolveCampaignRecipients,
  NO_RECIPIENTS_ERROR,
} from "@/lib/campaigns/campaign-recipients";
import { sendCampaignNow } from "@/actions/campaigns/send-campaign-now";

describe("sendCampaignNow recipient guard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (getSession as jest.Mock).mockResolvedValue({ user: { id: "m1" } });
    (prismadb.users.findUnique as jest.Mock).mockResolvedValue({ id: "m1", role: "manager" });
    (prismadb.crm_campaigns.findFirst as jest.Mock).mockResolvedValue({ id: "c1" });
  });

  it("refuses with a clear error and stays out of 'sending' when there are 0 eligible recipients", async () => {
    (resolveCampaignRecipients as jest.Mock).mockResolvedValue([]);
    await expect(sendCampaignNow("c1")).resolves.toEqual({ error: NO_RECIPIENTS_ERROR });
    expect(prismadb.crm_campaigns.update).not.toHaveBeenCalled();
    expect(inngest.send).not.toHaveBeenCalled();
  });

  it("sends when at least one recipient resolves", async () => {
    (resolveCampaignRecipients as jest.Mock).mockResolvedValue([{ id: "t1", email: "info@acme.test" }]);
    await sendCampaignNow("c1");
    expect(prismadb.crm_campaigns.update).toHaveBeenCalled();
    expect(inngest.send).toHaveBeenCalledWith({
      name: "campaigns/send-now",
      data: { campaignId: "c1" },
    });
  });
});
