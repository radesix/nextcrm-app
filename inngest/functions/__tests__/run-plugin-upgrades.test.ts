const createFunction = jest.fn((_config: unknown, handler: unknown) => handler);
jest.mock("@/inngest/client", () => ({ inngest: { createFunction } }));
const runPluginUpgrades = jest.fn(async (_opts: unknown) => {});
jest.mock("@/lib/plugins/upgrade", () => ({ runPluginUpgrades: (o: unknown) => runPluginUpgrades(o) }));

import { runPluginUpgradesJob, PLUGIN_UPGRADE_TIMEOUT_MS } from "@/inngest/functions/plugins/run-upgrades";

it("is scheduled hourly, runnable on demand, and never overlaps itself", () => {
  const config: any = createFunction.mock.calls[0][0];
  expect(config.id).toBe("plugins-run-upgrades");
  expect(config.concurrency).toEqual({ limit: 1 });
  expect(config.triggers).toEqual(expect.arrayContaining([{ cron: "17 * * * *" }, { event: "plugin/upgrades.run" }]));
});

it("awaits the upgrade inside the request with a timeout under the 300s function limit", async () => {
  const step = { run: jest.fn(async (_id: string, fn: () => Promise<unknown>) => fn()) };
  await (runPluginUpgradesJob as any)({ step });
  expect(step.run).toHaveBeenCalledWith("run-plugin-upgrades", expect.any(Function));
  expect(runPluginUpgrades).toHaveBeenCalledWith({ timeoutMs: PLUGIN_UPGRADE_TIMEOUT_MS });
  expect(PLUGIN_UPGRADE_TIMEOUT_MS).toBeLessThan(300_000);
});
