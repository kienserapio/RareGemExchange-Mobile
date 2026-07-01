import { Redirect, Stack } from 'expo-router';

import { useAuth } from '@/features/auth';

/** Auth route group. Redirects into the app once the user is signed in. */
export default function AuthLayout() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href="/" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
