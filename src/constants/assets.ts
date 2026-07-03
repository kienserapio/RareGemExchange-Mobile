import gemArgyleRose from '../../assets/images/gem-argyle-rose.jpg';
import gemMogokCrimson from '../../assets/images/gem-mogok-crimson.jpg';
import gemSunfireRadiant from '../../assets/images/gem-sunfire-radiant.jpg';
import background from '../../assets/images/background.jpg';
import logo from '../../assets/images/logo-gem.png';

/** Static image assets (Metro asset ids), centralized for reuse across features. */
export const images = {
  /** Cinematic gem-canyon backdrop used by onboarding + auth. */
  background,
  /** Gold hexagonal gem wordmark logo. */
  logo,
  /** Home hero + grid gems (from the Figma home design). */
  gemArgyleRose,
  gemMogokCrimson,
  gemSunfireRadiant,
} as const;
