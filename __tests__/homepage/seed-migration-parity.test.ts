import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { STYLE_PROMPTS } from "@/prisma/seeds/homepage-prompt-layers";

/**
 * Hosted environments (QA/prod) receive HOMEPAGE_STYLE rows ONLY via a migration
 * (the Vercel build runs `prisma migrate deploy`, not the seed script). So every
 * style in the seed's STYLE_PROMPTS must be shipped by a migration whose body is
 * byte-exact to the seed constant — otherwise the card is invisible in prod, or
 * (worse) ships a stale body. This test is the guard for that invariant.
 *
 * Styles are INSERT-based (bulk 20261001130000 for the originals, one migration
 * each for later cards); none are later UPDATE-ed, so matching the INSERT body is
 * correct. See docs/guides/process/ADDING_A_HOMEPAGE_STYLE.md.
 */
const MIGRATIONS_DIR = join(process.cwd(), "prisma", "migrations");

function allMigrationSql(): string {
  return readdirSync(MIGRATIONS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
      try {
        return readFileSync(join(MIGRATIONS_DIR, d.name, "migration.sql"), "utf8");
      } catch {
        return "";
      }
    })
    .join("\n\n");
}

/** Extract the dollar-quoted body of the INSERT VALUES row for a given fixed id. */
function migrationBodyForId(sql: string, id: string): string | null {
  // ('<id>', '<name>', $body$<body>$body$, 'HOMEPAGE_STYLE', ...)
  const re = new RegExp("\\('" + id.replace(/[-]/g, "\\-") + "',\\s*'[^']*',\\s*\\$body\\$([\\s\\S]*?)\\$body\\$");
  const m = sql.match(re);
  return m ? m[1] : null;
}

describe("homepage STYLE seed ↔ migration parity", () => {
  const sql = allMigrationSql();

  it.each(STYLE_PROMPTS.map((s) => [s.name, s] as const))(
    "%s is shipped by a migration with a body matching the seed constant",
    (_name, style) => {
      const body = migrationBodyForId(sql, style.id);
      expect(body).not.toBeNull(); // the style must exist in some migration (else it never reaches prod)
      expect(body).toBe(style.body); // byte-exact (no stale/edited body)
    },
  );

  it("every style has a unique fixed id", () => {
    const ids = STYLE_PROMPTS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
