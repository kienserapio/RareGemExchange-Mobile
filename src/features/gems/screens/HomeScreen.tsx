import { useRouter } from 'expo-router';
import { useCallback } from 'react';

import { Screen } from '@/components/ui';
import { ROUTES } from '@/constants';

import { GemList } from '../components/GemList';
import { useGems } from '../hooks/useGems';
import type { Gem } from '../types';

/** Home = the gem catalog. Lives in the (app) tab group. */
export function HomeScreen() {
  const router = useRouter();
  const { gems } = useGems();

  const handleSelectGem = useCallback(
    (gem: Gem) => {
      router.push(ROUTES.gemDetail(gem.id));
    },
    [router],
  );

  return (
    <Screen safe={false}>
      <GemList gems={gems} onSelectGem={handleSelectGem} />
    </Screen>
  );
}
