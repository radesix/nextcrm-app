import { Resend } from "resend";
import { prismadb } from "./prisma";
import { redirectRecipients } from "./email/redirect";
import { encrypt, decrypt } from "./email-crypto";
import { envSecret } from "./env-secret";

// DB values written before encryption was added are plain text; encrypted
// values carry this prefix (base64 never contains ":").
const ENCRYPTED_PREFIX = "enc:";

export function encryptResendKey(plaintext: string): string {
  return ENCRYPTED_PREFIX + encrypt(plaintext);
}

function maskKey(key: string): string {
  return "••••" + key.slice(-4);
}

async function readDbKey(): Promise<{ id?: string; key: string | null }> {
  const row = await prismadb.systemServices.findFirst({
    where: {
      name: "resend_smtp",
    },
  });
  const stored = row?.serviceKey;
  if (!row || !stored) return { id: row?.id, key: null };

  if (stored.startsWith(ENCRYPTED_PREFIX)) {
    return { id: row.id, key: decrypt(stored.slice(ENCRYPTED_PREFIX.length)) };
  }

  // Legacy plain-text value: encrypt it in place. If EMAIL_ENCRYPTION_KEY is
  // not configured yet, keep working with the plain value until the next save.
  try {
    await prismadb.systemServices.update({
      where: { id: row.id },
      data: { serviceKey: encryptResendKey(stored) },
    });
  } catch (error) {
    console.log("[RESEND_KEY_ENCRYPT]", error);
  }
  return { id: row.id, key: stored };
}

export async function getResendApiKey(): Promise<string | null> {
  const envKey = envSecret("RESEND_API_KEY");
  if (envKey) return envKey;
  return (await readDbKey()).key;
}

/** Masked env and DB keys for the admin Services page; never the full keys. */
export async function getResendKeyStatus() {
  const { id, key } = await readDbKey();
  const envKey = envSecret("RESEND_API_KEY");
  return {
    id,
    envKey: envKey ? maskKey(envKey) : null,
    dbKey: key ? maskKey(key) : null,
  };
}

export default async function resendHelper() {
  const apiKey = await getResendApiKey();

  if (!apiKey) {
    throw new Error("Resend API key is not configured. Please add it in Admin settings or set RESEND_API_KEY environment variable.");
  }

  const resend = new Resend(apiKey);

  // Central non-prod safety: rewrite recipients to EMAIL_REDIRECT_TO in dev/QA so no
  // transactional send (OTP, invites, invoices, notifications) reaches a real inbox.
  // No-op in production and when EMAIL_REDIRECT_TO is unset. See lib/email/redirect.ts.
  const send = resend.emails.send.bind(resend.emails);
  resend.emails.send = ((payload: Parameters<typeof send>[0], options?: Parameters<typeof send>[1]) =>
    send({ ...payload, to: redirectRecipients(payload.to) }, options)) as typeof resend.emails.send;

  return resend;
}
