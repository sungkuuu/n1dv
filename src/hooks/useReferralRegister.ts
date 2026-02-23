import { useState, useCallback } from 'react';
import {
  registerWallet,
  validateReferralCode,
  getProfileByWallet,
  type ProfileRow,
} from '../lib/referral';

interface UseReferralRegisterResult {
  profile: ProfileRow | null;
  error: string | null;
  isRegistering: boolean;
  isValidatingCode: boolean;
  register: (walletAddress: string, inviteCode?: string | null) => Promise<ProfileRow | null>;
  validateCode: (code: string) => Promise<boolean>;
  fetchProfile: (walletAddress: string) => Promise<ProfileRow | null>;
  clearError: () => void;
}

export function useReferralRegister(): UseReferralRegisterResult {
  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isValidatingCode, setIsValidatingCode] = useState(false);

  const clearError = useCallback(() => setError(null), []);

  const register = useCallback(
    async (walletAddress: string, inviteCode?: string | null): Promise<ProfileRow | null> => {
      setError(null);
      setIsRegistering(true);
      try {
        const { profile: p } = await registerWallet(walletAddress, inviteCode);
        setProfile(p);
        return p;
      } catch (e) {
        const message = e instanceof Error ? e.message : 'Registration failed.';
        setError(message);
        return null;
      } finally {
        setIsRegistering(false);
      }
    },
    []
  );

  const validateCode = useCallback(async (code: string): Promise<boolean> => {
    setIsValidatingCode(true);
    setError(null);
    try {
      const existing = await validateReferralCode(code);
      return existing != null;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Validation failed.');
      return false;
    } finally {
      setIsValidatingCode(false);
    }
  }, []);

  const fetchProfile = useCallback(async (walletAddress: string): Promise<ProfileRow | null> => {
    setError(null);
    try {
      const p = await getProfileByWallet(walletAddress);
      setProfile(p);
      return p;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to fetch profile.');
      return null;
    }
  }, []);

  return {
    profile,
    error,
    isRegistering,
    isValidatingCode,
    register,
    validateCode,
    fetchProfile,
    clearError,
  };
}
