'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const benefits = [
  'Long-lasting aroma (8-12 hours)',
  'High-grade Arabic fragrance oils',
  'Rich imported essences',
  'Deep, bold projection',
  'Premium handcrafted packaging',
];

export function OudBenefits() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#E2DACB' }}>
      <div className="container-luxury">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 
              className="font-display text-[48px] md:text-[60px] lg:text-[80px]"
              style={{
                fontWeight: 800,
                lineHeight: '100%',
                letterSpacing: '0.5%',
                color: '#796040'
              }}
            >
              <span className="block">Signature Oud</span>
              <span className="block">Benefits</span>
            </h2>
            
            <ul className="mt-6 md:mt-8 lg:mt-10 space-y-3 md:space-y-4 ml-[3%] md:ml-[4%] lg:ml-[5%]">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2 md:gap-3 font-display text-[22px] md:text-[26px] lg:text-[33px]"
                  style={{ 
                    fontWeight: 500,
                    lineHeight: '125%',
                    letterSpacing: '0.5%',
                    color: '#000000'
                  }}
                >
                  <span 
                    className="flex-shrink-0 rounded-full w-[5px] h-[5px] md:w-[6px] md:h-[6px]"
                    style={{ 
                      backgroundColor: '#000000' 
                    }}
                  />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-[280px] md:max-w-[320px] lg:max-w-sm mx-auto md:ml-auto">
              {/* Main image container */}
              <div 
                className="relative overflow-hidden"
                style={{
                  borderRadius: '20px',
                  backgroundColor: 'transparent'
                }}
              >
                <Image
                  src="/images/Landing Page/Background/Blue.png"
                  alt="Signature Oud Perfume"
                  width={372}
                  height={470}
                  className="object-cover w-full h-auto"
                  style={{ borderRadius: '20px' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

