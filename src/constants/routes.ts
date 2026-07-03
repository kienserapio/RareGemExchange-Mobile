/**
 * Centralized route paths. Route groups such as (auth) / (app) do not appear in
 * the URL, so these map to the public paths Expo Router resolves at runtime.
 */
export const ROUTES = {
  onboarding: '/onboarding',
  login: '/login',
  home: '/',
  inquiry: '/inquiry',
  gemDetail: (id: string) => `/gem/${id}`,
} as const;
