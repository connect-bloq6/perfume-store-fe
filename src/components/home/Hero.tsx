'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Landing Page/Background/Main.png"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      <div className="container-luxury relative z-10 pt-20">
        <div className="flex items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="uppercase leading-[1] -ml-[5%] md:ml-0 lg:-ml-[10%] -mt-[5%] md:-mt-[8%] lg:-mt-[10%] flex flex-col gap-2 md:gap-3">
              {/* Line 1: CRAFTED FOR */}
              <div className="flex items-baseline gap-2 md:gap-3 lg:gap-4 whitespace-nowrap">
                <span 
                  className="font-body font-extrabold text-[clamp(28px,6vw,74px)] md:text-[clamp(35px,7vw,74px)] crafted-text"
                >
                  CRAFTED
                </span>
                <span 
                  className="font-body font-extrabold text-[clamp(24px,5vw,61px)] md:text-[clamp(30px,6vw,61px)] text-[#796040]"
                >
                  FOR
                </span>
              </div>
              {/* Line 2: TIMELESS BEAUTY */}
              <div className="flex items-baseline gap-2 md:gap-3 lg:gap-4 whitespace-nowrap">
                <span 
                  className="font-body font-extrabold text-[clamp(24px,5vw,61px)] md:text-[clamp(30px,6vw,61px)] text-[#796040]"
                >
                  TIMELESS
                </span>
                <span 
                  className="font-body font-extrabold text-[clamp(24px,5vw,61px)] md:text-[clamp(30px,6vw,61px)] text-[#796040]"
                >
                  BEAUTY
                </span>
              </div>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-3 md:mt-4 -ml-[3%] md:ml-0 lg:-ml-[7%] font-body font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[1.4] md:leading-[16px] tracking-[0px] max-w-[280px] md:max-w-sm lg:max-w-md"
              style={{ color: '#474747' }}
            >
              A collection of artisan perfumes and oils inspired
              by tradition, crafted with modern elegance.
            </motion.p>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <Link href="/products" className="btn-primary inline-flex items-center gap-2">
                SHOP FRAGRANCES
              </Link>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
