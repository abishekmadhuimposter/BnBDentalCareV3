import { Clock3, Mail, MapPin, Phone } from "lucide-react"

export default function Location() {
  return (
    <section id="location" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-700">
            Find Us
          </span>
          <h2 className="mx-auto mt-4 max-w-4xl text-2xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Our Location
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Conveniently located in the heart of Thrissur. Ample parking available.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="relative self-start overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <iframe
              title="B&B Dental Care Location"
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d125531.64342413848!2d76.22325045!3d10.511387599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3ba7f1fdcf23c82f%3A0x9a53bb462fc28ed6!2sB%20%26%20B%20Dental%20Care%2C%20Near%2C%20Padavarad%20Junction%2C%20TKV%20Nagar%2C%20Paruvankulamgara%2C%20Ollur%2C%20Thrissur%2C%20Kerala%20680306!3m2!1d10.488535299999999!2d76.2536332!4m5!1s0x3ba7f1fdcf23c82f%3A0x9a53bb462fc28ed6!2sB%20%26%20B%20Dental%20Care%2C%20Near%2C%20Padavarad%20Junction%2C%20TKV%20Nagar%2C%20Paruvankulamgara%2C%20Ollur%2C%20Thrissur%2C%20Kerala%20680306!3m2!1d10.488535299999999!2d76.2536332!5e0!3m2!1sen!2sin!4v1774723035844!5m2!1sen!2sin"
              className="h-90 w-full md:h-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://www.google.com/maps/dir//B+%26+B+Dental+Care,+Near,+Padavarad+Junction,+TKV+Nagar,+Paruvankulamgara,+Ollur,+Thrissur,+Kerala+680306/@10.5113876,76.2232504,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba7f1fdcf23c82f:0x9a53bb462fc28ed6!2m2!1d76.2536332!2d10.4885353?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="absolute left-4 top-4 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm"
            >
              Open in Maps ↗
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-1">
            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-blue-100 p-2.5 text-blue-600">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Address</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    Near, Padavarad Junction, TKV Nagar,
                    <br />
                    Paruvankulamgara, Ollur,
                    <br />
                    Thrissur, Kerala - 680306
                  </p>
                  <a
                    href="https://maps.google.com/?q=B+%26+B+Dental+Care,+Near,+Padavarad+Junction,+TKV+Nagar,+Paruvankulamgara,+Ollur,+Thrissur,+Kerala+680306"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1.5 inline-block text-sm font-semibold text-blue-600"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-blue-100 p-2.5 text-blue-600">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">
                    <span className="block truncate" title="+91 9846646488">
                      +91 9846646488
                    </span>
                    <br />
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-blue-100 p-2.5 text-blue-600">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p
                    className="mt-1.5 truncate text-sm leading-6 text-slate-600"
                    title="bnbdentalcare@gmail.com"
                  >
                    bnbdentalcare@gmail.com
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-blue-100 p-2.5 text-blue-600">
                  <Clock3 className="h-4 w-4" />
                </div>
                <div className="w-full">
                  <h3 className="font-semibold text-slate-900">Working Hours</h3>
                  <div className="mt-1.5 space-y-1.5 text-sm text-slate-600">
                    <div className="flex items-center justify-between gap-4">
                      <span className="truncate" title="Monday - Friday">Monday - Friday</span>
                      <span className="shrink-0 font-semibold text-slate-900">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="truncate" title="Saturday">Saturday</span>
                      <span className="shrink-0 font-semibold text-slate-900">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="truncate" title="Sunday">Sunday</span>
                      <span className="shrink-0 font-semibold text-slate-900">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}