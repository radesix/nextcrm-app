/**
 * Step 2 of the `/homepage` skill: source imagery WITHOUT the server's image keys.
 * Default source is the business's own site photos (downloaded, normalized, inlined later).
 *
 *   list  <dir> <siteUrl>                  → site-images.json (largest variant of each <img>/srcset on the homepage)
 *   fetch <dir> <url> [url...]             → src-<n>.jpg (flattened, whitespace-trimmed, ≤1400px) + contact.jpg
 *   crop  <dir> <in> <out> <l> <t> <w> <h> → px crop of a src image to a new jpg
 *   plan  <dir>                            → reads imgmap.json { "__RADE_IMG_1__": { file, alt } }
 *                                            writes brief-full.txt = brief.txt + buildImageBrief (server format)
 *
 * Run: pnpm exec tsx scripts/homepage-session/images.ts <cmd> ...
 */
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import sharp, { type OverlayOptions } from "sharp";
import { workDir, readJson, run } from "./shared";
import { assertPublicHost } from "@/lib/net/host-guard";
import { buildImageBrief } from "@/lib/homepage/prompt";

const MAX_BYTES = 12 * 1024 * 1024;
const MAX_W = 1400;

type ImgMap = Record<string, { file: string; alt: string }>;

const MAX_REDIRECTS = 3;

/**
 * GET with the harvest's SSRF guard applied to EVERY hop: redirects are followed by
 * hand so a prospect site can't bounce us to a private/metadata address (whose bytes
 * would otherwise be inlined into a public /p/ page). Accepted residual, same as
 * harvest-source: DNS-rebinding between the check and fetch's own resolution.
 */
async function guardedFetch(url: string): Promise<Response> {
  let current = new URL(url);
  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    if (current.protocol !== "https:" && current.protocol !== "http:") {
      throw new Error(`refusing non-http URL: ${current.href}`);
    }
    await assertPublicHost(current.hostname);
    const res = await fetch(current, {
      redirect: "manual",
      headers: { "user-agent": "Mozilla/5.0" },
      signal: AbortSignal.timeout(20000),
    });
    const location = res.headers.get("location");
    if (res.status >= 300 && res.status < 400 && location) {
      current = new URL(location, current);
      continue;
    }
    if (!res.ok) throw new Error(`${res.status} for ${current.href}`);
    const declared = Number(res.headers.get("content-length") ?? 0);
    if (declared > MAX_BYTES) throw new Error(`too large (${declared} bytes)`);
    return res;
  }
  throw new Error(`too many redirects for ${url}`);
}

// WordPress-style size variants: foo-300x200.jpg → base "foo.jpg", area 60000.
const variant = (u: string) => {
  const m = /^(.*)-(\d+)x(\d+)(\.[a-z]+)$/i.exec(u.split("?")[0]);
  return m ? { base: m[1] + m[4], area: +m[2] * +m[3] } : { base: u.split("?")[0], area: Number.MAX_SAFE_INTEGER };
};

async function list(dir: string, siteUrl: string) {
  const html = await (await guardedFetch(siteUrl)).text();
  const urls = new Set<string>();
  const re = /(?:src|data-src|srcset|data-srcset|href)\s*=\s*["']([^"']+)["']|url\(\s*["']?([^"')\s]+)["']?\s*\)/gi;
  for (const m of Array.from(html.matchAll(re))) {
    for (const part of (m[1] ?? m[2] ?? "").split(",")) {
      const raw = part.trim().split(/\s+/)[0];
      if (!/\.(jpe?g|png|webp)(\?|$)/i.test(raw)) continue;
      try {
        urls.add(new URL(raw, siteUrl).href);
      } catch {
        /* skip malformed */
      }
    }
  }
  // Keep the largest variant per base image (the unsuffixed original counts as largest).
  const best = new Map<string, { url: string; area: number }>();
  for (const url of Array.from(urls)) {
    const v = variant(url);
    const cur = best.get(v.base);
    if (!cur || v.area > cur.area) best.set(v.base, { url, area: v.area });
  }
  const out = Array.from(best.values()).map((b) => b.url).filter((u) => !/(favicon|flavicon|icon-|logo)/i.test(u));
  writeFileSync(join(dir, "site-images.json"), JSON.stringify(out, null, 2));
  out.forEach((u, i) => console.log(`${i + 1}. ${u}`));
}

async function fetchImages(dir: string, urls: string[]) {
  const tiles: OverlayOptions[] = [];
  const made: string[] = [];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const n = i + 1;
    try {
      const res = await guardedFetch(url);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length > MAX_BYTES) throw new Error("too large");
      const out = join(dir, `src-${n}.jpg`);
      const info = await sharp(buf)
        .flatten({ background: "#ffffff" })
        .trim({ threshold: 12 })
        .resize({ width: MAX_W, withoutEnlargement: true })
        .jpeg({ quality: 76, mozjpeg: true })
        .toFile(out);
      made.push(`src-${n}.jpg  ${info.width}x${info.height}  ← ${url}`);
      const thumb = await sharp(out).resize(360, 360, { fit: "contain", background: "#eeeeee" }).toBuffer();
      const label = Buffer.from(
        `<svg width="360" height="40"><rect width="56" height="40" fill="#000" opacity=".75"/><text x="10" y="28" font-size="24" font-family="sans-serif" fill="#fff">${n}</text></svg>`,
      );
      const col = (n - 1) % 4;
      const row = Math.floor((n - 1) / 4);
      tiles.push({ input: thumb, left: col * 360, top: row * 360 }, { input: label, left: col * 360, top: row * 360 });
    } catch (e) {
      made.push(`src-${n}: FAILED (${(e as Error).message}) ← ${url}`);
    }
  }
  if (tiles.length) {
    const rows = Math.ceil(urls.length / 4);
    await sharp({ create: { width: 1440, height: rows * 360, channels: 3, background: "#ffffff" } })
      .composite(tiles)
      .jpeg({ quality: 80 })
      .toFile(join(dir, "contact.jpg"));
  }
  made.forEach((l) => console.log(l));
  console.log(`contact sheet: ${join(dir, "contact.jpg")}`);
}

async function crop(dir: string, a: string[]) {
  const [input, output, l, t, w, h] = a;
  const info = await sharp(join(dir, input))
    .extract({ left: +l, top: +t, width: +w, height: +h })
    .resize({ width: MAX_W, withoutEnlargement: true })
    .jpeg({ quality: 76, mozjpeg: true })
    .toFile(join(dir, output));
  console.log(`${output} ${info.width}x${info.height}`);
}

async function plan(dir: string) {
  const map = readJson<ImgMap>(dir, "imgmap.json");
  const images = Object.entries(map).map(([token, v]) => ({ token, alt: v.alt, url: "" }));
  const brief = readFileSync(join(dir, "brief.txt"), "utf8");
  // Same composition as the job: `${buildBrief(...)}\n${buildImageBrief(images)}`.
  const full = `${brief}\n${buildImageBrief(images)}`;
  writeFileSync(join(dir, "brief-full.txt"), full);
  console.log(full);
}

run(async () => {
  const [cmd, d, ...rest] = process.argv.slice(2);
  const dir = workDir(d);
  if (cmd === "list") return list(dir, rest[0]);
  if (cmd === "fetch") return fetchImages(dir, rest);
  if (cmd === "crop") return crop(dir, rest);
  if (cmd === "plan") return plan(dir);
  throw new Error("usage: images.ts <list|fetch|crop|plan> <dir> ...");
});
