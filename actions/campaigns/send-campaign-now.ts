"use server";
import { prismadb } from "@/lib/prisma";
import { inngest } from "@/inngest/client";
import {
  requireRole,
  assertCanReadCampaign,
  AuthenticationError,
  AuthorizationError,
} from "@/lib/authz";
// fork: refuse to send with no recipients (see lib/campaigns/campaign-recipients.ts)
import { resolveCampaignRecipients, NO_RECIPIENTS_ERROR } from "@/lib/campaigns/campaign-recipients";

export const sendCampaignNow = async (id: string) => {
  let user;
  try {
    user = await requireRole(["manager", "admin"]);
  } catch (e) {
    if (e instanceof AuthenticationError) return { error: "Unauthorized" };
    if (e instanceof AuthorizationError) return { error: "Forbidden" };
    throw e;
  }

  try {
    await assertCanReadCampaign(user, id);
  } catch (e) {
    if (e instanceof AuthorizationError) return { error: "Not found" };
    throw e;
  }

  // fork: no-recipient guard
  if ((await resolveCampaignRecipients(id)).length === 0) return { error: NO_RECIPIENTS_ERROR };

  const now = new Date();
  await prismadb.crm_campaigns.update({
    where: { id },
    data: { status: "sending", scheduled_at: now },
  });

  await inngest.send({
    name: "campaigns/send-now",
    data: { campaignId: id },
  });
};
