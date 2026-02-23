import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient {
  if (_client) return _client;
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Missing Supabase env: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must be set.'
    );
  }
  _client = createClient(supabaseUrl, supabaseAnonKey);
  return _client;
}

/** Lazy-initialized Supabase client (avoids throw at module load so /referral can render). */
export const supabase = new Proxy({} as SupabaseClient, {
  get(_, prop) {
    return (getClient() as unknown as Record<string | symbol, unknown>)[prop];
  },
});
