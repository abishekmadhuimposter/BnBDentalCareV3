"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

const images = [
  "https://images.unsplash.com/photo-1609840112855-9d9b1c1b9a7f",
  "https://plus.unsplash.com/premium_photo-1681966962522-546f370bc98e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09"
]

export default function Gallery() {

  return (
    <section id="gallery" className="bg-blue-50 py-20">

      <h2 className="text-3xl font-bold text-center mb-10">
        Smile Gallery
      </h2>

      <Carousel className="max-w-6xl mx-auto">

        <CarouselContent>

          {images.map((img, i) => (

            <CarouselItem
              key={i}
              className="md:basis-1/2 lg:basis-1/3"
            >

              <img
                src={img}
                className="rounded-xl"
              />

            </CarouselItem>
          ))}

        </CarouselContent>

      </Carousel>

    </section>
  )
}