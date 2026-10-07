/**
 * Normalize CSS color strings to `#rrggbb`.
 *
 * WHY (fork): `harvestSource` reads brand colors via `getComputedStyle`, which on
 * modern sites (Tailwind v4 defaults to oklch) serializes as `oklch()`/`lab()` —
 * and the image planner's `validatedColors` keeps only hex, so those colors were
 * silently dropped and every generated image fell back to a generic warm palette.
 * Converting here lets harvested brand colors reach BOTH the page CSS (brief) and
 * the image prompts. Output is always sRGB hex (gamut-clipped), the one form every
 * downstream consumer (and the hex-only validator) accepts.
 *
 * Supports the forms `getComputedStyle` actually emits: hex, rgb()/rgba(),
 * oklch()/oklab(), lab()/lch(), and color(srgb …). Anything else, or a
 * fully-transparent color, returns null (the caller drops it).
 */

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
const to255 = (x: number) => Math.round(clamp01(x) * 255);
const hex2 = (n: number) => n.toString(16).padStart(2, "0");
const rgbHex = (r: number, g: number, b: number) => `#${hex2(r)}${hex2(g)}${hex2(b)}`;

/** Parse one token given the scale a trailing `%` maps to (e.g. 255 for an 8-bit channel). */
function val(tok: string, pctScale: number): number {
  const t = tok.trim();
  if (t === "none") return 0;
  if (t.endsWith("%")) return (parseFloat(t) / 100) * pctScale;
  return parseFloat(t);
}

/** Split a function body into component tokens + optional `/ alpha`. */
function parts(body: string): { comps: string[]; alpha: string | null } {
  const [main, a] = body.split("/");
  const comps = main.trim().split(/[\s,]+/).filter(Boolean);
  return { comps, alpha: a != null ? a.trim() : null };
}

function alphaIsZero(alpha: string | null): boolean {
  if (alpha == null || alpha === "") return false;
  return val(alpha, 1) <= 0;
}

/** Linear-light sRGB channel -> gamma-encoded sRGB [0,1]. */
function gam(c: number): number {
  const s = c < 0 ? -1 : 1;
  const a = Math.abs(c);
  return a <= 0.0031308 ? 12.92 * c : s * (1.055 * Math.pow(a, 1 / 2.4) - 0.055);
}

function linSrgbToHex(r: number, g: number, b: number): string {
  return rgbHex(to255(gam(r)), to255(gam(g)), to255(gam(b)));
}

/** Gamma-encoded sRGB/P3 channel [0,1] -> linear-light. (Inverse of `gam`.) */
function degam(c: number): number {
  const s = c < 0 ? -1 : 1;
  const a = Math.abs(c);
  return a <= 0.04045 ? c / 12.92 : s * Math.pow((a + 0.055) / 1.055, 2.4);
}

/** color(display-p3 r g b) (gamma-encoded 0..1, shared D65 white) -> sRGB hex, gamut-clipped. */
function p3ToHex(r: number, g: number, b: number): string {
  const R = degam(r), G = degam(g), B = degam(b);
  // linear Display-P3 -> linear sRGB (D65, no chromatic adaptation needed).
  const lr = 1.2249401762 * R - 0.2249404844 * G + 0.0000003086 * B;
  const lg = -0.0420569547 * R + 1.0420575818 * G;
  const lb = -0.0196375546 * R - 0.0786360454 * G + 1.0982736 * B;
  return linSrgbToHex(lr, lg, lb);
}

/** OKLab (L 0..1, a,b) -> gamma sRGB hex. (Björn Ottosson's matrices.) */
function oklabToHex(L: number, a: number, b: number): string {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ ** 3, m = m_ ** 3, s = s_ ** 3;
  const r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const bl = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
  return linSrgbToHex(r, g, bl);
}

/** CIE Lab (D50, L 0..100) -> gamma sRGB hex (Bradford-adapted D50 matrix). */
function labToHex(L: number, a: number, b: number): string {
  const ka = 24389 / 27, eps = 216 / 24389;
  const fy = (L + 16) / 116;
  const fx = a / 500 + fy;
  const fz = fy - b / 200;
  const fx3 = fx ** 3, fz3 = fz ** 3;
  const xr = fx3 > eps ? fx3 : (116 * fx - 16) / ka;
  const yr = L > ka * eps ? fy ** 3 : L / ka;
  const zr = fz3 > eps ? fz3 : (116 * fz - 16) / ka;
  // D50 reference white.
  const X = xr * 0.9642956764, Y = yr * 1.0, Z = zr * 0.8251046025;
  // XYZ(D50) -> linear sRGB (Lindbloom, Bradford adaptation).
  const r = 3.1338561 * X - 1.6168667 * Y - 0.4906146 * Z;
  const g = -0.9787684 * X + 1.9161415 * Y + 0.033454 * Z;
  const b2 = 0.0719453 * X - 0.2289914 * Y + 1.4052427 * Z;
  return linSrgbToHex(r, g, b2);
}

const DEG = Math.PI / 180;

/**
 * Convert a single CSS color string to `#rrggbb`, or null if it can't be parsed
 * or is fully transparent. Alpha is intentionally dropped (we only want the hue).
 */
export function toHexColor(input: string): string | null {
  if (!input) return null;
  const c = input.trim().toLowerCase();
  if (c === "transparent" || c === "none" || c === "") return null;

  // #rgb / #rgba / #rrggbb / #rrggbbaa
  const hm = /^#([0-9a-f]{3,8})$/.exec(c);
  if (hm) {
    const h = hm[1];
    if (h.length === 3 || h.length === 4) {
      if (h.length === 4 && h[3] === "0") return null;
      return `#${h[0]}${h[0]}${h[1]}${h[1]}${h[2]}${h[2]}`;
    }
    if (h.length === 6 || h.length === 8) {
      if (h.length === 8 && h.slice(6) === "00") return null;
      return `#${h.slice(0, 6)}`;
    }
    return null;
  }

  const fn = /^([a-z]+)\((.*)\)$/.exec(c);
  if (!fn) return null;
  const name = fn[1];
  const { comps, alpha } = parts(fn[2]);
  // Alpha may be "/ a" (modern) OR a trailing comma component (legacy rgba/hsla).
  // `nChannels` is where that trailing alpha would sit for this function.
  const alphaAt = (nChannels: number): string | null =>
    alpha ?? (comps.length > nChannels ? comps[nChannels] : null);

  if (name === "rgb" || name === "rgba") {
    if (alphaIsZero(alphaAt(3))) return null;
    if (comps.length < 3) return null;
    const r = Math.round(val(comps[0], 255));
    const g = Math.round(val(comps[1], 255));
    const b = Math.round(val(comps[2], 255));
    if ([r, g, b].some(Number.isNaN)) return null;
    return rgbHex(Math.max(0, Math.min(255, r)), Math.max(0, Math.min(255, g)), Math.max(0, Math.min(255, b)));
  }

  if (name === "oklab") {
    if (comps.length < 3 || alphaIsZero(alphaAt(3))) return null;
    const L = val(comps[0], 1), a = val(comps[1], 0.4), b = val(comps[2], 0.4);
    if ([L, a, b].some(Number.isNaN)) return null;
    return oklabToHex(L, a, b);
  }
  if (name === "oklch") {
    if (comps.length < 3 || alphaIsZero(alphaAt(3))) return null;
    const L = val(comps[0], 1), C = val(comps[1], 0.4), H = val(comps[2], 1);
    if ([L, C, H].some(Number.isNaN)) return null;
    return oklabToHex(L, C * Math.cos(H * DEG), C * Math.sin(H * DEG));
  }
  if (name === "lab") {
    if (comps.length < 3 || alphaIsZero(alphaAt(3))) return null;
    const L = val(comps[0], 100), a = val(comps[1], 125), b = val(comps[2], 125);
    if ([L, a, b].some(Number.isNaN)) return null;
    return labToHex(L, a, b);
  }
  if (name === "lch") {
    if (comps.length < 3 || alphaIsZero(alphaAt(3))) return null;
    const L = val(comps[0], 100), C = val(comps[1], 150), H = val(comps[2], 1);
    if ([L, C, H].some(Number.isNaN)) return null;
    return labToHex(L, C * Math.cos(H * DEG), C * Math.sin(H * DEG));
  }
  if (name === "color") {
    // color(srgb …) and color(display-p3 …); r,g,b gamma-encoded 0..1 (or %).
    const space = comps[0];
    if (comps.length < 4 || alphaIsZero(alphaAt(4))) return null;
    const r = val(comps[1], 1), g = val(comps[2], 1), b = val(comps[3], 1);
    if ([r, g, b].some(Number.isNaN)) return null;
    if (space === "srgb") return rgbHex(to255(r), to255(g), to255(b));
    if (space === "display-p3") return p3ToHex(r, g, b);
    return null; // other color spaces (rec2020, a98-rgb, …) not mapped
  }
  return null;
}

/**
 * Normalize a list of CSS colors to hex: convert, drop unparseable/transparent,
 * de-dupe, preserve order, and keep at most `max` (the harvested list is already
 * frequency-sorted, so the cap keeps the most dominant brand colors and avoids
 * handing a style a muddy 6-colour palette).
 */
export function normalizeColorsToHex(colors: string[], max = Infinity): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const c of colors) {
    if (out.length >= max) break;
    const hex = toHexColor(c);
    if (hex && !seen.has(hex)) {
      seen.add(hex);
      out.push(hex);
    }
  }
  return out;
}
