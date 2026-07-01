import { Image, View } from 'react-native';

import { Card, Text } from '@/components/ui';
import { formatPrice } from '@/utils';

import type { Gem } from '../types';

interface GemCardProps {
  gem: Gem;
  onPress: (gem: Gem) => void;
}

/** Compact catalog card. Tapping it selects the gem (see HomeScreen). */
export function GemCard({ gem, onPress }: GemCardProps) {
  return (
    <Card className="flex-1 gap-3" onPress={() => onPress(gem)}>
      <Image
        source={{ uri: gem.imageUrl }}
        className="h-32 w-full rounded-xl bg-gray-100"
        resizeMode="cover"
      />
      <View className="gap-1">
        <Text variant="subtitle" numberOfLines={1}>
          {gem.name}
        </Text>
        <Text variant="caption">
          {gem.type} · {gem.caratWeight} ct
        </Text>
        <Text variant="label" className="text-indigo-600">
          {formatPrice(gem.price, gem.currency)}
        </Text>
      </View>
    </Card>
  );
}
