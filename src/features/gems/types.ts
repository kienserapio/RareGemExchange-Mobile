export type GemType =
  'Diamond' | 'Ruby' | 'Sapphire' | 'Emerald' | 'Amethyst' | 'Topaz' | 'Opal' | 'Aquamarine';

export interface Gem {
  id: string;
  name: string;
  type: GemType;
  /** Weight in carats. */
  caratWeight: number;
  /** Price in the smallest sensible whole unit of `currency`. */
  price: number;
  /** ISO 4217 currency code, e.g. "USD". */
  currency: string;
  origin: string;
  color: string;
  clarity: string;
  imageUrl: string;
  description: string;
  isAvailable: boolean;
  /** ISO 8601 timestamp of when the gem entered the collection. */
  createdAt: string;
}

/**
 * A curated gem shown on the home gallery and its detail page. Uses a local
 * image asset and pre-formatted display labels (distinct from the
 * remote-style `Gem`).
 */
export interface FeaturedGem {
  id: string;
  name: string;
  /** Local image asset (Metro asset id). */
  image: number;
  /** Uppercase meta line shown on the home cards, e.g. "RUBY • 4.12 CT". */
  meta: string;
  /** Price label for the hero card, e.g. "Price on Request". */
  priceLabel?: string;

  // --- Detail page fields ---
  /** Uppercase rarity badge shown over the hero image, e.g. "EXTREMELY RARE". */
  rarity: string;
  /** Uppercase mine/source badge shown over the hero image, e.g. "ARGYLE MINE". */
  mine: string;
  /** Uppercase gem description under the title, e.g. "FANCY VIVID PINK DIAMOND". */
  subtitle: string;
  /** Full origin location, e.g. "Argyle, Australia". */
  origin: string;
  caratWeight: number;
  clarity: string;
  cut: string;
  /** Price in the smallest sensible whole unit of `currency`, or `null` for "Price Upon Request". */
  price: number | null;
  /** ISO 4217 currency code, e.g. "USD". */
  currency: string;
  /** Shown next to the price, e.g. "Includes Insured Priority Delivery". */
  priceCaption?: string;
  description: string;
}
