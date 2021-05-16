export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

export type Nullify<T, K extends keyof T> = {
  [X in K]: T[X] | null;
};
