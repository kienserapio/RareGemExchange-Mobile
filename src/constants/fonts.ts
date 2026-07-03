import { Cinzel_400Regular } from '@expo-google-fonts/cinzel/400Regular';
import { Cinzel_500Medium } from '@expo-google-fonts/cinzel/500Medium';
import { Cinzel_700Bold } from '@expo-google-fonts/cinzel/700Bold';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat/400Regular';
import { PlusJakartaSans_400Regular } from '@expo-google-fonts/plus-jakarta-sans/400Regular';
import { PlusJakartaSans_500Medium } from '@expo-google-fonts/plus-jakarta-sans/500Medium';
import { PlusJakartaSans_600SemiBold } from '@expo-google-fonts/plus-jakarta-sans/600SemiBold';
import { PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans/700Bold';

/**
 * Font map passed to `useFonts()` in the root layout. Each key becomes a
 * fontFamily name, mirrored by the `fontFamily` tokens in tailwind.config.js
 * (e.g. `font-cinzel-bold` → "Cinzel_700Bold"). Imported via per-weight subpaths
 * so only the weights we use are bundled.
 */
export const appFonts = {
  Cinzel_400Regular,
  Cinzel_500Medium,
  Cinzel_700Bold,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  Montserrat_400Regular,
} as const;
