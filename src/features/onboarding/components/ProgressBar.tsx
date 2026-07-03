import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import { colors } from '@/constants';

interface ProgressBarProps {
  active: boolean;
}

/** A single onboarding progress bar; animates width + color when activated. */
export function ProgressBar({ active }: ProgressBarProps) {
  const progress = useDerivedValue(() => withTiming(active ? 1 : 0, { duration: 300 }), [active]);

  const style = useAnimatedStyle(() => ({
    width: interpolate(progress.value, [0, 1], [32, 48]),
    backgroundColor: interpolateColor(progress.value, [0, 1], [colors.track, colors.gold]),
  }));

  return <Animated.View style={[{ height: 2, borderRadius: 1 }, style]} />;
}
