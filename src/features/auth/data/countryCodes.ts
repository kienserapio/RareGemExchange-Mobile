export interface CountryCode {
  iso: string;
  name: string;
  dialCode: string;
}

/** Dial codes for the collector base (see the Figma "Sign Up" design). */
export const countryCodes: CountryCode[] = [
  { iso: 'US', name: 'United States', dialCode: '+1' },
  { iso: 'CA', name: 'Canada', dialCode: '+1' },
  { iso: 'GB', name: 'United Kingdom', dialCode: '+44' },
  { iso: 'AE', name: 'United Arab Emirates', dialCode: '+971' },
  { iso: 'CH', name: 'Switzerland', dialCode: '+41' },
  { iso: 'SG', name: 'Singapore', dialCode: '+65' },
  { iso: 'HK', name: 'Hong Kong', dialCode: '+852' },
  { iso: 'AU', name: 'Australia', dialCode: '+61' },
  { iso: 'IN', name: 'India', dialCode: '+91' },
  { iso: 'JP', name: 'Japan', dialCode: '+81' },
  { iso: 'DE', name: 'Germany', dialCode: '+49' },
  { iso: 'FR', name: 'France', dialCode: '+33' },
];
