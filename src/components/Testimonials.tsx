"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

const testimonials = [
  { name: "Rahul", text: "Excellent service and friendly staff." },
  { name: "Anita", text: "Best dental clinic experience ever." },
  { name: "Joseph", text: "Highly recommended dentist." }
]

export default function Testimonials() {

  return (
    <section className="py-20">

      <h2 className="text-3xl font-bold text-center mb-10">
        Patient Testimonials
      </h2>

      <Carousel className="max-w-4xl mx-auto">

        <CarouselContent>

          {testimonials.map((t, i) => (

            <CarouselItem key={i}>

              <div className="p-6 text-center border rounded-lg">

                <p className="text-gray-600 mb-4">
                  &quot;{t.text}&quot;
                </p>

                <h4 className="font-semibold">
                  {t.name}
                </h4>

              </div>

            </CarouselItem>
          ))}

        </CarouselContent>

      </Carousel>

    </section>
  )
}