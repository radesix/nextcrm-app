import fs from "fs";
import path from "path";
import { SESSION_COOKIE_CACHE } from "@/lib/auth-session-cache";

// fork: upstream's partner gate (proxy.ts) calls auth.api.getSession() on almost
// every request with a session cookie. Without better-auth's cookie cache that is a
// DB round trip per request in front of the page's own lookup — against a
// 3-connection pool on Supabase (EMAXCONNSESSION history). The cache serves
// session reads from a signed cookie for maxAge seconds.
describe("better-auth session cookie cache", () => {
  it("is enabled with a 60s window (bounds how long a deactivation/role change lags)", () => {
    expect(SESSION_COOKIE_CACHE).toEqual({ enabled: true, maxAge: 60 });
  });

  it("is wired into the better-auth session config", () => {
    const src = fs.readFileSync(path.join(process.cwd(), "lib/auth.ts"), "utf8");
    expect(src).toMatch(/session:\s*\{[^}]*cookieCache:\s*SESSION_COOKIE_CACHE/);
  });
});
