/**
 * Pure logo-selection helpers for source-site harvesting. Kept free of
 * playwright/DOM imports so they can be unit-tested directly and reused by
 * `harvest-source.ts`. The DOM scraping in `extractBrand` produces the plain
 * descriptors below; the ranking + byte sniffing here run in Node.
 *
 * Why this exists: the old scrape used a single first-match `querySelector`, so
 * on sites whose header renders an accessibility widget / decorative icon before
 * the real logo, it grabbed the junk icon (and often a non-`image/*` content-type
 * that was then rejected), leaving the page with no logo. We now rank every
 * candidate, prefer real logos, and sniff bytes so CDN `application/octet-stream`
 * logos are still accepted.
 */

/** Cap the inlined logo so it never bloats the stored HTML / screenshot payload. */
export const MAX_LOGO_BYTES = 128 * 1024;

/** A candidate `<img>` scraped from the page (absolute url + lightweight signals). */
export interface LogoImgCandidate {
  url: string;
  alt?: string;
  cls?: string;
  id?: string;
  /** Inside an ancestor whose class/id matches /logo|brand/i. */
  inLogoCtx?: boolean;
  /** Inside a <header> or <nav>. */
  inHeaderNav?: boolean;
  /** Rendered width/height in px, when known (0/undefined = unknown). */
  w?: number;
  h?: number;
}

/** A favicon / apple-touch-icon `<link>` (lowest-priority fallback). */
export interface IconLinkCandidate {
  rel: string;
  href: string;
  sizes?: string;
}

const LOGO_RE = /logo|wordmark/i;
const JUNK_RE =
  /icon|setting|contrast|accessib|hamburger|\bmenu\b|search|cart|close|arrow|chevron|spacer|pixel|blank|avatar|rating|\bstar\b|social|facebook|instagram|twitter|linkedin|youtube|tiktok|pinterest|payment|badge|sprite|loader|spinner/i;

function scoreImg(c: LogoImgCandidate): number {
  const text = `${c.url} ${c.alt ?? ""} ${c.cls ?? ""} ${c.id ?? ""}`;
  const isLogo = LOGO_RE.test(text);
  let score = 0;
  if (isLogo) score += 50;
  if (c.inLogoCtx) score += 40;
  if (c.inHeaderNav) score += 10;
  // Penalize obvious junk (accessibility toggles, decorative icons) unless the
  // element also names itself a logo (e.g. "logo-icon.png").
  if (!isLogo && JUNK_RE.test(text)) score -= 60;
  // Penalize tiny/spacer images.
  if (c.w === 1 || c.h === 1) score -= 100;
  else if (c.w && c.h && c.w <= 24 && c.h <= 24) score -= 40;
  return score;
}

/** Parse a `sizes` attribute like "180x180" / "any" to a pixel size (0 when unknown). */
function iconSize(sizes: string | undefined): number {
  const m = /(\d+)x(\d+)/i.exec(sizes ?? "");
  return m ? parseInt(m[1], 10) : 0;
}

/**
 * Return logo-source URLs best-first: ranked `<img>` candidates, then icon
 * links (largest first). Deduped, blanks dropped, capped. The caller fetches
 * them in order and takes the first that yields real image bytes.
 */
export function pickLogoCandidates(
  imgs: LogoImgCandidate[],
  links: IconLinkCandidate[],
  limit = 8,
): string[] {
  const rankedImgs = imgs
    .filter((c) => c.url)
    .map((c, i) => ({ url: c.url, score: scoreImg(c), i }))
    // Stable sort: higher score first, original order as tiebreak.
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .map((c) => c.url);

  const rankedLinks = links
    .filter((l) => l.href)
    .map((l, i) => ({ href: l.href, size: iconSize(l.sizes), i }))
    .sort((a, b) => b.size - a.size || a.i - b.i)
    .map((l) => l.href);

  const seen = new Set<string>();
  const out: string[] = [];
  for (const u of [...rankedImgs, ...rankedLinks]) {
    if (!u || seen.has(u)) continue;
    seen.add(u);
    out.push(u);
    if (out.length >= limit) break;
  }
  return out;
}

/** Best-effort image type from leading bytes; null when the bytes aren't a known image. */
export function sniffImageMime(bytes: Uint8Array): string | null {
  const b = bytes;
  if (b.length >= 8 && b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return "image/png";
  if (b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return "image/jpeg";
  if (b.length >= 6 && b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x38) return "image/gif";
  // ICO / CUR: 00 00 01 00
  if (b.length >= 4 && b[0] === 0x00 && b[1] === 0x00 && b[2] === 0x01 && b[3] === 0x00) return "image/x-icon";
  // WEBP: "RIFF"????"WEBP"
  if (
    b.length >= 12 &&
    b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 &&
    b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50
  )
    return "image/webp";
  // SVG: leading (whitespace/BOM then) "<svg" or an XML prolog that contains "<svg".
  const head = new TextDecoder("utf-8", { fatal: false }).decode(b.subarray(0, 256)).trimStart();
  if (/^<svg[\s>]/i.test(head) || (/^<\?xml/i.test(head) && /<svg[\s>]/i.test(head))) return "image/svg+xml";
  return null;
}

/** True when the leading bytes look like an HTML/error page rather than an image. */
function looksLikeHtml(body: Uint8Array): boolean {
  const head = new TextDecoder("utf-8", { fatal: false }).decode(body.subarray(0, 256)).trimStart();
  return /^<(!doctype|html\b|head\b|body\b|script\b)/i.test(head);
}

/**
 * Build a `data:` URI from a fetched logo response, or null when it isn't a
 * usable image. Byte sniffing wins (so `application/octet-stream` logos — which
 * CDNs routinely serve — are accepted); otherwise an `image/*` content-type is
 * trusted unless the bytes clearly look like an HTML/error page.
 */
export function buildLogoDataUri(contentType: string | null | undefined, body: Uint8Array): string | null {
  if (body.length === 0 || body.length > MAX_LOGO_BYTES) return null;
  const ct = (contentType ?? "").split(";")[0].trim().toLowerCase();
  const sniffed = sniffImageMime(body);
  let mime: string | null;
  if (sniffed) mime = sniffed;
  else if (ct.startsWith("image/") && !looksLikeHtml(body)) mime = ct;
  else mime = null;
  if (!mime) return null;
  return `data:${mime};base64,${Buffer.from(body).toString("base64")}`;
}
