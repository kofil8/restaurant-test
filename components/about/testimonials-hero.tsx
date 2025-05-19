"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star } from "lucide-react"

export default function TestimonialsHero() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Customer Testimonials</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Discover what our guests have to say about their dining experiences at our restaurant.
          </p>
          <div className="flex justify-center mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-amber-400 fill-amber-400" />
              ))}
            </div>
          </div>
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
    </section>
  )
}
