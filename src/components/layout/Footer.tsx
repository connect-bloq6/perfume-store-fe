'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: '#C5B299' }}>
      <div className="container-luxury py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Atlanta */}
          <div>
            <h3 
              className="font-display text-base font-semibold mb-4"
              style={{ color: '#4A3D2A' }}
            >
              Atlanta
            </h3>
            <div className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
              <p className="mb-1">T: (+1) 404 555 1234</p>
              <p>123 Peachtree Street,</p>
              <p>Atlanta, GA 30303</p>
            </div>
          </div>

          {/* Buckhead */}
          <div>
            <h3 
              className="font-display text-base font-semibold mb-4"
              style={{ color: '#4A3D2A' }}
            >
              Buckhead
            </h3>
            <div className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
              <p className="mb-1">T: (+1) 404 555 5678</p>
              <p>3500 Peachtree Road,</p>
              <p>Atlanta, GA 30326</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="font-display text-base font-semibold mb-4"
              style={{ color: '#4A3D2A' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/products" 
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: '#6B6B6B' }}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: '#6B6B6B' }}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link 
                  href="/collections" 
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: '#6B6B6B' }}
                >
                  Latest News
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 
              className="font-display text-base font-semibold mb-4"
              style={{ color: '#4A3D2A' }}
            >
              Follow Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: '#6B6B6B' }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: '#6B6B6B' }}
                >
                  Pinterest
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: '#6B6B6B' }}
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div 
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: '#C5B299' }}
        >
          <p className="text-xs" style={{ color: '#6B6B6B' }}>
            All Rights Reserved - Copyright © 2025
          </p>
          <Link 
            href="/privacy" 
            className="text-xs transition-colors hover:opacity-70"
            style={{ color: '#6B6B6B' }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
