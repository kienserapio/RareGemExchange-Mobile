export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
}

/** Steps of the registration wizard (details, then mobile OTP, then email OTP). */
export type RegistrationStep = 'details' | 'verifyMobile' | 'verifyEmail';
