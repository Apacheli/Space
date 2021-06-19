import { url, version } from "../../../meta.ts";

// deno-fmt-ignore-line
export const
  API_VERSION = 9,
  DELAY = 30_000,
  AUDIT_LOG_REASON = "X-Audit-Log-Reason",
  IMAGE_FORMAT = "png",
  IMAGE_SIZE = 2 ** 9,
  PAYLOAD_JSON = "payload_json",
  RATELIMIT_BUCKET = "X-RateLimit-Bucket",
  RATELIMIT_LIMIT = "X-RateLimit-Limit",
  RATELIMIT_REMAINING = "X-RateLimit-Remaining",
  RATELIMIT_RESET_AFTER = "X-RateLimit-Reset-After",
  USER_AGENT = `DiscordBot (${url}, ${version}) Deno/${Deno.version.deno}`;
