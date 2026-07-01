import { Stack } from 'expo-router';
import { View } from 'react-native';

import { Text } from '@/components/ui';

import { GemDetail } from '../components/GemDetail';
import { useGem } from '../hooks/useGems';

interface GemDetailScreenProps {
  gemId: string;
}

/** Detail screen for the dynamic gem/[id] route. */
export function GemDetailScreen({ gemId }: GemDetailScreenProps) {
  const { gem } = useGem(gemId);

  if (!gem) {
    return (
      <View className="flex-1 items-center justify-center gap-2 bg-white p-6">
        <Text variant="subtitle">Gem not found.</Text>
        <Text variant="caption">We couldn&apos;t find a gem with id &quot;{gemId}&quot;.</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: gem.name }} />
      <GemDetail gem={gem} />
    </>
  );
}
