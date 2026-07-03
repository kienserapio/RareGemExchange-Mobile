import { images } from '@/constants';

import type { FeaturedGem } from '../types';

/**
 * Curated home-gallery gems (Figma home design). featuredGems[0] is the hero;
 * the rest fill the two-column grid.
 *
 * TODO: Replace with a real "featured" query from the backend.
 */
export const featuredGems: FeaturedGem[] = [
  {
    id: 'argyle-rose',
    name: 'The Argyle Rose',
    image: images.gemArgyleRose,
    meta: 'VIVID PINK • 2.45 CT',
    priceLabel: 'Price on Request',
  },
  {
    id: 'mogok-crimson',
    name: 'Mogok Crimson',
    image: images.gemMogokCrimson,
    meta: 'RUBY • 4.12 CT',
  },
  {
    id: 'sunfire-radiant',
    name: 'Sunfire Radiant',
    image: images.gemSunfireRadiant,
    meta: 'YELLOW • 8.05 CT',
  },
];
