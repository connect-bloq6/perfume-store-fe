'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SearchModal } from '@/components/search/SearchModal';
import { CartDrawer } from '@/components/cart/CartDrawer';

const navLinks = [
  { label: 'Shop', href: '/products' },
  { label: 'Collections', href: '/collections' },
  { label: 'Stories', href: '/about' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              className="p-1.5 hover:opacity-70 rounded-full transition-opacity"
              aria-label="Cart"
            >
              <Image
                src="/images/Landing Page/Icons/Cart.svg"
                alt="Cart"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 hover:opacity-70 rounded-full transition-opacity"
              aria-label="User"
            >
              <Image
                src="/images/Landing Page/Icons/uesr.svg"
                alt="User"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
            </button>
            
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
