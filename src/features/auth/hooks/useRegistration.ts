import { useRouter } from 'expo-router';
import { useCallback, useState } from 'react';

import { useAuth } from '../context/AuthContext';
import { countryCodes, type CountryCode } from '../data/countryCodes';
import type { LoginCredentials, RegistrationStep } from '../types';
import { useOtpChannel } from './useOtpChannel';

const MIN_PASSWORD_LENGTH = 8;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Drives the registration wizard: legal name + mobile + email + password
 * (step 1), then simulated mobile and email OTP verification (see
 * useOtpChannel — no Twilio/backend wired up yet), then account creation.
 */
export function useRegistration() {
  const router = useRouter();
  const { signIn } = useAuth();

  const [step, setStep] = useState<RegistrationStep>('details');
  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState<CountryCode>(countryCodes[0]);
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [detailsError, setDetailsError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleShowPassword = useCallback(() => setShowPassword((visible) => !visible), []);
  const toggleShowConfirmPassword = useCallback(
    () => setShowConfirmPassword((visible) => !visible),
    [],
  );

  const finalizeRegistration = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const credentials: LoginCredentials = { email: email.trim(), password };
      await signIn(credentials);
      router.replace('/');
    } finally {
      setIsSubmitting(false);
    }
  }, [email, password, signIn, router]);

  const emailOtp = useOtpChannel({ onVerified: () => void finalizeRegistration() });
  const mobileOtp = useOtpChannel({
    onVerified: () => {
      setStep('verifyEmail');
      emailOtp.send();
    },
  });

  const submitDetails = useCallback(() => {
    setDetailsError(null);
    if (!fullName.trim()) {
      setDetailsError('Please enter your full legal name.');
      return;
    }
    if (mobileNumber.replace(/\D/g, '').length < 7) {
      setDetailsError('Please enter a valid mobile number.');
      return;
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      setDetailsError('Please enter a valid email address.');
      return;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      setDetailsError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters.`);
      return;
    }
    if (password !== confirmPassword) {
      setDetailsError('Passwords do not match.');
      return;
    }
    setStep('verifyMobile');
    mobileOtp.send();
  }, [fullName, mobileNumber, email, password, confirmPassword, mobileOtp]);

  return {
    step,
    setStep,
    fullName,
    setFullName,
    countryCode,
    setCountryCode,
    mobileNumber,
    setMobileNumber,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
    detailsError,
    isSubmitting,
    submitDetails,
    mobileOtp,
    emailOtp,
  };
}
