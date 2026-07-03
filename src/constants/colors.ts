/**
 * Color tokens for native props that do NOT accept a `className` (LinearGradient
 * colors, StatusBar, placeholder text, vector-icon colors). Visual styling of
 * components is done with NativeWind classes — these mirror the `colors` map in
 * tailwind.config.js.
 */
export const colors = {
  // Base
  background: '#000000',
  black: '#000000',
  white: '#ffffff',
  charcoal: '#101010', // main dark surface (home)
  surface: '#1c1b1b', // raised surfaces
  pearl: '#e5e2e1', // near-white titles
  textMuted: '#9ca3af', // neutral placeholder/muted text (light-theme primitives)

  // Luxury palette (Figma design system)
  gold: '#e8c08e', // primary gold
  goldDeep: '#b07c3a', // gradient end tone
  bronze: '#c5a071', // secondary gold / auth accents
  goldBorder: '#8e6d45', // translucent border base
  subtitle: '#d2c4b7', // warm off-white body text
  label: '#9b8f82', // input labels
  muted: '#4e453b', // hints / legal / inactive text
  tagline: '#a8a29e', // brand tagline
  track: '#353535', // inactive progress + input underlines
} as const;

export type ColorToken = keyof typeof colors;

/** Vertical gold gradient used for headings and accents (top → bottom). */
export const goldGradient = ['#e8c08e', '#b07c3a'] as const;
