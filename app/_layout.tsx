import '../global.css';

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { appFonts, colors } from '@/constants';
import { AuthProvider } from '@/features/auth';
import { OnboardingProvider } from '@/features/onboarding';

// Keep the native splash visible until custom fonts are ready.
void SplashScreen.preventAutoHideAsync();

/**
 * Root layout: loads fonts, then mounts global providers (safe area, onboarding,
 * auth) around the root Stack. Route files stay thin — screen logic lives in
 * `src/features`. The app is dark-themed, so screens paint their own black
 * backgrounds and the status bar is forced light.
 */
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts(appFonts);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      void SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <OnboardingProvider>
        <AuthProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: colors.black },
            }}
          >
            <Stack.Screen name="onboarding" options={{ animation: 'fade' }} />
            <Stack.Screen name="(auth)" options={{ animation: 'fade' }} />
            <Stack.Screen name="(app)" />
            <Stack.Screen name="gem/[id]" options={{ headerShown: true }} />
            <Stack.Screen name="+not-found" options={{ headerShown: true, title: 'Not Found' }} />
          </Stack>
          <StatusBar style="light" />
        </AuthProvider>
      </OnboardingProvider>
    </SafeAreaProvider>
  );
}
