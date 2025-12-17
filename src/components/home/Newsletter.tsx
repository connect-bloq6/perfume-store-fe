'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowUp, Check, Sparkles } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="pt-8 md:pt-10 lg:pt-20 pb-6 md:pb-8 lg:pb-10 overflow-hidden">
      <div className="container-luxury">
        {/* Newsletter signup with Back to Top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          {/* Left side - Title and Subscribe */}
          <div className="flex-1 max-w-lg">
            {/* Animated title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-2"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles size={20} style={{ color: '#C5B299' }} />
              </motion.div>
              <span 
                className="text-xs tracking-widest uppercase"
                style={{ color: '#C5B299' }}
              >
                Join Our Community
              </span>
            </motion.div>

            <motion.h2 
              className="font-display text-xl md:text-2xl lg:text-3xl mb-2"
              style={{ color: '#65553F', fontWeight: 700 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Perfume Store Atlanta
            </motion.h2>
            
            <motion.p 
              className="text-[12px] md:text-sm mb-5 md:mb-6"
              style={{ color: '#6B6B6B' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Stay in the loop with our latest listings, exclusive offers, and fragrance tips.
            </motion.p>
            
            {/* Email subscription form */}
            <motion.form
              onSubmit={handleSubscribe}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <motion.div
                    key="form"
                    className="flex gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Email input with animated border */}
                    <div className="relative flex-1">
                      <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{ border: '2px solid #C5B299' }}
                        animate={{
                          boxShadow: isFocused 
                            ? '0 0 20px rgba(197, 178, 153, 0.3)' 
                            : '0 0 0px rgba(197, 178, 153, 0)',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="Enter your email"
                        className="w-full px-5 py-3 rounded-full text-sm outline-none"
                        style={{ 
                          backgroundColor: 'transparent',
                          border: '1px solid #E5E0D5',
                          color: '#171717',
                        }}
                      />
                      <Mail 
                        size={18} 
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                        style={{ color: '#C5B299' }}
                      />
                    </div>
                    
                    {/* Subscribe button */}
                    <motion.button
                      type="submit"
                      className="px-6 py-3 rounded-full text-sm font-medium relative overflow-hidden"
                      style={{ 
                        backgroundColor: '#65553F',
                        color: '#FFFFFF',
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        }}
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10">Subscribe</span>
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    className="flex items-center gap-3 px-5 py-3 rounded-full"
                    style={{ backgroundColor: '#F0FAF0', border: '1px solid #86EFAC' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      <Check size={20} style={{ color: '#22C55E' }} />
                    </motion.div>
                    <span className="text-sm font-medium" style={{ color: '#166534' }}>
                      Thank you for subscribing!
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </div>

          {/* Right side - Back to Top button */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 self-start md:self-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -3 }}
          >
            <span 
              className="text-sm font-medium transition-colors"
              style={{ color: '#65553F' }}
            >
              Back To Top
            </span>
            <motion.div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#F5F1EA' }}
              whileHover={{ backgroundColor: '#C5B299' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUp 
                  size={18} 
                  className="group-hover:text-white transition-colors"
                  style={{ color: '#65553F' }}
                />
              </motion.div>
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mt-8 h-px"
          style={{ backgroundColor: '#E5E0D5' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  );
}
