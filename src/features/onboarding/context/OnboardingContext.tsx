import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

interface OnboardingContextValue {
  hasCompletedOnboarding: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
}

const OnboardingContext = createContext<OnboardingContextValue | undefined>(undefined);

/**
 * Tracks whether the user has passed the onboarding / splash flow. In-memory
 * only, so the splash shows on every cold start (per the requested behaviour).
 *
 * TODO: Persist with AsyncStorage / expo-secure-store to show it only once.
 */
export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  const completeOnboarding = useCallback(() => setHasCompletedOnboarding(true), []);
  const resetOnboarding = useCallback(() => setHasCompletedOnboarding(false), []);

  const value = useMemo<OnboardingContextValue>(
    () => ({ hasCompletedOnboarding, completeOnboarding, resetOnboarding }),
    [hasCompletedOnboarding, completeOnboarding, resetOnboarding],
  );

  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
}

/** Access the onboarding context. Throws if used outside <OnboardingProvider>. */
export function useOnboarding(): OnboardingContextValue {
  const ctx = useContext(OnboardingContext);
  if (ctx === undefined) {
    throw new Error('useOnboarding must be used within an <OnboardingProvider>.');
  }
  return ctx;
}
