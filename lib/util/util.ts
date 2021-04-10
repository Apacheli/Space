import { Snowflake } from "../../deps.ts";
import { green, yellow } from "./logger.ts";

export const sleep = <T>(delay?: number, value?: T) =>
  new Promise((resolve) => setTimeout(resolve, delay, value));

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

export const highlight = (input: string) =>
  input
    .replace(/".+?"|'.+?'/g, (str) => green(str))
    .replace(/\b\d+\b|true|false/g, (int) => yellow(int));
