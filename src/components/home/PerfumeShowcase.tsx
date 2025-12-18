'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

export function PerfumeShowcase() {
  return (
    <section className="hidden lg:block lg:py-24">
      <div className="container-luxury">
        <div className="relative">
          {/* Center - Stars and Title Text - Positioned ABOVE images on tablet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex lg:hidden flex-col items-center z-10 mb-4"
          >
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-4 h-4 text-[#D4A853] fill-[#D4A853]"
                />
              ))}
            </div>
            
            {/* Title */}
            <h3 
              className="whitespace-nowrap text-center font-display text-[24px]"
              style={{
                fontWeight: 800,
                lineHeight: '1',
                letterSpacing: '0px',
                color: '#4A3D2A'
              }}
            >
              Perfume Store Atlanta
            </h3>
          </motion.div>

          {/* Images Container */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-3 lg:gap-4">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:flex-1 md:max-w-[48%]"
            >
              <Image
                src="/images/Landing Page/Background/Subtract.png"
                alt="Holding La Perfume Intensa bottle"
                width={755}
                height={535}
                className="w-full h-auto block"
              />
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:flex-1 md:max-w-[48%]"
            >
              <Image
                src="/images/Landing Page/Background/Subtract2.png"
                alt="Spraying perfume"
                width={755}
                height={535}
                className="w-full h-auto block"
              />
            </motion.div>
          </div>

          {/* Desktop - Stars and Title Text - Absolute positioned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex absolute flex-col items-center z-10 left-[40%] top-[-1%] -translate-x-1/2"
          >
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-[14px] h-[14px] text-[#D4A853] fill-[#D4A853]"
                />
              ))}
            </div>
            
            {/* Title */}
            <h3 
              className="whitespace-nowrap text-center font-display text-[28px]"
              style={{
                fontWeight: 800,
                lineHeight: '1',
                letterSpacing: '0px',
                color: '#4A3D2A'
              }}
            >
              Perfume Store Atlanta
            </h3>
          </motion.div>

          {/* Mobile - Stars and Title Text - Below images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:hidden flex flex-col items-center z-10 mt-6"
          >
            {/* Stars */}
            <div className="flex items-center justify-center gap-0.5 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-3 h-3 text-[#D4A853] fill-[#D4A853]"
                />
              ))}
            </div>
            
            {/* Title */}
            <h3 
              className="whitespace-nowrap text-center font-display text-[20px]"
              style={{
                fontWeight: 800,
                lineHeight: '1',
                letterSpacing: '0px',
                color: '#4A3D2A'
              }}
            >
              Perfume Store Atlanta
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

