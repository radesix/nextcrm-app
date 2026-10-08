/**
 * Step 1 of the `/homepage` skill: compose EXACTLY what the server job would send
 * the model — the system prompt (real buildSystemPrompt over the chosen layers),
 * the operator instruction, and the business brief (real harvestSource + buildBrief)
 * — without any API key.
 *
 * Input:  <dir>/layers.json  { base, industry, style, avoid, guidance?, target: { company, company_website, description } }
 *         (layer bodies come from the CRM via the MCP `crm_list_prompts` tool)
 * Output: system.txt, operator.txt, refine.txt, brief.txt, logo.txt (+ logo-trim.txt), source.png
 *
 * Run: pnpm exec tsx scripts/homepage-session/prep.ts out/homepage-session/<slug>
 */
import { writeFileSync } from "fs";
import { join } from "path";
import sharp from "sharp";
import { workDir, readJson, run } from "./shared";
import { buildSystemPrompt } from "@/lib/homepage/prompt";
import { harvestSource } from "@/lib/homepage/harvest-source";
import { buildBrief, buildOperatorPrompt, AUTO_REFINE_PROMPT, type BriefTarget } from "@/lib/homepage/brief";

type Layers = {
  base: string | null;
  industry: string | null;
  style: string | null;
  avoid: string | null;
  /** Free-text operator guidance — becomes "Operator instructions:" exactly as the drawer's prompt box does. */
  guidance?: string | null;
  target: BriefTarget;
};

run(async () => {
  const dir = workDir(process.argv[2]);
  const L = readJson<Layers>(dir, "layers.json");

  const system = buildSystemPrompt({ base: L.base, industry: L.industry, style: L.style, avoid: L.avoid });
  writeFileSync(join(dir, "system.txt"), system);

  // Same helper as generateFlow in inngest/functions/generate-homepage.ts.
  const operator = buildOperatorPrompt(L.guidance?.trim() || null);
  writeFileSync(join(dir, "operator.txt"), operator);
  writeFileSync(join(dir, "refine.txt"), `${operator}\n\n${AUTO_REFINE_PROMPT}`);

  const harvest = await harvestSource(L.target.company_website);
  const brand = harvest?.brand ?? null;
  const logo = brand?.logoDataUri ?? null;
  writeFileSync(join(dir, "brief.txt"), buildBrief(L.target, brand, logo));
  if (harvest?.screenshotB64) writeFileSync(join(dir, "source.png"), Buffer.from(harvest.screenshotB64, "base64"));
  if (logo) {
    writeFileSync(join(dir, "logo.txt"), logo);
    // A whitespace-trimmed copy reads far larger at the same CSS width; render.ts prefers it.
    try {
      const [, b64] = logo.split(",", 2);
      const trimmed = await sharp(Buffer.from(b64, "base64")).trim({ threshold: 20 }).png().toBuffer();
      writeFileSync(join(dir, "logo-trim.txt"), `data:image/png;base64,${trimmed.toString("base64")}`);
    } catch {
      /* SVG/odd formats: fall back to the untrimmed logo */
    }
  }

  console.log(
    JSON.stringify(
      {
        systemChars: system.length,
        harvested: !!harvest,
        logo: !!logo,
        logoUrl: brand?.logoUrl ?? null,
        colors: brand?.colors ?? [],
        fonts: brand?.fonts ?? [],
        copyChars: brand?.copy.length ?? 0,
      },
      null,
      2,
    ),
  );
});
