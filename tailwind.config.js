/** @type {import('tailwindcss').Config} */
module.exports = {
  // NativeWind scans these files for className usage.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Luxury palette from the Figma design system.
        gold: {
          DEFAULT: '#e8c08e', // primary gold (headings, CTA text)
          deep: '#b07c3a', // gradient end tone
          bronze: '#c5a071', // auth accents / secondary gold
          border: '#8e6d45', // translucent border base
        },
        ink: '#000000', // pure black
        charcoal: '#101010', // main dark surface (home background)
        surface: '#1c1b1b', // raised surfaces (search, cards)
        pearl: '#e5e2e1', // near-white card titles
        subtitle: '#d2c4b7', // warm off-white body text
        label: '#9b8f82', // input labels
        muted: '#4e453b', // hints / legal / inactive text
        tagline: '#a8a29e', // brand tagline
        track: '#353535', // inactive progress + input underlines
      },
      fontFamily: {
        cinzel: ['Cinzel_400Regular'],
        'cinzel-medium': ['Cinzel_500Medium'],
        'cinzel-bold': ['Cinzel_700Bold'],
        jakarta: ['PlusJakartaSans_400Regular'],
        'jakarta-medium': ['PlusJakartaSans_500Medium'],
        'jakarta-semibold': ['PlusJakartaSans_600SemiBold'],
        'jakarta-bold': ['PlusJakartaSans_700Bold'],
        montserrat: ['Montserrat_400Regular'],
      },
    },
  },
  plugins: [],
};
