import { LinearGradient } from 'expo-linear-gradient';
import { Image, View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

import { KeyboardAwareScrollView } from '@/components/ui';
import { images } from '@/constants';
import { ProgressBars } from '@/features/onboarding';

import { BrandHeader } from '../components/BrandHeader';
import { LegalFooter } from '../components/LegalFooter';
import { RegistrationDetailsForm } from '../components/RegistrationDetailsForm';
import { RegistrationOtpStep } from '../components/RegistrationOtpStep';
import { useRegistration } from '../hooks/useRegistration';

const STEP_INDEX = { details: 0, verifyMobile: 1, verifyEmail: 2 } as const;

/**
 * Registration wizard implementing the Figma "Sign Up" design, extended with
 * mobile + email OTP verification. No backend yet — OTP send/verify and the
 * final account creation are simulated (see useRegistration / useOtpChannel).
 */
export function RegistrationScreen() {
  const registration = useRegistration();

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
        <View className="w-full max-w-[448px] gap-8 py-6">
          <Animated.View entering={FadeInDown.duration(600)}>
            <BrandHeader />
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(600).delay(80)}>
            <ProgressBars count={3} activeIndex={STEP_INDEX[registration.step]} />
          </Animated.View>

          <Animated.View key={registration.step} entering={FadeInDown.duration(500)}>
            {registration.step === 'details' ? (
              <RegistrationDetailsForm registration={registration} />
            ) : registration.step === 'verifyMobile' ? (
              <RegistrationOtpStep
                title="Verify Your Mobile"
                destination={`${registration.countryCode.dialCode} ${registration.mobileNumber}`}
                otp={registration.mobileOtp}
                onBack={() => registration.setStep('details')}
              />
            ) : (
              <RegistrationOtpStep
                title="Verify Your Email"
                destination={registration.email}
                otp={registration.emailOtp}
                onBack={() => registration.setStep('verifyMobile')}
              />
            )}
          </Animated.View>

          <Animated.View entering={FadeIn.duration(600).delay(120)}>
            <LegalFooter />
          </Animated.View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
