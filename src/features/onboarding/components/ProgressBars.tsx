import { View } from 'react-native';

import { ProgressBar } from './ProgressBar';

interface ProgressBarsProps {
  count: number;
  activeIndex: number;
}

/** Row of onboarding progress bars; the active index is highlighted in gold. */
export function ProgressBars({ count, activeIndex }: ProgressBarsProps) {
  return (
    <View className="flex-row items-center gap-3">
      {Array.from({ length: count }).map((_, index) => (
        <ProgressBar key={index} active={index === activeIndex} />
      ))}
    </View>
  );
}
