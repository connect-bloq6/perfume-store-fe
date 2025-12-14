'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const benefits = [
  'Long-lasting aroma (8-12 hours)',
  'High-grade Arabic fragrance oils',
  'Rich imported essences',
  'Deep, bold projection',
  'Premium handcrafted packaging',
];

export function OudBenefits() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal-800 leading-tight">
              <span className="block italic font-light">Signature</span>
              <span className="block">Oud</span>
              <span className="block">Benefits</span>
            </h2>
            
            <ul className="mt-10 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-charcoal-600"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brown-100 flex items-center justify-center">
                    <Check size={12} className="text-brown-600" />
                  </span>
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
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              {/* Background shape */}
              <div className="absolute inset-4 bg-gradient-to-br from-sand-200 to-cream-300 rounded-[3rem] -rotate-3" />
              
              {/* Main image container */}
              <div className="relative z-10 aspect-[4/5] bg-gradient-to-br from-gold-200/50 to-sand-200 rounded-[2.5rem] overflow-hidden shadow-elevated">
                {/* Perfume illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-40 h-56">
                    {/* Golden bottle */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-6 bg-gradient-to-b from-gold-400 to-gold-600 rounded-t-xl" />
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-4 bg-gradient-to-b from-cream-100 to-cream-200" />
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-28 h-40 bg-gradient-to-br from-gold-300 via-gold-400 to-gold-500 rounded-2xl shadow-lg">
                      {/* Inner glow */}
                      <div className="absolute inset-3 bg-gradient-to-br from-gold-200/60 to-transparent rounded-xl" />
                      {/* Label */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                        <div className="text-xs text-gold-800 tracking-[0.15em] font-semibold">CALRA</div>
                        <div className="text-[10px] text-gold-700/80 mt-1">OUD COLLECTION</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-8 h-8 border border-gold-400/30 rounded-full" />
                <div className="absolute bottom-12 left-8 w-4 h-4 bg-gold-400/40 rounded-full" />
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-brown-400/10 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

