'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="section-padding bg-cream-200">
      <div className="container-luxury">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] bg-gradient-to-br from-sand-200 to-cream-300 rounded-3xl overflow-hidden"
          >
            {/* Store branding image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div className="bg-charcoal-800/80 rounded-2xl p-6 text-center backdrop-blur-sm">
                <span className="text-xs text-gold-400 tracking-[0.2em]">CALRA</span>
                <h3 className="font-display text-xl text-cream-50 mt-2">Perfume Store Atlanta</h3>
              </div>
              {/* Perfume bottle illustration */}
              <div className="mt-6 w-20 h-28 bg-gradient-to-b from-cream-100 to-cream-200 rounded-2xl shadow-lg flex items-end justify-center pb-3">
                <span className="text-[8px] text-charcoal-400 tracking-wider">Le Parfum</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-[4/3] bg-gradient-to-br from-rose-100 to-cream-200 rounded-3xl overflow-hidden"
          >
            {/* Hands with perfume illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Perfume application illustration */}
                <div className="w-16 h-24 bg-gradient-to-b from-gold-300 to-gold-500 rounded-xl shadow-md">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-2 bg-gold-200 rounded" />
                </div>
                {/* Spray effect */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20">
                  <div className="w-1 h-1 bg-gold-300/60 rounded-full absolute top-0 left-1/2" />
                  <div className="w-1 h-1 bg-gold-300/40 rounded-full absolute top-2 left-1/3" />
                  <div className="w-1 h-1 bg-gold-300/40 rounded-full absolute top-2 right-1/3" />
                  <div className="w-0.5 h-0.5 bg-gold-300/30 rounded-full absolute top-4 left-1/4" />
                  <div className="w-0.5 h-0.5 bg-gold-300/30 rounded-full absolute top-4 right-1/4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="font-display text-2xl sm:text-3xl text-charcoal-800 mb-2">
            Perfume Store Atlanta
          </h2>
          <p className="text-charcoal-500 text-sm mb-6">
            Stay in the loop with our latest collections, exclusive offers, and fragrance tips.
          </p>
          
          <form onSubmit={handleSubmit} className="flex gap-3">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-3.5 bg-cream-50 border border-sand-300 rounded-full text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-brown-400 transition-colors text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 bg-charcoal-800 text-cream-50 rounded-full hover:bg-charcoal-700 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
