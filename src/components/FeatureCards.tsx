"use client"

import { useRef, useState } from "react"
import { CheckCircle, Microscope, Smile, DollarSign, ChevronLeft, ChevronRight } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-50",
    title: "Experienced Dentists",
    description: "Doctors with years of expertise in all dental procedures",
  },
  {
    icon: Microscope,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-50",
    title: "Modern Equipment",
    description: "State-of-the-art technology for precise treatment",
  },
  {
    icon: Smile,
    iconColor: "text-teal-500",
    iconBg: "bg-teal-50",
    title: "Pain Free Treatment",
    description: "Gentle care with advanced anaesthesia techniques",
  },
  {
    icon: DollarSign,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    title: "Affordable Care",
    description: "Affordable dental care in Thrissur with transparent, fair pricing for every treatment.",
  },
]

export default function FeatureCards() {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const prev = () =>
    setActiveIndex((i) => (i - 1 + features.length) % features.length)
  const next = () =>
    setActiveIndex((i) => (i + 1) % features.length)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) {
      if (delta > 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  return (
    <section className="py-12 px-4 bg-linear-to-b from-blue-50/60 to-white">
      {/* Desktop: 4 columns */}
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-4 gap-6">
        {features.map(({ icon: Icon, iconColor, iconBg, title, description }) => (
          <div
            key={title}
            className="group flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 bg-white shadow-sm
                       transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-blue-100 cursor-default"
          >
            <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full ${iconBg} transition-transform duration-300 group-hover:scale-110`}>
              <Icon className={`h-6 w-6 ${iconColor}`} strokeWidth={1.8} />
            </div>
            <h3 className="mb-2 text-base font-semibold text-gray-800">{title}</h3>
            <p className="text-sm leading-relaxed text-gray-500">{description}</p>
          </div>
        ))}
      </div>

      {/* Mobile: single card slider */}
      <div className="md:hidden relative max-w-sm mx-auto">
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-400 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {features.map(({ icon: Icon, iconColor, iconBg, title, description }) => (
              <div
                key={title}
                className="min-w-full flex flex-col items-center text-center p-10 rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full ${iconBg}`}>
                  <Icon className={`h-6 w-6 ${iconColor}`} strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-gray-800">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 flex h-9 w-9 items-center justify-center
                     rounded-full bg-white shadow-md border border-gray-100 text-gray-600 hover:text-blue-600 transition"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex h-9 w-9 items-center justify-center
                     rounded-full bg-white shadow-md border border-gray-100 text-gray-600 hover:text-blue-600 transition"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-5 bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
