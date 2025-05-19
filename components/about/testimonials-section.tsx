"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

// Testimonial type
type Testimonial = {
  id: number
  name: string
  role: string
  image: string
  rating: number
  text: string
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Critic",
    image: "/images/testimonial-1.jpg",
    rating: 5,
    text: "The culinary experience at this restaurant is nothing short of extraordinary. Each dish is a masterpiece of flavors and presentation. The attention to detail and the quality of ingredients are evident in every bite.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Regular Customer",
    image: "/images/testimonial-2.jpg",
    rating: 5,
    text: "I've been dining here for years, and the consistency is remarkable. The staff remembers my preferences, and the chef continues to innovate while maintaining the classic dishes I love. It feels like coming home.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Food Blogger",
    image: "/images/testimonial-3.jpg",
    rating: 5,
    text: "As someone who dines at restaurants professionally, I can say this place stands out. The ambiance, service, and most importantly, the food, create a harmonious dining experience that keeps me coming back.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "First-time Visitor",
    image: "/images/testimonial-4.jpg",
    rating: 4,
    text: "My first visit exceeded expectations. The menu offered a perfect balance of familiar comfort and exciting new flavors. The staff was attentive without being intrusive, making for a memorable evening.",
  },
  {
    id: 5,
    name: "Sophia Williams",
    role: "Celebration Dinner",
    image: "/images/testimonial-5.jpg",
    rating: 5,
    text: "We celebrated our anniversary here and were treated to an exceptional experience. The chef prepared a special tasting menu that took us on a culinary journey. It was the perfect setting for our special occasion.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Business Dinner",
    image: "/images/testimonial-6.jpg",
    rating: 5,
    text: "I hosted an important business dinner here and was impressed by the private dining experience. The staff was professional, the food was outstanding, and my clients were thoroughly impressed.",
  },
]

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage,
  )

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We're proud to have served thousands of satisfied customers. Here are some of their experiences dining with
            us.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={currentPage}
        >
          {currentTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-red-100 rotate-180" />
                <p className="text-gray-600 italic pl-6">{testimonial.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 space-x-4">
          <button
            onClick={prevPage}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index ? "w-8 bg-red-600" : "bg-gray-300"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  )
}
