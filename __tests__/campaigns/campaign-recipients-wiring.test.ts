import fs from "fs";
import path from "path";

// The Inngest handlers aren't unit-testable in place (upstream's send-step test
// re-implements the handler), so guard the fork hooks at the source level.
const read = (p: string) => fs.readFileSync(path.join(process.cwd(), p), "utf8");

describe("campaign recipient/completion hooks stay wired", () => {
  it.each(["inngest/functions/campaigns/send-now.ts", "inngest/functions/campaigns/schedule-send.ts"])(
    "%s resolves recipients via the shared fallback chain and completes the campaign",
    (file) => {
      const src = read(file);
      expect(src).toMatch(/step\.run\("resolve-recipients", async \(\) => resolveCampaignRecipients\(campaignId\)\)/);
      expect(src).toMatch(/step\.run\("mark-sent-if-complete", \(\) => markCampaignSentIfComplete\(campaignId\)\)/);
    }
  );

  it("schedule-send completes AFTER its final 'sending' write", () => {
    const src = read("inngest/functions/campaigns/schedule-send.ts");
    expect(src.lastIndexOf('data: { status: "sending" }')).toBeLessThan(
      src.indexOf('step.run("mark-sent-if-complete"')
    );
  });

  it("send-step completes the campaign after recording the send", () => {
    const src = read("inngest/functions/campaigns/send-step.ts");
    expect(src.indexOf('step.run("update-send-record"')).toBeLessThan(
      src.indexOf('step.run("mark-sent-if-complete", () => markCampaignSentIfComplete(campaignId))')
    );
  });

  it("MCP campaigns_send refuses an audience with no recipients", () => {
    expect(read("lib/mcp/tools/campaigns.ts")).toMatch(
      /resolveCampaignRecipients\(args\.id\)\)\.length === 0\) conflict\(NO_RECIPIENTS_ERROR\)/
    );
  });
});
