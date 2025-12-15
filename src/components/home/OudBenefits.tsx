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
    <section className="py-16 md:py-24" style={{ backgroundColor: '#E2DACB' }}>
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 
              className="font-display"
              style={{
                fontWeight: 800,
                fontSize: '80px',
                lineHeight: '100%',
                letterSpacing: '0.5%',
                color: '#796040'
              }}
            >
              <span className="block">Signature Oud</span>
              <span className="block">Benefits</span>
            </h2>
            
            <ul className="mt-10 space-y-4" style={{ marginLeft: '5%' }}>
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 font-display"
                  style={{ 
                    fontWeight: 500,
                    fontSize: '33px',
                    lineHeight: '125%',
                    letterSpacing: '0.5%',
                    color: '#000000'
                  }}
                >
                  <span 
                    className="flex-shrink-0 rounded-full"
                    style={{ 
                      width: '6px',
                      height: '6px',
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
            <div className="relative max-w-sm mx-auto lg:ml-auto">
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
                  className="object-cover"
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

