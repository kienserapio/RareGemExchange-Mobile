import { Feather } from '@expo/vector-icons';
import { ActivityIndicator, Pressable, Text as RNText, type PressableProps } from 'react-native';

import { colors } from '@/constants';
import { cn } from '@/utils';

export interface CtaButtonProps extends Omit<PressableProps, 'children'> {
  label: string;
  showArrow?: boolean;
  loading?: boolean;
  /** Override the label text classes (e.g. color/size for the auth submit). */
  textClassName?: string;
  /** Arrow icon color. Defaults to gold. */
  iconColor?: string;
}

/**
 * Luxury CTA button from the Figma design system: black fill, translucent gold
 * border, uppercase gold label, and a trailing arrow. Defaults match the splash
 * CTA; pass `className` / `textClassName` to adapt it (e.g. the auth submit).
 */
export function CtaButton({
  label,
  showArrow = true,
  loading = false,
  disabled,
  className,
  textClassName,
  iconColor = colors.gold,
  ...rest
}: CtaButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      className={cn(
        'h-[58px] w-full max-w-[320px] flex-row items-center justify-center gap-3 border border-gold-border/40 bg-black px-8 active:opacity-80',
        isDisabled && 'opacity-50',
        className,
      )}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={iconColor} />
      ) : (
        <>
          <RNText
            className={cn(
              'font-jakarta-semibold text-[14px] uppercase tracking-[1.4px] text-gold',
              textClassName,
            )}
          >
            {label}
          </RNText>
          {showArrow ? <Feather name="arrow-right" size={14} color={iconColor} /> : null}
        </>
      )}
    </Pressable>
  );
}
