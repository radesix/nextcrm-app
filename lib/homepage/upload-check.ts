import { isAllowedRenderRequest } from "@/lib/homepage/render-allowlist";
import { MAX_UPLOAD_BYTES } from "@/lib/homepage/upload-limits";

/**
 * Pre-flight for an HTML file headed to the "Upload your own HTML" override
 * (POST /api/crm/targets/[id]/upload-homepage). Used by the keyless in-session
 * generator (`/homepage` skill) so a page is known-good BEFORE the operator uploads.
 *
 * Mirrors what the upload path actually does:
 *  - upload-homepage-core rejects > MAX_UPLOAD_BYTES and non-HTML text;
 *  - the upload flow materializes with NO images, so a leftover __RADE_IMG_n__ /
 *    __RADE_LOGO_SRC__ token becomes a missing image — everything must be inlined;
 *  - the screenshot render only lets allowlisted hosts load (render-allowlist), so
 *    any other remote resource would be missing from the CRM/email screenshot.
 * Navigation links (<a href>) are not resources and are ignored.
 */

export type UploadCheck = { ok: boolean; bytes: number; problems: string[] };

const TOKEN_RE = /__RADE_(?:IMG_\d+|LOGO_SRC)__/g;

// Attributes that make the browser fetch something. <a href> is navigation; <link href>
// is handled separately so rel=preconnect/dns-prefetch (no fetch of a resource) is skipped.
const ATTR_RE = /<(img|script|source|video|audio|iframe|embed|object|track|input)\b[^>]*>/gi;
const SRC_ATTR_RE = /\s(src|poster|data)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/gi;
const SRCSET_ATTR_RE = /\ssrcset\s*=\s*("([^"]*)"|'([^']*)')/gi;
const LINK_RE = /<link\b[^>]*>/gi;
// SVG <image> loads its href (or legacy xlink:href).
const SVG_IMAGE_RE = /<image\b[^>]*>/gi;
const CSS_URL_RE = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^)\s]*))\s*\)/gi;
const CSS_IMPORT_RE = /@import\s+(?:"([^"]+)"|'([^']+)')/gi;

function attr(tag: string, name: string): string | null {
  const m = new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, "i").exec(tag);
  return m ? (m[2] ?? m[3] ?? m[4] ?? "") : null;
}

const isFetchable = (u: string): boolean => /^(https?:)?\/\//i.test(u.trim());

/** Every remote (http/https/protocol-relative) URL the document would load. */
export function extractResourceUrls(html: string): string[] {
  const out = new Set<string>();
  const add = (u: string | undefined | null) => {
    if (u && isFetchable(u)) out.add(u.trim().replace(/^\/\//, "https://"));
  };
  for (const [tag] of Array.from(html.matchAll(ATTR_RE))) {
    for (const m of Array.from(tag.matchAll(SRC_ATTR_RE))) add(m[3] ?? m[4] ?? m[5]);
    for (const m of Array.from(tag.matchAll(SRCSET_ATTR_RE))) {
      for (const part of (m[2] ?? m[3] ?? "").split(",")) add(part.trim().split(/\s+/)[0]);
    }
  }
  for (const [tag] of Array.from(html.matchAll(LINK_RE))) {
    const rel = (attr(tag, "rel") ?? "").toLowerCase();
    if (/\b(preconnect|dns-prefetch|canonical|alternate)\b/.test(rel)) continue;
    add(attr(tag, "href"));
  }
  for (const [tag] of Array.from(html.matchAll(SVG_IMAGE_RE))) {
    add(attr(tag, "href"));
    add(attr(tag, "xlink:href"));
  }
  for (const m of Array.from(html.matchAll(CSS_URL_RE))) add(m[1] ?? m[2] ?? m[3]);
  for (const m of Array.from(html.matchAll(CSS_IMPORT_RE))) add(m[1] ?? m[2]);
  return Array.from(out);
}

/** The upload endpoint's "is this an HTML document?" gate (shared with upload-homepage-core). */
export function looksLikeHtml(html: string): boolean {
  const probe = html.trim().toLowerCase();
  return probe.includes("<html") || probe.includes("<!doctype html") || probe.includes("<body");
}

export function checkUploadReady(html: string): UploadCheck {
  const problems: string[] = [];
  const bytes = Buffer.byteLength(html, "utf8");
  if (bytes > MAX_UPLOAD_BYTES) {
    problems.push(`File is ${(bytes / 1048576).toFixed(2)} MB; the upload limit is 4 MB — compress the inlined images.`);
  }
  if (!looksLikeHtml(html)) {
    problems.push("Not an HTML document (the upload endpoint would reject it).");
  }
  const tokens = Array.from(new Set(html.match(TOKEN_RE) ?? []));
  if (tokens.length) {
    problems.push(`Unreplaced token(s) ${tokens.join(", ")} — the upload path does not substitute these; inline the image/logo as a data: URI.`);
  }
  const blocked = extractResourceUrls(html).filter((u) => !isAllowedRenderRequest(u));
  for (const u of blocked) {
    problems.push(`Remote resource not on the render allowlist (missing from the CRM screenshot): ${u}`);
  }
  return { ok: problems.length === 0, bytes, problems };
}
