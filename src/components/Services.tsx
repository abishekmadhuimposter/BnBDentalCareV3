"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { servicesData } from "@/lib/services-data"

const services = servicesData

export default function Services() {
  const [page, setPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isAutoPaused, setIsAutoPaused] = useState(false)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)")
    const updateIsMobile = () => setIsMobile(mediaQuery.matches)

    updateIsMobile()
    mediaQuery.addEventListener("change", updateIsMobile)

    return () => mediaQuery.removeEventListener("change", updateIsMobile)
  }, [])

  const cardsPerPage = isMobile ? 2 : 6
  const totalPages = Math.ceil(services.length / cardsPerPage)
  const pages = Array.from({ length: totalPages }, (_, index) => {
    const start = index * cardsPerPage
    return services.slice(start, start + cardsPerPage)
  })
  const safePage = Math.min(page, totalPages - 1)

  const registerInteraction = () => {
    setIsAutoPaused(true)
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current)
    }
    resumeTimerRef.current = setTimeout(() => {
      setIsAutoPaused(false)
    }, 15000)
  }

  const goPrev = () => {
    registerInteraction()
    setPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const goNext = () => {
    registerInteraction()
    setPage((prev) => (prev + 1) % totalPages)
  }

  const goToPage = (dotIndex: number) => {
    registerInteraction()
    setPage(dotIndex)
  }

  useEffect(() => {
    if (isAutoPaused) return

    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPaused, totalPages])

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current)
      }
    }
  }, [])

  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-700">
            Our Services
          </span>
          <h2 className="mx-auto mt-4 max-w-4xl text-2xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Comprehensive Dental Care
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            From routine check-ups to complex procedures, we offer a full range of
            dental services to keep your smile healthy and beautiful.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${safePage * 100}%)` }}
            >
              {pages.map((group, groupIndex) => (
                <div key={groupIndex} className="min-w-full">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.map((service) => (
                      <Link
                        key={service.name}
                        href={`/services/${service.slug}`}
                        className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="relative h-40 w-full overflow-hidden">
                          {service.image ? (
                            <Image
                              src={service.image}
                              alt={service.name}
                              fill
                              sizes="300px"
                              unoptimized
                              loader={({ src }) => src}
                              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-blue-50">
                              <span className="text-sm font-medium text-blue-400">
                                {service.name}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="p-3">
                          <h3 className="text-sm font-semibold">{service.name}</h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous services"
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-600 shadow-md transition hover:text-blue-600"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Next services"
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-600 shadow-md transition hover:text-blue-600"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {pages.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              aria-label={`Go to services page ${dotIndex + 1}`}
              onClick={() => goToPage(dotIndex)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                safePage === dotIndex ? "w-5 bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#appointment"
            className="hidden rounded-lg bg-blue-600 px-2.5 text-sm font-medium text-white transition hover:bg-blue-700 md:inline-flex md:h-8 md:items-center md:justify-center"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  )
}