import { TextInput, View, type TextInputProps } from 'react-native';

import { colors } from '@/constants';
import { cn } from '@/utils';

import { Text } from './Text';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  /** Classes for the wrapping <View>, not the inner <TextInput>. */
  containerClassName?: string;
}

/** Labeled text input primitive with optional error text. */
export function Input({ label, error, className, containerClassName, ...rest }: InputProps) {
  return (
    <View className={cn('gap-1.5', containerClassName)}>
      {label ? <Text variant="label">{label}</Text> : null}
      <TextInput
        placeholderTextColor={colors.textMuted}
        className={cn(
          'h-12 rounded-xl border border-gray-300 bg-white px-4 text-base text-gray-900',
          error ? 'border-red-500' : '',
          className,
        )}
        {...rest}
      />
      {error ? (
        <Text variant="caption" className="text-red-500">
          {error}
        </Text>
      ) : null}
    </View>
  );
}
