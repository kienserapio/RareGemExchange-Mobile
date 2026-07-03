import { useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { View } from 'react-native';

import { ROUTES } from '@/constants';

import { OnboardingBackground } from '../components/OnboardingBackground';
import { OnboardingSlide } from '../components/OnboardingSlide';
import { ProgressBars } from '../components/ProgressBars';
import { useOnboarding } from '../context/OnboardingContext';
import { onboardingSteps } from '../data/onboardingSteps';

/**
 * The 3-step splash / onboarding flow. The background persists while slide
 * content animates in on each step; the CTA advances the step and, on the last
 * step, completes onboarding and routes to the auth screen.
 */
export function OnboardingScreen() {
  const router = useRouter();
  const { completeOnboarding } = useOnboarding();
  const [stepIndex, setStepIndex] = useState(0);
  const step = onboardingSteps[stepIndex];

  const handleNext = useCallback(() => {
    if (stepIndex < onboardingSteps.length - 1) {
      setStepIndex(stepIndex + 1);
      return;
    }
    completeOnboarding();
    router.replace(ROUTES.login);
  }, [stepIndex, completeOnboarding, router]);

  return (
    <OnboardingBackground>
      <View className="items-center">
        <OnboardingSlide key={step.id} step={step} onNext={handleNext} />
        <View className="pt-16">
          <ProgressBars count={onboardingSteps.length} activeIndex={stepIndex} />
        </View>
      </View>
    </OnboardingBackground>
  );
}
