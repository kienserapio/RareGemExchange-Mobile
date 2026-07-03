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
 * A curated gem shown on the home gallery. Uses a local image asset and
 * pre-formatted display labels (distinct from the remote-style `Gem`).
 */
export interface FeaturedGem {
  id: string;
  name: string;
  /** Local image asset (Metro asset id). */
  image: number;
  /** Uppercase meta line, e.g. "RUBY • 4.12 CT". */
  meta: string;
  /** Price label for the hero card, e.g. "Price on Request". */
  priceLabel?: string;
}
