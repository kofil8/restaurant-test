import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TeamHero from "@/components/about/team-hero"
import TeamSection from "@/components/team-section"
import AboutCTA from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "Our Team | Restaurant",
  description: "Meet the talented team behind our restaurant's success.",
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <TeamHero />
        <TeamSection />
        <AboutCTA />
      </div>
      <Footer />
    </main>
  )
}
