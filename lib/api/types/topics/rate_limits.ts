// deno-lint-ignore-file camelcase

/** https://discord.com/developers/docs/topics/rate-limits#exceeding-a-rate-limit-rate-limit-response-structure */
export interface RateLimitResponse {
  /** A message saying you are being rate limited. */
  message: string;
  /** The number of seconds to wait before submitting another request. */
  retry_after: number;
  /** A value indicating if you are being globally rate limited or not */
  global: boolean;
}
