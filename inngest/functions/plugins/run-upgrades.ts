import { inngest } from "@/inngest/client";
import { runPluginUpgrades } from "@/lib/plugins/upgrade";

/**
 * Runs plugin onUpgrade hooks inside an awaited Inngest invocation.
 *
 * On Vercel, instrumentation.ts skips the fire-and-forget upgrade it does on boot: a
 * serverless instance freezes as soon as its first response is sent, which leaves the
 * DB connect or the upgrade transaction half done. When the instance thaws for the next
 * request, the overdue auth/maxWait timers fire at once and log Supavisor EAUTHTIMEOUT
 * or Prisma P2028 under [PLUGIN_UPGRADE]. Running here keeps the whole upgrade inside
 * one live request, under the route's 300s maxDuration.
 *
 * Triggers: hourly (picks up a new deploy's plugin versions) and the
 * "plugin/upgrades.run" event for an on-demand run after a deploy. The advisory lock in
 * runPluginUpgrades still serializes overlapping runs.
 */
export const PLUGIN_UPGRADE_TIMEOUT_MS = 240_000;

export const runPluginUpgradesJob = inngest.createFunction(
  {
    id: "plugins-run-upgrades",
    name: "Plugins: run pending upgrades",
    retries: 1,
    concurrency: { limit: 1 },
    triggers: [{ cron: "17 * * * *" }, { event: "plugin/upgrades.run" }],
  },
  async ({ step }: { step: any }) => {
    await step.run("run-plugin-upgrades", () =>
      runPluginUpgrades({ timeoutMs: PLUGIN_UPGRADE_TIMEOUT_MS })
    );
    return { ok: true };
  }
);
