'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

export function PerfumeShowcase() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#E2DACB' }}>
      <div className="container-luxury">
        {/* Two Images with Centered Title */}
        <div className="relative flex items-stretch justify-between gap-4 md:gap-6">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-[48%]"
          >
            <div className="rounded-[30px] overflow-hidden">
              <Image
                src="/images/Landing Page/Background/Subtract.png"
                alt="Perfume showcase left"
                width={755}
                height={535}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Center Title - Absolutely Positioned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute z-10"
            style={{
              left: '39%',
              top: '-1%',
              transform: 'translateX(-50%)',
            }}
          >
            <div className="text-center flex flex-col items-center gap-2">
              {/* Stars */}
              <div className="flex items-center gap-1">
                <Star size={14} fill="#65553F" color="#65553F" />
                <Star size={14} fill="#65553F" color="#65553F" />
                <Star size={14} fill="#65553F" color="#65553F" />
              </div>
              
              {/* Title */}
              <h3 
                className="font-display whitespace-nowrap"
                style={{
                  fontWeight: 800,
                  fontSize: '28px',
                  color: '#4A3D2A'
                }}
              >
                Perfume Store Atlanta
              </h3>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-[48%]"
          >
            <div className="rounded-[30px] overflow-hidden">
              <Image
                src="/images/Landing Page/Background/Subtract2.png"
                alt="Perfume showcase right"
                width={755}
                height={535}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
