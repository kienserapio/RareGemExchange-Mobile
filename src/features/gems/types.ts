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
