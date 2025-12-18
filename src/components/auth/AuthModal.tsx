'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Eye, EyeOff, ArrowLeft, Loader2, ShieldCheck } from 'lucide-react';
import { useAuthStore } from '@/store/auth';
import { useToastStore } from '@/components/ui/Toast';
import { OTPInput } from './OTPInput';
import { signIn } from 'next-auth/react';

export function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, login } = useAuthStore();
  const { showToast } = useToastStore();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [step, setStep] = useState<'form' | 'otp'>('form');
  const [showPassword, setShowPassword] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Countdown timer for resend
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isAuthModalOpen) {
      setStep('form');
      setMode('login');
      setFormData({ name: '', email: '', password: '' });
      setCountdown(0);
    }
  }, [isAuthModalOpen]);

  const generateOTP = () => {
    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(otp);
    return otp;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === 'login') {
      // Direct login for existing users
      const userName = formData.email.split('@')[0];
      login({
        id: '1',
        name: userName,
        email: formData.email,
      });
      showToast(`Welcome back, ${userName}!`, 'login');
    } else {
      // For signup, send OTP
      const otp = generateOTP();
      setStep('otp');
      setCountdown(60);
      
      // In production, this would send an actual email
      // For demo, we'll show the OTP in the toast
      showToast(`OTP sent to ${formData.email}! (Demo: ${otp})`, 'login');
    }
  };

  const handleOTPComplete = (enteredOTP: string) => {
    setIsVerifying(true);
    
    // Simulate verification delay
    setTimeout(() => {
      if (enteredOTP === generatedOTP) {
        // OTP verified successfully
        const userName = formData.name || formData.email.split('@')[0];
        login({
          id: '1',
          name: userName,
          email: formData.email,
        });
        showToast(`Account created successfully! Welcome, ${userName}!`, 'login');
        setStep('form');
      } else {
        // Wrong OTP
        showToast('Invalid OTP. Please try again.', 'logout');
      }
      setIsVerifying(false);
    }, 1000);
  };

  const handleResendOTP = () => {
    if (countdown > 0) return;
    
    const otp = generateOTP();
    setCountdown(60);
    showToast(`New OTP sent! (Demo: ${otp})`, 'login');
  };

  const handleBackToForm = () => {
    setStep('form');
  };

  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [isLoadingApple, setIsLoadingApple] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoadingGoogle(true);
    try {
      await signIn('google', { callbackUrl: '/collections' });
    } catch (error) {
      showToast('Google sign-in failed. Please try again.', 'logout');
      setIsLoadingGoogle(false);
    }
  };

  const handleAppleSignIn = async () => {
    setIsLoadingApple(true);
    try {
      await signIn('apple', { callbackUrl: '/collections' });
    } catch (error) {
      showToast('Apple sign-in failed. Please try again.', 'logout');
      setIsLoadingApple(false);
    }
  };

  if (!isAuthModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100]">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeAuthModal}
        />

        {/* Modal */}
        <div className="flex items-center justify-center min-h-screen p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-md overflow-hidden"
            style={{
              backgroundColor: '#FEFDFB',
              borderRadius: '24px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
          >
            {/* Decorative top gradient */}
            <div
              className="absolute top-0 left-0 right-0 h-32"
              style={{
                background: 'linear-gradient(135deg, #C5B299 0%, #A8845E 50%, #8B6914 100%)',
              }}
            />

            {/* Close button */}
            <button
              onClick={closeAuthModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}
            >
              <X size={18} />
            </button>

            {/* Back button for OTP step */}
            {step === 'otp' && (
              <button
                onClick={handleBackToForm}
                className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}
              >
                <ArrowLeft size={18} />
              </button>
            )}

            {/* Content */}
            <div className="relative pt-16 px-8 pb-8">
              {/* Logo */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 30px rgba(168, 132, 94, 0.3)' }}
              >
                {step === 'otp' ? (
                  <ShieldCheck size={32} style={{ color: '#A8845E' }} />
                ) : (
                  <Image
                    src="/images/Landing Page/Icons/Logo.svg"
                    alt="CALRA Logo"
                    width={48}
                    height={45}
                    className="object-contain"
                  />
                )}
              </motion.div>

              <AnimatePresence mode="wait">
                {step === 'form' ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    {/* Title */}
                    <div className="text-center mb-8">
                      <h2
                        className="font-playfair text-2xl mb-2"
                        style={{ color: '#171717' }}
                      >
                        {mode === 'login' ? 'Welcome Back' : 'Join Our World'}
                      </h2>
                      <p className="text-sm" style={{ color: '#6B6B6B' }}>
                        {mode === 'login'
                          ? 'Sign in to explore our exclusive collection'
                          : 'Create an account to discover luxury fragrances'}
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {mode === 'signup' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <label className="block text-sm font-medium mb-2" style={{ color: '#3F3F3F' }}>
                            Full Name
                          </label>
                          <div className="relative">
                            <User
                              size={18}
                              className="absolute left-4 top-1/2 -translate-y-1/2"
                              style={{ color: '#9B9B9B' }}
                            />
                            <input
                              type="text"
                              placeholder="Enter your name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full pl-12 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
                              style={{
                                backgroundColor: '#F5F1EA',
                                border: '2px solid transparent',
                                color: '#171717',
                              }}
                              onFocus={(e) => (e.target.style.borderColor = '#C5B299')}
                              onBlur={(e) => (e.target.style.borderColor = 'transparent')}
                            />
                          </div>
                        </motion.div>
                      )}

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#3F3F3F' }}>
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2"
                            style={{ color: '#9B9B9B' }}
                          />
                          <input
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
                            style={{
                              backgroundColor: '#F5F1EA',
                              border: '2px solid transparent',
                              color: '#171717',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#C5B299')}
                            onBlur={(e) => (e.target.style.borderColor = 'transparent')}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#3F3F3F' }}>
                          Password
                        </label>
                        <div className="relative">
                          <Lock
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2"
                            style={{ color: '#9B9B9B' }}
                          />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                            className="w-full pl-12 pr-12 py-3 rounded-xl text-sm outline-none transition-all"
                            style={{
                              backgroundColor: '#F5F1EA',
                              border: '2px solid transparent',
                              color: '#171717',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#C5B299')}
                            onBlur={(e) => (e.target.style.borderColor = 'transparent')}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                            style={{ color: '#9B9B9B' }}
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>

                      {mode === 'login' && (
                        <div className="flex justify-end">
                          <Link
                            href="/auth/forgot-password"
                            className="text-xs hover:underline"
                            style={{ color: '#A8845E' }}
                            onClick={closeAuthModal}
                          >
                            Forgot password?
                          </Link>
                        </div>
                      )}

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3.5 rounded-xl font-medium text-sm transition-all"
                        style={{
                          background: 'linear-gradient(135deg, #C5B299 0%, #A8845E 100%)',
                          color: '#FFFFFF',
                          boxShadow: '0 4px 15px rgba(168, 132, 94, 0.4)',
                        }}
                      >
                        {mode === 'login' ? 'Sign In' : 'Continue'}
                      </motion.button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                      <div className="flex-1 h-px" style={{ backgroundColor: '#E5E0D5' }} />
                      <span className="text-xs" style={{ color: '#9B9B9B' }}>
                        or
                      </span>
                      <div className="flex-1 h-px" style={{ backgroundColor: '#E5E0D5' }} />
                    </div>

                    {/* Social buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        type="button"
                        onClick={handleGoogleSignIn}
                        disabled={isLoadingGoogle || isLoadingApple}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all hover:bg-gray-50 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ border: '1px solid #E5E0D5', color: '#3F3F3F' }}
                      >
                        {isLoadingGoogle ? (
                          <Loader2 size={20} className="animate-spin" style={{ color: '#A8845E' }} />
                        ) : (
                          <>
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                              <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              />
                              <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              />
                              <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              />
                            </svg>
                            Google
                          </>
                        )}
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={handleAppleSignIn}
                        disabled={isLoadingGoogle || isLoadingApple}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all hover:bg-gray-50 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ border: '1px solid #E5E0D5', color: '#3F3F3F' }}
                      >
                        {isLoadingApple ? (
                          <Loader2 size={20} className="animate-spin" style={{ color: '#A8845E' }} />
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="#000000" viewBox="0 0 24 24">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            Apple
                          </>
                        )}
                      </motion.button>
                    </div>

                    {/* Toggle mode */}
                    <p className="text-center text-sm mt-6" style={{ color: '#6B6B6B' }}>
                      {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                      <button
                        type="button"
                        onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                        className="font-medium hover:underline"
                        style={{ color: '#A8845E' }}
                      >
                        {mode === 'login' ? 'Sign up' : 'Sign in'}
                      </button>
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="otp"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {/* OTP Title */}
                    <div className="text-center mb-8">
                      <h2
                        className="font-playfair text-2xl mb-2"
                        style={{ color: '#171717' }}
                      >
                        Verify Your Email
                      </h2>
                      <p className="text-sm" style={{ color: '#6B6B6B' }}>
                        We&apos;ve sent a 6-digit code to
                      </p>
                      <p className="text-sm font-medium mt-1" style={{ color: '#A8845E' }}>
                        {formData.email}
                      </p>
                    </div>

                    {/* OTP Input */}
                    <div className="mb-6">
                      <OTPInput onComplete={handleOTPComplete} />
                    </div>

                    {/* Verifying indicator */}
                    {isVerifying && (
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Loader2 size={16} className="animate-spin" style={{ color: '#A8845E' }} />
                        <span className="text-sm" style={{ color: '#A8845E' }}>
                          Verifying...
                        </span>
                      </div>
                    )}

                    {/* Resend OTP */}
                    <div className="text-center">
                      <p className="text-sm" style={{ color: '#6B6B6B' }}>
                        Didn&apos;t receive the code?{' '}
                        {countdown > 0 ? (
                          <span style={{ color: '#9B9B9B' }}>
                            Resend in {countdown}s
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={handleResendOTP}
                            className="font-medium hover:underline"
                            style={{ color: '#A8845E' }}
                          >
                            Resend OTP
                          </button>
                        )}
                      </p>
                    </div>

                    {/* Change email */}
                    <p className="text-center text-sm mt-4" style={{ color: '#6B6B6B' }}>
                      Wrong email?{' '}
                      <button
                        type="button"
                        onClick={handleBackToForm}
                        className="font-medium hover:underline"
                        style={{ color: '#A8845E' }}
                      >
                        Change it
                      </button>
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
