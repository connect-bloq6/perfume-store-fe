'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function StoreShowcase() {
  return (
    <section className="section-padding bg-cream-200">
      <div className="container-luxury">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal-800 leading-tight">
            <span className="block">Perfume Store</span>
            <span className="block text-brown-600 italic font-light">Atlanta</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large left image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-5 row-span-2"
          >
            <div className="relative h-full min-h-[400px] bg-gradient-to-br from-sand-200 to-cream-300 rounded-3xl overflow-hidden group">
              {/* Store interior illustration */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="relative z-10">
                  {/* Shelves illustration */}
                  <div className="space-y-4">
                    <div className="flex gap-3 justify-center">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-10 h-16 bg-gradient-to-b from-cream-100 to-cream-200 rounded-lg shadow-sm" />
                      ))}
                    </div>
                    <div className="h-1 bg-brown-300/50 rounded" />
                    <div className="flex gap-3 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-8 h-12 bg-gradient-to-b from-gold-100 to-gold-200 rounded-lg shadow-sm" />
                      ))}
                    </div>
                    <div className="h-1 bg-brown-300/50 rounded" />
                  </div>
                </div>
              </div>
              {/* Decorative flowers */}
              <div className="absolute top-6 left-6 w-16 h-16">
                <svg viewBox="0 0 60 60" className="w-full h-full text-brown-300">
                  <circle cx="30" cy="30" r="8" fill="currentColor" opacity="0.5" />
                  <ellipse cx="22" cy="22" rx="6" ry="10" fill="currentColor" opacity="0.3" transform="rotate(-45 22 22)" />
                  <ellipse cx="38" cy="22" rx="6" ry="10" fill="currentColor" opacity="0.3" transform="rotate(45 38 22)" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Top right grid - 3 items */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-6 md:col-span-4"
          >
            <div className="relative aspect-square bg-gradient-to-br from-cream-100 to-sand-200 rounded-3xl overflow-hidden p-6 flex items-center justify-center">
              {/* Perfume with hand illustration */}
              <div className="relative">
                <div className="w-20 h-28 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl shadow-lg mx-auto">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-teal-300 rounded" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] text-cream-100 tracking-wider">CALRA</div>
                </div>
                {/* Hand silhouette hint */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-t from-sand-300/50 to-transparent rounded-full blur-sm" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-6 md:col-span-3"
          >
            <div className="relative aspect-square bg-gradient-to-br from-sand-100 to-cream-200 rounded-3xl overflow-hidden p-4 flex flex-col items-center justify-center">
              {/* Small perfume bottle */}
              <div className="w-14 h-20 bg-gradient-to-b from-gold-300 to-gold-500 rounded-xl shadow-md mb-2">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-2 bg-gold-200 rounded" />
              </div>
              <span className="text-xs text-charcoal-400 tracking-wide">ROSE BLEND</span>
            </div>
          </motion.div>

          {/* Bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-6 md:col-span-3"
          >
            <div className="relative aspect-square bg-gradient-to-br from-forest-100 to-forest-200 rounded-3xl overflow-hidden p-4 flex items-center justify-center">
              {/* Green perfume */}
              <div className="w-16 h-24 bg-gradient-to-b from-forest-400 to-forest-600 rounded-2xl shadow-lg">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-3 bg-gold-400 rounded" />
              </div>
              {/* Decorative leaf */}
              <div className="absolute bottom-3 right-3 w-8 h-8 text-forest-300">
                <svg viewBox="0 0 30 30" fill="currentColor">
                  <path d="M15 5 C10 10 5 20 15 25 C25 20 20 10 15 5Z" opacity="0.6" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-6 md:col-span-4"
          >
            <div className="relative aspect-square bg-gradient-to-br from-cream-100 to-sand-100 rounded-3xl overflow-hidden p-6">
              {/* Store shelves with multiple bottles */}
              <div className="absolute inset-4 flex flex-col justify-center gap-2">
                <div className="flex gap-2 justify-center">
                  {[
                    'from-rose-200 to-rose-300',
                    'from-gold-200 to-gold-300',
                    'from-teal-200 to-teal-300',
                    'from-cream-200 to-cream-300',
                  ].map((color, i) => (
                    <div key={i} className={`w-8 h-14 bg-gradient-to-b ${color} rounded-lg shadow-sm`} />
                  ))}
                </div>
                <div className="h-0.5 bg-brown-200 rounded w-3/4 mx-auto" />
                <div className="flex gap-2 justify-center">
                  {[
                    'from-forest-200 to-forest-300',
                    'from-charcoal-200 to-charcoal-300',
                    'from-brown-200 to-brown-300',
                  ].map((color, i) => (
                    <div key={i} className={`w-10 h-16 bg-gradient-to-b ${color} rounded-lg shadow-sm`} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sales stat card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-12 md:col-span-3"
          >
            <div className="relative h-full min-h-[120px] bg-cream-50 rounded-3xl overflow-hidden p-6 flex flex-col justify-center items-center text-center">
              <span className="text-xs text-charcoal-400 tracking-widest uppercase mb-2">Sales</span>
              <span className="font-display text-4xl sm:text-5xl text-charcoal-800">30k+</span>
              <span className="text-sm text-charcoal-500 mt-1">Happy Customers</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

