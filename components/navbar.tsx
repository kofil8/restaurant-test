"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Search } from "lucide-react";
import CartIcon from "./cart-icon";

// Navigation links with dropdown options
const navItems = [
  {
    name: "Home",
    href: "/",
    current: true,
  },
  {
    name: "Menu",
    href: "#",
    current: false,
    dropdown: [
      { name: "Breakfast", href: "#breakfast" },
      { name: "Lunch", href: "#lunch" },
      { name: "Dinner", href: "#dinner" },
      { name: "Specials", href: "#specials" },
    ],
  },
  {
    name: "About",
    href: "/about",
    current: false,
    dropdown: [
      { name: "Our Story", href: "/about" },
      { name: "Our Team", href: "/about/team" },
      { name: "Testimonials", href: "/about/testimonials" },
      { name: "Our History", href: "/about/history" },
    ],
  },
  {
    name: "Contact",
    href: "#",
    current: false,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle dropdown toggle
  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isOpen &&
        !target.closest("#mobile-menu") &&
        !target.closest("#menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-gray-300 shadow-md py-2" : "bg-transparent py-4 lg:py-6"
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/' className='flex items-center gap-3'>
              {scrolled ? (
                <div className='relative w-10 h-10 rounded-full overflow-hidden border-2 border-red-600'>
                  <Image
                    src='/images/logo.png'
                    alt='Restaurant Logo'
                    fill
                    className='object-cover'
                  />
                </div>
              ) : (
                <div className='relative w-10 h-10 rounded-full overflow-hidden border-2 border-white'>
                  <Image
                    src='/images/logo-white.png'
                    alt='Restaurant Logo'
                    fill
                    className='object-cover'
                  />
                </div>
              )}
              <span
                className={`text-xl font-bold ${
                  scrolled ? "text-red-600" : "text-white"
                }`}
              >
                RESTAURANT
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-1'>
            {navItems.map((item) => (
              <div key={item.name} className='relative group'>
                <div
                  className='flex items-center px-3 py-2 text-sm font-medium cursor-pointer'
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
                >
                  <span className='hover:text-red-500 transition-colors duration-200'>
                    {item.name}
                  </span>
                  {item.dropdown && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Desktop Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`absolute left-0 mt-1 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 z-50 ${
                      activeDropdown === item.name
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className='py-1'>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600'
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className='hidden md:flex items-center gap-4'>
            <button className='p-2 rounded-full hover:bg-white/10 transition-colors'>
              <Phone className='h-5 w-5' />
            </button>
            <button className='p-2 rounded-full hover:bg-white/10 transition-colors'>
              <Search className='h-5 w-5' />
            </button>
            {/* Cart Icon */}
            <CartIcon />
            <button
              className={`btn ${
                scrolled
                  ? "btn-primary"
                  : "border border-white hover:bg-white hover:text-red-600"
              } px-5 py-2 text-sm font-medium transition-all`}
            >
              Book a Table
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='flex md:hidden items-center gap-2'>
            {/* Cart Icon for Mobile */}
            <CartIcon />

            <button
              id='menu-button'
              type='button'
              className={`p-2 rounded-md ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              } focus:outline-none`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <X className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <Menu className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id='mobile-menu'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='md:hidden bg-white shadow-lg overflow-hidden'
          >
            <div className='px-2 pt-2 pb-4 space-y-1 sm:px-3'>
              {navItems.map((item) => (
                <div key={item.name} className='w-full'>
                  {item.dropdown ? (
                    <div className='w-full'>
                      <button
                        className='w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-900 hover:bg-red-50 hover:text-red-600 rounded-md'
                        onClick={() => toggleDropdown(item.name)}
                      >
                        {item.name}
                        <ChevronDown
                          className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className='pl-4 space-y-1'
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className='block px-3 py-2 text-base font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-md'
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className='block px-3 py-2 text-base font-medium text-gray-900 hover:bg-red-50 hover:text-red-600 rounded-md'
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className='pt-4 pb-3 border-t border-gray-200'>
                <div className='flex items-center justify-center'>
                  <button className='w-full mx-3 btn btn-primary py-2 px-4 text-center'>
                    Book a Table
                  </button>
                </div>

                <div className='mt-4 flex justify-center space-x-4'>
                  <button className='p-2 rounded-full bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-600 transition-colors'>
                    <Phone className='h-5 w-5' />
                  </button>
                  <button className='p-2 rounded-full bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-600 transition-colors'>
                    <Search className='h-5 w-5' />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
