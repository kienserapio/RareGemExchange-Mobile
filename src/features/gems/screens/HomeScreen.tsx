import { Ionicons } from '@expo/vector-icons';
import { useCallback, useState } from 'react';
import { Pressable, ScrollView, Text as RNText, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomNav, type BottomNavItem } from '@/components/ui';

import { CategoryChips } from '../components/CategoryChips';
import { HeroGemCard } from '../components/HeroGemCard';
import { HomeHeader } from '../components/HomeHeader';
import { SecondaryGemCard } from '../components/SecondaryGemCard';
import { gemCategories } from '../data/categories';
import { featuredGems } from '../data/featuredGems';

const navItems: BottomNavItem[] = [
  { key: 'home', label: 'Home', icon: 'home-outline' },
  { key: 'browse', label: 'Browse', icon: 'diamond-outline' },
  { key: 'inquiries', label: 'Inquiries', icon: 'chatbubble-outline' },
  { key: 'profile', label: 'Profile', icon: 'person-outline' },
];

/**
 * Home = the gem gallery (Figma home design). Fixed header + bottom nav with a
 * scrolling gallery between. The bottom nav is a placeholder (moves the highlight
 * only). Card / inquire / search / pagination handlers are placeholders.
 */
export function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeNav, setActiveNav] = useState('browse');

  const hero = featuredGems[0];
  const secondaryGems = featuredGems.slice(1);

  const handlePlaceholder = useCallback(() => {
    // TODO: wire gem inquiry / pagination to real actions once the backend exists.
  }, []);

  return (
    <View className="flex-1 bg-charcoal">
      <View style={{ paddingTop: insets.top }} className="bg-[rgba(14,14,14,0.92)]">
        <HomeHeader userName="John" currency="AUD" search={search} onChangeSearch={setSearch} />
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-5 pb-8 pt-4"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="px-4">
          <HeroGemCard gem={hero} onInquire={handlePlaceholder} />
        </View>

        <CategoryChips
          categories={gemCategories}
          activeIndex={activeCategory}
          onSelect={setActiveCategory}
        />

        <View className="flex-row gap-3 px-4">
          {secondaryGems.map((gem) => (
            <SecondaryGemCard key={gem.id} gem={gem} />
          ))}
        </View>

        <Pressable className="items-center gap-1 pt-1" onPress={handlePlaceholder}>
          <RNText className="font-jakarta text-[9px] uppercase tracking-[2.7px] text-[rgba(210,196,183,0.6)]">
            Discover More
          </RNText>
          <Ionicons name="chevron-down" size={12} color="rgba(210,196,183,0.6)" />
        </Pressable>
      </ScrollView>

      <BottomNav items={navItems} activeKey={activeNav} onSelect={setActiveNav} />
    </View>
  );
}
