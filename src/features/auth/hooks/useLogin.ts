import { useRouter } from 'expo-router';
import { useCallback, useState } from 'react';

import { useAuth } from '../context/AuthContext';
import type { LoginCredentials } from '../types';

/**
 * Controls the auth (membership application) form: field state, password
 * visibility, and a placeholder submit handler wired to the in-memory
 * AuthContext. Swap the body of `submit` for a real registration/auth call.
 */
export function useLogin() {
  const router = useRouter();
  const { signIn } = useAuth();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleShowPassword = useCallback(() => setShowPassword((visible) => !visible), []);

  const submit = useCallback(async () => {
    setError(null);
    // TODO: Real validation + registration/auth API call. Placeholder guard only.
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

  return {
    fullName,
    setFullName,
    email,
    setEmail,
    whatsapp,
    setWhatsapp,
    password,
    setPassword,
    showPassword,
    toggleShowPassword,
    isSubmitting,
    error,
    submit,
  };
}
