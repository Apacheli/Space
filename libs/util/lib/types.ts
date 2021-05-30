/** Makes some properties within an interface partial */
export type PartialKeys<T, K extends keyof T> =
  & Omit<T, K>
  & Partial<Pick<T, K>>;

/** Makes some properties within an interface required */
export type RequiredKeys<T, K extends keyof T> =
  & Omit<T, K>
  & Required<Pick<T, K>>;

/** Makes every property within an interface partial, with exceptions */
export type PartialExcept<T, K extends keyof T> =
  & Omit<Partial<T>, K>
  & Required<Pick<T, K>>;

/** Makes every property within an interface required, with exceptions */
export type RequiredExcept<T, K extends keyof T> =
  & Omit<Required<T>, K>
  & Partial<Pick<T, K>>;

/** Makes every property within an interface nullable */
export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

/** Nullifies properties of an interface */
export type Nullify<T, K extends keyof T> = Omit<T, K> & Nullable<Pick<T, K>>;
