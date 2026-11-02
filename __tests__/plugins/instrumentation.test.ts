let release: () => void = () => {};
const runPluginUpgrades = jest.fn(() => new Promise<void>((r) => { release = r; }));
jest.mock("@/lib/plugins/upgrade", () => ({ runPluginUpgrades: () => runPluginUpgrades() }));
import { register } from "@/instrumentation";

it("does not block boot on plugin upgrades (M1)", async () => {
  process.env.NEXT_RUNTIME = "nodejs";
  delete process.env.SKIP_ENV_VALIDATION;
  const done = jest.fn();
  await register().then(done);   // resolves although the upgrade promise is still pending
  expect(runPluginUpgrades).toHaveBeenCalled();
  expect(done).toHaveBeenCalled();
  release();
});

it("skips the boot-time upgrade on Vercel, where a frozen instance would strand it", async () => {
  process.env.NEXT_RUNTIME = "nodejs";
  delete process.env.SKIP_ENV_VALIDATION;
  process.env.VERCEL = "1";
  runPluginUpgrades.mockClear();
  try {
    await register();
    expect(runPluginUpgrades).not.toHaveBeenCalled();
  } finally {
    delete process.env.VERCEL;
  }
});
