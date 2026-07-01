import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

import type { AuthUser, LoginCredentials } from '../types';

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  signIn: (credentials: LoginCredentials) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

/**
 * In-memory auth provider. This is a placeholder that fakes a signed-in user so
 * the protected (app) route group and login flow are fully wired.
 *
 * TODO: Replace with real authentication — call the auth API in `signIn`,
 * persist the session token (e.g. expo-secure-store), and hydrate on launch.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const signIn = useCallback(async ({ email }: LoginCredentials) => {
    // TODO: Exchange credentials for a session via the real auth API.
    setUser({ id: 'mock-user-1', email, name: 'Rare Gem Collector' });
  }, []);

  const signOut = useCallback(() => {
    // TODO: Clear the persisted session/token.
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, isAuthenticated: user !== null, signIn, signOut }),
    [user, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/** Access the auth context. Throws if used outside of <AuthProvider>. */
export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error('useAuth must be used within an <AuthProvider>.');
  }
  return ctx;
}
