import { supabase } from './supabase';

const REFERRAL_CODE_LENGTH = 6;
const ALPHANUMERIC = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export interface ProfileRow {
  id: string;
  wallet_address: string;
  my_referral_code: string;
  referred_by: string | null;
  created_at: string;
  updated_at: string;
}

/**
 * Generate a random 6-character alphanumeric code (no ambiguous chars: 0,O,1,I).
 */
function generateRandomCode(): string {
  let code = '';
  const randomValues = new Uint8Array(REFERRAL_CODE_LENGTH);
  crypto.getRandomValues(randomValues);
  for (let i = 0; i < REFERRAL_CODE_LENGTH; i++) {
    code += ALPHANUMERIC[randomValues[i]! % ALPHANUMERIC.length];
  }
  return code;
}

/**
 * Generate a unique referral code by trying until one is not taken.
 */
export async function generateUniqueReferralCode(): Promise<string> {
  const maxAttempts = 50;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const code = generateRandomCode();
    const { data, error } = await supabase
      .from('profiles')
      .select('my_referral_code')
      .eq('my_referral_code', code)
      .maybeSingle();

    if (error) {
      throw new Error(`Failed to check referral code uniqueness: ${error.message}`);
    }
    if (!data) {
      return code;
    }
  }
  throw new Error('Unable to generate a unique referral code after multiple attempts.');
}

/**
 * Validate that a referral code exists in the database.
 * Returns the profile row if valid, null otherwise.
 */
export async function validateReferralCode(code: string): Promise<ProfileRow | null> {
  const trimmed = code.trim().toUpperCase();
  if (!trimmed || trimmed.length !== REFERRAL_CODE_LENGTH) {
    return null;
  }

  const { data, error } = await supabase
    .from('profiles')
    .select('id, wallet_address, my_referral_code, referred_by, created_at, updated_at')
    .eq('my_referral_code', trimmed)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to validate referral code: ${error.message}`);
  }
  return data as ProfileRow | null;
}

/**
 * Normalize wallet address to lowercase for consistent storage and lookup.
 */
function normalizeWalletAddress(address: string): string {
  return address.trim().toLowerCase();
}

/**
 * Register or update a user by wallet address.
 * - If wallet is new: generates a unique 6-char code and inserts a row (with optional referred_by).
 * - If wallet exists: returns existing profile; optionally updates referred_by only when it is currently null and a valid invite code is provided.
 * @param walletAddress - Connected wallet address
 * @param inviteCode - Optional referral code entered by the user (validated before use)
 */
export async function registerWallet(
  walletAddress: string,
  inviteCode?: string | null
): Promise<{ profile: ProfileRow; isNew: boolean }> {
  const wallet = normalizeWalletAddress(walletAddress);
  if (!wallet) {
    throw new Error('Wallet address is required.');
  }

  let resolvedReferralCode: string | null = null;
  if (inviteCode && inviteCode.trim()) {
    const existing = await validateReferralCode(inviteCode.trim());
    if (!existing) {
      throw new Error('Invalid or expired referral code. Please check and try again.');
    }
    resolvedReferralCode = existing.my_referral_code;
  }

  const { data: existingProfile, error: fetchError } = await supabase
    .from('profiles')
    .select('id, wallet_address, my_referral_code, referred_by, created_at, updated_at')
    .eq('wallet_address', wallet)
    .maybeSingle();

  if (fetchError) {
    throw new Error(`Failed to fetch profile: ${fetchError.message}`);
  }

  if (existingProfile) {
    const profile = existingProfile as ProfileRow;
    if (profile.referred_by == null && resolvedReferralCode) {
      const { data: updated, error: updateError } = await supabase
        .from('profiles')
        .update({
          referred_by: resolvedReferralCode,
          updated_at: new Date().toISOString(),
        })
        .eq('wallet_address', wallet)
        .select('id, wallet_address, my_referral_code, referred_by, created_at, updated_at')
        .single();

      if (updateError) {
        throw new Error(`Failed to update referred_by: ${updateError.message}`);
      }
      return { profile: updated as ProfileRow, isNew: false };
    }
    return { profile, isNew: false };
  }

  const myReferralCode = await generateUniqueReferralCode();
  const insertRow = {
    wallet_address: wallet,
    my_referral_code: myReferralCode,
    referred_by: resolvedReferralCode,
  };

  const { data: inserted, error: insertError } = await supabase
    .from('profiles')
    .insert(insertRow)
    .select('id, wallet_address, my_referral_code, referred_by, created_at, updated_at')
    .single();

  if (insertError) {
    throw new Error(`Failed to create profile: ${insertError.message}`);
  }

  return { profile: inserted as ProfileRow, isNew: true };
}

/**
 * Fetch profile by wallet address (e.g. after connect).
 */
export async function getProfileByWallet(walletAddress: string): Promise<ProfileRow | null> {
  const wallet = normalizeWalletAddress(walletAddress);
  const { data, error } = await supabase
    .from('profiles')
    .select('id, wallet_address, my_referral_code, referred_by, created_at, updated_at')
    .eq('wallet_address', wallet)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to fetch profile: ${error.message}`);
  }
  return data as ProfileRow | null;
}
