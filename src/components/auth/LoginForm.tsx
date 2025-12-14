'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        type="email"
        label="Email"
        placeholder="your@email.com"
        id="login-email"
        required
      />
      <Input
        type="password"
        label="Password"
        placeholder="••••••••"
        id="login-password"
        required
      />

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 bg-noir-900 border-noir-600" />
          <span className="text-noir-300">Remember me</span>
        </label>
        <Link href="/auth/forgot-password" className="text-gold-500 hover:text-gold-400 transition-colors">
          Forgot password?
        </Link>
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Sign In
      </Button>

      <p className="text-center text-noir-400 text-sm">
        Don&apos;t have an account?{' '}
        <Link href="/auth/register" className="text-gold-500 hover:text-gold-400 transition-colors">
          Create one
        </Link>
      </p>
    </form>
  );
}

