import { Text as RNText, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { CtaButton, GradientText } from '@/components/ui';
import { cn } from '@/utils';

import type { OnboardingStep } from '../types';

interface OnboardingSlideProps {
  step: OnboardingStep;
  onNext: () => void;
}

/**
 * Per-step onboarding content (eyebrow, headline, subtitle, CTA) with staggered
 * entrance animations. Re-mounted per step (keyed by id) so the animation replays.
 */
export function OnboardingSlide({ step, onNext }: OnboardingSlideProps) {
  const isHero = step.variant === 'hero';

  return (
    <View className="items-center px-5">
      {step.eyebrow ? (
        <Animated.View entering={FadeInDown.duration(500)}>
          <GradientText className="mb-2 text-center font-cinzel-bold text-[16px] uppercase tracking-[3px]">
            {step.eyebrow}
          </GradientText>
        </Animated.View>
      ) : null}

      <Animated.View entering={FadeInDown.duration(500).delay(80)}>
        <GradientText
          className={cn(
            'text-center font-cinzel-bold',
            isHero ? 'text-[42px] leading-[48px]' : 'text-[24px] leading-[30px]',
          )}
        >
          {step.title}
        </GradientText>
      </Animated.View>

      {step.subtitle ? (
        <Animated.View entering={FadeInDown.duration(500).delay(160)}>
          <RNText className="mt-4 max-w-[320px] text-center font-jakarta text-[12px] leading-[20px] text-subtitle">
            {step.subtitle}
          </RNText>
        </Animated.View>
      ) : null}

      <Animated.View
        entering={FadeInDown.duration(500).delay(240)}
        style={{ width: '100%', alignItems: 'center', marginTop: 32 }}
      >
        <CtaButton label={step.buttonLabel} onPress={onNext} />
      </Animated.View>
    </View>
  );
}
