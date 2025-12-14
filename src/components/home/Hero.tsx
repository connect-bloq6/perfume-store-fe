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
            <h1 className="uppercase leading-[1] -ml-[10%] -mt-[10%] flex flex-col gap-3">
              {/* Line 1: CRAFTED FOR */}
              <div className="flex items-baseline gap-4 whitespace-nowrap">
                <span 
                  className="font-body font-extrabold text-[clamp(35px,7.6vw,74px)]"
                  style={{ color: '#DBD0BA' }}
                >
                  CRAFTED
                </span>
                <span 
                  className="font-body font-extrabold text-[clamp(30px,6.3vw,61px)]"
                  style={{ color: '#796040' }}
                >
                  FOR
                </span>
              </div>
              {/* Line 2: TIMELESS BEAUTY */}
              <div className="flex items-baseline gap-4 whitespace-nowrap">
                <span 
                  className="font-body font-extrabold text-[clamp(30px,6.3vw,61px)]"
                  style={{ color: '#796040' }}
                >
                  TIMELESS
                </span>
                <span 
                  className="font-body font-extrabold text-[clamp(30px,6.3vw,61px)]"
                  style={{ color: '#796040' }}
                >
                  BEAUTY
                </span>
              </div>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 -ml-[7%] font-body font-normal text-[16px] leading-[16px] tracking-[0px] max-w-md"
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
