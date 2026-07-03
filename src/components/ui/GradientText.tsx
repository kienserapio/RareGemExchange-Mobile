import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Text as RNText, type TextProps } from 'react-native';

import { goldGradient } from '@/constants';

export interface GradientTextProps extends TextProps {
  /** Gradient stops (top → bottom by default). Defaults to the gold gradient. */
  colors?: readonly [string, string, ...string[]];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

/**
 * Text filled with a linear gradient via a MaskedView. The visible text acts as
 * the mask; a second, invisible copy sizes the gradient to the text bounds.
 * Style the text with `className` (font, size, tracking) as usual.
 */
export function GradientText({
  colors = goldGradient,
  start = { x: 0, y: 0 },
  end = { x: 0, y: 1 },
  className,
  children,
  ...rest
}: GradientTextProps) {
  return (
    <MaskedView
      maskElement={
        <RNText className={className} {...rest}>
          {children}
        </RNText>
      }
    >
      <LinearGradient colors={colors} start={start} end={end}>
        <RNText className={className} {...rest} style={{ opacity: 0 }}>
          {children}
        </RNText>
      </LinearGradient>
    </MaskedView>
  );
}
