"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// Team member type
type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
};

// Sample team data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mark Henry",
    role: "Owner",
    image: "/images/owner.png",
    bio: "With over 15 years of culinary experience, Mark brings his passion for food to every dish.",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Lucky Helen",
    role: "Chef",
    image: "/images/chef.jpg",
    bio: "Award-winning chef with expertise in international cuisine and innovative cooking techniques.",
    social: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Moon Henry",
    role: "Founder",
    image: "/images/founder.jpg",
    bio: "The visionary behind our restaurant concept, Moon ensures every detail meets our high standards.",
    social: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Tom Morrow",
    role: "Specialist",
    image: "/images/specialist.png",
    bio: "Our beverage specialist who crafts the perfect drinks to complement your dining experience.",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

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
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-800 to-red-900 text-white relative overflow-hidden'>
      {/* Background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-24 -right-24 w-96 h-96 bg-red-700/30 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-24 -left-24 w-96 h-96 bg-red-700/30 rounded-full blur-3xl'></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
      </div>

      <div className='max-w-7xl mx-auto text-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-5xl font-bold mb-4'>Our Team</h2>
          <p className='max-w-2xl mx-auto mb-12 text-white/80'>
            Meet the talented individuals who make our restaurant exceptional.
            Our team is dedicated to providing you with the best dining
            experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              className='relative group'
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className='bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-xl'>
                <div className='relative h-80 w-full overflow-hidden'>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />

                  {/* Overlay with social icons */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center p-6 transition-opacity duration-300 ${
                      hoveredMember === member.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className='flex space-x-3'>
                      {member.social.facebook && (
                        <a
                          href={member.social.facebook}
                          className='bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors'
                        >
                          <Facebook className='h-5 w-5 text-white' />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className='bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors'
                        >
                          <Twitter className='h-5 w-5 text-white' />
                        </a>
                      )}
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          className='bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors'
                        >
                          <Instagram className='h-5 w-5 text-white' />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className='bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors'
                        >
                          <Linkedin className='h-5 w-5 text-white' />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className='p-6 text-center'>
                  <h3 className='font-bold text-xl mb-1'>{member.name}</h3>
                  <p className='text-white/70 mb-3'>{member.role}</p>
                  <p className='text-sm text-white/80'>{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
