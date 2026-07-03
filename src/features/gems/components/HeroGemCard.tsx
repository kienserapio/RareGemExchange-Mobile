import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, StyleSheet, Text as RNText, View } from 'react-native';

import type { FeaturedGem } from '../types';

interface HeroGemCardProps {
  gem: FeaturedGem;
  onPress?: () => void;
  onInquire?: () => void;
}

/** Large "primary highlight" hero card for the home gallery. */
export function HeroGemCard({ gem, onPress, onInquire }: HeroGemCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="h-[320px] w-full justify-end overflow-hidden rounded-xl border border-[rgba(197,160,113,0.12)]"
    >
      <Image source={gem.image} resizeMode="cover" style={StyleSheet.absoluteFill} />
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.2)', '#000000']}
        locations={[0, 0.5, 1]}
        style={StyleSheet.absoluteFill}
      />
      <View className="gap-3 p-5">
        <View className="gap-0.5">
          <RNText className="font-cinzel-bold text-[20px] leading-7 tracking-[0.5px] text-pearl">
            {gem.name}
          </RNText>
          <RNText className="font-jakarta text-[10px] uppercase tracking-[2px] text-[rgba(223,194,160,0.8)]">
            {gem.meta}
          </RNText>
        </View>
        <View className="flex-row items-center justify-between pt-1">
          <RNText className="font-cinzel text-[14px] text-gold">{gem.priceLabel}</RNText>
          <Pressable
            onPress={onInquire}
            hitSlop={6}
            className="rounded border border-[rgba(232,192,142,0.2)] bg-[rgba(232,192,142,0.1)] px-4 py-1.5"
          >
            <RNText className="font-jakarta-semibold text-[9px] uppercase tracking-[0.9px] text-gold">
              Inquire
            </RNText>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}
