/** Shared, cross-feature TypeScript types. */

export type Nullable<T> = T | null;

/** Generic async-data container for future data-fetching hooks. */
export interface AsyncState<T> {
  data: Nullable<T>;
  isLoading: boolean;
  error: Nullable<string>;
}
