'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const contentY = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section 
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: '#D5C9B3' }}
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <Image
          src="/images/Landing Page/Background/Main.png"
          alt="Luxury Perfume Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </motion.div>
      
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(213,201,179,0.4) 0%, transparent 50%)',
        }}
      />

      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-20">
          {/* Left Content - positioned on the left side */}
          <motion.div
            className="max-w-lg"
            style={{ opacity: contentOpacity, y: contentY }}
          >
            <h1 className="uppercase leading-[1] flex flex-col gap-2 md:gap-3">
              {/* Line 1: CRAFTED FOR */}
              <div className="flex items-baseline gap-2 md:gap-3 lg:gap-4 whitespace-nowrap">
                <span className="font-body font-extrabold text-[clamp(32px,5vw,74px)] crafted-text">
                  CRAFTED
                </span>
                <span className="font-body font-extrabold text-[clamp(28px,4vw,61px)] text-[#796040]">
                  FOR
                </span>
              </div>
              
              {/* Line 2: TIMELESS BEAUTY */}
              <div className="flex items-baseline gap-2 md:gap-3 lg:gap-4 whitespace-nowrap">
                <span className="font-body font-extrabold text-[clamp(28px,4vw,61px)] text-[#796040]">
                  TIMELESS
                </span>
                <span className="font-body font-extrabold text-[clamp(28px,4vw,61px)] text-[#796040]">
                  BEAUTY
                </span>
              </div>
            </h1>
            
            {/* Description */}
            <p
              className="mt-4 md:mt-6 font-body font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[1.5] max-w-[320px] md:max-w-sm"
              style={{ color: '#474747' }}
            >
              A collection of artisan perfumes and oils inspired
              by tradition, crafted with modern elegance.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Link href="/collections">
                <motion.button
                  className="group relative px-8 py-4 overflow-hidden rounded-full"
                  style={{ backgroundColor: '#C5B299' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2 text-white font-medium tracking-wide">
                    EXPLORE COLLECTION
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: '#796040' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} style={{ color: '#796040' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
