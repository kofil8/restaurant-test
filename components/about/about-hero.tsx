"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-800 to-red-900 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-700/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-700/30 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Welcome to Restaurant, where passion for food meets exceptional dining experience. Since our founding in
              2010, we've been dedicated to creating memorable culinary moments for our guests.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about/team"
                className="px-6 py-3 bg-white text-red-600 rounded-full font-medium hover:bg-red-50 transition-colors"
              >
                Our Team
              </Link>
              <Link
                href="/about/history"
                className="px-6 py-3 border border-white rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Our History
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/about-hero.jpg" alt="Restaurant interior" fill className="object-cover" priority />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 md:w-48 md:h-48 bg-white p-3 md:p-5 rounded-2xl shadow-xl">
              <div className="w-full h-full relative bg-red-600 rounded-xl overflow-hidden">
                <Image
                  src="/images/chef-portrait.jpg"
                  alt="Head Chef"
                  fill
                  className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
