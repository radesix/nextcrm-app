// Shared outreach-engagement option list + label/badge helpers + the per-target
// status derivation, reused by the targets table column and its faceted filter.

export const ENGAGEMENT_STATUS_OPTIONS = [
  { label: "Clicked", value: "CLICKED" },
  { label: "Opened", value: "OPENED" },
  { label: "Sent", value: "SENT" },
  { label: "Not sent", value: "NONE" },
] as const;

export type EngagementStatus =
  (typeof ENGAGEMENT_STATUS_OPTIONS)[number]["value"];

// Minimal shape the derivation reads from each of a target's outreach emails.
export type TargetEmailEngagement = {
  status?: string | null;
  opened_at?: Date | string | null;
  homepage_clicked_at?: Date | string | null;
};

/**
 * Furthest engagement a target reached across ALL its outreach emails:
 * CLICKED (the homepage link specifically) > OPENED > SENT > NONE.
 *
 * A click/open implies the email was sent, so those outrank SENT. Only a
 * successful send (status "SENT") counts as SENT — a FAILED/DRAFT row alone is
 * NONE. Order-independent.
 */
export function targetEngagementStatus(
  emails: TargetEmailEngagement[] | null | undefined,
): EngagementStatus {
  if (!emails || emails.length === 0) return "NONE";
  let sawOpened = false;
  let sawSent = false;
  for (const e of emails) {
    if (e.homepage_clicked_at) return "CLICKED"; // highest — can't be beaten
    if (e.opened_at) sawOpened = true;
    if (e.status === "SENT") sawSent = true;
  }
  if (sawOpened) return "OPENED";
  if (sawSent) return "SENT";
  return "NONE";
}

export function engagementStatusLabel(value?: string | null): string {
  return (
    ENGAGEMENT_STATUS_OPTIONS.find((o) => o.value === value)?.label ?? "Not sent"
  );
}

// Badge variant per engagement status. `default` = CLICKED (highlighted),
// `secondary` = OPENED, `outline` = SENT. NONE renders as a muted dash, not a badge.
export function engagementBadgeVariant(
  value?: string | null,
): "default" | "secondary" | "outline" {
  if (value === "CLICKED") return "default";
  if (value === "OPENED") return "secondary";
  return "outline";
}
