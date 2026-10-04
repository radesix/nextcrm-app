-- Add BOUNCED to the one-off outreach email status enum. Set by the Resend
-- webhook on email.bounced (distinct from FAILED, a send-time failure). A bounce
-- also deactivates + suppresses the target.
ALTER TYPE "crm_Target_Email_Status" ADD VALUE IF NOT EXISTS 'BOUNCED';
