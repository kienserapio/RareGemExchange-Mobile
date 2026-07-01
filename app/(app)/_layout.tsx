import { Redirect, Tabs } from 'expo-router';

import { useAuth } from '@/features/auth';

/**
 * Protected app route group. This is the placeholder auth guard: unauthenticated
 * users are bounced to the login screen. Home + Inquiry live under a bottom-tab
 * navigator here.
 */
export default function AppLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen name="index" options={{ title: 'Catalog' }} />
      <Tabs.Screen name="inquiry" options={{ title: 'Inquiry' }} />
    </Tabs>
  );
}
