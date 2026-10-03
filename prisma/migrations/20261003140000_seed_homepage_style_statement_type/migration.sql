-- Add one HOMEPAGE_STYLE art-direction card: "Statement type / creative studio".
-- Idempotent; fixed id (style NN = 0d, next in spec order after 0c). Body mirrors
-- prisma/seeds/homepage-prompt-layers.ts (STYLES). ON CONFLICT DO UPDATE so a fresh
-- DB gets it and an operator-edited row with this id is reset to the code body,
-- consistent with 20261001130000_seed_homepage_prompt_layers.

INSERT INTO "crm_Ai_Prompt" ("id", "name", "body", "kind", "scope", "is_default", "created_on")
VALUES
('00000000-0000-4000-8000-00000000570d', 'Statement type / creative studio', $body$Oversized wide heavy grotesk all-caps headlines with a loose brush-script accent word dropped in, over a clean geometric sans body; type-forward and expressive — huge overlapping type, confident negative space, minimal chrome; warm dark base (near-black), soft cream text, and a single vivid brand accent; full-bleed cinematic photography and autoplaying video (with a sound toggle), media-led and immersive; lively coordinated motion — scroll reveals, parallax, hover plays; bold, editorial, creative-studio swagger.$body$, 'HOMEPAGE_STYLE', 'ORG', false, now())
ON CONFLICT ("id") DO UPDATE SET
  "name" = EXCLUDED."name",
  "body" = EXCLUDED."body",
  "kind" = EXCLUDED."kind",
  "scope" = EXCLUDED."scope",
  "is_default" = EXCLUDED."is_default",
  "updatedAt" = now();
