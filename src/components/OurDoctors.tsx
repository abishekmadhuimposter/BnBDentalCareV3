"use client"

import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import drAlbert from "@/images/dr.albertthomas.jpeg"
import drAnna from "@/images/dr.annasandra.jpeg"
import drArun from "@/images/dr.arunraj.webp"
import drJose from "@/images/dr.josepaul.jpeg"
import drMalavika from "@/images/malavikamadhu.png"
import drMeljo from "@/images/dr.melijojoseph.jpeg"
import drRobinson from "@/images/dr.robinson.jpeg"
import drRohith from "@/images/dr.rohitbasi.png"

type Doctor = {
  name: string
  role: string
  image: StaticImageData
}

const doctors: Doctor[] = [
  {
    name: "Dr. Rohith Bhasi BDS",
    role: "Chief Dental Surgeon",
    image: drRohith,
  },
  {
    name: "Dr. Malavika Madhu BDS",
    role: "Chief Dental Surgeon",
    image: drMalavika,
  },
  {
    name: "Dr. Jose Paul MDS",
    role: "Oral and Maxillofacial Surgeon",
    image: drJose,
  },
  {
    name: "Dr. Albert Nettikadan MDS",
    role: "Orthodontist",
    image: drAlbert,
  },
  {
    name: "Dr. Anna Sandra Collins MDS",
    role: "Pedodontist",
    image: drAnna,
  },
  {
    name: "Dr. Arun Raju MDS",
    role: "Periodontist",
    image: drArun,
  },
  {
    name: "Dr. Meljo Joseph MDS",
    role: "Endodontist",
    image: drMeljo,
  },
  {
    name: "Dr. Robinson Thomas MDS",
    role: "Prosthodontist",
    image: drRobinson,
  },
]

export default function OurDoctors() {
  const [page, setPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)")
    const updateIsMobile = () => setIsMobile(mediaQuery.matches)

    updateIsMobile()
    mediaQuery.addEventListener("change", updateIsMobile)

    return () => mediaQuery.removeEventListener("change", updateIsMobile)
  }, [])

  const cardsPerPage = isMobile ? 2 : 4
  const totalPages = Math.ceil(doctors.length / cardsPerPage)
  const pages = Array.from({ length: totalPages }, (_, index) => {
    const start = index * cardsPerPage
    return doctors.slice(start, start + cardsPerPage)
  })
  const safePage = Math.min(page, totalPages - 1)

  const goPrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const goNext = () => {
    setPage((prev) => (prev + 1) % totalPages)
  }

  return (
    <section id="our-doctors" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-700">
            Our Doctors
          </span>
          <h2 className="mx-auto mt-4 max-w-4xl text-2xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Meet Our Specialists
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Experienced dental specialists dedicated to advanced care, comfort,
            and long-term oral health.
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
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {group.map((doctor) => (
                      <article
                        key={doctor.name}
                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="relative h-64 w-full bg-slate-100 sm:h-80">
                          <Image
                            src={doctor.image}
                            alt={doctor.name}
                            fill
                            sizes="(min-width: 1280px) 280px, (min-width: 640px) 50vw, 100vw"
                            className="object-cover object-top"
                          />
                        </div>

                        <div className="p-4 text-center">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                            {doctor.role}
                          </p>
                          <h3 className="mt-2 text-base font-semibold text-slate-900">
                            {doctor.name}
                          </h3>
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
            aria-label="Previous doctors"
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-600 shadow-md transition hover:text-blue-600"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Next doctors"
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
              aria-label={`Go to doctors page ${dotIndex + 1}`}
              onClick={() => setPage(dotIndex)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                safePage === dotIndex ? "w-5 bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}