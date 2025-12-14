'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-noir-950 via-noir-900 to-noir-950">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_40%,_var(--gold-primary)_0%,_transparent_50%)]" />
      </div>

      <div className="container-luxury relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Discover Your Signature Scent
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight">
              Where <span className="text-gradient">Elegance</span><br />
              Meets Essence
            </h1>
            <p className="text-noir-300 text-lg mb-8 max-w-md">
              Immerse yourself in a world of exquisite fragrances. 
              Each bottle holds a story waiting to be told.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                Shop Collection
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent rounded-full blur-3xl" />
              <div className="relative z-10 animate-float">
                <Image
                  src="/images/hero-perfume.png"
                  alt="Luxury perfume bottle"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

