'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { SubscribeModal } from './SubscribeModal';

export function Newsletter() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="pt-8 md:pt-10 lg:pt-36 pb-6 md:pb-8 lg:pb-10">
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
                className="font-display text-xl md:text-2xl lg:text-3xl mb-1.5 md:mb-2"
                style={{ color: '#65553F', fontWeight: 700 }}
              >
                Perfume Store Atlanta
              </h2>
              <p className="text-charcoal-500 text-[11px] md:text-xs mb-4 md:mb-5 lg:mb-6">
                Stay in the loop with our latest listings
              </p>
              
              <button
                onClick={() => setIsSubscribeOpen(true)}
                className="px-4 md:px-5 py-1.5 md:py-2 rounded-full flex items-center gap-2 text-[13px] md:text-sm font-medium transition-all duration-300 hover:opacity-80"
                style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid #65553F',
                  color: '#65553F'
                }}
              >
                Subscribe
                <Mail className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </button>
            </div>

            {/* Right side - Back to Top */}
            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 text-[13px] md:text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: '#4A3D2A' }}
            >
              Back To Top
            </button>
          </motion.div>
        </div>
      </section>

      {/* Subscribe Modal */}
      <SubscribeModal 
        isOpen={isSubscribeOpen} 
        onClose={() => setIsSubscribeOpen(false)} 
      />
    </>
  );
}
