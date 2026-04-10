'use client';

import { AuthModal } from '@/components/auth/AuthModal';
import { Toast } from '@/components/ui/Toast';
import { SupabaseAuthSync } from '@/components/providers/SupabaseAuthSync';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SupabaseAuthSync />
      {children}
      <AuthModal />
      <Toast />
    </>
  );
}

