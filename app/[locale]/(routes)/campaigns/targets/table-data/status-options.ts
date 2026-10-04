// Shared active/inactive status options + the faceted-filter match helper,
// reused by the targets table "Status" column and its faceted filter.
//
// The DB column crm_Targets.status is a Boolean (true = active). The faceted
// filter stores string values, so options use "true"/"false" and the match
// helper stringifies the row's boolean before comparing.

export const STATUS_OPTIONS = [
  { label: "Active", value: "true" },
  { label: "Inactive", value: "false" },
] as const;

export type StatusOptionValue = (typeof STATUS_OPTIONS)[number]["value"];

// True when the row's boolean status is one of the selected option values.
// `selected` is the faceted filter's array of "true"/"false" strings.
export function matchesStatusFilter(
  status: boolean,
  selected: string[],
): boolean {
  return selected.includes(String(status));
}
