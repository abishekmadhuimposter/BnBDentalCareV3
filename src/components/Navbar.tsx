"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import logo from "@/images/logo.png"

const navigationItems = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#our-doctors", label: "Our Doctors" },
  { href: "/#location", label: "Location" },
  { href: "/#contact", label: "Contact" },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <h1 className="flex items-center gap-2 text-xl font-bold text-blue-600">
            <Image
              src={logo}
              alt="B&B Dental Care"
              className="h-13 w-auto"
              priority
            />
            <span>B&B Dental Care</span>
          </h1>

          <nav className="hidden gap-6 md:flex">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="/#appointment"
            className="hidden rounded-lg bg-blue-600 px-2.5 text-sm font-medium text-white transition hover:bg-blue-700 md:inline-flex md:h-8 md:items-center md:justify-center"
          >
            Book Appointment
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 md:hidden"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-60 md:hidden ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-slate-950/35 backdrop-blur-[2px] transition-opacity duration-300 ease-out ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
        />

        <aside
          id="mobile-navigation"
          className={`absolute inset-y-0 right-0 flex w-[min(82vw,22rem)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b px-4 py-4">
            <div className="flex items-center gap-2 text-base font-bold text-blue-600">
              <Image src={logo} alt="B&B Dental Care" className="h-10 w-auto" />
              <span>B&B Dental Care</span>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100"
              aria-label="Close navigation menu"
              onClick={closeMobileMenu}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-2 px-4 py-5">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/#appointment"
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              onClick={closeMobileMenu}
            >
              Book Appointment
            </a>
          </nav>
        </aside>
      </div>
    </>
  )
}