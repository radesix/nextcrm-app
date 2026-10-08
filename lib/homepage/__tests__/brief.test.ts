import { buildBrief, buildOperatorPrompt, OPERATOR_BASE_PROMPT } from "@/lib/homepage/brief";
import { LOGO_PLACEHOLDER } from "@/lib/homepage/materialize";

const target = { company: "Acme Salon", company_website: "https://acme.test", description: "Est. 2001." };
const brand = { logoUrl: null, logoDataUri: null, colors: ["#111111", "#d6afa3"], fonts: ["Montserrat"], copy: "Welcome in." };

describe("buildBrief", () => {
  it("lists business, site, description, brand colors/fonts/copy in order", () => {
    expect(buildBrief(target, brand, null)).toBe(
      [
        "Business: Acme Salon",
        "Current website: https://acme.test",
        "Description: Est. 2001.",
        "Brand colors: #111111, #d6afa3",
        "Brand fonts: Montserrat",
        "Copy from the current site:\nWelcome in.",
      ].join("\n"),
    );
  });

  it("tells the model to use the logo placeholder only when a logo was harvested", () => {
    expect(buildBrief(target, brand, "data:image/png;base64,AA")).toContain(LOGO_PLACEHOLDER);
    expect(buildBrief(target, brand, null)).not.toContain(LOGO_PLACEHOLDER);
  });

  it("degrades to the business line alone with no site, description or brand", () => {
    expect(buildBrief({ company: null, company_website: null, description: null }, null, null)).toBe(
      "Business: (unknown)",
    );
  });
});

describe("buildOperatorPrompt", () => {
  it("is the base instruction alone when there is no guidance", () => {
    expect(buildOperatorPrompt(null)).toBe(OPERATOR_BASE_PROMPT);
    expect(buildOperatorPrompt("")).toBe(OPERATOR_BASE_PROMPT);
  });

  it("appends guidance as Operator instructions, exactly as the drawer prompt does", () => {
    expect(buildOperatorPrompt("Lead with bridal.")).toBe(
      `${OPERATOR_BASE_PROMPT}\n\nOperator instructions: Lead with bridal.`,
    );
  });
});
