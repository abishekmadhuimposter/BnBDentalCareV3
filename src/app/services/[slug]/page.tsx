import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, Phone } from "lucide-react"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import MobileBar from "@/components/MobileBar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { servicesData } from "@/lib/services-data"
import clinic2 from "@/images/clinic-2.jpg"
import clinic5 from "@/images/clinic-5.jpg"
import clinic7 from "@/images/clinic-7.jpg"

const bgImages = [clinic2, clinic5, clinic7]

function pickImage(slug: string) {
  const sum = slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return bgImages[sum % bgImages.length]
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return { title: "Service Not Found" }
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) notFound()

  return (
    <>
      <Navbar />

      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-20 text-white md:py-28">
          {/* Background clinic image */}
          <Image
            src={pickImage(slug)}
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          <div aria-hidden="true" className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 mx-auto max-w-7xl px-4">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-blue-200">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/#services" className="transition-colors hover:text-white">
                Services
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">{service.name}</span>
            </nav>

            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              {service.name}
            </h1>
            <p className="mt-3 text-lg text-blue-100 md:text-xl">
              {service.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#appointment"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-blue-600 shadow transition hover:bg-blue-50"
              >
                Book Appointment
              </Link>
              <Link
                href="/#services"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
                All Services
              </Link>
            </div>
          </div>
        </section>

        {/* ── Overview ─────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-700">
                  About This Treatment
                </span>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  {service.name} in Thrissur
                </h2>
                <p className="mt-5 leading-8 text-slate-600">
                  {service.overview}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/#appointment"
                    className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Book a Free Consultation
                  </Link>
                  <a
                    href="tel:+919846646488"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <Phone className="h-4 w-4" />
                    Call Us
                  </a>
                </div>
              </div>

              <div className="relative h-72 overflow-hidden rounded-2xl bg-slate-100 shadow-sm lg:h-96">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={`${service.name} treatment at B&B Dental Care Thrissur`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-blue-50">
                    <span className="text-sm font-medium text-blue-400">{service.name}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits ─────────────────────────────────────── */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-700">
                Why Choose Us
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                {service.benefitsTitle}
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="mb-2 font-semibold text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ──────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-700">
                How It Works
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                {service.processTitle}
              </h2>
            </div>

            <div className="mx-auto max-w-3xl">
              {service.process.map((step, index) => (
                <div key={step.stepNumber} className="flex gap-5">
                  <div className="flex shrink-0 flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      {step.stepNumber}
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-blue-200" style={{ minHeight: "2rem" }} />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-700">
                FAQ
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion multiple={false} className="space-y-3">
                {service.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="rounded-xl border border-slate-200 bg-white px-5 shadow-sm"
                  >
                    <AccordionTrigger className="py-4 text-left font-semibold text-slate-900 hover:text-blue-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="bg-blue-600 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-2xl font-bold md:text-4xl">
              Ready to Transform Your Smile?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-blue-100">
              Book a free consultation with our expert dentists at B&amp;B Dental
              Care — the most trusted dental and cosmetic clinic in Thrissur,
              Kerala.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#appointment"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-8 text-sm font-semibold text-blue-600 shadow transition hover:bg-blue-50"
              >
                Book Appointment
              </Link>
              <a
                href="https://wa.me/919846646488?text=Hi%20I%20want%20to%20connect"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-white/40 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBar />
    </>
  )
}
