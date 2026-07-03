import { Pressable, ScrollView, Text as RNText } from 'react-native';

import { cn } from '@/utils';

interface CategoryChipsProps {
  categories: readonly string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

/** Horizontally-scrolling category filter chips (full-bleed). */
export function CategoryChips({ categories, activeIndex, onSelect }: CategoryChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-2 px-4"
    >
      {categories.map((label, index) => {
        const active = index === activeIndex;
        return (
          <Pressable
            key={label}
            onPress={() => onSelect(index)}
            className={cn(
              'rounded-full border px-5 py-1.5',
              active ? 'border-gold/40 bg-[rgba(197,160,113,0.1)]' : 'border-[rgba(53,53,53,0.4)]',
            )}
          >
            <RNText
              className={cn(
                'font-jakarta text-[10px] uppercase tracking-[1px]',
                active ? 'text-gold' : 'text-[rgba(210,196,183,0.8)]',
              )}
            >
              {label}
            </RNText>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
