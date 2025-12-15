'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function StoreShowcase() {
  return (
    <section className="section-padding bg-cream-200">
      <div className="container-luxury">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-0.5 md:gap-0.5 items-stretch">
          {/* Left Column: Text + Three perfumes */}
          <div className="col-span-2 md:col-span-2 flex flex-col justify-between h-full">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="font-display font-semibold text-3xl sm:text-6xl md:text-[80px] lg:text-[100px] leading-[1.1] whitespace-nowrap"
                style={{ color: '#796040' }}
              >
                Perfume Store
              </h2>
              <h2 
                className="font-display font-semibold text-4xl sm:text-6xl md:text-[80px] lg:text-[100px] leading-[1.1] -mt-2 md:-mt-4"
                style={{ color: '#796040' }}
              >
                Atlanta
              </h2>
            </motion.div>

            {/* div4: Three perfumes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-[160px] md:h-[224px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/Landing Page/Background/Three.png"
                  alt="Three perfumes collection"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Middle Column: Single perfume */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-2 md:col-span-2 self-end flex justify-center"
          >
            <div className="relative w-fit h-[300px] md:h-[375px] rounded-2xl overflow-hidden">
              <Image
                src="/images/Landing Page/Background/Single.png"
                alt="Imperial Gold Elixir perfume"
                width={300}
                height={375}
                className="h-full w-auto object-contain rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right Column: Shelf + Sales */}
          <div className="col-span-2 md:col-span-2 flex flex-col gap-2 md:gap-3">
            {/* div1: Shelf image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1"
            >
              <div className="relative h-full min-h-[350px] md:min-h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/Landing Page/Background/Shelf.png"
                  alt="Perfume shelf display"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* div2: Sales card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div 
                className="relative min-h-[100px] md:min-h-[120px] rounded-2xl p-4 md:p-6 flex items-center"
                style={{ backgroundColor: '#D9D2C5' }}
              >
                {/* Inner bordered container */}
                <div 
                  className="absolute inset-2 md:inset-3 rounded-xl border-2"
                  style={{ borderColor: '#A69778' }}
                />
                
                {/* Content */}
                <div className="relative z-10 flex items-center justify-between w-full px-2 md:px-4">
                  {/* 30k+ text */}
                  <span 
                    className="font-display font-bold text-5xl sm:text-6xl md:text-7xl"
                    style={{ color: '#796040' }}
                  >
                    30k+
                  </span>
                  
                  {/* SALES text */}
                  <span 
                    className="font-display font-semibold text-xl sm:text-2xl md:text-3xl self-start mt-1 md:mt-2"
                    style={{ color: '#796040' }}
                  >
                    SALES
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

