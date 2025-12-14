'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, Heart } from 'lucide-react';
import { SearchModal } from '@/components/search/SearchModal';
import { CartDrawer } from '@/components/cart/CartDrawer';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-effect">
      <div className="container-luxury">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gold-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="font-display text-2xl text-gold-500 tracking-wider">
            ESSENCE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/products" className="text-sm tracking-wide hover:text-gold-500 transition-colors">
              Shop All
            </Link>
            <Link href="/collections" className="text-sm tracking-wide hover:text-gold-500 transition-colors">
              Collections
            </Link>
            <Link href="/collections/women" className="text-sm tracking-wide hover:text-gold-500 transition-colors">
              For Her
            </Link>
            <Link href="/collections/men" className="text-sm tracking-wide hover:text-gold-500 transition-colors">
              For Him
            </Link>
            <Link href="/about" className="text-sm tracking-wide hover:text-gold-500 transition-colors">
              Our Story
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-gold-500 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              href="/account/wishlist"
              className="hidden sm:block hover:text-gold-500 transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={20} />
            </Link>
            <Link
              href="/account"
              className="hover:text-gold-500 transition-colors"
              aria-label="Account"
            >
              <User size={20} />
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="hover:text-gold-500 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 text-noir-950 text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-noir-800">
            <div className="flex flex-col gap-4">
              <Link href="/products" className="text-sm tracking-wide hover:text-gold-500 transition-colors">
                Shop All
              </Link>
              <Link href="/collections" className="text-sm tracking-wide hover:text-gold-500 transition-colors">
                Collections
              </Link>
              <Link href="/collections/women" className="text-sm tracking-wide hover:text-gold-500 transition-colors">
                For Her
              </Link>
              <Link href="/collections/men" className="text-sm tracking-wide hover:text-gold-500 transition-colors">
                For Him
              </Link>
              <Link href="/about" className="text-sm tracking-wide hover:text-gold-500 transition-colors">
                Our Story
              </Link>
            </div>
          </nav>
        )}
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}

