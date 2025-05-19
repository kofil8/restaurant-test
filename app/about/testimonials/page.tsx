import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialsHero from "@/components/about/testimonials-hero"
import TestimonialsSection from "@/components/about/testimonials-section"
import AboutCTA from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "Testimonials | Restaurant",
  description: "See what our customers have to say about their dining experience with us.",
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <TestimonialsHero />
        <TestimonialsSection />
        <AboutCTA />
      </div>
      <Footer />
    </main>
  )
}
