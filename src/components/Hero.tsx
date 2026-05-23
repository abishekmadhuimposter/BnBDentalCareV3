"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

import clinic2 from "@/images/clinic-2.jpg"
import clinic3 from "@/images/clinic-3.jpg"
import clinic5 from "@/images/clinic-5.jpg"
import clinic7 from "@/images/clinic-7.jpg"

const heroImages = [clinic2, clinic3, clinic5, clinic7]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section id="home" className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className={`object-cover object-center transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-20">
        <div className="max-w-xl">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Your Smile, Our Priority
          </h1>

          <p className="mb-6 text-white/90">
            Modern dental clinic offering implants, braces,
            and cosmetic dentistry.
          </p>

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