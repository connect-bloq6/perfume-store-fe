'use client';

import Link from 'next/link';
import { Package, Heart, MapPin, Settings, LogOut } from 'lucide-react';

const accountLinks = [
  { href: '/account/orders', icon: Package, label: 'Order History', description: 'View your past orders' },
  { href: '/account/wishlist', icon: Heart, label: 'Wishlist', description: 'Your saved fragrances' },
  { href: '/account/addresses', icon: MapPin, label: 'Addresses', description: 'Manage shipping addresses' },
  { href: '/account/settings', icon: Settings, label: 'Settings', description: 'Account preferences' },
];

export function AccountOverview() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Welcome Card */}
      <div className="md:col-span-2 bg-noir-900 border border-noir-800 p-8">
        <h2 className="font-display text-2xl text-white mb-2">Welcome back, John</h2>
        <p className="text-noir-400">Manage your account and view your order history.</p>
      </div>

      {/* Quick Links */}
      {accountLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group flex items-start gap-4 bg-noir-900 border border-noir-800 p-6 hover:border-gold-500/50 transition-colors"
        >
          <div className="w-12 h-12 bg-noir-800 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
            <link.icon className="text-gold-500" size={24} />
          </div>
          <div>
            <h3 className="text-white font-medium mb-1">{link.label}</h3>
            <p className="text-noir-400 text-sm">{link.description}</p>
          </div>
        </Link>
      ))}

      {/* Sign Out */}
      <button className="flex items-center gap-4 bg-noir-900 border border-noir-800 p-6 hover:border-rose-500/50 transition-colors text-left">
        <div className="w-12 h-12 bg-noir-800 flex items-center justify-center">
          <LogOut className="text-rose-500" size={24} />
        </div>
        <div>
          <h3 className="text-white font-medium mb-1">Sign Out</h3>
          <p className="text-noir-400 text-sm">Log out of your account</p>
        </div>
      </button>
    </div>
  );
}

