import Link from "next/link"

export default function MobileBar() {

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-around md:hidden">

      <a
        href="tel:+919846646488"
        className="text-blue-600 font-semibold"
      >
        Call
      </a>

      <a
        href="https://wa.me/919846646488?text=Hi%20I%20want%20to%20connect"
        className="text-green-600 font-semibold"
      >
        WhatsApp
      </a>

      <Link
        href="/#appointment"
        className="text-blue-600 font-semibold"
      >
        Book
      </Link>

    </div>
  )
}