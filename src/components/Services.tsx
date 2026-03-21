"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Service = {
  name: string
  image: string
}

const services: Service[] = [
  {
    name: "Scaling and Root Planing",
    image:
      "https://images.pexels.com/photos/3845804/pexels-photo-3845804.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Gum Depigmentation",
    image:
      "https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Denture",
    image:
      "https://images.pexels.com/photos/6627664/pexels-photo-6627664.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Surgical Corrections",
    image:
      "https://images.pexels.com/photos/7580262/pexels-photo-7580262.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Teeth Whitening",
    image:
      "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Root Canal",
    image:
      "https://images.pexels.com/photos/6528908/pexels-photo-6528908.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Veneers",
    image:
      "https://images.pexels.com/photos/8376293/pexels-photo-8376293.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Digital Smile Designing",
    image:
      "https://images.pexels.com/photos/6812577/pexels-photo-6812577.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Dental Implants",
    image:
      "https://images.pexels.com/photos/3779707/pexels-photo-3779707.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Dental Aligners and Braces",
    image:
      "https://images.pexels.com/photos/6627535/pexels-photo-6627535.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Electrocauterization",
    image:
      "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Gluta IV",
    image:
      "https://images.pexels.com/photos/5752267/pexels-photo-5752267.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
]

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
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {group.map((service) => (
                      <article
                        key={service.name}
                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="relative h-40 w-full overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.name}
                            fill
                            sizes="300px"
                            unoptimized
                            loader={({ src }) => src}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                          />
                        </div>

                        <div className="p-3">
                          <h3 className="text-sm font-semibold">{service.name}</h3>
                        </div>
                      </article>
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
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Book Appointment →
          </button>
        </div>
      </div>
    </section>
  )
}