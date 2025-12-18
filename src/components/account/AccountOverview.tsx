'use client';

import Link from 'next/link';
import { Package, Heart, MapPin, Settings, LogOut, User } from 'lucide-react';
import { useAuthStore } from '@/store/auth';
import { useToastStore } from '@/components/ui/Toast';

const accountLinks = [
  { href: '/account/orders', icon: Package, label: 'Order History', description: 'View your past orders' },
  { href: '/account/wishlist', icon: Heart, label: 'Wishlist', description: 'Your saved fragrances' },
  { href: '/account/addresses', icon: MapPin, label: 'Addresses', description: 'Manage shipping addresses' },
  { href: '/account/settings', icon: Settings, label: 'Settings', description: 'Account preferences' },
];

export function AccountOverview() {
  const { user, logout } = useAuthStore();
  const showToast = useToastStore((state) => state.showToast);

  const handleLogout = () => {
    const userName = user?.name || 'User';
    logout();
    showToast(`Goodbye, ${userName}! You've been signed out.`, 'logout');
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Welcome Card */}
      <div 
        className="md:col-span-2 rounded-2xl p-8"
        style={{ 
          background: 'linear-gradient(135deg, #A8845E 0%, #8B6B47 100%)',
          boxShadow: '0 10px 30px rgba(168, 132, 94, 0.3)'
        }}
      >
        <div className="flex items-center gap-4">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            <User size={28} style={{ color: '#FFFFFF' }} />
          </div>
          <div>
            <h2 
              className="font-display text-2xl font-semibold mb-1"
              style={{ color: '#FFFFFF' }}
            >
              Welcome back, {user?.name || 'Guest'}
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              {user?.email || 'Manage your account and view your order history.'}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      {accountLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group flex items-start gap-4 rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
          style={{ 
            backgroundColor: '#FEFDFB', 
            border: '1px solid #E5DED3',
          }}
        >
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:scale-105"
            style={{ backgroundColor: '#F5EDE0' }}
          >
            <link.icon size={24} style={{ color: '#A8845E' }} />
          </div>
          <div>
            <h3 
              className="font-semibold mb-1"
              style={{ color: '#4A3D2A' }}
            >
              {link.label}
            </h3>
            <p 
              className="text-sm"
              style={{ color: '#6B6B6B' }}
            >
              {link.description}
            </p>
          </div>
        </Link>
      ))}

      {/* Sign Out */}
      <button 
        onClick={handleLogout}
        className="flex items-start gap-4 rounded-xl p-6 transition-all duration-300 hover:shadow-lg text-left"
        style={{ 
          backgroundColor: '#FEFDFB', 
          border: '1px solid #E5DED3',
        }}
      >
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: '#FEE2E2' }}
        >
          <LogOut size={24} style={{ color: '#DC2626' }} />
        </div>
        <div>
          <h3 
            className="font-semibold mb-1"
            style={{ color: '#DC2626' }}
          >
            Sign Out
          </h3>
          <p 
            className="text-sm"
            style={{ color: '#6B6B6B' }}
          >
            Log out of your account
          </p>
        </div>
      </button>
    </div>
  );
}

