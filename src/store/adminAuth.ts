'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AdminAuthState {
  isAdminAuthenticated: boolean;
  adminEmail: string | null;
  loginTime: string | null;
  adminLogin: (email: string) => void;
  adminLogout: () => void;
}

export const useAdminAuthStore = create<AdminAuthState>()(
  persist(
    (set) => ({
      isAdminAuthenticated: false,
      adminEmail: null,
      loginTime: null,
      adminLogin: (email) => set({ 
        isAdminAuthenticated: true, 
        adminEmail: email,
        loginTime: new Date().toISOString()
      }),
      adminLogout: () => set({ 
        isAdminAuthenticated: false, 
        adminEmail: null,
        loginTime: null 
      }),
    }),
    {
      name: 'admin-auth-storage',
      partialize: (state) => ({ 
        isAdminAuthenticated: state.isAdminAuthenticated, 
        adminEmail: state.adminEmail,
        loginTime: state.loginTime
      }),
    }
  )
);


