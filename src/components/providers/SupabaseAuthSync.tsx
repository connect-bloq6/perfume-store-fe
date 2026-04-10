'use client';

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuthStore } from '@/store/auth';

function displayNameFromUser(user: {
  email?: string | null;
  user_metadata?: Record<string, unknown>;
}): string {
  const meta = user.user_metadata;
  const full =
    (typeof meta?.full_name === 'string' && meta.full_name) ||
    (typeof meta?.name === 'string' && meta.name);
  if (full) return full;
  if (user.email) return user.email.split('@')[0] || 'User';
  return 'User';
}

export function SupabaseAuthSync() {
  const login = useAuthStore((s) => s.login);
  const logout = useAuthStore((s) => s.logout);

  useEffect(() => {
    let supabase: ReturnType<typeof createClient>;
    try {
      supabase = createClient();
    } catch {
      return;
    }

    const applySession = (session: { user: { id: string; email?: string | null; user_metadata?: Record<string, unknown> } } | null) => {
      if (session?.user) {
        login({
          id: session.user.id,
          name: displayNameFromUser(session.user),
          email: session.user.email ?? '',
        });
      } else {
        logout();
      }
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      applySession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      applySession(session);
    });

    return () => subscription.unsubscribe();
  }, [login, logout]);

  return null;
}
