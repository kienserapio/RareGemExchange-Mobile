export interface OnboardingStep {
  id: string;
  /** Small line above the headline (e.g. "WELCOME TO"). Hero slide only. */
  eyebrow?: string;
  /** Main headline. May contain "\n" for explicit line breaks. */
  title: string;
  /** 'hero' renders a larger headline (first slide); 'standard' is smaller. */
  variant: 'hero' | 'standard';
  /** Supporting copy under the headline (Jakarta). */
  subtitle?: string;
  /** CTA button label. */
  buttonLabel: string;
}
