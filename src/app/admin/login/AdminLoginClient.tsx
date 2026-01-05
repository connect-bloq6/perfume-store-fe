'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Loader2, AlertCircle, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAdminAuthStore } from '@/store/adminAuth';

export default function AdminLoginClient() {
  const router = useRouter();
  const { isAdminAuthenticated, adminLogin } = useAdminAuthStore();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Redirect if already logged in
  useEffect(() => {
    if (isAdminAuthenticated) {
      router.push('/admin');
    }
  }, [isAdminAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        adminLogin(data.data.email);
        router.push('/admin');
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D5C7AF 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        {/* Card */}
        <div 
          className="rounded-2xl overflow-hidden"
          style={{ 
            backgroundColor: '#FFFFFF',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Header */}
          <div 
            className="px-8 py-10 text-center"
            style={{ backgroundColor: '#917B5F' }}
          >
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/Vector.png"
                alt="CALRA Logo"
                width={50}
                height={50}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <h1 
              className="font-playfair text-2xl mb-2"
              style={{ color: '#FFFFFF' }}
            >
              Admin Dashboard
            </h1>
            <p 
              className="text-sm"
              style={{ color: 'rgba(255, 255, 255, 0.8)' }}
            >
              Sign in to manage contact submissions
            </p>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm mb-2"
                  style={{ color: '#6B6B6B' }}
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail 
                    size={18} 
                    className="absolute left-3.5 top-1/2 -translate-y-1/2"
                    style={{ color: '#A8A8A8' }}
                  />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="admin@calraperfumes.com"
                    className="w-full pl-11 pr-4 py-3 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: '#F9F9F9',
                      border: '1px solid #E8E8E8',
                      color: '#171717',
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm mb-2"
                  style={{ color: '#6B6B6B' }}
                >
                  Password
                </label>
                <div className="relative">
                  <Lock 
                    size={18} 
                    className="absolute left-3.5 top-1/2 -translate-y-1/2"
                    style={{ color: '#A8A8A8' }}
                  />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="w-full pl-11 pr-4 py-3 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                    style={{ 
                      backgroundColor: '#F9F9F9',
                      border: '1px solid #E8E8E8',
                      color: '#171717',
                    }}
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg text-sm"
                  style={{ backgroundColor: '#FEF2F2', color: '#DC2626' }}
                >
                  <AlertCircle size={16} />
                  {error}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-medium transition-all duration-300"
                style={{ 
                  backgroundColor: '#917B5F',
                  color: '#FFFFFF',
                  opacity: isLoading ? 0.7 : 1,
                }}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <ShieldCheck size={18} />
                    Sign In to Dashboard
                  </>
                )}
              </motion.button>
            </form>

            {/* Info */}
            <div 
              className="mt-6 p-4 rounded-xl text-center"
              style={{ backgroundColor: '#F5EBD9' }}
            >
              <p className="text-xs" style={{ color: '#917B5F' }}>
                <strong>Demo Credentials:</strong><br />
                Email: admin@calraperfumes.com<br />
                Password: admin123
              </p>
            </div>
          </div>
        </div>

        {/* Back to site */}
        <div className="text-center mt-6">
          <Link 
            href="/"
            className="text-sm hover:underline"
            style={{ color: '#6B6B6B' }}
          >
            ← Back to CALRA website
          </Link>
        </div>
      </motion.div>
    </div>
  );
}



