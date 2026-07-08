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
    rarity: 'EXTREMELY RARE',
    mine: 'ARGYLE MINE',
    subtitle: 'FANCY VIVID PINK DIAMOND',
    origin: 'Argyle, Australia',
    caratWeight: 2.45,
    clarity: 'Internally Flawless (IF)',
    cut: 'Cushion',
    price: null,
    currency: 'USD',
    description:
      'A true miracle of nature, The Argyle Rose represents the pinnacle of pink diamond rarity. Mined from the legendary, now-depleted Argyle mine in Western Australia, this exceptional gem exhibits a mesmerizing saturation of vibrant pink with subtle rose undertones.',
  },
  {
    id: 'mogok-crimson',
    name: 'Mogok Crimson',
    image: images.gemMogokCrimson,
    meta: 'RUBY • 4.12 CT',
    rarity: 'MUSEUM GRADE',
    mine: 'MOGOK VALLEY',
    subtitle: 'PIGEON BLOOD RED RUBY',
    origin: 'Mogok, Myanmar',
    caratWeight: 4.12,
    clarity: 'VVS (Loupe Clean)',
    cut: 'Oval',
    price: 52000,
    currency: 'USD',
    priceCaption: 'Includes Insured Priority Delivery',
    description:
      'The legendary "pigeon blood" hue prized above all others, Mogok Crimson carries the intense, saturated red that has defined the world\'s finest rubies for centuries. Sourced from the storied Mogok Valley, its clarity and fire are exceptional for its size.',
  },
  {
    id: 'sunfire-radiant',
    name: 'Sunfire Radiant',
    image: images.gemSunfireRadiant,
    meta: 'YELLOW • 8.05 CT',
    rarity: 'RARE FIND',
    mine: 'ELLENDALE FIELD',
    subtitle: 'FANCY VIVID YELLOW DIAMOND',
    origin: 'Ellendale, Australia',
    caratWeight: 8.05,
    clarity: 'VS1',
    cut: 'Radiant',
    price: 39500,
    currency: 'USD',
    priceCaption: 'Includes Insured Priority Delivery',
    description:
      'Sunfire Radiant blazes with an intense, evenly saturated yellow rarely seen at this size. Cut to maximize its fire, this fancy vivid diamond commands attention from every angle while remaining exceptionally clean to the eye.',
  },
];
