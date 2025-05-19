"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

// Device-specific components
import MobileNavbar from "./mobile-navbar"
import TabletNavbar from "./tablet-navbar"
import DesktopNavbar from "./desktop-navbar"
import MobileHero from "./mobile-hero"
import TabletHero from "./tablet-hero"
import DesktopHero from "./desktop-hero"
import MobileFooter from "./mobile-footer"
import TabletFooter from "./tablet-footer"
import DesktopFooter from "./desktop-footer"

export default function DeviceSpecificLayout() {
  // State to track the current device
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">("desktop")

  // Update device type based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDeviceType("mobile")
      } else if (window.innerWidth < 1024) {
        setDeviceType("tablet")
      } else {
        setDeviceType("desktop")
      }
    }

    // Set initial device type
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Render the appropriate navbar based on device type */}
      {deviceType === "mobile" && <MobileNavbar />}
      {deviceType === "tablet" && <TabletNavbar />}
      {deviceType === "desktop" && <DesktopNavbar />}

      {/* Render the appropriate hero section based on device type */}
      {deviceType === "mobile" && <MobileHero />}
      {deviceType === "tablet" && <TabletHero />}
      {deviceType === "desktop" && <DesktopHero />}

      {/* Food Menu - shared component with internal responsive logic */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Popular Dishes</h2>

          {/* Responsive grid with different layouts per device */}
          <div
            className={`grid gap-6 md:gap-8 ${
              deviceType === "mobile" ? "grid-cols-1" : deviceType === "tablet" ? "grid-cols-2" : "grid-cols-3"
            }`}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48 sm:h-56 md:h-64 w-full">
                  <Image src={`/images/food-${item}.jpg`} alt={`Food item ${item}`} fill className="object-cover" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2">Delicious Dish {item}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    A wonderful combination of fresh ingredients and spices.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-bold text-lg md:text-xl">$24.99</span>
                    <button className="px-3 py-1.5 md:px-4 md:py-2 bg-red-600 text-white rounded-full text-sm md:text-base">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Render the appropriate footer based on device type */}
      {deviceType === "mobile" && <MobileFooter />}
      {deviceType === "tablet" && <TabletFooter />}
      {deviceType === "desktop" && <DesktopFooter />}
    </div>
  )
}
