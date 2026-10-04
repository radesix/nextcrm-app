// Shared outreach-engagement option list + label/badge helpers + the per-target
// status derivation, reused by the targets table column and its faceted filter.

export const ENGAGEMENT_STATUS_OPTIONS = [
  { label: "Clicked", value: "CLICKED" },
  { label: "Opened", value: "OPENED" },
  { label: "Sent", value: "SENT" },
  { label: "Bounced", value: "BOUNCED" },
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

// Rank for sorting (higher = more engaged). The column sorts by this, NOT by the
// status string (which would sort alphabetically: Clicked < Not sent < Opened < Sent).
const ENGAGEMENT_RANK: Record<EngagementStatus, number> = {
  CLICKED: 3,
  OPENED: 2,
  SENT: 1,
  NONE: 0,
  // A bounce is a dead end (bad address), so it sorts below "Not sent" — least
  // worth pursuing — even though it OUTRANKS everything for DISPLAY precedence.
  BOUNCED: -1,
};

export function engagementRank(value?: string | null): number {
  return ENGAGEMENT_RANK[(value as EngagementStatus) ?? "NONE"] ?? 0;
}

/**
 * Furthest engagement a target reached across ALL its outreach emails:
 * BOUNCED > CLICKED (the homepage link specifically) > OPENED > SENT > NONE.
 *
 * BOUNCED is checked FIRST and wins outright: a bounce auto-deactivates and
 * suppresses the target (status=false, do_not_email=true), so flagging the dead
 * address is the most actionable signal — more than a necessarily stale prior
 * open/click on that same (now unusable) address.
 *
 * A click/open implies the email was sent, so those outrank SENT. Only a
 * successful send (status "SENT") counts as SENT — a FAILED/DRAFT row alone is
 * NONE. Order-independent.
 *
 * NOTE (intentional): this list-column status reflects the FURTHEST state across
 * ALL of a target's emails, whereas the target-detail HomepageEngagement line
 * reflects only the most-recent homepage-bearing email. They can legitimately
 * differ (column "Opened" vs detail "not opened yet"); CLICKED stays aligned since
 * both key off homepage_clicked_at. See BasicView.tsx.
 */
export function targetEngagementStatus(
  emails: TargetEmailEngagement[] | null | undefined,
): EngagementStatus {
  if (!emails || emails.length === 0) return "NONE";
  let sawBounced = false;
  let sawClicked = false;
  let sawOpened = false;
  let sawSent = false;
  for (const e of emails) {
    if (e.status === "BOUNCED") sawBounced = true;
    if (e.homepage_clicked_at) sawClicked = true;
    if (e.opened_at) sawOpened = true;
    if (e.status === "SENT") sawSent = true;
  }
  // Precedence (full scan first, so order-independent): a bounce wins outright
  // (see JSDoc), then homepage click > open > successful send > nothing.
  if (sawBounced) return "BOUNCED";
  if (sawClicked) return "CLICKED";
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
// `secondary` = OPENED, `destructive` (red) = BOUNCED, `outline` = SENT. NONE
// renders as a muted dash, not a badge.
export function engagementBadgeVariant(
  value?: string | null,
): "default" | "secondary" | "destructive" | "outline" {
  if (value === "CLICKED") return "default";
  if (value === "OPENED") return "secondary";
  if (value === "BOUNCED") return "destructive";
  return "outline";
}
