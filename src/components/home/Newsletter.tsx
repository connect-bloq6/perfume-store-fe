'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function Newsletter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="pt-30 md:pt-36 pb-8 md:pb-10">
      <div className="container-luxury">
        {/* Newsletter signup with Back to Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between"
        >
          {/* Left side - Title and Subscribe */}
          <div>
            <h2 
              className="font-display text-2xl sm:text-3xl mb-2"
              style={{ color: '#65553F', fontWeight: 700 }}
            >
              Perfume Store Atlanta
            </h2>
            <p className="text-charcoal-500 text-xs mb-6">
              Stay in the loop with our latest listings
            </p>
            
            <button
              className="px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:opacity-80"
              style={{ 
                backgroundColor: 'transparent',
                border: '1px solid #65553F',
                color: '#65553F'
              }}
            >
              Subscribe
              <Mail size={14} />
            </button>
          </div>

          {/* Right side - Back to Top */}
          <button
            onClick={scrollToTop}
            className="mt-8 md:mt-0 text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: '#4A3D2A' }}
          >
            Back To Top
          </button>
        </motion.div>
      </div>
    </section>
  );
}
