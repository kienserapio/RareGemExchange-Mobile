import { Text as RNText, type TextProps as RNTextProps } from 'react-native';

import { cn } from '@/utils';

export type TextVariant = 'title' | 'subtitle' | 'body' | 'label' | 'caption';

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
}

const variantClasses: Record<TextVariant, string> = {
  title: 'text-2xl font-bold text-gray-900',
  subtitle: 'text-lg font-semibold text-gray-800',
  body: 'text-base text-gray-700',
  label: 'text-sm font-medium text-gray-600',
  caption: 'text-xs text-gray-500',
};

/** Themed text primitive. Compose the base variant with extra `className`s. */
export function Text({ variant = 'body', className, ...rest }: TextProps) {
  return <RNText className={cn(variantClasses[variant], className)} {...rest} />;
}
