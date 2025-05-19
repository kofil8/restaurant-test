"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Utensils, Award, Users, Clock } from "lucide-react"

export default function AboutStory() {
  const features = [
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Quality Food",
      description: "We use only the freshest ingredients for our dishes",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Award Winning",
      description: "Recognized for culinary excellence and innovation",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Chefs",
      description: "Our team of world-class chefs create memorable experiences",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Service",
      description: "Prompt and attentive service for all our guests",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/about-story.jpg" alt="Restaurant kitchen" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-4 md:p-6 rounded-2xl shadow-xl">
              <div className="text-red-600 font-bold text-4xl md:text-6xl">12+</div>
              <div className="text-gray-800 font-medium">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culinary Journey</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our restaurant was founded with a simple mission: to create exceptional food that delights the senses and
              brings people together. What began as a small family-owned establishment has grown into a beloved culinary
              destination.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our head chef, with over 20 years of experience in fine dining, leads a team of passionate culinary
              artists who are dedicated to crafting innovative dishes using traditional techniques and the finest local
              ingredients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-red-100 text-red-600 p-3 rounded-xl mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
