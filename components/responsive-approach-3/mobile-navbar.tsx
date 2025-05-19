"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ShoppingCart } from "lucide-react"

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-red-800 text-white sticky top-0 z-50">
      <div className="px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
              <Image src="/images/logo-white.png" alt="Restaurant Logo" fill className="object-cover" />
            </div>
            <span className="ml-2 text-lg font-bold">RESTAURANT</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center">
            <button className="p-1 rounded-full hover:bg-white/10 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button className="ml-3 p-1 rounded-md hover:bg-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="bg-white text-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium hover:bg-red-50 hover:text-red-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium hover:bg-red-50 hover:text-red-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium hover:bg-red-50 hover:text-red-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 text-base font-medium hover:bg-red-50 hover:text-red-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
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
  )
}
