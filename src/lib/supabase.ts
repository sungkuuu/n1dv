import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xsnpnivwtedlwmzsahbk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzbnBuaXZ3dGVkbHdtenNhaGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4NDkxMjIsImV4cCI6MjA4NzQyNTEyMn0.WGdSCnuDBvln-9F4uMI29mlxo8oCjSUo1_YPC4RMHbE' ;

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
