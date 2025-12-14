'use client';

import Link from 'next/link';
import { Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-cream-200 border-t border-sand-300">
      <div className="container-luxury py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Address */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="font-display text-lg text-charcoal-800 mb-4">Atlanta</h3>
            <address className="not-italic text-charcoal-500 text-sm leading-relaxed">
              Sat-Sun: 9:00 - 21:00<br />
              123 Peachtree Street,<br />
              Atlanta, GA 30303
            </address>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-display text-lg text-charcoal-800 mb-4">Business</h3>
            <ul className="space-y-2 text-sm text-charcoal-500">
              <li>Mon-Fri: 10:00 - 22:00</li>
              <li>4422 Peachtree Road,</li>
              <li>Atlanta, GA 30326</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg text-charcoal-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-charcoal-500 hover:text-brown-600 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-charcoal-500 hover:text-brown-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-sm text-charcoal-500 hover:text-brown-600 transition-colors">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-charcoal-500 hover:text-brown-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-display text-lg text-charcoal-800 mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-charcoal-500 hover:text-brown-600 transition-colors flex items-center gap-2">
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-charcoal-500 hover:text-brown-600 transition-colors flex items-center gap-2">
                  <Facebook size={16} />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-charcoal-500 hover:text-brown-600 transition-colors flex items-center gap-2">
                  <Youtube size={16} />
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Back to Top */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex lg:flex-col lg:items-end lg:justify-start">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-sm text-charcoal-500 hover:text-brown-600 transition-colors group"
            >
              <span>Back to Top</span>
              <span className="w-8 h-8 rounded-full border border-charcoal-300 flex items-center justify-center group-hover:border-brown-600 group-hover:bg-brown-600 group-hover:text-cream-50 transition-all">
                <ArrowUp size={14} />
              </span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-sand-300 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-charcoal-400 text-xs">
            All Rights Reserved — Copyright © 2025
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-charcoal-400 hover:text-brown-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-charcoal-400 hover:text-brown-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
