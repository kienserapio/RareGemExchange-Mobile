import { useMemo } from 'react';

import { featuredGems } from '../data/featuredGems';
import { mockGems } from '../data/mockGems';
import type { FeaturedGem, Gem } from '../types';

/**
 * Returns the gem catalog. Currently backed by mock data.
 *
 * TODO: Replace with real data fetching (e.g. React Query + `apiRequest`).
 */
export function useGems(): { gems: Gem[]; isLoading: boolean } {
  const gems = useMemo(() => mockGems, []);
  return { gems, isLoading: false };
}

/**
 * Returns a single gem by id, or `undefined` if not found.
 *
 * TODO: Replace with a real fetch-by-id request.
 */
export function useGem(id: string | undefined): { gem: Gem | undefined; isLoading: boolean } {
  const gem = useMemo(() => mockGems.find((item) => item.id === id), [id]);
  return { gem, isLoading: false };
}

/**
 * Returns a single featured gem (home gallery + detail page) by id, or
 * `undefined` if not found.
 */
export function useFeaturedGem(id: string | undefined): FeaturedGem | undefined {
  return useMemo(() => featuredGems.find((item) => item.id === id), [id]);
}
