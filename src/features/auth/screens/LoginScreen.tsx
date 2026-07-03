import { LinearGradient } from 'expo-linear-gradient';
import { Image, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

import { KeyboardAwareScrollView } from '@/components/ui';
import { images } from '@/constants';

import { BrandHeader } from '../components/BrandHeader';
import { LegalFooter } from '../components/LegalFooter';
import { LoginForm } from '../components/LoginForm';

/**
 * Auth screen (membership application) implementing the Figma "Sign Up" design.
 * KeyboardAwareScrollView keeps the lower fields above the keyboard and applies
 * safe-area insets.
 */
export function LoginScreen() {
  return (
    <View className="flex-1 bg-black">
      <Image
        source={images.background}
        resizeMode="cover"
        className="absolute inset-0 h-full w-full opacity-50"
      />
      <LinearGradient
        colors={['rgba(197,160,113,0.12)', 'rgba(0,0,0,0)']}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 320 }}
      />
      <KeyboardAwareScrollView contentClassName="items-center px-5">
        <View className="w-full max-w-[448px] gap-10 py-6">
          <Animated.View entering={FadeInDown.duration(600)}>
            <BrandHeader />
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(600).delay(120)}>
            <LoginForm />
          </Animated.View>
          <Animated.View entering={FadeIn.duration(600).delay(260)}>
            <LegalFooter />
          </Animated.View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
