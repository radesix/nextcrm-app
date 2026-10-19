// fork: activities can be linked to the fork's `target` entity (outreach emails log
// one via createActivity). Upstream v0.36 added a write check per linked entity
// type (cb52f2a8) that refused any type outside its map, so every target activity
// came back "Forbidden" and the outreach send silently lost its timeline entry
// (caught by tests/e2e/target-ai-email.spec.ts).
jest.mock("@/lib/auth-server", () => ({ getSession: jest.fn() }));
jest.mock("next/cache", () => ({ revalidatePath: jest.fn() }));
jest.mock("@/lib/crm/calendar/outbound-emit", () => ({
  emitCalendarOutbound: jest.fn().mockResolvedValue(undefined),
}));
jest.mock("@/lib/authz", () => {
  const actual = jest.requireActual("@/lib/authz");
  return {
    ...actual,
    requireAuthenticated: jest.fn(),
    assertCanWriteTarget: jest.fn(),
  };
});
jest.mock("@/lib/prisma", () => ({
  prismadb: {
    crm_Activities: { create: jest.fn(), findUnique: jest.fn() },
    crm_ActivityLinks: { createMany: jest.fn() },
    $transaction: jest.fn(),
  },
}));

import { getSession } from "@/lib/auth-server";
import { prismadb } from "@/lib/prisma";
import { requireAuthenticated, assertCanWriteTarget, AuthorizationError } from "@/lib/authz";
import { createActivity } from "../create-activity";

const TARGET_ID = "33333333-3333-4333-8333-333333333333";
const db = prismadb as any;

const emailActivity = () =>
  createActivity({
    type: "email",
    title: "Outreach email sent",
    date: new Date("2026-10-19T00:00:00Z"),
    status: "completed",
    links: [{ entityType: "target", entityId: TARGET_ID }],
  });

beforeEach(() => {
  jest.clearAllMocks();
  (getSession as jest.Mock).mockResolvedValue({ user: { id: "u1" } });
  (requireAuthenticated as jest.Mock).mockResolvedValue({ id: "u1", role: "user" });
  db.$transaction.mockImplementation(async (fn: (tx: unknown) => Promise<unknown>) => fn(prismadb));
  db.crm_Activities.create.mockResolvedValue({ id: "act1" });
  db.crm_Activities.findUnique.mockResolvedValue({ id: "act1", links: [] });
});

describe("createActivity linked to a target", () => {
  it("is allowed when the caller may write the target, and creates the link", async () => {
    (assertCanWriteTarget as jest.Mock).mockResolvedValue(undefined);

    const res = await emailActivity();

    expect(res).not.toEqual({ error: "Forbidden" });
    expect(assertCanWriteTarget).toHaveBeenCalledWith(
      expect.objectContaining({ id: "u1" }),
      TARGET_ID
    );
    expect(db.crm_ActivityLinks.createMany).toHaveBeenCalledWith({
      data: [{ activityId: "act1", entityType: "target", entityId: TARGET_ID }],
    });
  });

  it("is still refused when the target is outside the caller's scope", async () => {
    (assertCanWriteTarget as jest.Mock).mockRejectedValue(new AuthorizationError());

    await expect(emailActivity()).resolves.toEqual({ error: "Forbidden" });
    expect(db.crm_Activities.create).not.toHaveBeenCalled();
  });
});
