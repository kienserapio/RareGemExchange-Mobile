import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text as RNText, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomNav } from '@/components/ui';
import { colors, ROUTES } from '@/constants';
import { cn, formatPrice } from '@/utils';

import { bottomNavItems } from '../data/navItems';
import type { FeaturedGem } from '../types';

interface GemDetailProps {
  gem: FeaturedGem;
}

interface SpecCellProps {
  label: string;
  value: string;
}

function SpecCell({ label, value }: SpecCellProps) {
  return (
    <View style={{ width: '50%', paddingBottom: 16 }}>
      <RNText className="font-jakarta text-[10px] uppercase tracking-[0.5px] text-subtitle">
        {label}
      </RNText>
      <RNText style={{ marginTop: 2 }} className="font-jakarta text-sm text-pearl">
        {value}
      </RNText>
    </View>
  );
}

/** Full detail view for a single featured gem (Figma "Gem Details" design). */
export function GemDetail({ gem }: GemDetailProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [activeNav, setActiveNav] = useState('browse');

  const handlePlaceholder = useCallback(() => {
    // TODO: wire share / favorite to real actions once the backend exists.
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-6">
        <View className="h-[354px] w-full overflow-hidden border-b border-gold-border/20 bg-surface">
          <Image source={gem.image} resizeMode="cover" style={StyleSheet.absoluteFill} />

          <LinearGradient
            colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0)']}
            style={[StyleSheet.absoluteFill, { height: insets.top + 96 }]}
          />

          <View style={{ paddingTop: insets.top }} className="absolute inset-x-0 top-0">
            <View className="flex-row items-center justify-between p-4">
              <Pressable
                onPress={() => router.back()}
                hitSlop={6}
                className="h-10 w-10 items-center justify-center rounded-full border border-gold-border/30 bg-black/40"
              >
                <Ionicons name="arrow-back" size={18} color={colors.pearl} />
              </Pressable>
              <View className="flex-row gap-3">
                <Pressable
                  onPress={handlePlaceholder}
                  hitSlop={6}
                  className="h-10 w-10 items-center justify-center rounded-full border border-gold-border/30 bg-black/40"
                >
                  <Ionicons name="share-social-outline" size={18} color={colors.pearl} />
                </Pressable>
                <Pressable
                  onPress={handlePlaceholder}
                  hitSlop={6}
                  className="h-10 w-10 items-center justify-center rounded-full border border-gold-border/30 bg-black/40"
                >
                  <Ionicons name="heart-outline" size={18} color={colors.pearl} />
                </Pressable>
              </View>
            </View>
          </View>

          <View className="absolute bottom-[17px] right-4 items-end gap-2">
            <View className="border border-gold-border/40 bg-[rgba(19,19,19,0.8)] px-3 py-1.5">
              <RNText className="font-jakarta text-[10px] uppercase tracking-[0.5px] text-gold">
                {gem.rarity}
              </RNText>
            </View>
            <View className="border border-gold-border/40 bg-[rgba(19,19,19,0.8)] px-3 py-1.5">
              <RNText className="font-jakarta text-[10px] uppercase tracking-[0.5px] text-gold">
                {gem.mine}
              </RNText>
            </View>
          </View>
        </View>

        <View className="flex-row gap-3 px-5 pb-2 pt-4">
          {[0, 1, 2, 3].map((i) => (
            <View
              key={i}
              className={cn(
                'h-20 w-20 overflow-hidden rounded-lg border border-gold-border/30 bg-surface',
                i !== 0 && 'opacity-60',
              )}
            >
              <Image source={gem.image} resizeMode="cover" className="h-full w-full" />
            </View>
          ))}
        </View>

        <View className="px-5 pt-6">
          <RNText className="font-cinzel-bold text-2xl text-gold">{gem.name}</RNText>
          <RNText className="mt-1 font-jakarta text-[11px] uppercase tracking-[1.1px] text-[#ffddb5]">
            {gem.subtitle}
          </RNText>

          <View className="flex-row items-baseline gap-4 pb-8 pt-4">
            <RNText className="font-cinzel text-xl text-pearl">
              {gem.price != null ? formatPrice(gem.price, gem.currency) : 'Price Upon Request'}
            </RNText>
            {gem.price != null && gem.priceCaption ? (
              <RNText className="font-jakarta text-[11px] text-subtitle/40">
                {gem.priceCaption}
              </RNText>
            ) : null}
          </View>

          <RNText className="pb-8 font-jakarta text-xs leading-6 text-pearl">
            {gem.description}
          </RNText>

          <View style={{ height: 100, width: 300, backgroundColor: 'red' }} />
          <View className="border-y border-gold-border/20 pt-5" style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <SpecCell label="Origin" value={gem.origin} />
            <SpecCell label="Carat Weight" value={`${gem.caratWeight} ct`} />
            <SpecCell label="Clarity" value={gem.clarity} />
            <SpecCell label="Cut" value={gem.cut} />
          </View>
        </View>
      </ScrollView>

      <View className="border-t border-gold-border/20 bg-[rgba(19,19,19,0.95)] px-4 pb-4 pt-[17px]">
        <Pressable
          onPress={() => router.push(ROUTES.inquiry)}
          className="flex-row items-center justify-center gap-2 border border-[rgba(246,185,154,0.4)] py-[21px] active:opacity-80"
        >
          <Ionicons name="calendar-outline" size={14} color="#f6b99a" />
          <RNText className="font-jakarta text-xs uppercase tracking-[2.4px] text-[#f6b99a]">
            Inquire About This Gem
          </RNText>
        </Pressable>
      </View>

      <BottomNav items={bottomNavItems} activeKey={activeNav} onSelect={setActiveNav} />
    </View>
  );
}
