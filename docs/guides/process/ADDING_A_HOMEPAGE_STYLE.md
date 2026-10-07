# Runbook — Adding a homepage art-direction STYLE

A repeatable checklist for adding a `HOMEPAGE_STYLE` card (same shape for a
`HOMEPAGE_INDUSTRY` card). Do the steps in order. Two steps are easy to forget and
**both fail CI or silently skip prod** if missed:

1. the **migration** (step 2) — a seed edit alone never reaches QA/prod;
2. the **count assertions** (step 3) — existing tests hardcode the layer counts.

**Why a migration is mandatory.** Hosted environments (QA, production) receive these
prompt rows **only through a Prisma migration** — the Vercel build runs
`prisma migrate deploy`; it never runs the seed script. `prisma/seeds/…` only touches
your local DB. So a style that is only in the seed array shows up locally and is
invisible in QA/prod until a migration ships it.

---

## Fixed-id scheme

Every layer row has a FIXED UUID so upsert-by-id is idempotent and never touches
operator-created prompts (which get random ids). From
`prisma/seeds/homepage-prompt-layers.ts`:

```
style    00000000-0000-4000-8000-0000000057NN
industry 00000000-0000-4000-8000-000000001dNN
avoid    00000000-0000-4000-8000-0000000000a0
base     00000000-0000-4000-8000-00000000ba5e
```

`NN` is the **2-hex-digit** position of the card in its array (`hex2(i + 1)`): styles
1–10 → `01..0a`, 11–15 → `0b..0f`, **16 → `10`**, 17 → `11`, … Take the next unused
`NN` in order. Never renumber or reuse one.

---

## Steps

### 1 — Seed array (source of truth)
In `prisma/seeds/homepage-prompt-layers.ts`, append `["<Name>", "<body>"]` to the
`STYLES` array (the id auto-derives from position). Bump the count in the file's
header comment (`N HOMEPAGE_STYLE`).

Write the body as **art direction only** — type, layout, chrome, motion, mood. Do not
hard-require a single palette: the brand palette is authoritative (see **Palette**),
so phrase any fixed/monochrome palette as the default *when the brand has no colors*.

### 2 — Migration (the step that ships it)
Create `prisma/migrations/<YYYYMMDDHHMMSS>_seed_homepage_style_<slug>/migration.sql`.
Copy an existing single-style migration verbatim and change **only** id, name, body —
template: `20261006120000_seed_homepage_style_studio_editorial`.

```sql
INSERT INTO "crm_Ai_Prompt" ("id", "name", "body", "kind", "scope", "is_default", "created_on")
VALUES
('00000000-0000-4000-8000-0000000057NN', '<Name>', $body$<body>$body$, 'HOMEPAGE_STYLE', 'ORG', false, now())
ON CONFLICT ("id") DO UPDATE SET
  "name" = EXCLUDED."name", "body" = EXCLUDED."body", "kind" = EXCLUDED."kind",
  "scope" = EXCLUDED."scope", "is_default" = EXCLUDED."is_default", "updatedAt" = now();
```

- The migration `body` **MUST be byte-identical to the seed `STYLES` body** — the
  `seed-migration-drift` test (step 3) fails otherwise. Dollar-quote it (`$body$…$body$`)
  so quotes / `—` / `↔` need no escaping (the TS `\"` becomes a literal `"` in SQL).
- `ON CONFLICT DO UPDATE` keeps it idempotent: a fresh DB gets the row; a re-seed
  resets a seeded row to the code body; operator-created rows (random ids) are untouched.
- This is **additive** → migration-first is fine; nothing reads a missing row.

### 3 — Update the count assertions (hardcoded — they WILL fail CI otherwise)
Adding a layer changes fixed totals asserted in two existing tests. Bump them:

| File | Assertion to bump | For a new… |
|---|---|---|
| `prisma/seeds/__tests__/homepage-prompt-layers.test.ts` | `expect(STYLE_PROMPTS).toHaveLength(N)` **and** `expect(rows.filter(r => r.kind === "HOMEPAGE_STYLE")).toHaveLength(N)` | STYLE |
| `prisma/seeds/__tests__/homepage-prompt-layers.test.ts` | the matching `INDUSTRY_PROMPTS` / `HOMEPAGE_INDUSTRY` counts | INDUSTRY |
| `prisma/seeds/__tests__/seed-migration-drift.test.ts` | `expect(ALL_LAYER_PROMPTS.length).toBe(M)` (total = 1 avoid + styles + industries) | ANY layer |

You do **not** add a new parity test — `seed-migration-drift.test.ts` already asserts
every seed row's id, name, and **body** appears in some migration (see **Guards**).

### 4 — Verify locally
```bash
export DATABASE_URL="$(grep '^DATABASE_URL=' .env | cut -d= -f2- | tr -d '"')"
pnpm exec prisma db execute --file prisma/migrations/<…>/migration.sql   # migration SQL applies
pnpm seed:homepage-prompts                                              # load into local DB
pnpm test                                                               # FULL fast suite — not just the homepage tests
pnpm lint && pnpm exec tsc --noEmit
```
Then confirm the card appears in the admin **Prompt Library** (filter kind = STYLE), or
via `crm_list_prompts`. **Run the whole `pnpm test`** — the count assertions live in
`prisma/seeds/__tests__/`, not next to the style code.

### 5 — (Optional) Refresh the Style Library reference
Regenerate the visual example + the pinned **Homepage Style Library** artifact so the
catalog stays complete. Throwaway generators live in `scripts/` (`style-gallery.ts`,
`build-live-pages.ts`, `style-reference.ts` — uncommitted dev tools); run against the
same reference target + shared image set so only the new style differs, then republish.

### 6 — Ship (DEV → QA → PROD)
Feature branch → **deep-review** → **doc-sync** → PR → merge to `main`. `advance-qa`
fast-forwards `qa` after CI → Vercel builds `qa` → migration applies to **nextcrm-qa**;
verify the card in the QA admin Prompt Library. Then **Promote** (the gated button) →
migration applies to **nextcrm-prod**.

> After merge, the migration applies on deploy — never hand-apply it to a hosted DB,
> and never before merge.

---

## Guards (what already enforces correctness — don't duplicate them)

- `prisma/seeds/__tests__/seed-migration-drift.test.ts` — for every `ALL_LAYER_PROMPTS`
  row, asserts its **id, name, and body** appear in some migration SQL. This is the
  seed↔migration body-parity guard: a style added to the seed but not migrated, or a
  seed body edited without updating its migration, fails here. (Plus a total-count
  assertion — step 3.)
- `prisma/seeds/__tests__/homepage-prompt-layers.test.ts` — per-kind counts, unique +
  well-formed UUIDs, ORG scope, exactly one default, and body spot-checks.
- `Prisma schema/migration sync` (CI guardrail) — only fires on **schema** edits; a
  data-seed migration like this doesn't trigger it.

---

## Palette (interaction with brand colors)

`MACHINE_CONTRACT` (in `lib/homepage/prompt.ts`, code-owned, always last) makes the
**brand palette authoritative**: when a target has harvested "Brand colors", they
become the page's color system and **override a style's fixed/monochrome palette**,
applied through that style's restraint — no operator override. So a card's
"strictly monochrome / one accent" wording is the default **only when the target has
no brand colors**. Shape *how* color is applied in the card (contrast, where accents
land, light vs dark), not *which* hues. (Harvested colors are normalized to hex + capped
in `lib/homepage/harvest-source.ts` via `lib/homepage/color.ts`.)

---

## Gotchas checklist

- [ ] **Migration added** (step 2) — not just the seed array; else it never reaches QA/prod.
- [ ] Migration **body byte-identical** to the seed constant; id = next unused `…0057NN`.
- [ ] **Count assertions bumped** (step 3) in both `prisma/seeds/__tests__/` files.
- [ ] Seed-file header style count bumped.
- [ ] Ran the **full `pnpm test`** (not a subset) + lint + tsc before pushing.
- [ ] (Optional) Style Library artifact refreshed.
- [ ] After merge: QA via `advance-qa`, verify, then **Promote** to prod.
