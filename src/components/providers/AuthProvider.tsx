'use client';

import { AuthModal } from '@/components/auth/AuthModal';
import { Toast } from '@/components/ui/Toast';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AuthModal />
      <Toast />
    </>
  );
}

