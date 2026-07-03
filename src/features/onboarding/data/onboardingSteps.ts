import type { OnboardingStep } from '../types';

/** Content for the 3 onboarding / splash slides (see the Figma design). */
export const onboardingSteps: OnboardingStep[] = [
  {
    id: 'welcome',
    eyebrow: 'WELCOME TO',
    title: 'RARE GEM\nEXCHANGE!',
    variant: 'hero',
    buttonLabel: 'Start Your Journey',
  },
  {
    id: 'masterpieces',
    title: "NATURE'S\nMASTERPIECES",
    variant: 'standard',
    subtitle:
      'A curated selection of investment-grade diamonds, each with a story of fire and brilliance.',
    buttonLabel: 'Discover Excellence',
  },
  {
    id: 'join',
    title: 'START FINDING\nYOUR NEXT GEMS',
    variant: 'standard',
    subtitle:
      'Join an elite circle of collectors and gem inquirers, and gain access to the finest gems on the planet.',
    buttonLabel: 'Create Account',
  },
];
