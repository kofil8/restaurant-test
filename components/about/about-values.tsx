"use client"

import { motion } from "framer-motion"
import { Heart, Leaf, Smile, Utensils } from "lucide-react"

export default function AboutValues() {
  const values = [
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Culinary Excellence",
      description:
        "We are committed to creating exceptional dishes that showcase the finest ingredients and culinary techniques.",
      color: "bg-red-600",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description:
        "We source ingredients responsibly, minimize waste, and work with local producers to reduce our environmental impact.",
      color: "bg-green-600",
    },
    {
      icon: <Smile className="h-8 w-8" />,
      title: "Hospitality",
      description: "We believe in creating a warm, welcoming environment where every guest feels valued and cared for.",
      color: "bg-amber-500",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community",
      description:
        "We are dedicated to supporting our local community through partnerships, events, and charitable initiatives.",
      color: "bg-blue-600",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            These principles guide everything we do, from how we prepare our food to how we treat our guests and team
            members.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`${value.color} text-white p-4 rounded-xl inline-block mb-6`}>{value.icon}</div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
