"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CalendarDays, Loader2, MessageCircle, PhoneCall } from "lucide-react"

type AppointmentForm = {
  fullName: string
  phoneNumber: string
  service: string
  preferredDate: string
  message: string
}

const initialForm: AppointmentForm = {
  fullName: "",
  phoneNumber: "",
  service: "",
  preferredDate: "",
  message: "",
}

export default function Appointment() {
  const [form, setForm] = useState<AppointmentForm>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")
  const [submitError, setSubmitError] = useState(false)
  const whatsappNumber = "919846646488"

  const updateForm = <K extends keyof AppointmentForm>(field: K, value: AppointmentForm[K]) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const validateRequiredFields = () => {
    if (!form.fullName.trim() || !form.phoneNumber.trim() || !form.service) {
      setSubmitError(true)
      setStatusMessage("Please fill Full Name, Phone Number, and Service Required.")
      return false
    }

    return true
  }

  const handleWhatsAppBooking = () => {
    setStatusMessage("")
    setSubmitError(false)

    if (!validateRequiredFields()) {
      return
    }

    const messageLines = [
      "Hi, I would like to book a dental appointment.",
      form.fullName.trim() ? `Name: ${form.fullName.trim()}` : null,
      form.phoneNumber.trim() ? `Phone: ${form.phoneNumber.trim()}` : null,
      form.service.trim() ? `Service: ${form.service.trim()}` : null,
      form.preferredDate.trim() ? `Preferred Date: ${form.preferredDate.trim()}` : null,
      form.message.trim() ? `Message: ${form.message.trim()}` : null,
    ].filter(Boolean)

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageLines.join("\n"))}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatusMessage("")
    setSubmitError(false)

    if (!validateRequiredFields()) {
      return
    }

    try {
      setIsSubmitting(true)

      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const result = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to submit appointment request.")
      }

      setForm(initialForm)
      setSubmitError(false)
      setStatusMessage("Appointment request sent successfully. We will contact you shortly.")
    } catch (error) {
      setSubmitError(true)
      const message = error instanceof Error ? error.message : "Unable to submit appointment request."
      setStatusMessage(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="appointment" className="bg-linear-to-b from-blue-700 to-blue-800 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div className="pt-2 text-white">
          <span className="inline-flex rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold">
            Book Appointment
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-4xl">
            Ready for a Healthier Smile?
          </h2>
          <p className="mt-5 max-w-xl text-base/7 text-blue-100 md:text-lg/8">
            Schedule your appointment online or contact us directly. We confirm
            your booking within 24 hours.
          </p>

          <div className="mt-9 space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-white/10 p-3">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-blue-200">Call Us</p>
                <p className="text-lg font-semibold">+91 9846646488</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-white/10 p-3">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-blue-200">WhatsApp</p>
                <p className="text-lg font-semibold">Chat on WhatsApp</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-white/10 p-3">
                <CalendarDays className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-blue-200">Working Hours</p>
                <p className="text-lg font-semibold">Mon - Sat: 9 AM - 7 PM</p>
                <p className="text-sm text-blue-200">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-7">
          <h3 className="text-3 font-bold text-slate-900">Book Your Appointment</h3>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Full Name *</label>
              <Input
                placeholder="Your full name"
                value={form.fullName}
                onChange={(event) => updateForm("fullName", event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Phone Number *</label>
              <Input
                placeholder="+91 XXXXX XXXXX"
                value={form.phoneNumber}
                onChange={(event) => updateForm("phoneNumber", event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Service Required *</label>
              <select
                className="h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-none focus-visible:ring-[3px]"
                value={form.service}
                onChange={(event) => updateForm("service", event.target.value)}
              >
                <option value="">Select a service</option>
                <option value="Consultation">Consultation</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Root Canal">Root Canal</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
                <option value="Braces & Aligners">Braces & Aligners</option>
                <option value="Tooth Extraction">Tooth Extraction</option>
                <option value="Smile Makeover">Smile Makeover</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Preferred Date</label>
              <Input
                type="date"
                value={form.preferredDate}
                onChange={(event) => updateForm("preferredDate", event.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Message (Optional)</label>
              <Textarea
                rows={4}
                placeholder="Describe your dental concern or any special requests..."
                value={form.message}
                onChange={(event) => updateForm("message", event.target.value)}
              />
            </div>

            {statusMessage ? (
              <p className={`text-sm ${submitError ? "text-red-600" : "text-green-600"}`}>{statusMessage}</p>
            ) : null}

            <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700">
              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CalendarDays className="mr-2 h-4 w-4" />}
              {isSubmitting ? "Sending..." : "Confirm Appointment"}
            </Button>

            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-sm font-semibold text-slate-400">or</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700"
              onClick={handleWhatsAppBooking}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Book via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
