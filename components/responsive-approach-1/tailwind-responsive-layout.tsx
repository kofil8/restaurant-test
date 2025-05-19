"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, ShoppingCart, Search } from "lucide-react"
import Link from "next/link"

export default function TailwindResponsiveLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Navbar with Tailwind responsive classes */}
      <header className="bg-red-800 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo - responsive sizing */}
            <div className="flex items-center">
              <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white">
                <Image src="/images/logo-white.png" alt="Restaurant Logo" fill className="object-cover" />
              </div>
              <span className="ml-2 text-lg md:text-xl font-bold">RESTAURANT</span>
            </div>

            {/* Desktop Navigation - hidden on mobile, flex on md and up */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
              <Link href="/" className="px-3 py-2 text-sm lg:text-base font-medium hover:text-red-200">
                Home
              </Link>
              <Link href="#" className="px-3 py-2 text-sm lg:text-base font-medium hover:text-red-200">
                Menu
              </Link>
              <Link href="#" className="px-3 py-2 text-sm lg:text-base font-medium hover:text-red-200">
                About
              </Link>
              <Link href="#" className="px-3 py-2 text-sm lg:text-base font-medium hover:text-red-200">
                Contact
              </Link>
            </nav>

            {/* Action buttons - responsive spacing and sizing */}
            <div className="flex items-center">
              <button className="p-1 md:p-2 rounded-full hover:bg-white/10 transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </button>
              <button className="hidden md:block p-1 md:p-2 rounded-full hover:bg-white/10 transition-colors ml-2">
                <Search className="h-5 w-5" />
              </button>
              <button className="hidden md:block ml-4 px-3 md:px-5 py-1.5 md:py-2 border border-white rounded-full hover:bg-white hover:text-red-600 transition-colors text-sm md:text-base">
                Book a Table
              </button>

              {/* Mobile menu button - visible on mobile, hidden on md and up */}
              <button
                className="ml-4 md:hidden p-1 rounded-md hover:bg-white/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - conditional display */}
        {isMenuOpen && (
          <div className="md:hidden bg-white text-gray-900 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium hover:bg-red-50 hover:text-red-600 rounded-md"
              >
                Home
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 text-base font-medium hover:bg-red-50 hover:text-red-600 rounded-md"
              >
                Menu
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 text-base font-medium hover:bg-red-50 hover:text-red-600 rounded-md"
              >
                About
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 text-base font-medium hover:bg-red-50 hover:text-red-600 rounded-md"
              >
                Contact
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <button className="w-full px-4 py-2 bg-red-600 text-white rounded-md font-medium">Book a Table</button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Tailwind responsive grid */}
      <section className="bg-red-800 text-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Delicious Food For Your Cravings</h1>
              <p className="text-lg md:text-xl mb-6 text-white/80">
                We offer a wide variety of delicious meals prepared with the freshest ingredients.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button className="px-6 py-3 bg-white text-red-600 rounded-full font-medium hover:bg-red-100 transition-colors">
                  View Menu
                </button>
                <button className="px-6 py-3 border border-white rounded-full font-medium hover:bg-white/10 transition-colors">
                  Book a Table
                </button>
              </div>
            </div>
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mt-8 md:mt-0">
              <Image src="/images/hero-food.jpg" alt="Delicious Food" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Food Menu with Tailwind responsive grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Popular Dishes</h2>

          {/* Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

      {/* Footer with Tailwind responsive layout */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RESTAURANT</h3>
              <p className="text-gray-400 mb-6">
                Serving delicious food since 2010. We pride ourselves on using the freshest ingredients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 8am - 10pm</li>
                <li>Saturday: 9am - 11pm</li>
                <li>Sunday: 10am - 9pm</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Restaurant St, City</li>
                <li>+1 234 567 890</li>
                <li>info@restaurant.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-md w-full focus:outline-none"
                />
                <button className="bg-red-600 px-4 py-2 rounded-r-md">→</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
