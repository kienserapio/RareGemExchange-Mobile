import { Image, ScrollView, View } from 'react-native';

import { Text } from '@/components/ui';
import { formatPrice } from '@/utils';

import type { Gem } from '../types';

interface GemDetailProps {
  gem: Gem;
}

/** Full detail view for a single gem. */
export function GemDetail({ gem }: GemDetailProps) {
  const specs: { label: string; value: string }[] = [
    { label: 'Type', value: gem.type },
    { label: 'Carat', value: `${gem.caratWeight} ct` },
    { label: 'Origin', value: gem.origin },
    { label: 'Color', value: gem.color },
    { label: 'Clarity', value: gem.clarity },
    { label: 'Status', value: gem.isAvailable ? 'Available' : 'Reserved' },
  ];

  return (
    <ScrollView className="flex-1 bg-white" contentContainerClassName="pb-10">
      <Image
        source={{ uri: gem.imageUrl }}
        className="h-72 w-full bg-gray-100"
        resizeMode="cover"
      />
      <View className="gap-5 p-6">
        <View className="gap-1">
          <Text variant="title">{gem.name}</Text>
          <Text variant="subtitle" className="text-indigo-600">
            {formatPrice(gem.price, gem.currency)}
          </Text>
        </View>

        <View className="flex-row flex-wrap gap-2">
          {specs.map((spec) => (
            <View key={spec.label} className="rounded-lg bg-gray-100 px-3 py-2">
              <Text variant="caption">{spec.label}</Text>
              <Text variant="label" className="text-gray-900">
                {spec.value}
              </Text>
            </View>
          ))}
        </View>

        <Text variant="body" className="leading-6 text-gray-600">
          {gem.description}
        </Text>
      </View>
    </ScrollView>
  );
}
