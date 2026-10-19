// fork: campaign recipient resolution + completion, shared by the send-now /
// schedule-send Inngest functions, the "Send now" server action and the MCP
// campaigns_send tool.
//
// Upstream resolved recipients from `target.email` only, so a target whose only
// address was company_email/personal_email was silently dropped. A campaign whose
// whole audience was dropped went to "sending" with nothing to send, and because
// nothing ever moved a campaign to "sent" it stayed "sending" forever.
import { prismadb } from "@/lib/prisma";
import { resolveTargetRecipient } from "@/lib/campaigns/compose-target-email";

export const NO_RECIPIENTS_ERROR =
  "This campaign has no recipients with an email address. Add an email, company email or personal email to the targets in its lists (and check they haven't opted out), then try again.";

export type CampaignRecipient = { id: string; email: string };

/**
 * The campaign's audience: targets in its lists that haven't opted out, each
 * addressed via the shared chain email -> company_email -> personal_email
 * (resolveTargetRecipient). Targets with no usable address are skipped, and an
 * address shared across lists/targets is sent to once (case-insensitive).
 */
export async function resolveCampaignRecipients(
  campaignId: string
): Promise<CampaignRecipient[]> {
  const lists = await prismadb.crm_TargetLists.findMany({
    where: { campaign_lists: { some: { campaign_id: campaignId } } },
    include: {
      targets: {
        where: { target: { do_not_email: false } },
        include: {
          target: {
            select: { id: true, email: true, company_email: true, personal_email: true },
          },
        },
      },
    },
  });

  const seen = new Set<string>();
  const recipients: CampaignRecipient[] = [];
  for (const list of lists) {
    for (const { target } of list.targets) {
      const email = resolveTargetRecipient(target);
      if (!email || seen.has(email.toLowerCase())) continue;
      seen.add(email.toLowerCase());
      recipients.push({ id: target.id, email });
    }
  }
  return recipients;
}

/**
 * Moves a "sending" campaign to "sent" once no step-0 send is still waiting to go
 * out. Sends that send-step will skip (recipient unsubscribed or suppressed) don't
 * count as waiting, because they stay "queued" forever. Safe to call repeatedly
 * and concurrently: the update only matches a campaign that is still "sending",
 * so a paused or deleted campaign is never flipped. Follow-up steps still run
 * (process-follow-up only skips paused campaigns).
 */
export async function markCampaignSentIfComplete(campaignId: string): Promise<boolean> {
  const step0 = await prismadb.crm_campaign_steps.findFirst({
    where: { campaign_id: campaignId, order: 0 },
    select: { id: true },
  });
  if (!step0) return false;

  const waiting = await prismadb.crm_campaign_sends.count({
    where: {
      step_id: step0.id,
      status: "queued",
      unsubscribed_at: null,
      target: { do_not_email: false },
    },
  });
  if (waiting > 0) return false;

  const { count } = await prismadb.crm_campaigns.updateMany({
    where: { id: campaignId, status: "sending" },
    data: { status: "sent" },
  });
  return count > 0;
}

const MAX_ERROR_MESSAGE = 1000;

/**
 * send-step's `onFailure`: runs once Inngest has exhausted the function's retries
 * (e.g. Resend kept throwing instead of returning `{ error }`). Without it the send
 * record stays "queued" forever and markCampaignSentIfComplete can never finish
 * the campaign. Marks the send "failed" only while it is still "queued", so a send
 * that already went out (a later step failed) is never rewritten, then re-checks
 * completion.
 */
export async function onCampaignSendStepFailure({
  event,
  error,
}: {
  event: { data: { event: { data?: unknown } } };
  error: Error;
}): Promise<void> {
  const data = event.data.event.data as { sendId?: unknown; campaignId?: unknown } | undefined;
  const sendId = data?.sendId;
  const campaignId = data?.campaignId;
  if (typeof sendId !== "string" || typeof campaignId !== "string") return;

  await prismadb.crm_campaign_sends.updateMany({
    where: { id: sendId, status: "queued" },
    data: {
      status: "failed",
      error_message: (error?.message || "Send failed after retries").slice(0, MAX_ERROR_MESSAGE),
    },
  });
  await markCampaignSentIfComplete(campaignId);
}
