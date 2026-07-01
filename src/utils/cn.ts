/**
 * Tiny className combiner: filters out falsy values and joins the rest with a
 * space. Keeps conditional NativeWind class strings tidy without extra deps.
 *
 * @example cn('p-4', isActive && 'bg-indigo-600', className)
 */
export type ClassValue = string | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}
