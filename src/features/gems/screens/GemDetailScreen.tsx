import { Stack } from 'expo-router';
import { Text as RNText, View } from 'react-native';

import { GemDetail } from '../components/GemDetail';
import { useFeaturedGem } from '../hooks/useGems';

interface GemDetailScreenProps {
  gemId: string;
}

/** Detail screen for the dynamic gem/[id] route (Figma "Gem Details" design). */
export function GemDetailScreen({ gemId }: GemDetailScreenProps) {
  const gem = useFeaturedGem(gemId);

  if (!gem) {
    return (
      <>
        <Stack.Screen options={{ headerShown: true, title: 'Gem not found' }} />
        <View className="flex-1 items-center justify-center gap-2 bg-charcoal p-6">
          <RNText className="font-cinzel-bold text-lg text-gold">Gem not found</RNText>
          <RNText className="font-jakarta text-sm text-subtitle">
            We couldn&apos;t find a gem with id &quot;{gemId}&quot;.
          </RNText>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <GemDetail gem={gem} />
    </>
  );
}
