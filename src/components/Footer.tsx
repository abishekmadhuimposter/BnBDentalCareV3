import Image from "next/image"
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react"
import logo from "@/images/logo.png"

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 pb-4 pt-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
                <Image
                  src={logo}
                  alt="B&B Dental Care Logo"
                  className="h-6 w-auto"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white">B&amp;B Dental Care</h3>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Your trusted dental clinic in Thrissur, Kerala. Providing quality
              dental care.
            </p>

            {/* <div className="mt-5 inline-flex w-full max-w-xs items-center justify-between rounded-lg bg-slate-800 px-4 py-3">
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="mt-1 text-xs font-semibold text-amber-400">
                  200+ Google Reviews
                </p>
              </div>
              <p className="text-lg font-semibold text-white">4.9 / 5</p>
            </div> */}

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/bandbdentalcare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                aria-label="Instagram"
                className="rounded-lg bg-slate-800 p-2.5 text-slate-400 transition hover:bg-slate-700 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919846646488?text=Hi%20I%20want%20to%20connect"
                aria-label="WhatsApp"
                className="rounded-lg bg-slate-800 p-2.5 text-slate-400 transition hover:bg-slate-700 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white">Our Services</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#" className="hover:text-white">Dental Implants</a></li>
              <li><a href="#" className="hover:text-white">Root Canal</a></li>
              <li><a href="#" className="hover:text-white">Teeth Whitening</a></li>
              <li><a href="#" className="hover:text-white">Braces &amp; Aligners</a></li>
              <li><a href="#" className="hover:text-white">Tooth Extraction</a></li>
              <li><a href="#" className="hover:text-white">Smile Makeover</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              {/* <li><a href="#" className="hover:text-white">About Us</a></li> */}
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#ourdoctors" className="hover:text-white">Our Doctors</a></li>
              {/* <li><a href="#" className="hover:text-white">Blog</a></li> */}
              <li><a href="#appointment" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white">Contact Us</h4>
            <ul className="mt-5 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                <span className="leading-7">
                  Near, Padavarad Junction, TKV Nagar,
                    <br />
                    Paruvankulamgara, Ollur,
                    <br />
                    Thrissur, Kerala - 680306
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-500" />
                <a href="tel:+919846646488" className="hover:text-white">
                  +91 98466 46488
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-blue-500" />
                <a href="mailto:bnbdentalcare@gmail.com" className="hover:text-white">
                  bnbdentalcare@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 B&amp;B Dental Care. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}