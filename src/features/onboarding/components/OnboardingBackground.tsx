import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, type ReactNode } from 'react';
import { StyleSheet, Text as RNText, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { images } from '@/constants';

interface OnboardingBackgroundProps {
  children: ReactNode;
}

/**
 * Shared onboarding backdrop: the cinematic gem background with a slow Ken-Burns
 * zoom, a bottom-up black gradient for legibility, and the brand wordmark near
 * the top. Slide content is rendered bottom-aligned via `children`.
 */
export function OnboardingBackground({ children }: OnboardingBackgroundProps) {
  const insets = useSafeAreaInsets();
  const zoom = useSharedValue(1);

  useEffect(() => {
    zoom.value = withRepeat(
      withTiming(1.08, { duration: 9000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true,
    );
  }, [zoom]);

  const zoomStyle = useAnimatedStyle(() => ({ transform: [{ scale: zoom.value }] }));

  return (
    <View className="flex-1 bg-black">
      <Animated.Image
        source={images.background}
        resizeMode="cover"
        style={[StyleSheet.absoluteFill, zoomStyle]}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.55)', '#000000']}
        locations={[0, 0.55, 1]}
        style={StyleSheet.absoluteFill}
      />
      <View
        className="flex-1"
        style={{ paddingTop: insets.top + 36, paddingBottom: insets.bottom + 36 }}
      >
        <RNText className="text-center font-cinzel text-[12px] uppercase tracking-[4.8px] text-gold">
          RARE GEM EXCHANGE
        </RNText>
        <View className="flex-1 justify-end">{children}</View>
      </View>
    </View>
  );
}
