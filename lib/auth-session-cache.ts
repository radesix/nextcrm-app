// fork: better-auth session cookie cache.
//
// Upstream's partner gate in proxy.ts calls auth.api.getSession() on nearly every
// request that carries a session cookie, in front of the page's own lookup. On this
// fork's Supabase pooler budget (3 connections per instance, see
// docs/guides/platform/SUPABASE_ON_VERCEL.md §3) that doubled session DB load. With
// the cache, session reads verify a signed cookie instead of querying for `maxAge`
// seconds.
//
// Trade-off: a deactivation or role change (lib/auth-server.ts checks userStatus
// from the session) takes up to `maxAge` seconds to reach an already-signed-in
// browser. Keep the window short.
export const SESSION_COOKIE_CACHE = { enabled: true, maxAge: 60 } as const;
