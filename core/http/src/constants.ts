import { url, version } from "../../../meta.ts";

// deno-fmt-ignore-line
export const
  API_VERSION = 9,
  DELAY = 30_000,
  HEADER_BUCKET = "X-RateLimit-Bucket",
  HEADER_LIMIT = "X-RateLimit-Limit",
  HEADER_REMAINING = "X-RateLimit-Remaining",
  HEADER_REASON = "X-Audit-Log-Reason",
  HEADER_RESET_AFTER = "X-RateLimit-Reset-After",
  USER_AGENT = `DiscordBot (${url}, ${version}) Deno/${Deno.version.deno}`;
