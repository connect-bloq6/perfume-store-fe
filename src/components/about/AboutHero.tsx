'use client';

import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-noir-950">
      <div className="absolute inset-0 bg-[url('/images/about/hero.jpg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-noir-950 via-transparent to-noir-950" />

      <div className="container-luxury relative z-10 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Heritage
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
            The Art of <span className="text-gradient">Essence</span>
          </h1>
          <p className="text-noir-300 text-lg max-w-2xl mx-auto">
            For over three decades, we&apos;ve been crafting extraordinary fragrances 
            that capture life&apos;s most precious moments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

