'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, LogOut, User, Heart, Package } from 'lucide-react';
import { SearchModal } from '@/components/search/SearchModal';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { useAuthStore } from '@/store/auth';
import { useCartStore } from '@/store/cart';
import { useToastStore } from '@/components/ui/Toast';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/products' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  
  const { isAuthenticated, user, logout, openAuthModal } = useAuthStore();
  const cartItems = useCartStore((state) => state.items);
  const { showToast } = useToastStore();
  
  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Calculate total cart items
  const cartItemCount = mounted ? cartItems.reduce((sum, item) => sum + item.quantity, 0) : 0;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleUserClick = () => {
    if (isAuthenticated) {
      setIsUserMenuOpen(!isUserMenuOpen);
    } else {
      openAuthModal();
    }
  };

  const handleLogout = () => {
    const userName = user?.name || 'User';
    logout();
    setIsUserMenuOpen(false);
    showToast(`Goodbye, ${userName}! You've been signed out.`, 'logout');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4">
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Landing Page/Icons/Logo.svg"
              alt="Perfume Store Logo"
              width={48}
              height={45}
              className="w-12 h-auto"
              priority
            />
          </Link>

          {/* Desktop/Tablet Navigation - Pill Shape */}
          <nav className="hidden md:block">
            <div 
              className="flex items-center rounded-[40px] px-2 md:px-[9px] lg:px-[11px] py-2 md:py-[9px] lg:py-[11px] backdrop-blur-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              }}
            >
              {navLinks.map((link, index) => (
                <div key={link.href + link.label} className="flex items-center">
                  <Link 
                    href={link.href} 
                    className="px-2.5 md:px-3 lg:px-[18px] py-0.5 text-[11px] md:text-[12px] lg:text-[13px] font-medium tracking-wide transition-all duration-300 hover:opacity-70"
                    style={{ color: '#3D4A5C' }}
                  >
                    {link.label}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <div 
                      className="h-[11px] md:h-[12px] lg:h-[13px] w-px mx-0.5"
                      style={{ backgroundColor: 'rgba(61, 74, 92, 0.2)' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-1.5 hover:opacity-70 rounded-full transition-opacity relative"
              aria-label="Cart"
            >
              <Image
                src="/images/Landing Page/Icons/Cart.svg"
                alt="Cart"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
              {cartItemCount > 0 && (
                <span 
                  className="absolute -top-1 -right-1 min-w-[20px] h-[20px] flex items-center justify-center text-[11px] font-bold rounded-full px-1"
                  style={{ 
                    backgroundColor: '#3D4A5C',
                    color: '#FFFFFF'
                  }}
                >
                  {cartItemCount > 99 ? '99+' : cartItemCount}
                </span>
              )}
            </button>
            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={handleUserClick}
                className="p-1.5 hover:opacity-70 rounded-full transition-opacity relative"
                aria-label="User"
              >
                {isAuthenticated && (
                  <div 
                    className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white"
                    style={{ backgroundColor: '#4CAF50' }}
                  />
                )}
                <Image
                  src="/images/Landing Page/Icons/uesr.svg"
                  alt="User"
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px]"
                />
              </button>

              {/* User Dropdown Menu */}
              <AnimatePresence>
                {isUserMenuOpen && isAuthenticated && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-64 rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                      border: '1px solid #F0F0F0',
                    }}
                  >
                    {/* User Info */}
                    <div 
                      className="px-4 py-4"
                      style={{ 
                        background: 'linear-gradient(135deg, #F5F1EA 0%, #EDE8DF 100%)',
                        borderBottom: '1px solid #E5E0D5'
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                          style={{ backgroundColor: '#A8845E', color: '#FFFFFF' }}
                        >
                          {user?.name?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p 
                            className="font-medium text-sm truncate"
                            style={{ color: '#171717' }}
                          >
                            {user?.name || 'User'}
                          </p>
                          <p 
                            className="text-xs truncate"
                            style={{ color: '#6B6B6B' }}
                          >
                            {user?.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      <Link
                        href="/account"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50"
                        style={{ color: '#3F3F3F' }}
                      >
                        <User size={16} style={{ color: '#9B9B9B' }} />
                        My Account
                      </Link>
                      <Link
                        href="/account/orders"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50"
                        style={{ color: '#3F3F3F' }}
                      >
                        <Package size={16} style={{ color: '#9B9B9B' }} />
                        My Orders
                      </Link>
                      <Link
                        href="/account/wishlist"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50"
                        style={{ color: '#3F3F3F' }}
                      >
                        <Heart size={16} style={{ color: '#9B9B9B' }} />
                        Wishlist
                      </Link>
                    </div>

                    {/* Logout */}
                    <div 
                      className="py-2"
                      style={{ borderTop: '1px solid #F0F0F0' }}
                    >
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-sm transition-colors hover:bg-red-50"
                        style={{ color: '#DC2626' }}
                      >
                        <LogOut size={16} />
                        Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 hover:bg-sand-200/50 rounded-full transition-colors text-charcoal-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 mx-auto max-w-xs">
            <nav 
              className="rounded-2xl p-3 animate-fade-in backdrop-blur-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <div key={link.href + link.label}>
                    <Link 
                      href={link.href} 
                      className="block px-3 py-2 text-center text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70"
                      style={{ color: '#3D4A5C' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {index < navLinks.length - 1 && (
                      <div 
                        className="h-px w-3/4 mx-auto"
                        style={{ backgroundColor: 'rgba(61, 74, 92, 0.12)' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
