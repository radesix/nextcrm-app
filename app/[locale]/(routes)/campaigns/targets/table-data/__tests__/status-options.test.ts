import { STATUS_OPTIONS, matchesStatusFilter } from "../status-options";

describe("STATUS_OPTIONS", () => {
  it("offers Active (true) and Inactive (false)", () => {
    expect(STATUS_OPTIONS).toEqual([
      { label: "Active", value: "true" },
      { label: "Inactive", value: "false" },
    ]);
  });
});

describe("matchesStatusFilter", () => {
  it("matches an active target when Active is selected", () => {
    expect(matchesStatusFilter(true, ["true"])).toBe(true);
    expect(matchesStatusFilter(true, ["false"])).toBe(false);
  });

  it("matches an inactive target when Inactive is selected", () => {
    expect(matchesStatusFilter(false, ["false"])).toBe(true);
    expect(matchesStatusFilter(false, ["true"])).toBe(false);
  });

  it("matches either when both are selected", () => {
    expect(matchesStatusFilter(true, ["true", "false"])).toBe(true);
    expect(matchesStatusFilter(false, ["true", "false"])).toBe(true);
  });
});
