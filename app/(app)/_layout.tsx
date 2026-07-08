import { Redirect, Stack } from 'expo-router';

import { colors } from '@/constants';
import { useAuth } from '@/features/auth';
import { useOnboarding } from '@/features/onboarding';

/**
 * Protected app route group. Guards run in order: unfinished onboarding bounces
 * to the splash flow, then unauthenticated users go to the auth screen.
 *
 * This is a Stack (not Tabs) — the home screen renders its own custom bottom nav
 * (the Figma design). Other routes (e.g. inquiry) live here too and can be wired
 * to that nav later.
 */
export default function AppLayout() {
  const { hasCompletedOnboarding } = useOnboarding();
  const { isAuthenticated } = useAuth();

  if (!hasCompletedOnboarding) {
    return <Redirect href="/splash" />;
  }
  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack
      screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.charcoal } }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="inquiry" />
    </Stack>
  );
}
