import type { Snowflake } from "../api/types/reference.ts";

export type ActualSnowflake = bigint | Snowflake;

export type PossiblePromise<V> = V | Promise<V>;

export type PartialKeys<T, K extends keyof T> =
  & Omit<T, K>
  & Partial<Pick<T, K>>;
export type RequiredKeys<T, K extends keyof T> =
  & Omit<T, K>
  & Required<Pick<T, K>>;
export type PartialExcept<T, K extends keyof T> =
  & Omit<Partial<T>, K>
  & Required<Pick<T, K>>;
export type RequiredExcept<T, K extends keyof T> =
  & Omit<Required<T>, K>
  & Partial<Pick<T, K>>;

export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

export type Nullify<T, K extends keyof T> = Omit<T, K> & Nullable<Pick<T, K>>;
