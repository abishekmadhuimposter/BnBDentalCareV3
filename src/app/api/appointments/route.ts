import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type AppointmentPayload = {
  fullName?: string
  phoneNumber?: string
  service?: string
  preferredDate?: string
  message?: string
}

const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "APPOINTMENT_TO_EMAIL",
] as const

export const runtime = "nodejs"

function getMissingEnvVars() {
  return requiredEnvVars.filter((key) => !process.env[key])
}

export async function POST(request: Request) {
  const missingEnvVars = getMissingEnvVars()
  if (missingEnvVars.length > 0) {
    return NextResponse.json(
      {
        message: `Email service is not configured. Missing: ${missingEnvVars.join(", ")}`,
      },
      { status: 500 }
    )
  }

  let payload: AppointmentPayload

  try {
    payload = (await request.json()) as AppointmentPayload
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 })
  }

  const fullName = payload.fullName?.trim() ?? ""
  const phoneNumber = payload.phoneNumber?.trim() ?? ""
  const service = payload.service?.trim() ?? ""
  const preferredDate = payload.preferredDate?.trim() || "Not provided"
  const message = payload.message?.trim() || "No additional message"

  if (!fullName || !phoneNumber || !service) {
    return NextResponse.json(
      { message: "Full Name, Phone Number, and Service are required." },
      { status: 400 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })

  const subject = `New Appointment Request - ${fullName}`
  const text = [
    "New appointment request submitted.",
    "",
    `Full Name: ${fullName}`,
    `Phone Number: ${phoneNumber}`,
    `Service Required: ${service}`,
    `Preferred Date: ${preferredDate}`,
    `Message: ${message}`,
    `Submitted At (IST): ${submittedAt}`,
  ].join("\n")

  const html = `
    <h2>New Appointment Request</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Service Required:</strong> ${service}</p>
    <p><strong>Preferred Date:</strong> ${preferredDate}</p>
    <p><strong>Message:</strong> ${message}</p>
    <hr />
    <p><strong>Submitted At (IST):</strong> ${submittedAt}</p>
  `

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.APPOINTMENT_TO_EMAIL,
      subject,
      text,
      html,
      replyTo: process.env.SMTP_USER,
    })

    return NextResponse.json({ message: "Appointment request emailed successfully." })
  } catch {
    return NextResponse.json(
      { message: "Failed to send appointment email. Please try again." },
      { status: 500 }
    )
  }
}
