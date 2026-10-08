import type { HarvestResult } from "@/lib/homepage/harvest-source";
import { LOGO_PLACEHOLDER } from "@/lib/homepage/materialize";

/**
 * The per-target text that sits alongside the system prompt: the operator
 * instruction and the business brief. Kept in this import-light module (no
 * Inngest/Prisma) so the generation job AND the keyless in-session generator
 * (`scripts/homepage-session/`, `/homepage` skill) compose byte-identical text.
 */

export const OPERATOR_BASE_PROMPT =
  "Redesign this small business's homepage as a modern, professional, conversion-focused page.";

export const AUTO_REFINE_PROMPT =
  "Critique the rendered draft against the rubric (hierarchy, spacing, contrast, mobile layout, brand fidelity) and produce an improved version. Fix concrete weaknesses; do not invent facts.";

/** The operator instruction for a generate run; drawer/skill guidance is appended verbatim. */
export function buildOperatorPrompt(guidance: string | null | undefined): string {
  return guidance ? `${OPERATOR_BASE_PROMPT}\n\nOperator instructions: ${guidance}` : OPERATOR_BASE_PROMPT;
}

export type BriefTarget = {
  company: string | null;
  company_website: string | null;
  description: string | null;
};

export function buildBrief(
  target: BriefTarget,
  brand: HarvestResult["brand"] | null,
  logoDataUri: string | null | undefined,
): string {
  const lines = [`Business: ${target.company ?? "(unknown)"}`];
  if (target.company_website) lines.push(`Current website: ${target.company_website}`);
  if (target.description) lines.push(`Description: ${target.description}`);
  if (brand) {
    if (brand.colors.length) lines.push(`Brand colors: ${brand.colors.join(", ")}`);
    if (brand.fonts.length) lines.push(`Brand fonts: ${brand.fonts.join(", ")}`);
    if (brand.copy) lines.push(`Copy from the current site:\n${brand.copy}`);
  }
  // Never hand the model a remote logo URL — it wouldn't load under the render
  // egress block. When we have the logo, tell the model to use the placeholder
  // token we substitute at render time; otherwise it uses a text wordmark.
  if (logoDataUri) {
    lines.push(
      `Business logo: set the logo <img> src attribute to the EXACT token ${LOGO_PLACEHOLDER} (it is replaced with the real logo). Do not use any other logo URL.`,
    );
  }
  return lines.join("\n");
}
