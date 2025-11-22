// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message, appType } = await request.json();

  console.log("ENV CHECK:", {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
  });

  // -----------------------------
  // 1️⃣ Server-side Validation
  // -----------------------------
  if (!name || name.trim().length < 2) {
    return NextResponse.json(
      { error: "Please enter a valid name" },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address" },
      { status: 400 }
    );
  }

  if (!message || message.trim().length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters" },
      { status: 400 }
    );
  }

  // -----------------------------
  // 2️⃣ Create SMTP Transporter
  // -----------------------------
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === "465", // SSL
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // -----------------------------
  // 3️⃣ Build the Email Content
  // -----------------------------
  const htmlMessage = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>App Type:</strong> ${appType || "Not Selected"}</p>

    <h3>Message:</h3>
    <p>${message.replace(/\n/g, "<br/>")}</p>

    <hr/>
    <p style="font-size:12px;color:#888">Sent from Serwex Website Contact Form</p>
  `;

  try {
    // -----------------------------
    // 4️⃣ Send the Email
    // -----------------------------
    await transporter.sendMail({
      from: `"Serwex Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || "info@serwex.in",
      replyTo: email,
      subject: `New Contact: ${name}`,
      text: message,
      html: htmlMessage,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email Sending Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
