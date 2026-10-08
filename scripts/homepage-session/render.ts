/**
 * Step 3 of the `/homepage` skill (run after every draft/refine pass): materialize
 * the model's HTML exactly like the server (materializeHtml — logo + image tokens →
 * inlined data: URIs, since the upload path has no images to substitute), check it
 * is upload-ready, and render it with the REAL renderAndScreenshot (the same egress
 * allowlist + finalize the CRM screenshot uses), plus full-page desktop/mobile review shots.
 *
 * Input:  <dir>/<name>.html (tokens), imgmap.json, logo-trim.txt | logo.txt (optional)
 * Output: <name>.final.html (upload this), <name>-viewport.png (= the CRM screenshot),
 *         <name>-desktop-<i>.png / <name>-mobile-<i>.png (≤1800px-tall review slices)
 * Exit 1 when the page is not upload-ready or has console errors / horizontal scroll.
 *
 * Run: pnpm exec tsx scripts/homepage-session/render.ts out/homepage-session/<slug> v1
 */
import { existsSync, readFileSync, writeFileSync } from "fs";
import { extname, join } from "path";
import sharp from "sharp";
import { chromium, workDir, run } from "./shared";
import { renderAndScreenshot, finalizeAnimationsInPage } from "@/lib/homepage/render";
import { materializeHtml } from "@/lib/homepage/materialize";
import { isAllowedRenderRequest } from "@/lib/homepage/render-allowlist";
import { checkUploadReady } from "@/lib/homepage/upload-check";

const MIME: Record<string, string> = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" };
const SLICE = 1800;

async function slices(dir: string, file: string, prefix: string): Promise<string[]> {
  const meta = await sharp(file).metadata();
  const out: string[] = [];
  for (let top = 0, i = 1; top < (meta.height ?? 0); top += SLICE, i++) {
    const p = join(dir, `${prefix}-${i}.png`);
    await sharp(file)
      .extract({ left: 0, top, width: meta.width ?? 0, height: Math.min(SLICE, (meta.height ?? 0) - top) })
      .toFile(p);
    out.push(p);
  }
  return out;
}

run(async () => {
  const dir = workDir(process.argv[2]);
  const name = (process.argv[3] ?? "v1").replace(/\.html$/, "");
  const src = readFileSync(join(dir, `${name}.html`), "utf8");

  const map: Record<string, { file: string }> = existsSync(join(dir, "imgmap.json"))
    ? JSON.parse(readFileSync(join(dir, "imgmap.json"), "utf8"))
    : {};
  const images = Object.entries(map).map(([token, v]) => ({
    token,
    url: `data:${MIME[extname(v.file).toLowerCase()] ?? "image/jpeg"};base64,${readFileSync(join(dir, v.file)).toString("base64")}`,
  }));
  const logoFile = ["logo-trim.txt", "logo.txt"].map((f) => join(dir, f)).find((f) => existsSync(f));
  const logo = logoFile ? readFileSync(logoFile, "utf8").trim() : null;

  const html = materializeHtml(src, logo, images);
  writeFileSync(join(dir, `${name}.final.html`), html);
  const check = checkUploadReady(html);

  // The CRM screenshot, exactly as the upload flow renders it.
  writeFileSync(join(dir, `${name}-viewport.png`), await renderAndScreenshot(html));

  const review: Record<string, unknown> = {};
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_EXECUTABLE_PATH, headless: true });
  try {
    for (const [label, viewport] of [
      ["desktop", { width: 1280, height: 900 }],
      ["mobile", { width: 390, height: 844 }],
    ] as const) {
      const ctx = await browser.newContext({ viewport });
      const blocked: string[] = [];
      await ctx.route("**/*", (r) =>
        isAllowedRenderRequest(r.request().url()) ? r.continue() : (blocked.push(r.request().url()), r.abort()),
      );
      const page = await ctx.newPage();
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (m) => {
        if (m.type() === "error") errors.push(m.text());
      });
      await page.setContent(html, { waitUntil: "load", timeout: 30000 }).catch(() => {});
      // Scroll through so ScrollTriggers fire, then force final state like the CRM render does.
      const height = await page.evaluate(() => document.body.scrollHeight);
      for (let y = 0; y < height; y += 400) {
        await page.evaluate((yy) => window.scrollTo(0, yy), y);
        await page.waitForTimeout(50);
      }
      await page.waitForTimeout(800);
      await page.evaluate(finalizeAnimationsInPage).catch(() => {});
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);
      const hscroll = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      const full = join(dir, `${name}-${label}-full.png`);
      await page.screenshot({ path: full, fullPage: true });
      review[label] = { errors, blocked, hscroll, shots: await slices(dir, full, `${name}-${label}`) };
      await ctx.close();
    }
  } finally {
    await browser.close();
  }

  const failed =
    !check.ok ||
    Object.values(review).some((r) => {
      const x = r as { errors: string[]; hscroll: boolean };
      return x.errors.length > 0 || x.hscroll;
    });
  console.log(
    JSON.stringify(
      { final: join(dir, `${name}.final.html`), crmScreenshot: join(dir, `${name}-viewport.png`), upload: check, review, ok: !failed },
      null,
      2,
    ),
  );
  if (failed) process.exitCode = 1;
});
