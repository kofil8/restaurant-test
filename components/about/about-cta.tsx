"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-800 to-red-900 rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="relative px-6 py-12 md:p-16 text-white">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-700/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-700/30 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Experience Our Cuisine?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Join us for an unforgettable dining experience. Book a table today or explore our menu to see what
                awaits you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/menu"
                  className="px-8 py-3 bg-white text-red-600 rounded-full font-medium hover:bg-red-50 transition-colors"
                >
                  View Menu
                </Link>
                <Link
                  href="/reservation"
                  className="px-8 py-3 border border-white rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  Book a Table
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
