import { ActivityIndicator, Pressable, type PressableProps } from 'react-native';

import { cn } from '@/utils';

import { Text } from './Text';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  label: string;
  variant?: ButtonVariant;
  loading?: boolean;
}

const containerClasses: Record<ButtonVariant, string> = {
  primary: 'bg-indigo-600 active:bg-indigo-700',
  secondary: 'bg-gray-100 active:bg-gray-200',
  ghost: 'bg-transparent active:bg-gray-100',
};

const labelClasses: Record<ButtonVariant, string> = {
  primary: 'text-white',
  secondary: 'text-gray-900',
  ghost: 'text-indigo-600',
};

/** Pressable button primitive with variants and a loading state. */
export function Button({
  label,
  variant = 'primary',
  loading = false,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      className={cn(
        'h-12 flex-row items-center justify-center rounded-xl px-5',
        containerClasses[variant],
        isDisabled && 'opacity-50',
        className,
      )}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#ffffff' : '#4f46e5'} />
      ) : (
        <Text className={cn('text-base font-semibold', labelClasses[variant])}>{label}</Text>
      )}
    </Pressable>
  );
}
