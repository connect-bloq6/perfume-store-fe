import { createClient } from '@supabase/supabase-js';

/**
 * Server-only client with the service role key. Bypasses RLS.
 * Use in Route Handlers for contact admin API and public inserts you do not want exposed to the browser.
 */
export function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  }
  return createClient(url, key);
}
