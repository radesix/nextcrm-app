// fork: campaign sends must use the dedicated, tracking-enabled campaigns key.
//
// RESEND_CAMPAIGNS_API_KEY is restricted to the campaigns sending domain, which has
// open/click tracking on; the transactional RESEND_API_KEY domain does not. If
// send-step ever sends through lib/resend's helper (the transactional key), Resend
// stops rewriting links and reporting clicks — silently. Upstream's v0.36 sync
// introduced exactly that change in a clean (non-conflicting) merge.
const mockResendCtor = jest.fn();
const mockSend = jest.fn();
jest.mock("resend", () => ({
  Resend: jest.fn().mockImplementation((key: string) => {
    mockResendCtor(key);
    return { emails: { send: mockSend } };
  }),
}));
jest.mock("@/lib/resend", () => ({
  __esModule: true,
  default: jest.fn(() => {
    throw new Error("campaign send-step must not use the transactional Resend helper");
  }),
}));
jest.mock("@/lib/prisma", () => ({ prismadb: {} }));
jest.mock("@/inngest/client", () => ({
  inngest: { createFunction: jest.fn((config: unknown, handler: unknown) => ({ config, handler })) },
}));

import fs from "fs";
import path from "path";

describe("campaign send-step Resend key", () => {
  const env = { ...process.env };
  afterEach(() => {
    process.env = { ...env };
    jest.resetModules();
    mockResendCtor.mockClear();
  });

  it("constructs its client with RESEND_CAMPAIGNS_API_KEY", () => {
    process.env.RESEND_CAMPAIGNS_API_KEY = "re_campaigns";
    process.env.RESEND_API_KEY = "re_transactional";
    jest.isolateModules(() => require("@/inngest/functions/campaigns/send-step"));
    expect(mockResendCtor).toHaveBeenCalledWith("re_campaigns");
    expect(mockResendCtor).not.toHaveBeenCalledWith("re_transactional");
  });

  it("falls back to RESEND_API_KEY only when no campaigns key is set", () => {
    delete process.env.RESEND_CAMPAIGNS_API_KEY;
    process.env.RESEND_API_KEY = "re_transactional";
    jest.isolateModules(() => require("@/inngest/functions/campaigns/send-step"));
    expect(mockResendCtor).toHaveBeenCalledWith("re_transactional");
  });

  it("never sends through lib/resend's transactional helper", () => {
    const src = fs.readFileSync(
      path.join(process.cwd(), "inngest/functions/campaigns/send-step.ts"),
      "utf8"
    );
    expect(src).not.toMatch(/from "@\/lib\/resend"/);
    expect(src).not.toMatch(/resendHelper\s*\(/);
  });
});
