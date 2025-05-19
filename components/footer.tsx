"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SiFacebook, SiInstagram, SiYoutube, SiLinkedin } from "react-icons/si";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className='bg-gradient-to-br from-red-900 to-red-950 text-white relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-red-800/20 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-red-800/20 rounded-full blur-3xl'></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8'>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'
        >
          {/* Restaurant Info */}
          <motion.div variants={item}>
            <h3 className='text-2xl font-bold mb-6'>RESTAURANT</h3>
            <p className='mb-6 text-white/80'>
              Subscribe to our newsletter and get 20% off your first order
            </p>

            <div className='flex mb-6 relative'>
              <input
                type='email'
                placeholder='Your email'
                className='w-full rounded-l-full px-4 py-2 bg-white/10 text-white placeholder-white/60 focus:outline-none'
              />
              <button className='bg-red-700 hover:bg-red-800 px-4 py-2 rounded-r-full text-white font-bold transition-colors'>
                <span className='sr-only'>Subscribe</span>
                <ArrowRight className='h-5 w-5' />
              </button>
            </div>
            <div className='flex space-x-4'>
              <Link
                href='https://www.facebook.com/'
                target='_blank'
                className='bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors'
              >
                <SiFacebook className='h-5 w-5' />
              </Link>
              <Link
                href='https://www.instagram.com/'
                target='_blank'
                className='bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors'
              >
                <SiInstagram className='h-5 w-5' />
              </Link>
              <Link
                href='https://www.youtube.com/'
                target='_blank'
                className='bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors'
              >
                <SiYoutube className='h-5 w-5' />
              </Link>
              <Link
                href='https://www.linkedin.com/'
                target='_blank'
                className='bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors'
              >
                <SiLinkedin className='h-5 w-5' />
              </Link>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item}>
            <h3 className='text-2xl font-bold mb-6'>Contact us</h3>
            <ul className='space-y-4'>
              <li className='flex items-start'>
                <MapPin className='h-5 w-5 mr-3 mt-1 flex-shrink-0 text-red-400' />
                <span className='text-white/80'>
                  3517 W. Gray St. Utica, Pennsylvania 57867
                </span>
              </li>
              <li className='flex items-center'>
                <Phone className='h-5 w-5 mr-3 flex-shrink-0 text-red-400' />
                <span className='text-white/80'>(480) 555-0103</span>
              </li>
              <li className='flex items-center'>
                <Mail className='h-5 w-5 mr-3 flex-shrink-0 text-red-400' />
                <span className='text-white/80'>MrYogoFood@house.Co</span>
              </li>
              <li className='flex items-center'>
                <Clock className='h-5 w-5 mr-3 flex-shrink-0 text-red-400' />
                <span className='text-white/80'>
                  Sun - Sat / 10:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div variants={item}>
            <h3 className='text-2xl font-bold mb-6'>Quick Links</h3>
            <div className='grid grid-cols-1 gap-3'>
              {["About us", "Contact us", "Our Menu", "Team", "FAQ"].map(
                (link, index) => (
                  <Link
                    key={index}
                    href='#'
                    className='text-white/80 hover:text-white transition-colors flex items-center group'
                  >
                    <ArrowRight className='h-4 w-4 mr-2 text-red-400 transition-transform group-hover:translate-x-1' />
                    {link}
                  </Link>
                )
              )}
            </div>
          </motion.div>

          {/* Instagram Gallery */}
          <motion.div variants={item}>
            <h3 className='text-2xl font-bold mb-6'>Instagram</h3>
            <div className='grid grid-cols-3 gap-2'>
              {[
                "/images/burger.png",
                "/images/icecream.png",
                "/images/ramen.png",
                "/images/steak.png",
                "/images/frydish.png",
                "/images/vegdish.png",
              ].map((src, idx) => (
                <Link
                  href='https://www.instagram.com/'
                  target='_blank'
                  key={src}
                  className='block relative h-24 w-full overflow-hidden rounded-lg group'
                >
                  <Image
                    src={src}
                    alt={`Instagram post ${idx + 1}`}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center'>
                    <SiInstagram className='h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity' />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <div className='mt-10 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between'>
          <p>© {year} Restaurant. All rights reserved</p>
          <div className='mt-4 md:mt-0 text-sm text-gray-400'>
            @Developed by{" "}
            <a
              href='https://mohammedkofil.vercel.app/'
              target='_blank'
              className='hover:text-white transition-colors'
            >
              Kofil
            </a>
          </div>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <Link href='#' className='hover:text-white transition-colors'>
              Privacy Policy
            </Link>
            <Link href='#' className='hover:text-white transition-colors'>
              Terms of Use
            </Link>
            <Link href='#' className='hover:text-white transition-colors'>
              Partner
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
