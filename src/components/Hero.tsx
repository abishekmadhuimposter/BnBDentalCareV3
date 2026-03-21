"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const heroImages = [
  "https://images.pexels.com/photos/3881313/pexels-photo-3881313.jpeg",
  "https://images.pexels.com/photos/4269684/pexels-photo-4269684.jpeg",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
  "https://images.pexels.com/photos/305565/pexels-photo-305565.jpeg",
]

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
            key={image}
            src={image}
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
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

          <Button className="bg-blue-600 hover:bg-blue-700">
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  )
}