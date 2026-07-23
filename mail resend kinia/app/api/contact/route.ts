import { NextResponse } from "next/server";
import { Resend } from "resend";

// This route is the only place the API key is read — it never reaches
// the client bundle because Next.js only exposes env vars prefixed
// with NEXT_PUBLIC_ to the browser, and this file runs server-side only.
const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = "kontakt@eventsatelier.pl";
const SENDER = "Events Atelier <kontakt@eventsatelier.pl>";

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 4000;
const MIN_MESSAGE_LENGTH = 10;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  eventType?: unknown;
  eventDate?: unknown;
  message?: unknown;
  /** Honeypot — a real visitor never sees or fills this field. */
  company?: unknown;
}

interface ContactFields {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function toSafeString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  // Strip angle brackets (basic HTML-injection guard) and control
  // characters, collapse whitespace, and cap length.
  return value
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validate(payload: ContactPayload): { fields: ContactFields } | { errors: string[] } {
  const fields: ContactFields = {
    name: toSafeString(payload.name, MAX_FIELD_LENGTH),
    email: toSafeString(payload.email, MAX_FIELD_LENGTH),
    phone: toSafeString(payload.phone, MAX_FIELD_LENGTH),
    eventType: toSafeString(payload.eventType, MAX_FIELD_LENGTH),
    eventDate: toSafeString(payload.eventDate, MAX_FIELD_LENGTH),
    message: toSafeString(payload.message, MAX_MESSAGE_LENGTH),
  };

  const errors: string[] = [];
  if (!fields.name) errors.push("name");
  if (!fields.email || !EMAIL_PATTERN.test(fields.email)) errors.push("email");
  if (!fields.phone) errors.push("phone");
  if (!fields.eventType) errors.push("eventType");
  if (!fields.message || fields.message.length < MIN_MESSAGE_LENGTH) errors.push("message");

  // Simple spam heuristic: reject messages stuffed with links.
  const linkCount = (fields.message.match(/https?:\/\//gi) ?? []).length;
  if (linkCount > 2) errors.push("message");

  if (errors.length > 0) return { errors };
  return { fields };
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: bots fill every input they find, real visitors never see
  // this field. Respond as if it succeeded so the bot learns nothing.
  if (toSafeString(payload.company, 200) !== "") {
    return NextResponse.json({ ok: true });
  }

  const result = validate(payload);
  if ("errors" in result) {
    return NextResponse.json({ ok: false, error: "invalid_input", fields: result.errors }, { status: 400 });
  }
  const { fields } = result;

  if (!process.env.RESEND_API_KEY) {
    console.error("Brak zmiennej środowiskowej RESEND_API_KEY.");
    return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 500 });
  }

  const submittedAt = new Date().toLocaleString("pl-PL", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Warsaw",
  });

  const html = `
    <div style="font-family: Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #0F0F0F;">
      <h2 style="font-size: 18px; font-weight: 600; margin: 0 0 24px;">Nowe zapytanie ze strony Events Atelier</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
        <tbody>
          <tr><td style="padding: 8px 16px 8px 0; color: #6b6b6b; width: 160px; vertical-align: top;">Imię i nazwisko</td><td style="padding: 8px 0;">${escapeHtml(fields.name)}</td></tr>
          <tr><td style="padding: 8px 16px 8px 0; color: #6b6b6b; vertical-align: top;">E-mail</td><td style="padding: 8px 0;">${escapeHtml(fields.email)}</td></tr>
          <tr><td style="padding: 8px 16px 8px 0; color: #6b6b6b; vertical-align: top;">Telefon</td><td style="padding: 8px 0;">${escapeHtml(fields.phone)}</td></tr>
          <tr><td style="padding: 8px 16px 8px 0; color: #6b6b6b; vertical-align: top;">Rodzaj wydarzenia</td><td style="padding: 8px 0;">${escapeHtml(fields.eventType)}</td></tr>
          ${fields.eventDate ? `<tr><td style="padding: 8px 16px 8px 0; color: #6b6b6b; vertical-align: top;">Data wydarzenia</td><td style="padding: 8px 0;">${escapeHtml(fields.eventDate)}</td></tr>` : ""}
          <tr><td style="padding: 8px 16px 8px 0; color: #6b6b6b; vertical-align: top;">Wiadomość</td><td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(fields.message)}</td></tr>
          <tr><td style="padding: 8px 16px 8px 0; color: #6b6b6b; vertical-align: top;">Data zgłoszenia</td><td style="padding: 8px 0;">${submittedAt}</td></tr>
        </tbody>
      </table>
    </div>
  `.trim();

  try {
    const { error } = await resend.emails.send({
      from: SENDER,
      to: [RECIPIENT],
      replyTo: fields.email,
      subject: `Nowe zapytanie — ${fields.name}`,
      html,
    });

    if (error) {
      console.error("Błąd Resend:", error);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Nieoczekiwany błąd podczas wysyłki:", err);
    return NextResponse.json({ ok: false, error: "unexpected" }, { status: 500 });
  }
}
