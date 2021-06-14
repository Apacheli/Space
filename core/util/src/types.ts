/** The type can be used with `await` */
export type Awaitable<V> = V | PromiseLike<V>;

/** Make some properties within an interface partial */
export type PartialKeys<T, K extends keyof T> =
  & Omit<T, K>
  & Partial<Pick<T, K>>;

/** Make every property within an interface partial, with exceptions */
export type PartialExcept<T, K extends keyof T> =
  & Omit<Partial<T>, K>
  & Required<Pick<T, K>>;

/** Make some properties within an interface required */
export type RequiredKeys<T, K extends keyof T> =
  & Omit<T, K>
  & Required<Pick<T, K>>;

/** Make every property within an interface required, with exceptions */
export type RequiredExcept<T, K extends keyof T> =
  & Omit<Required<T>, K>
  & Partial<Pick<T, K>>;

/** Make every property within an interface nullable */
export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

/** Make some properties within an interface nullable */
export type Nullify<T, K extends keyof T> = Omit<T, K> & Nullable<Pick<T, K>>;
