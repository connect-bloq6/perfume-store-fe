import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-noir-950 border-t border-noir-800">
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-2xl text-gold-500 tracking-wider">
              ESSENCE
            </Link>
            <p className="mt-4 text-noir-400 text-sm leading-relaxed">
              Crafting unforgettable fragrances since 1985. 
              Each scent tells a story of elegance and sophistication.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-noir-400 hover:text-gold-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-noir-400 hover:text-gold-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-noir-400 hover:text-gold-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-display text-lg text-gold-500 mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  All Fragrances
                </Link>
              </li>
              <li>
                <Link href="/collections/women" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  For Her
                </Link>
              </li>
              <li>
                <Link href="/collections/men" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  For Him
                </Link>
              </li>
              <li>
                <Link href="/collections/unisex" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  Unisex
                </Link>
              </li>
              <li>
                <Link href="/collections/gift-sets" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-display text-lg text-gold-500 mb-4">Help</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg text-gold-500 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  Store Locations
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-noir-400 text-sm hover:text-gold-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-noir-800 text-center">
          <p className="text-noir-500 text-sm">
            © {new Date().getFullYear()} Essence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

