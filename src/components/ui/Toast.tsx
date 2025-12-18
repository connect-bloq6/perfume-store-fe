'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, LogOut, LogIn, HeartOff, ShoppingBag } from 'lucide-react';
import { create } from 'zustand';

interface ToastState {
  isVisible: boolean;
  message: string;
  type: 'success' | 'logout' | 'login' | 'remove' | 'cart_remove';
  showToast: (message: string, type?: 'success' | 'logout' | 'login' | 'remove' | 'cart_remove') => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  isVisible: false,
  message: '',
  type: 'success',
  showToast: (message, type = 'success') => {
    set({ isVisible: true, message, type });
  },
  hideToast: () => set({ isVisible: false }),
}));

export function Toast() {
  const { isVisible, message, type, hideToast } = useToastStore();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hideToast]);

  const getIcon = () => {
    switch (type) {
      case 'logout':
        return <LogOut size={22} />;
      case 'login':
        return <LogIn size={22} />;
      case 'remove':
        return <HeartOff size={22} />;
      case 'cart_remove':
        return <ShoppingBag size={22} />;
      default:
        return <CheckCircle size={22} />;
    }
  };

  const getGradient = () => {
    switch (type) {
      case 'logout':
        return 'linear-gradient(135deg, #6B7280 0%, #4B5563 100%)';
      case 'login':
        return 'linear-gradient(135deg, #C5B299 0%, #A8845E 100%)';
      case 'remove':
        return 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)';
      case 'cart_remove':
        return 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)';
      default:
        return 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="fixed top-6 right-6 z-[200]"
        >
          <div
            className="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl"
            style={{
              background: getGradient(),
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
            }}
          >
            {/* Icon with pulse animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="flex-shrink-0"
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#FFFFFF' }}
              >
                {getIcon()}
              </div>
            </motion.div>

            {/* Message */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="font-medium text-white text-sm"
              >
                {message}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs mt-0.5"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                {type === 'login' ? 'Welcome to CALRA' : type === 'logout' ? 'See you soon!' : type === 'remove' ? 'Removed from wishlist' : type === 'cart_remove' ? 'Removed from cart' : ''}
              </motion.p>
            </div>

            {/* Close button */}
            <button
              onClick={hideToast}
              className="flex-shrink-0 p-1 rounded-full transition-colors hover:bg-white/20"
              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
            >
              <X size={18} />
            </button>

            {/* Progress bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 3, ease: 'linear' }}
              className="absolute bottom-0 left-0 right-0 h-1 origin-left rounded-b-2xl"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

