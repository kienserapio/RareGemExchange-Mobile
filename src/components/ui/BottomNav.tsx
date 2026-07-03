import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text as RNText, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '@/constants';
import { cn } from '@/utils';

type IoniconName = keyof typeof Ionicons.glyphMap;

export interface BottomNavItem {
  key: string;
  label: string;
  icon: IoniconName;
}

interface BottomNavProps {
  items: BottomNavItem[];
  activeKey: string;
  onSelect: (key: string) => void;
}

/**
 * Custom bottom navigation bar (Figma home). Placeholder for now — `onSelect`
 * just moves the active highlight; it does not navigate anywhere yet.
 */
export function BottomNav({ items, activeKey, onSelect }: BottomNavProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-row items-start justify-around border-t border-gold-border/10 bg-[rgba(14,14,14,0.95)] px-2 pt-3"
      style={{ paddingBottom: insets.bottom + 10 }}
    >
      {items.map((item) => {
        const active = item.key === activeKey;
        return (
          <Pressable
            key={item.key}
            onPress={() => onSelect(item.key)}
            className="w-16 items-center gap-1.5"
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
            hitSlop={6}
          >
            <Ionicons
              name={item.icon}
              size={active ? 22 : 20}
              color={active ? colors.gold : colors.muted}
            />
            <RNText
              className={cn(
                'font-jakarta-semibold text-[9px] uppercase tracking-[1.35px]',
                active ? 'text-gold' : 'text-muted',
              )}
            >
              {item.label}
            </RNText>
          </Pressable>
        );
      })}
    </View>
  );
}
