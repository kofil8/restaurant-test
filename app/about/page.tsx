import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AboutHero from "@/components/about/about-hero"
import AboutStory from "@/components/about/about-story"
import AboutValues from "@/components/about/about-values"
import AboutCTA from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About Us | Restaurant",
  description: "Learn about our restaurant's story, values, and mission.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutCTA />
      </div>
      <Footer />
    </main>
  )
}
