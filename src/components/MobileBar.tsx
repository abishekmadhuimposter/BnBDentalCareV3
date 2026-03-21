export default function MobileBar() {

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-around md:hidden">

      <a
        href="tel:+919876543210"
        className="text-blue-600 font-semibold"
      >
        Call
      </a>

      <a
        href="https://wa.me/919876543210"
        className="text-green-600 font-semibold"
      >
        WhatsApp
      </a>

      <a
        href="#appointment"
        className="text-blue-600 font-semibold"
      >
        Book
      </a>

    </div>
  )
}