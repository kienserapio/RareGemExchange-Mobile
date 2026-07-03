import { Image, Text as RNText, View } from 'react-native';

import { images } from '@/constants';

/** Auth brand header: gem logo, Cinzel wordmark, and Montserrat tagline. */
export function BrandHeader() {
  return (
    <View className="items-center gap-2">
      <Image source={images.logo} resizeMode="contain" className="h-[60px] w-[58px]" />
      <RNText className="mt-1 text-center font-cinzel-bold text-[30px] uppercase leading-[38px] tracking-[0.8px] text-gold">
        {'RARE GEM\nEXCHANGE'}
      </RNText>
      <RNText className="max-w-[280px] text-center font-montserrat text-[12px] uppercase leading-[18px] tracking-[3px] text-tagline">
        Fine Gems • Rare Stones • Global Trading
      </RNText>
    </View>
  );
}
