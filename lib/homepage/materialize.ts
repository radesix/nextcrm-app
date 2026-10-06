/**
 * Swap the logo placeholder and generated-image tokens for their real values at
 * RENDER + UPLOAD time. Tokens stay in the persisted/prompt HTML (keeps prompts
 * small — the base64 never enters the model prompt); only the R2-served HTML and
 * screenshot carry the substituted values.
 *
 * Kept as a pure, import-light module so it is unit-testable without the Inngest
 * machinery in `generate-homepage.ts`.
 */

export const LOGO_PLACEHOLDER = "__RADE_LOGO_SRC__";

const IMAGE_TOKEN_RE = /__RADE_IMG_\d+__/g;
// A logo <img> the model pointed at the placeholder. Stripped wholesale when no
// logo was harvested, so the served page never shows a broken <img src="">.
const LOGO_IMG_RE = new RegExp(`<img\\b[^>]*${LOGO_PLACEHOLDER}[^>]*>`, "gi");

export interface MaterializeImage {
  token: string;
  url: string;
}

export function materializeHtml(
  html: string,
  logoDataUri: string | null | undefined,
  images: MaterializeImage[],
): string {
  let out = html;
  if (logoDataUri) {
    out = out.split(LOGO_PLACEHOLDER).join(logoDataUri);
  } else {
    // No logo: remove the whole <img> the model aimed at the placeholder (not
    // just its src — <img src=""> resolves to the page URL and renders broken),
    // then clear any stray placeholder left elsewhere.
    out = out.replace(LOGO_IMG_RE, "");
    out = out.split(LOGO_PLACEHOLDER).join("");
  }
  for (const img of images) out = out.split(img.token).join(img.url);
  // An image token the model invented with no generated image behind it must
  // never be served as a literal broken <img src="__RADE_IMG_9__">.
  return out.replace(IMAGE_TOKEN_RE, "");
}
