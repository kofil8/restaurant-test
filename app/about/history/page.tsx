import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HistoryHero from "@/components/about/history-hero"
import HistoryTimeline from "@/components/about/history-timeline"
import AboutCTA from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "Our History | Restaurant",
  description: "Discover the rich history and heritage of our restaurant.",
}

export default function HistoryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <HistoryHero />
        <HistoryTimeline />
        <AboutCTA />
      </div>
      <Footer />
    </main>
  )
}
