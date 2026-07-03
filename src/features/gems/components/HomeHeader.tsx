import { Ionicons } from '@expo/vector-icons';
import { Text as RNText, TextInput, View } from 'react-native';

interface HomeHeaderProps {
  userName: string;
  currency: string;
  search: string;
  onChangeSearch: (value: string) => void;
}

/** Home top bar: greeting, currency chip, and the "search the vault" field. */
export function HomeHeader({ userName, currency, search, onChangeSearch }: HomeHeaderProps) {
  return (
    <View className="gap-3 border-b border-gold-border/10 bg-[rgba(14,14,14,0.92)] px-4 pb-3 pt-6">
      <View className="flex-row items-center justify-between">
        <View>
          <RNText className="font-jakarta text-[12px] leading-6 text-gold">Welcome,</RNText>
          <RNText className="font-jakarta-bold text-[20px] leading-6 text-gold">{userName}</RNText>
        </View>
        <View className="flex-row items-center gap-1">
          <Ionicons name="globe-outline" size={12} color="rgba(223,194,160,0.8)" />
          <RNText className="font-jakarta text-[10px] tracking-[1px] text-[rgba(223,194,160,0.8)]">
            {currency}
          </RNText>
        </View>
      </View>
      <View className="flex-row items-center gap-3 rounded-full border border-gold-border/20 bg-[rgba(28,27,27,0.4)] px-4 py-3">
        <Ionicons name="search" size={16} color="rgba(78,69,59,0.9)" />
        <TextInput
          value={search}
          onChangeText={onChangeSearch}
          placeholder="Search the vault..."
          placeholderTextColor="rgba(78,69,59,0.7)"
          returnKeyType="search"
          className="flex-1 p-0 font-jakarta text-[12px] text-pearl"
        />
      </View>
    </View>
  );
}
