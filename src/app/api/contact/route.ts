import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, message, honey } = body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (honey && honey.trim() !== "") {
    return NextResponse.json({ error: "Bot detected" }, { status: 400 });
  }

  if (!email || !message || !firstName || !lastName) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 },
    );
  }

  try {
    const emailRes = await resend.emails.send({
      from: "Contact Form <contact@hotelaat.com>",
      to: "info@hotelaat.com",
      subject: `New message from ${firstName} ${lastName}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>📬 New Contact Message</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="border-left: 4px solid #ccc; padding-left: 1rem; color: #444;">${message}</p>
        </div>
      `,
    });

    if (emailRes.error) {
      console.error("Resend Error:", emailRes.error);
      return NextResponse.json(
        { error: "Email failed to send" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
