-- Add a "Credits" rule to the ORG HOMEPAGE_AVOID layer: generated homepages must
-- never reproduce a website-builder credit ("Built by", "Designed by", ...) in the
-- footer. Mirrors prisma/seeds/homepage-prompt-layers.ts (AVOID_PROMPT.body).
--
-- Guarded on an EXACT match of the previously-seeded body so an operator-edited
-- Avoid prompt is NEVER clobbered (same philosophy as 20261001130000 step 1). A
-- fresh DB, where 20261001130000 just inserted the old body, gets the new one.
UPDATE "crm_Ai_Prompt"
SET "body" = $body$Avoid these overused "AI-template" patterns unless the brand genuinely calls for one:
- **Layout:** default hero-text-left / image-right split; three identical feature cards in a row; centered headline + subhead + two buttons with nothing else above the fold; relentless symmetry.
- **Decoration/shapes:** glassmorphism (frosted translucent panels); large blurred gradient "blobs" or bokeh orbs as filler; spinning circular badges/seals; floating arches-and-circles collages; pill-shaped everything; gratuitous glows and drop shadows.
- **Motion:** tilted/scrolling marquee strips; count-up number tickers; elements flying in from offscreen for no reason; purposeless parallax.
- **Typography:** one giant gradient-filled headline word; letter-spacing cranked on everything; a single trendy font with no real hierarchy.
- **Copy:** vague hype ("Elevate your experience," "Welcome to the future of…," "We're passionate about…"); emoji bullet lists; manufactured urgency.
- **Structure:** a numbered "1–2–3 how it works" pill row as filler; a logo cloud of brands they don't have; sections padded with placeholder content.
- **Credits:** do not copy any website-builder credits in the footer such as "Built by", "Designed by", "Website by", etc.
Instead: commit to one clear concept, let whitespace and real content carry the page, make every element earn its place, and prefer an unexpected-but-appropriate layout over the safe template. Never fabricate content to fill a section — cut the section.$body$,
    "updatedAt" = now()
WHERE "id" = '00000000-0000-4000-8000-0000000000a0'
  AND "body" = $old$Avoid these overused "AI-template" patterns unless the brand genuinely calls for one:
- **Layout:** default hero-text-left / image-right split; three identical feature cards in a row; centered headline + subhead + two buttons with nothing else above the fold; relentless symmetry.
- **Decoration/shapes:** glassmorphism (frosted translucent panels); large blurred gradient "blobs" or bokeh orbs as filler; spinning circular badges/seals; floating arches-and-circles collages; pill-shaped everything; gratuitous glows and drop shadows.
- **Motion:** tilted/scrolling marquee strips; count-up number tickers; elements flying in from offscreen for no reason; purposeless parallax.
- **Typography:** one giant gradient-filled headline word; letter-spacing cranked on everything; a single trendy font with no real hierarchy.
- **Copy:** vague hype ("Elevate your experience," "Welcome to the future of…," "We're passionate about…"); emoji bullet lists; manufactured urgency.
- **Structure:** a numbered "1–2–3 how it works" pill row as filler; a logo cloud of brands they don't have; sections padded with placeholder content.
Instead: commit to one clear concept, let whitespace and real content carry the page, make every element earn its place, and prefer an unexpected-but-appropriate layout over the safe template. Never fabricate content to fill a section — cut the section.$old$;
