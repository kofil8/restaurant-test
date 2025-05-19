"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Partner type
type Partner = {
  id: number
  name: string
  logo: string
}

// Sample partners data - expanded for better carousel effect
const partners: Partner[] = [
  {
    id: 1,
    name: "Wolf Coffee",
    logo: "/images/partner-1.svg",
  },
  {
    id: 2,
    name: "Bistro",
    logo: "/images/partner-2.svg",
  },
  {
    id: 3,
    name: "Bakery",
    logo: "/images/partner-3.svg",
  },
  {
    id: 4,
    name: "Restaurant",
    logo: "/images/partner-4.svg",
  },
  {
    id: 5,
    name: "Bakery",
    logo: "/images/partner-5.svg",
  },
  {
    id: 6,
    name: "Bar & Spice",
    logo: "/images/partner-6.svg",
  },
  {
    id: 7,
    name: "Gourmet Foods",
    logo: "/images/partner-1.svg", // Reusing logos for demo
  },
  {
    id: 8,
    name: "Fresh Market",
    logo: "/images/partner-2.svg",
  },
  {
    id: 9,
    name: "Organic Farms",
    logo: "/images/partner-3.svg",
  },
  {
    id: 10,
    name: "Fine Dining",
    logo: "/images/partner-4.svg",
  },
]

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Number of items to show based on screen size
  const [itemsToShow, setItemsToShow] = useState(5)

  // Update items to show based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(2)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3)
      } else {
        setItemsToShow(5)
      }
    }

    handleResize() // Initial call
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 3000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [currentIndex, isPaused, itemsToShow])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === partners.length - itemsToShow ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? partners.length - itemsToShow : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-red-600 font-medium mb-2">Partners & Clients</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">We work with the best people</h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative px-10" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10 transition-all duration-300 hover:scale-110"
            aria-label="Previous partners"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10 transition-all duration-300 hover:scale-110"
            aria-label="Next partners"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          {/* Carousel Track */}
          <div ref={carouselRef} className="overflow-hidden">
            <motion.div
              className="flex items-center"
              initial={false}
              animate={{
                x: `-${currentIndex * (100 / itemsToShow)}%`,
              }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.5,
              }}
            >
              {partners.map((partner) => (
                <div key={partner.id} className="flex-shrink-0" style={{ width: `${100 / itemsToShow}%` }}>
                  <div className="mx-auto px-4 py-8">
                    <div className="relative h-20 w-full grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: partners.length - itemsToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-8 bg-red-600" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
