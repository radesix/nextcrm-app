import { toHexColor, normalizeColorsToHex } from "@/lib/homepage/color";

const toRgb = (hex: string): [number, number, number] => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
];

/** Assert a hex is within `tol` per channel of an expected RGB (for perceptual conversions). */
function expectNear(hex: string | null, rgb: [number, number, number], tol = 3) {
  expect(hex).not.toBeNull();
  const got = toRgb(hex as string);
  for (let i = 0; i < 3; i++) {
    expect(Math.abs(got[i] - rgb[i])).toBeLessThanOrEqual(tol);
  }
}

describe("toHexColor", () => {
  it("passes through and normalizes hex (lowercases, expands short, drops alpha)", () => {
    expect(toHexColor("#0F1A2E")).toBe("#0f1a2e");
    expect(toHexColor("#abc")).toBe("#aabbcc");
    expect(toHexColor("#0f1a2eff")).toBe("#0f1a2e");
  });

  it("converts rgb()/rgba() exactly", () => {
    expect(toHexColor("rgb(15, 26, 46)")).toBe("#0f1a2e");
    expect(toHexColor("rgb(255 255 255)")).toBe("#ffffff");
    expect(toHexColor("rgba(232, 180, 74, 0.8)")).toBe("#e8b44a");
    expect(toHexColor("rgb(50%, 0%, 0%)")).toBe("#800000");
  });

  it("treats fully-transparent colors as null", () => {
    expect(toHexColor("transparent")).toBeNull();
    expect(toHexColor("rgba(0, 0, 0, 0)")).toBeNull();
    expect(toHexColor("#ffffff00")).toBeNull();
    expect(toHexColor("")).toBeNull();
  });

  it("converts CIE lab() (the form radeengineering.com returned)", () => {
    expectNear(toHexColor("lab(100 0 0)"), [255, 255, 255], 1); // white
    expect(toHexColor("lab(0 0 0)")).toBe("#000000"); // black
    // Clearly red (exact coords shift with D50/D65 whitepoint; assert red-dominant).
    const red = toRgb(toHexColor("lab(53.24 80.09 67.2)") as string);
    expect(red[0]).toBeGreaterThanOrEqual(245);
    expect(red[1]).toBeLessThanOrEqual(12);
    expect(red[2]).toBeLessThanOrEqual(12);
  });

  it("converts oklch()/oklab() (Tailwind v4's default space)", () => {
    expectNear(toHexColor("oklab(1 0 0)"), [255, 255, 255], 1); // white
    expect(toHexColor("oklch(0 0 0)")).toBe("#000000"); // black
    expectNear(toHexColor("oklch(0.627955 0.257683 29.2338)"), [255, 0, 0], 3); // sRGB red
    expectNear(toHexColor("oklch(0.7 0.15 250 / 0.5)"), toRgb(toHexColor("oklch(0.7 0.15 250)") as string), 0); // alpha ignored
  });

  it("converts color(srgb …) and color(display-p3 …)", () => {
    expect(toHexColor("color(srgb 1 1 1)")).toBe("#ffffff");
    expect(toHexColor("color(srgb 0 0 0)")).toBe("#000000");
    expectNear(toHexColor("color(srgb 0.0588 0.1020 0.1804)"), [15, 26, 46], 1);
    // display-p3 (wider gamut, shared D65 white): white/black map exactly; a pure
    // p3 primary clips into sRGB gamut and stays clearly that hue.
    expect(toHexColor("color(display-p3 1 1 1)")).toBe("#ffffff");
    expect(toHexColor("color(display-p3 0 0 0)")).toBe("#000000");
    const p3red = toRgb(toHexColor("color(display-p3 1 0 0)") as string);
    expect(p3red[0]).toBeGreaterThanOrEqual(245);
    expect(p3red[1]).toBeLessThanOrEqual(12);
    expect(p3red[2]).toBeLessThanOrEqual(12);
  });

  it("returns null for unknown / unparseable input", () => {
    expect(toHexColor("rebeccapurple")).toBeNull(); // named colors not supported (harvest never emits them)
    expect(toHexColor("not-a-color")).toBeNull();
    expect(toHexColor("color(rec2020 1 0 0)")).toBeNull(); // only srgb + display-p3 mapped
  });
});

describe("normalizeColorsToHex", () => {
  it("converts, drops transparent/unparseable, de-dupes, preserves order", () => {
    expect(
      normalizeColorsToHex(["rgb(15, 26, 46)", "transparent", "lab(100 0 0)", "#0F1A2E", "not-a-color"]),
    ).toEqual(["#0f1a2e", "#ffffff"]);
  });

  it("returns [] for an all-empty/unconvertible list", () => {
    expect(normalizeColorsToHex(["transparent", "", "nope"])).toEqual([]);
  });

  it("caps to `max` dominant colors (after de-dupe), preserving order", () => {
    expect(
      normalizeColorsToHex(["rgb(1,1,1)", "rgb(2,2,2)", "rgb(1,1,1)", "rgb(3,3,3)", "rgb(4,4,4)"], 2),
    ).toEqual(["#010101", "#020202"]);
  });
});
