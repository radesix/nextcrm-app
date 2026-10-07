# Runbook — Adding a homepage art-direction STYLE

> A repeatable checklist for adding a `HOMEPAGE_STYLE` card (and, by the same
> shape, any `HOMEPAGE_INDUSTRY` / `HOMEPAGE_AVOID` layer) to the homepage-generation
> prompt library. Follow it in order. The step teams miss is **#2 — the migration**:
> a seed edit alone never reaches QA or production.

**Why a migration is mandatory.** Hosted environments (QA, production) receive these
prompt rows **only through a Prisma migration** — the Vercel build runs
`prisma migrate deploy`, it does **not** run the seed script. `prisma/seeds/…` is for
local/dev convenience. So a new style that is only in the seed array shows up locally
but is invisible in QA/prod until a migration ships it.

---

## The fixed-id scheme

Every layer row has a FIXED UUID so upsert-by-id is idempotent and never touches
operator-created prompts (which get random ids). From
`prisma/seeds/homepage-prompt-layers.ts`:

```
avoid    00000000-0000-4000-8000-0000000000a0
style    00000000-0000-4000-8000-0000000057NN   (NN = 01..  in spec order)
industry 00000000-0000-4000-8000-000000001dNN
base     00000000-0000-4000-8000-00000000ba5e
```

`NN` is the **2-hex-digit** index of the card in `STYLES` order (`hex2(i + 1)`):
styles 1–10 → `01..0a`, 11–15 → `0b..0f`, **16 → `10`**, 17 → `11`, … Always take the
next unused `NN` in order; never renumber or reuse one.

---

## Steps

### 1. Edit the seed (source of truth)
`prisma/seeds/homepage-prompt-layers.ts` — append `["<Name>", "<body>"]` to the
`STYLES` array. The id auto-derives from position. Update the count in the file's
header comment (`N HOMEPAGE_STYLE`).

Write the body as **art direction only** — type, layout, chrome, motion, mood. Don't
hard-require a specific palette as the *only* option: the brand palette is
authoritative (see **Palette** below), so phrase fixed/monochrome palettes as the
default *when the brand has no colors*.

### 2. Add the data migration (the step that ships it)
Create `prisma/migrations/<YYYYMMDDHHMMSS>_seed_homepage_style_<slug>/migration.sql`.
Copy an existing single-style one verbatim and change only id + name + body — e.g.
`20261006120000_seed_homepage_style_studio_editorial`:

```sql
INSERT INTO "crm_Ai_Prompt" ("id", "name", "body", "kind", "scope", "is_default", "created_on")
VALUES
('00000000-0000-4000-8000-0000000057NN', '<Name>', $body$<body>$body$, 'HOMEPAGE_STYLE', 'ORG', false, now())
ON CONFLICT ("id") DO UPDATE SET
  "name" = EXCLUDED."name", "body" = EXCLUDED."body", "kind" = EXCLUDED."kind",
  "scope" = EXCLUDED."scope", "is_default" = EXCLUDED."is_default", "updatedAt" = now();
```

- **Body MUST match the seed constant verbatim** — the migration is "generated from"
  the constants. Dollar-quote the body (`$body$…$body$`) so quotes/`—`/`↔` need no
  escaping (and the TS `\"` becomes a literal `"` in SQL).
- `ON CONFLICT DO UPDATE` keeps it idempotent: a fresh DB gets the row, and a re-seed
  resets a seeded row to the code body (operator-created rows have random ids and are
  untouched).
- This is an **additive** change → migration-first is fine (it can land before/with
  the code that references it; nothing reads a missing row).

### 3. Load + verify locally
```bash
export DATABASE_URL="$(grep '^DATABASE_URL=' .env | cut -d= -f2- | tr -d '"')"
pnpm exec prisma db execute --file prisma/migrations/<…>/migration.sql   # validate SQL applies
pnpm seed:homepage-prompts                                              # or run-homepage-prompts.ts
```
Confirm it appears: admin **Prompt Library** (filter kind = STYLE), or
`crm_list_prompts`. Body should equal the seed constant.

### 4. (Recommended) Refresh the Style Library reference
Regenerate the visual example + the pinned **Homepage Style Library** artifact so the
catalog stays complete. The throwaway generator scripts live in `scripts/`
(`style-gallery.ts`, `build-live-pages.ts`, `style-reference.ts` — uncommitted dev
tools); run against the same reference target + shared image set so only the new
style differs, then republish to the artifact URL.

### 5. Ship (DEV → QA → PROD)
Feature branch → **deep-review** → **doc-sync** → PR → merge to `main`.
`advance-qa` fast-forwards `qa` after CI → Vercel builds `qa` → migration applies to
**nextcrm-qa**. Verify in the QA admin prompt list. Then **Promote** (the gated
button) → migration applies to **nextcrm-prod**.

> After the PR merges, remind the user the migration applies on deploy — don't apply
> it by hand to a hosted DB, and don't apply it before merge.

---

## Palette (interaction with brand colors)

`MACHINE_CONTRACT` (in `lib/homepage/prompt.ts`, code-owned, always last) makes the
**brand palette authoritative**: when a target has harvested "Brand colors", they
become the page's color system and **override a style's fixed/monochrome palette**,
applied through that style's restraint — no operator override. So:

- A card's "strictly monochrome / near-black / one accent" wording is the default
  **only when the target has no brand colors**; otherwise the brand colors win.
- Don't lean on a style card to force a palette on a branded target — it won't, by
  design. Shape *how* color is applied in the card (contrast, where accents land,
  light vs dark), not *which* hues.

(Harvested colors are normalized to hex and capped in `lib/homepage/harvest-source.ts`
via `lib/homepage/color.ts`.)

---

## Gotchas checklist

- [ ] **Migration added** (not just the seed array) — else it never reaches QA/prod.
- [ ] Fixed id = next unused `…0057NN`; body **verbatim** matches the seed constant.
- [ ] Header-comment style count bumped in the seed file.
- [ ] Verified locally in the admin Prompt Library before pushing.
- [ ] Style Library artifact refreshed (optional).
- [ ] After merge: QA via `advance-qa`, verify, then **Promote** to prod.
