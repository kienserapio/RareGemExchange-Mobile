import { type ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { cn } from '@/utils';

export interface ScreenProps {
  children: ReactNode;
  /** Extra NativeWind classes for the content container. */
  className?: string;
  /** Wrap content in a vertical ScrollView. Defaults to false. */
  scroll?: boolean;
  /**
   * Apply top/bottom safe-area insets. Disable inside navigators that already
   * provide a header / tab bar. Defaults to true.
   */
  safe?: boolean;
}

/**
 * Screen wrapper: fills the viewport, paints the background, and (optionally)
 * applies safe-area insets. Insets are the one thing we cannot express as a
 * className because their values are dynamic per device.
 */
export function Screen({ children, className, scroll = false, safe = true }: ScreenProps) {
  const insets = useSafeAreaInsets();
  const safeAreaStyle = safe ? { paddingTop: insets.top, paddingBottom: insets.bottom } : undefined;

  if (scroll) {
    return (
      <ScrollView
        className="flex-1 bg-white"
        contentContainerClassName={cn('grow', className)}
        contentContainerStyle={safeAreaStyle}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <View className={cn('flex-1 bg-white', className)} style={safeAreaStyle}>
      {children}
    </View>
  );
}
