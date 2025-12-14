'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function RegisterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          label="First Name"
          placeholder="John"
          id="register-firstName"
          required
        />
        <Input
          type="text"
          label="Last Name"
          placeholder="Doe"
          id="register-lastName"
          required
        />
      </div>
      <Input
        type="email"
        label="Email"
        placeholder="your@email.com"
        id="register-email"
        required
      />
      <Input
        type="password"
        label="Password"
        placeholder="••••••••"
        id="register-password"
        required
      />
      <Input
        type="password"
        label="Confirm Password"
        placeholder="••••••••"
        id="register-confirmPassword"
        required
      />

      <label className="flex items-start gap-2 cursor-pointer">
        <input type="checkbox" className="w-4 h-4 bg-noir-900 border-noir-600 mt-0.5" required />
        <span className="text-noir-300 text-sm">
          I agree to the{' '}
          <Link href="/terms" className="text-gold-500 hover:text-gold-400">Terms of Service</Link>
          {' '}and{' '}
          <Link href="/privacy" className="text-gold-500 hover:text-gold-400">Privacy Policy</Link>
        </span>
      </label>

      <Button type="submit" variant="primary" className="w-full">
        Create Account
      </Button>

      <p className="text-center text-noir-400 text-sm">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-gold-500 hover:text-gold-400 transition-colors">
          Sign in
        </Link>
      </p>
    </form>
  );
}

