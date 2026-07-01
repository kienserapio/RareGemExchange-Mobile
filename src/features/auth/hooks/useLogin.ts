import { useRouter } from 'expo-router';
import { useCallback, useState } from 'react';

import { useAuth } from '../context/AuthContext';
import type { LoginCredentials } from '../types';

/**
 * Encapsulates the login form state and submit handler. Currently wired to the
 * placeholder AuthContext; swap the body of `handleLogin` for a real API call.
 */
export function useLogin() {
  const router = useRouter();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = useCallback(async () => {
    setError(null);

    // TODO: Replace with real validation + auth. Placeholder guard only.
    if (!email.trim() || !password) {
      setError('Please enter your email and password.');
      return;
    }

    try {
      setIsSubmitting(true);
      const credentials: LoginCredentials = { email: email.trim(), password };
      await signIn(credentials);
      router.replace('/');
    } finally {
      setIsSubmitting(false);
    }
  }, [email, password, signIn, router]);

  return { email, setEmail, password, setPassword, isSubmitting, error, handleLogin };
}
