import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeatureCards from "@/components/FeatureCards"
import Services from "@/components/Services"
import OurDoctors from "@/components/OurDoctors"
import Location from "@/components/Location"
import Gallery from "@/components/Gallery"
import Testimonials from "@/components/Testimonials"
import Appointment from "@/components/Appointments"
import Footer from "@/components/Footer"
import MobileBar from "@/components/MobileBar"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureCards />
      <Services />
      <OurDoctors />
      <Location />
      {/* <Gallery />
      <Testimonials /> */}
      <Appointment />
      <Footer />
      <MobileBar />
    </>
  )
}