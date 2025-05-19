"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Timeline event type
type TimelineEvent = {
  year: string
  title: string
  description: string
  image?: string
}

// Sample timeline data
const timelineEvents: TimelineEvent[] = [
  {
    year: "2010",
    title: "The Beginning",
    description:
      "Our restaurant was founded by Chef Mark Henry with a vision to create a dining experience that celebrates local ingredients and traditional cooking methods.",
    image: "/images/timeline-1.jpg",
  },
  {
    year: "2012",
    title: "First Recognition",
    description:
      "We received our first culinary award, recognizing our commitment to excellence and innovation in the local food scene.",
    image: "/images/timeline-2.jpg",
  },
  {
    year: "2015",
    title: "Expansion",
    description:
      "Due to growing popularity, we expanded our dining space and introduced a private dining area for special events and celebrations.",
    image: "/images/timeline-3.jpg",
  },
  {
    year: "2018",
    title: "Michelin Star",
    description:
      "A milestone achievement as our restaurant was awarded its first Michelin star, acknowledging our dedication to culinary excellence.",
    image: "/images/timeline-4.jpg",
  },
  {
    year: "2020",
    title: "Adapting & Innovating",
    description:
      "During challenging times, we pivoted to offer gourmet takeout experiences and virtual cooking classes, maintaining our connection with our community.",
    image: "/images/timeline-5.jpg",
  },
  {
    year: "2023",
    title: "Today & Beyond",
    description:
      "We continue to evolve while staying true to our roots, embracing new culinary trends while honoring the traditions that have made us successful.",
    image: "/images/timeline-6.jpg",
  },
]

export default function HistoryTimeline() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey Through Time</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Explore the key moments that have shaped our restaurant's history and culinary philosophy over the years.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-red-100"></div>

          {/* Timeline events */}
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`mb-12 md:mb-24 flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                {/* Year marker */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-red-600 border-4 border-white shadow-lg z-10"></div>
                  <div className="text-red-600 font-bold text-xl mt-2 md:absolute md:mt-0 md:ml-12 md:-translate-y-1/2 md:top-1/2">
                    {event.year}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} mt-8 md:mt-0`}
                >
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    {event.image && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
