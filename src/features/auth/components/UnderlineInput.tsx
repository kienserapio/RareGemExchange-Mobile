import { type ReactNode } from 'react';
import { Text as RNText, TextInput, View, type TextInputProps } from 'react-native';

import { colors } from '@/constants';
import { cn } from '@/utils';

interface UnderlineInputProps extends TextInputProps {
  /** Small hint shown to the right of the field (e.g. "(For Concierge)"). */
  hint?: string;
  /** Element at the far right of the field (e.g. a password visibility toggle). */
  rightElement?: ReactNode;
  containerClassName?: string;
}

/**
 * Minimal luxury text field: no box, just a bottom underline. The (uppercase)
 * placeholder doubles as the field label, per the Figma design.
 */
export function UnderlineInput({
  hint,
  rightElement,
  className,
  containerClassName,
  ...rest
}: UnderlineInputProps) {
  return (
    <View
      className={cn('w-full flex-row items-center border-b border-track pb-2', containerClassName)}
    >
      <TextInput
        placeholderTextColor={colors.label}
        className={cn(
          'h-9 flex-1 font-jakarta-semibold text-[14px] tracking-[1px] text-gold',
          className,
        )}
        {...rest}
      />
      {hint ? <RNText className="ml-2 font-jakarta text-[13px] text-muted">{hint}</RNText> : null}
      {rightElement}
    </View>
  );
}
