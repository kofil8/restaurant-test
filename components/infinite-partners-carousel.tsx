"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Partner type
type Partner = {
  id: number;
  name: string;
  logo: string;
};

// Sample partners data
const partners: Partner[] = [
  {
    id: 1,
    name: "Wolf Coffee",
    logo: "/images/wild.png",
  },
  {
    id: 2,
    name: "Bistro",
    logo: "/images/bistro.png",
  },
  {
    id: 3,
    name: "Bakery",
    logo: "/images/bakery.png",
  },
  {
    id: 4,
    name: "Restaurant",
    logo: "/images/rest.png",
  },
  {
    id: 5,
    name: "Fork & Spoon",
    logo: "/images/fork.png",
  },
  {
    id: 6,
    name: "Bar & Spice",
    logo: "/images/bak.png",
  },
];

export default function InfinitePartnersCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const innerCarousel = useRef<HTMLDivElement>(null);

  // Duplicate the partners array to create a seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    if (carousel.current && innerCarousel.current) {
      setWidth(
        innerCarousel.current.scrollWidth - carousel.current.offsetWidth
      );
    }
  }, []);

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50'>
      <div className='max-w-7xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className='text-red-600 font-medium mb-2'>Partners & Clients</h3>
          <h2 className='text-3xl md:text-4xl font-bold mb-12'>
            We work with the best people
          </h2>
        </motion.div>

        {/* Infinite Carousel */}
        <div
          className='relative overflow-hidden mx-auto max-w-5xl'
          ref={carousel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            ref={innerCarousel}
            className='flex'
            animate={{
              x: isPaused ? undefined : [-width / 3, (-width * 2) / 3],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            whileTap={{ cursor: "grabbing" }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                className='min-w-[150px] sm:min-w-[200px] px-6 py-4 flex items-center justify-center'
              >
                <div className='relative h-16 w-32 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110'>
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className='object-contain'
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth fade effect */}
          <div className='absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10'></div>
          <div className='absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10'></div>
        </div>
      </div>
    </section>
  );
}
