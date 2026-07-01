/**
 * Central color tokens. Used for native props that do NOT accept a `className`
 * (navigation theme, StatusBar, placeholder text color, etc.). Visual styling of
 * components is done with NativeWind classes — extend `tailwind.config.js` to
 * expose any of these as Tailwind color utilities.
 */
export const colors = {
  primary: '#4f46e5',
  primaryDark: '#4338ca',
  background: '#ffffff',
  surface: '#f9fafb',
  border: '#e5e7eb',
  textPrimary: '#111827',
  textSecondary: '#6b7280',
  textMuted: '#9ca3af',
  danger: '#ef4444',
  success: '#10b981',
} as const;

export type ColorToken = keyof typeof colors;
