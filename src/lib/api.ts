/**
 * Placeholder API client. This is where a real HTTP client (fetch/axios), base
 * URL, and auth headers will live. Methods currently throw so accidental use in
 * this frontend-only scaffold is obvious and loud.
 *
 * TODO: Replace with a real client and point `baseUrl` at the production API.
 */
export interface ApiClientConfig {
  baseUrl: string;
}

export const apiConfig: ApiClientConfig = {
  // TODO: Move to an env-driven value (e.g. process.env.EXPO_PUBLIC_API_URL).
  baseUrl: 'https://api.raregem.example',
};

// TODO: Implement typed request helpers (get/post/put/delete) with auth headers.
export async function apiRequest<T>(path: string): Promise<T> {
  throw new Error(`apiRequest("${path}") is not implemented — this scaffold uses mock data only.`);
}
