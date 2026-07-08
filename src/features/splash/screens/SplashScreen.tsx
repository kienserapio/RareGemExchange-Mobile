import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, Text as RNText, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { images, ROUTES } from '@/constants';

const LOGO_FADE_DURATION_MS = 900;
const HOLD_DURATION_MS = 1400;

/**
 * Branded launch splash: the gem logo + wordmark fade in over black, then the
 * screen auto-advances into the onboarding carousel. Runs on every cold start
 * (onboarding/auth state is in-memory only — see OnboardingProvider).
 */
export function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace(ROUTES.onboarding);
    }, LOGO_FADE_DURATION_MS + HOLD_DURATION_MS);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Animated.View entering={FadeIn.duration(LOGO_FADE_DURATION_MS)} className="items-center gap-4">
        <Image source={images.logo} resizeMode="contain" className="h-[140px] w-[135px]" />
        <RNText className="text-center font-cinzel-bold text-[22px] uppercase tracking-[3px] text-gold">
          {'RARE GEM\nEXCHANGE'}
        </RNText>
      </Animated.View>
    </View>
  );
}
