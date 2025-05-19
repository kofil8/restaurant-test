"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function HistoryHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-800 to-red-900 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-700/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-700/30 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our History</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            From humble beginnings to culinary excellence, discover the journey that shaped our restaurant into what it
            is today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="px-6 py-3 bg-white text-red-600 rounded-full font-medium hover:bg-red-50 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/about/team"
              className="px-6 py-3 border border-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Our Team
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Vintage image */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative h-[200px] md:h-[300px] w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/restaurant-vintage.jpg"
            alt="Restaurant in the early days"
            fill
            className="object-cover sepia"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-lg font-medium">Our restaurant in 2010</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
