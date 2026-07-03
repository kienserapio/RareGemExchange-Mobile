import { type ReactNode } from 'react';
import { ScrollView, type ScrollViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { cn } from '@/utils';

interface KeyboardAwareScrollViewProps extends ScrollViewProps {
  children: ReactNode;
  /** NativeWind classes for the content container. */
  contentClassName?: string;
  /** Apply top + bottom safe-area padding to the content. Defaults to true. */
  safe?: boolean;
}

/**
 * ScrollView that keeps focused inputs above the keyboard and respects safe-area
 * insets. iOS uses `automaticallyAdjustKeyboardInsets`; Android relies on the
 * window's resize mode (see app.json → android.softwareKeyboardLayoutMode).
 */
export function KeyboardAwareScrollView({
  children,
  className,
  contentClassName,
  safe = true,
  contentContainerStyle,
  ...rest
}: KeyboardAwareScrollViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className={cn('flex-1', className)}
      contentContainerClassName={contentClassName}
      contentContainerStyle={[
        safe ? { paddingTop: insets.top, paddingBottom: insets.bottom } : null,
        contentContainerStyle,
      ]}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive"
      automaticallyAdjustKeyboardInsets
      showsVerticalScrollIndicator={false}
      {...rest}
    >
      {children}
    </ScrollView>
  );
}
