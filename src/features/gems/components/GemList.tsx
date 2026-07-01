import { FlatList } from 'react-native';

import type { Gem } from '../types';
import { GemCard } from './GemCard';

interface GemListProps {
  gems: Gem[];
  onSelectGem: (gem: Gem) => void;
}

/** Two-column virtualized grid of gem cards. */
export function GemList({ gems, onSelectGem }: GemListProps) {
  return (
    <FlatList
      data={gems}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => <GemCard gem={item} onPress={onSelectGem} />}
      columnWrapperClassName="gap-4"
      contentContainerClassName="gap-4 p-4"
      showsVerticalScrollIndicator={false}
    />
  );
}
