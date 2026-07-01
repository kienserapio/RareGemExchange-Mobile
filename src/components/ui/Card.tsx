import { Pressable, type PressableProps } from 'react-native';

import { cn } from '@/utils';

export type CardProps = PressableProps;

/** Rounded, bordered surface. Pressable so it can act as a tappable list item. */
export function Card({ className, children, ...rest }: CardProps) {
  return (
    <Pressable
      className={cn('rounded-2xl border border-gray-200 bg-white p-4 active:opacity-80', className)}
      {...rest}
    >
      {children}
    </Pressable>
  );
}
