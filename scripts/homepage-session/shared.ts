/**
 * Shared setup for the keyless in-session homepage generator (the `/homepage`
 * skill). Local dev tooling only — never imported by the app.
 */
import "dotenv/config";
import { existsSync, mkdirSync, readFileSync } from "fs";
import { join, resolve } from "path";
import { chromium, type Browser, type BrowserContext } from "playwright-core";

const MAC_CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// launchBrowser() (lib/homepage/render.ts) honours CHROMIUM_EXECUTABLE_PATH; default it
// to the local Chrome so a dev box without Playwright's bundled chromium still works.
if (!process.env.CHROMIUM_EXECUTABLE_PATH && existsSync(MAC_CHROME)) {
  process.env.CHROMIUM_EXECUTABLE_PATH = MAC_CHROME;
}

// tsx (esbuild keepNames) wraps functions in __name(...). Functions serialized into
// the page by page.evaluate (e.g. harvest-source's extractBrand) then throw
// "__name is not defined" and the harvest silently returns null. Define a no-op
// __name in every page this process opens. Patching chromium.launch covers
// launchBrowser() too: its dynamic import resolves to this same module instance.
const origLaunch = chromium.launch.bind(chromium);
chromium.launch = (async (opts?: Parameters<typeof chromium.launch>[0]): Promise<Browser> => {
  const browser = await origLaunch(opts);
  const origNewContext = browser.newContext.bind(browser);
  browser.newContext = (async (...args: Parameters<Browser["newContext"]>): Promise<BrowserContext> => {
    const ctx = await origNewContext(...args);
    await ctx.addInitScript("globalThis.__name = (f) => f");
    return ctx;
  }) as Browser["newContext"];
  return browser;
}) as typeof chromium.launch;

export { chromium };

/** Resolve + create the per-run work dir (convention: out/homepage-session/<slug>/, gitignored). */
export function workDir(arg: string | undefined): string {
  if (!arg) {
    console.error("usage: pass the work dir, e.g. out/homepage-session/<slug>");
    process.exit(2);
  }
  const dir = resolve(arg);
  mkdirSync(dir, { recursive: true });
  return dir;
}

export function readJson<T>(dir: string, name: string): T {
  return JSON.parse(readFileSync(join(dir, name), "utf8")) as T;
}

export function run(main: () => Promise<void>): void {
  main().then(
    () => process.exit(process.exitCode ?? 0),
    (e) => {
      console.error(e instanceof Error ? e.message : e);
      process.exit(1);
    },
  );
}
