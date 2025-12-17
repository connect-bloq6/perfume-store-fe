'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function StoreShowcase() {
  return (
    <section className="section-padding bg-cream-200">
      <div className="container-luxury">
        {/* Desktop Layout (lg and above) - Original 6 column bento grid */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-0.5 items-stretch">
          {/* Left Column: Text + Three perfumes */}
          <div className="col-span-2 flex flex-col justify-between h-full gap-6">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 
                className="font-display font-semibold text-[80px] xl:text-[100px] leading-[1.1] whitespace-nowrap"
                style={{ color: '#796040' }}
              >
                Perfume Store
              </h2>
              <h2 
                className="font-display font-semibold text-[80px] xl:text-[100px] leading-[1.1] -mt-4"
                style={{ color: '#796040' }}
              >
                Atlanta
              </h2>
            </motion.div>

            {/* Three perfumes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-[224px] rounded-2xl overflow-hidden">
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
            className="col-span-2 self-end flex justify-center"
          >
            <div className="relative w-fit h-[375px] rounded-2xl overflow-hidden">
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
          <div className="col-span-2 flex flex-col gap-3">
            {/* Shelf image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1"
            >
              <div className="relative h-full min-h-[480px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/Landing Page/Background/Shelf.png"
                  alt="Perfume shelf display"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Sales card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div 
                className="relative min-h-[120px] rounded-2xl p-6 flex items-center"
                style={{ backgroundColor: '#D9D2C5' }}
              >
                <div 
                  className="absolute inset-3 rounded-xl border-2"
                  style={{ borderColor: '#A69778' }}
                />
                <div className="relative z-10 flex items-center justify-between w-full px-4">
                  <span 
                    className="font-display font-bold text-7xl"
                    style={{ color: '#796040' }}
                  >
                    30k+
                  </span>
                  <span 
                    className="font-display font-semibold text-3xl self-start mt-2"
                    style={{ color: '#796040' }}
                  >
                    SALES
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tablet Layout (md to lg) - New layout without shelf */}
        <div className="hidden md:block lg:hidden">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 
              className="font-display font-semibold text-[48px] leading-[1.1]"
              style={{ color: '#796040' }}
            >
              Perfume Store
            </h2>
            <h2 
              className="font-display font-semibold text-[48px] leading-[1.1] -mt-2"
              style={{ color: '#796040' }}
            >
              Atlanta
            </h2>
          </motion.div>

          {/* Two column grid: Single perfume | Three perfumes + Sales */}
          <div className="grid grid-cols-2 gap-4">
            {/* Left: Single perfume */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-end"
            >
              <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/Landing Page/Background/Single.png"
                  alt="Imperial Gold Elixir perfume"
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Right: Three perfumes + Sales card stacked */}
            <div className="flex flex-col gap-3">
              {/* Three perfumes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-1"
              >
                <div className="relative h-full min-h-[200px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/Landing Page/Background/Three.png"
                    alt="Three perfumes collection"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Sales card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div 
                  className="relative min-h-[100px] rounded-2xl p-4 flex flex-col items-center justify-center"
                  style={{ backgroundColor: '#D9D2C5' }}
                >
                  <div 
                    className="absolute inset-2.5 rounded-xl border-2"
                    style={{ borderColor: '#A69778' }}
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <span 
                      className="font-display font-bold text-4xl"
                      style={{ color: '#796040' }}
                    >
                      30k+
                    </span>
                    <span 
                      className="font-display font-medium text-sm tracking-wider mt-1"
                      style={{ color: '#796040' }}
                    >
                      SATISFIED CUSTOMERS
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (below md) - Similar to tablet, no shelf */}
        <div className="md:hidden">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5"
          >
            <h2 
              className="font-display font-semibold text-[36px] leading-[1.1]"
              style={{ color: '#796040' }}
            >
              Perfume Store
            </h2>
            <h2 
              className="font-display font-semibold text-[36px] leading-[1.1] -mt-1"
              style={{ color: '#796040' }}
            >
              Atlanta
            </h2>
          </motion.div>

          {/* Two column grid: Single perfume | Three perfumes + Sales */}
          <div className="grid grid-cols-2 gap-3">
            {/* Left: Single perfume */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-end"
            >
              <div className="relative w-full h-[260px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/Landing Page/Background/Single.png"
                  alt="Imperial Gold Elixir perfume"
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Right: Three perfumes + Sales card stacked */}
            <div className="flex flex-col gap-2">
              {/* Three perfumes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-1"
              >
                <div className="relative h-full min-h-[160px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/Landing Page/Background/Three.png"
                    alt="Three perfumes collection"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Sales card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div 
                  className="relative min-h-[85px] rounded-2xl p-3 flex flex-col items-center justify-center"
                  style={{ backgroundColor: '#D9D2C5' }}
                >
                  <div 
                    className="absolute inset-2 rounded-xl border-2"
                    style={{ borderColor: '#A69778' }}
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <span 
                      className="font-display font-bold text-3xl"
                      style={{ color: '#796040' }}
                    >
                      30k+
                    </span>
                    <span 
                      className="font-display font-medium text-xs tracking-wider mt-0.5"
                      style={{ color: '#796040' }}
                    >
                      SATISFIED CUSTOMERS
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
