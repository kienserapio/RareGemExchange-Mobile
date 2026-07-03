import { Redirect, Stack } from 'expo-router';

import { useAuth } from '@/features/auth';
import { useOnboarding } from '@/features/onboarding';

/**
 * Auth route group. Onboarding must be completed first; once the user is signed
 * in they are redirected into the app.
 */
export default function AuthLayout() {
  const { hasCompletedOnboarding } = useOnboarding();
  const { isAuthenticated } = useAuth();

  if (!hasCompletedOnboarding) {
    return <Redirect href="/onboarding" />;
  }
  if (isAuthenticated) {
    return <Redirect href="/" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
