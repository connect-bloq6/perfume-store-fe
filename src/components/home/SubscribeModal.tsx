'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Sparkles, Check, Gift, Bell, Tag } from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after showing success
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setEmail('');
      }, 2500);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100]">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="flex items-center justify-center min-h-screen p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden"
            style={{
              backgroundColor: '#FEFDFB',
              borderRadius: '24px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
          >
            {/* Decorative top gradient */}
            <div
              className="absolute top-0 left-0 right-0 h-28"
              style={{
                background: 'linear-gradient(135deg, #C5B299 0%, #A8845E 50%, #8B6914 100%)',
              }}
            />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}
            >
              <X size={18} />
            </button>

            {/* Content */}
            <div className="relative pt-14 px-8 pb-8">
              {/* Logo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 30px rgba(168, 132, 94, 0.3)' }}
              >
                <Image
                  src="/images/Landing Page/Icons/Logo.svg"
                  alt="CALRA Logo"
                  width={40}
                  height={38}
                  className="object-contain"
                />
              </motion.div>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Title */}
                    <div className="text-center mb-6">
                      <h2
                        className="font-playfair text-2xl mb-2"
                        style={{ color: '#171717' }}
                      >
                        Join the CALRA Family
                      </h2>
                      <p className="text-sm" style={{ color: '#6B6B6B' }}>
                        Subscribe to receive exclusive offers and fragrance updates
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        { icon: Gift, text: 'Exclusive Offers' },
                        { icon: Bell, text: 'New Arrivals' },
                        { icon: Tag, text: 'Early Access' },
                        { icon: Sparkles, text: 'VIP Events' },
                      ].map((benefit, index) => (
                        <motion.div
                          key={benefit.text}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg"
                          style={{ backgroundColor: '#F5F1EA' }}
                        >
                          <benefit.icon size={14} style={{ color: '#A8845E' }} />
                          <span className="text-xs" style={{ color: '#4A3D2A' }}>
                            {benefit.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2"
                          style={{ color: '#9B9B9B' }}
                        />
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all"
                          style={{
                            backgroundColor: '#F5F1EA',
                            border: '2px solid transparent',
                            color: '#171717',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = '#C5B299')}
                          onBlur={(e) => (e.target.style.borderColor = 'transparent')}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3.5 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                        style={{
                          background: 'linear-gradient(135deg, #C5B299 0%, #A8845E 100%)',
                          color: '#FFFFFF',
                          boxShadow: '0 4px 15px rgba(168, 132, 94, 0.4)',
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Subscribing...
                          </>
                        ) : (
                          <>
                            Subscribe Now
                            <Mail size={16} />
                          </>
                        )}
                      </motion.button>
                    </form>

                    {/* Privacy note */}
                    <p className="text-center text-xs mt-4" style={{ color: '#9B9B9B' }}>
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.1 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#10B981' }}
                    >
                      <Check size={32} color="white" />
                    </motion.div>
                    <h3
                      className="font-playfair text-xl mb-2"
                      style={{ color: '#171717' }}
                    >
                      Welcome to the Family!
                    </h3>
                    <p className="text-sm" style={{ color: '#6B6B6B' }}>
                      Thank you for subscribing. Check your inbox for a special welcome offer! 🎁
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}

