import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, StyleSheet, Text as RNText, View } from 'react-native';

import type { FeaturedGem } from '../types';

interface SecondaryGemCardProps {
  gem: FeaturedGem;
  onPress?: () => void;
}

/** Compact gallery card for the two-column grid. */
export function SecondaryGemCard({ gem, onPress }: SecondaryGemCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="h-[240px] flex-1 justify-end overflow-hidden rounded-xl border border-[rgba(197,160,113,0.12)]"
    >
      <Image source={gem.image} resizeMode="cover" style={StyleSheet.absoluteFill} />
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)', '#000000']}
        locations={[0, 0.5, 1]}
        style={StyleSheet.absoluteFill}
      />
      <View className="gap-1 p-3">
        <RNText className="font-cinzel-bold text-[14px] leading-[17px] tracking-[0.35px] text-pearl">
          {gem.name}
        </RNText>
        <RNText className="font-jakarta text-[9px] uppercase tracking-[0.9px] text-[rgba(223,194,160,0.7)]">
          {gem.meta}
        </RNText>
      </View>
    </Pressable>
  );
}
