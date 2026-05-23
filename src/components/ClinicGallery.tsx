import Image from "next/image"

import clinic1 from "@/images/clinic-1.jpg"
import clinic2 from "@/images/clinic-2.jpg"
import clinic3 from "@/images/clinic-3.jpg"
import clinic4 from "@/images/clinic-4.jpg"
import clinic5 from "@/images/clinic-5.jpg"
import clinic6 from "@/images/clinic-6.jpg"
import clinic7 from "@/images/clinic-7.jpg"
import clinic8 from "@/images/clinic-8.jpg"

const clinicGallery = [clinic1, clinic2, clinic3, clinic4, clinic5, clinic6, clinic7, clinic8]

export default function ClinicGallery() {
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-700">
            Our Clinic
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            A Glimpse Inside B&amp;B Dental Care
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
            State-of-the-art facilities designed for your comfort and care in the heart of Thrissur.
          </p>
        </div>

        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
          {clinicGallery.map((img, i) => (
            <div key={i} className="mb-4 overflow-hidden rounded-xl">
              <Image
                src={img}
                alt={`B&B Dental Care clinic photo ${i + 1}`}
                width={img.width}
                height={img.height}
                style={{ width: "100%", height: "auto" }}
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
