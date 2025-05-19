"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Define the carousel items
const carouselItems = [
  {
    id: 1,
    title: "BREAKFAST",
    description:
      "Breakfast, often referred to as the 'most important meal of the day', provides essential nutrients to kick start our day.",
    image: "/images/breakfast.png",
    color: "from-red-700 to-red-900",
  },
  {
    id: 2,
    title: "LUNCH",
    description:
      "Enjoy our delicious lunch options made with fresh ingredients and prepared by our expert chefs.",
    image: "/images/lunch.png",
    color: "from-amber-600 to-amber-800",
  },
  {
    id: 3,
    title: "DINNER",
    description:
      "End your day with our exquisite dinner menu featuring a variety of culinary delights from around the world.",
    image: "/images/dinner.png",
    color: "from-indigo-700 to-indigo-900",
  },
  {
    id: 3,
    title: "SPECIALS",
    description:
      "Discover our daily specials featuring unique dishes crafted with seasonal ingredients.",
    image: "/images/special.png",
    color: "from-teal-700 to-teal-900",
  },
];

// Thumbnail images for the carousel
const thumbnails = [
  "/images/breakfast.png",
  "/images/lunch.png",
  "/images/dinner.png",
  "/images/special.png",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate carousel
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        if (!isAnimating) {
          nextSlide();
        }
      }, 5000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Reset autoplay when user interacts
  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }
  };

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br ${carouselItems[currentSlide].color} transition-colors duration-1000`}
    >
      <div className='absolute inset-0 pointer-events-none z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-white/10 via-rose-400/10 to-amber-300/20 opacity-80'></div>
        <div className='absolute top-0 left-0 w-2/3 h-1/2 bg-gradient-to-br from-rose-500/30 via-amber-400/10 to-transparent rounded-br-full blur-2xl opacity-70'></div>
        <div className='absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-700/30 via-fuchsia-400/10 to-transparent rounded-tl-full blur-2xl opacity-60'></div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 relative'>
        {/* Search Bar */}
        <div className='relative w-full max-w-md mx-auto mb-12'>
          <div className='relative bg-white rounded-full overflow-hidden shadow-lg'>
            <div className='absolute left-4 top-1/2 transform -translate-y-1/2'>
              <svg
                className='h-5 w-5 text-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='11' cy='11' r='8' />
                <path d='m21 21-4.3-4.3' />
              </svg>
            </div>
            <input
              type='text'
              placeholder='Search....'
              className='w-full py-3 pl-12 pr-4 text-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
            />
          </div>
        </div>

        {/* Carousel Content */}
        <div className='flex flex-col items-center relative'>
          {/* Text Content */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className='text-center z-10 mb-8 md:mb-12 max-w-2xl mx-auto'
            >
              <h2 className='text-5xl md:text-7xl font-bold mb-4 text-white'>
                {carouselItems[currentSlide].title}
              </h2>
              <p className='text-lg md:text-xl mb-4 text-white/90'>
                {carouselItems[currentSlide].description}{" "}
                <Link
                  href='#'
                  className='underline hover:text-white transition-colors font-medium'
                >
                  See more
                </Link>
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Main Image */}
          <div className='relative w-64 h-64 md:w-96 md:h-96 mx-auto mb-8'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className='absolute inset-0 rounded-full overflow-hidden shadow-2xl'
              >
                <Image
                  src={carouselItems[currentSlide].image || "/placeholder.svg"}
                  alt={carouselItems[currentSlide].title}
                  fill
                  className='object-cover'
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              prevSlide();
              resetAutoPlay();
            }}
            className='carousel-nav-button left-4 hover:left-3'
            aria-label='Previous slide'
          >
            <ChevronLeft className='h-6 w-6' />
          </button>
          <button
            onClick={() => {
              nextSlide();
              resetAutoPlay();
            }}
            className='carousel-nav-button right-4 hover:right-3'
            aria-label='Next slide'
          >
            <ChevronRight className='h-6 w-6' />
          </button>

          {/* Thumbnails */}
          <div className='flex space-x-4 mt-4'>
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index % carouselItems.length);
                  resetAutoPlay();
                }}
                className={`carousel-thumbnail w-16 h-16 ${
                  index % carouselItems.length === currentSlide
                    ? "active"
                    : "inactive"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <Image
                  src={thumb || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className='object-cover'
                />
              </button>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className='flex justify-center space-x-2 mt-6 w-full max-w-xs mx-auto'>
            {carouselItems.map((_, index) => (
              <div
                key={index}
                className={`carousel-indicator ${
                  index === currentSlide ? "active" : "inactive"
                }`}
                onClick={() => {
                  goToSlide(index);
                  resetAutoPlay();
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background shapes */}
      <div className='absolute top-0 left-0 w-full h-full -z-10 overflow-hidden'>
        <div className='absolute top-0 left-0 w-3/4 h-full bg-white/10 rounded-r-full'></div>
        <div className='absolute bottom-0 right-0 w-2/3 h-2/3 bg-black/10 rounded-tl-full'></div>
        <div className='absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl'></div>
      </div>
    </section>
  );
}
