"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Tom Johnson",
    role: "Business Owner",
    image: "/images/man-1.jpg",
    rating: 5,
    text: "The culinary experience here is absolutely outstanding. Every dish is crafted with such attention to detail and the flavors are simply incredible. The atmosphere is perfect for both casual dining and special occasions.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Regular Customer",
    image: "/images/women.jpg",
    rating: 5,
    text: "I've been dining here for years and the consistency in quality and service never fails to impress. The staff remembers my preferences and always makes me feel welcome. It's like my second home.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Food Blogger",
    image: "/images/boy-1.jpg",
    rating: 5,
    text: "As someone who dines at restaurants professionally, I can say this place stands out. The innovative menu, impeccable service, and attention to detail create an unforgettable dining experience.",
  },
];

export default function CustomerFeedback() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-800 to-red-900 text-white relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-24 -right-24 w-96 h-96 bg-red-700/30 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-24 -left-24 w-96 h-96 bg-red-700/30 rounded-full blur-3xl'></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            What Our Customers Say
          </h2>
          <p className='text-lg text-white/80 max-w-2xl mx-auto'>
            Don't just take our word for it. Here's what our valued customers
            have to say about their dining experiences.
          </p>
        </motion.div>

        <div className='relative'>
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col md:flex-row items-center gap-8 md:gap-12'
          >
            <div className='relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-xl flex-shrink-0'>
              <Image
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                fill
                className='object-cover'
              />
            </div>

            <div className='flex-1 text-center md:text-left'>
              <div className='flex justify-center md:justify-start mb-4'>
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className='h-6 w-6 text-amber-400 fill-amber-400'
                    />
                  )
                )}
              </div>

              <div className='relative'>
                <Quote className='absolute -top-6 -left-8 h-16 w-16 text-red-700/20 rotate-180' />
                <p className='text-xl md:text-2xl italic mb-6 relative z-10'>
                  {testimonials[currentTestimonial].text}
                </p>
              </div>

              <div>
                <h4 className='text-xl font-bold'>
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className='text-white/80'>
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className='flex justify-center md:justify-end gap-4 mt-8'>
            <button
              onClick={prevTestimonial}
              className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors'
              aria-label='Previous testimonial'
            >
              <ChevronLeft className='h-6 w-6' />
            </button>
            <button
              onClick={nextTestimonial}
              className='p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors'
              aria-label='Next testimonial'
            >
              <ChevronRight className='h-6 w-6' />
            </button>
          </div>

          {/* Indicators */}
          <div className='flex justify-center gap-2 mt-6'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "w-8 bg-white" : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
