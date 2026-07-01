import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, travelType, groupSize, destination, dates, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Email to Kelsey & Melissa
    await resend.emails.send({
      from: "Salt & Sky Travel <hello@saltandskytravel.com>",
      to: ["liltxarmywife@aol.com"],
      subject: `New Travel Inquiry from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #0A1D2F;">
          <div style="background: #0A1D2F; padding: 32px; text-align: center;">
            <h1 style="color: #D4AF37; font-size: 24px; font-weight: 400; letter-spacing: 0.2em; margin: 0;">SALT & SKY</h1>
            <p style="color: #86B8B7; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; margin: 4px 0 0;">Travel</p>
          </div>
          <div style="padding: 32px; background: #F7F3EC;">
            <h2 style="font-size: 20px; font-weight: 400; margin: 0 0 24px;">New Inquiry from ${name}</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E6E6; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; width: 40%;">Name</td><td style="padding: 8px 0; border-bottom: 1px solid #E2E6E6;">${name}</td></tr>
              <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E6E6; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Email</td><td style="padding: 8px 0; border-bottom: 1px solid #E2E6E6;"><a href="mailto:${email}" style="color: #D4AF37;">${email}</a></td></tr>
              ${travelType ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E6E6; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Trip Type</td><td style="padding: 8px 0; border-bottom: 1px solid #E2E6E6;">${travelType}</td></tr>` : ""}
              ${groupSize ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E6E6; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Group Size</td><td style="padding: 8px 0; border-bottom: 1px solid #E2E6E6;">${groupSize}</td></tr>` : ""}
              ${destination ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E6E6; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Destination</td><td style="padding: 8px 0; border-bottom: 1px solid #E2E6E6;">${destination}</td></tr>` : ""}
              ${dates ? `<tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E6E6; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Dates</td><td style="padding: 8px 0; border-bottom: 1px solid #E2E6E6;">${dates}</td></tr>` : ""}
              ${message ? `<tr><td style="padding: 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #888; vertical-align: top;">Message</td><td style="padding: 8px 0;">${message}</td></tr>` : ""}
            </table>
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #E2E6E6;">
              <a href="mailto:${email}" style="display: inline-block; background: #0A1D2F; color: #F7F3EC; padding: 12px 24px; text-decoration: none; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;">Reply to ${name}</a>
            </div>
          </div>
          <div style="padding: 16px 32px; text-align: center;">
            <p style="font-size: 12px; color: #aaa; font-style: italic;">Between the ocean and the horizon are the moments that matter.</p>
          </div>
        </div>
      `,
    });

    // Confirmation email to the client
    await resend.emails.send({
      from: "Salt & Sky Travel <hello@saltandskytravel.com>",
      to: [email],
      subject: "We received your request — Salt & Sky Travel",
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #0A1D2F;">
          <div style="background: #0A1D2F; padding: 32px; text-align: center;">
            <h1 style="color: #D4AF37; font-size: 24px; font-weight: 400; letter-spacing: 0.2em; margin: 0;">SALT & SKY</h1>
            <p style="color: #86B8B7; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; margin: 4px 0 0;">Travel</p>
          </div>
          <div style="padding: 40px 32px; background: #F7F3EC;">
            <h2 style="font-size: 22px; font-weight: 400; margin: 0 0 16px;">Thank you, ${name}.</h2>
            <p style="font-size: 17px; line-height: 1.7; color: #4a4a4a; margin: 0 0 16px;">We received your request and we&apos;re already looking forward to hearing more about your trip.</p>
            <p style="font-size: 17px; line-height: 1.7; color: #4a4a4a; margin: 0 0 32px;">Kelsey or Melissa will be in touch within 24 hours to start the conversation. In the meantime, if you have photos, inspiration, or anything else you&apos;d like to share — just reply to this email.</p>
            <div style="border-left: 2px solid #D4AF37; padding-left: 20px; margin: 32px 0;">
              <p style="font-size: 19px; font-style: italic; color: #0A1D2F; margin: 0;">Between the ocean and the horizon are the moments that matter.</p>
            </div>
            <p style="font-size: 15px; color: #4a4a4a; margin: 32px 0 0;">With warmth,<br/><strong>Kelsey & Melissa</strong><br/>Salt & Sky Travel</p>
          </div>
          <div style="padding: 16px 32px; text-align: center;">
            <p style="font-size: 12px; color: #aaa;">hello@saltandskytravel.com · saltandskytravel.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
