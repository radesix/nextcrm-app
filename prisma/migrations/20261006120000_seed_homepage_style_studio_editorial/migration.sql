-- Add one HOMEPAGE_STYLE art-direction card: "Studio editorial / quiet-luxury".
-- Idempotent; fixed id (style NN = 10, next in spec order after 0f). Body mirrors
-- prisma/seeds/homepage-prompt-layers.ts (STYLES). ON CONFLICT DO UPDATE so a fresh
-- DB gets it and an operator-edited row with this id is reset to the code body,
-- consistent with 20261001130000_seed_homepage_prompt_layers.

INSERT INTO "crm_Ai_Prompt" ("id", "name", "body", "kind", "scope", "is_default", "created_on")
VALUES
('00000000-0000-4000-8000-000000005710', 'Studio editorial / quiet-luxury', $body$Oversized heavy grotesque sentence-case statement headlines anchored low, paired with a high-contrast editorial serif (Didone-style) for award lines and pull-quotes and an uppercase letter-spaced label for eyebrows and numbered section tags; strictly monochrome — warm near-black and a bone/off-white, with NO loud accent (color comes from photography alone); a coherent kit of rounded "instrument" pills (a live clock, numbered section tags, carousel arrows, date badges) layered over hard editorial type on a disciplined two-column grid (a giant statement left, a tight supporting paragraph right) with generous negative space; full-bleed cinematic interior/lifestyle photography and ambient muted-loop video, media-led and immersive; scroll-led storytelling — a pinned headline that reveals its body, dark↔cream section swaps, and a horizontal case-study slider with overlaid pull-quotes and ghosted project names; refined human touches (a handwritten signature, a scroll-distance easter egg); calm, premium, confident — quiet-luxury studio craft.$body$, 'HOMEPAGE_STYLE', 'ORG', false, now())
ON CONFLICT ("id") DO UPDATE SET
  "name" = EXCLUDED."name",
  "body" = EXCLUDED."body",
  "kind" = EXCLUDED."kind",
  "scope" = EXCLUDED."scope",
  "is_default" = EXCLUDED."is_default",
  "updatedAt" = now();
