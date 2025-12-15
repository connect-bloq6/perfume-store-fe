'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

export function PerfumeShowcase() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-luxury">
        <div className="relative">
          {/* Images Container */}
          <div className="flex items-start justify-between">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 max-w-[48%] overflow-hidden"
              style={{ borderRadius: '30px' }}
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
              className="flex-1 max-w-[48%] overflow-hidden"
              style={{ borderRadius: '30px' }}
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

          {/* Center - Stars and Title Text - Positioned absolutely in the gap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute flex flex-col items-center z-10"
            style={{ left: '40%', top: '-1%', transform: 'translateX(-50%)' }}
          >
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className="text-[#D4A853] fill-[#D4A853]"
                />
              ))}
            </div>
            
            {/* Title - Darker Grotesque, bold marker style, #65553F */}
            <h3 
              className="whitespace-nowrap text-center font-display"
              style={{
                fontWeight: 800,
                fontSize: '28px',
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

