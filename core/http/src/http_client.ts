import type { APIVersions } from "../../types/mod.ts";
import { BaseURL } from "../../types/mod.ts";
import { stringify } from "../../util/src/json_codec.ts";
import { RateLimitBucket } from "../../util/src/rate_limit_bucket.ts";
import {
  API_VERSION,
  DELAY,
  HEADER_BUCKET,
  HEADER_LIMIT,
  HEADER_REASON,
  HEADER_REMAINING,
  HEADER_RESET_AFTER,
  USER_AGENT,
} from "./constants.ts";
import { HTTPError } from "./http_error.ts";
import { encodeQuery } from "./util.ts";

/** HTTP client options */
export interface HTTPClientOptions {
  /** Base URL */
  baseURL?: string;
  /** Request timeout delay */
  delay?: number;
  /** Disable rate limiting (highly unrecommended) */
  disableRateLimiting?: boolean;
  /** The `User-Agent` header */
  userAgent?: string;
  /** HTTP version */
  version?: APIVersions;
  /** Authentication bot token */
  token?: string;
}

/** Request options */
export interface RequestOptions {
  /** Request body */
  // deno-lint-ignore no-explicit-any
  data?: Record<string, any>;
  /** Request method */
  method?: "DELETE" | "GET" | "PATCH" | "POST" | "PUT";
  /** Request files */
  files?: File[];
  /** Request query */
  // deno-lint-ignore no-explicit-any
  query?: Record<string, any>;
  /** Reason to display in the audit log */
  reason?: string;
  /** Request route for rate limit handling */
  route?: string;
}

/** Handles the Discord HTTP API */
export abstract class HTTPClient {
  /** Rate limit buckets */
  buckets = new Map<string, RateLimitBucket>();

  /**
   * @param options HTTP client options
   */
  constructor(public options?: HTTPClientOptions) {
  }

  /**
   * Make a request
   * @param path The path to make the request to
   * @param options Request optiona
   */
  request(path: string, options?: RequestOptions) {
    let bucket;
    if (!this.options?.disableRateLimiting) {
      const route = options?.route ?? path;
      bucket = this.buckets.get(route);
      if (!bucket) {
        this.buckets.set(route, bucket = new RateLimitBucket());
      }
    }

    return this.#actualRequest(this.#buildRequest(path, options), bucket);
  }

  async #actualRequest(request: Request, bucket?: RateLimitBucket) {
    if (bucket?.locked || bucket?.rateLimited) {
      return new Promise((resolve, reject) => {
        bucket.add(() =>
          this.#actualRequest(request, bucket)
            .then(resolve, reject)
        );
      });
    }

    bucket?.lock();

    const controller = new AbortController();
    const delay = this.options?.delay ?? DELAY;
    const timeout = setTimeout(() => controller.abort(), delay);

    const response = await fetch(request, controller);

    clearTimeout(timeout);

    if (response.headers.get(HEADER_BUCKET)) {
      bucket?.unlock(
        parseInt(response.headers.get(HEADER_LIMIT) ?? "0"),
        parseFloat(response.headers.get(HEADER_RESET_AFTER) ?? "0") * 1e+3,
        parseInt(response.headers.get(HEADER_REMAINING) ?? "0"),
      );
    }

    bucket?.shift();

    const data = response.headers.get("Content-Type") === "application/json"
      ? response.json()
      : response.text();

    if (response.ok) {
      return data;
    }

    throw new HTTPError(await data);
  }

  #buildRequest(path: string, options?: RequestOptions) {
    const headers = new Headers();
    headers.set("User-Agent", this.options?.userAgent ?? USER_AGENT);
    if (this.options?.token) {
      headers.set("Authorization", this.options.token);
    }
    if (options?.reason) {
      headers.set(HEADER_REASON, options.reason);
    }

    let body;
    if (options?.files) {
      body = new FormData();
      for (const file of options.files) {
        body.append(file.name, file);
      }
      if (options.data) {
        body.append("payload_json", stringify(options.data));
      }
    } else if (options?.data) {
      body = stringify(options.data);
      headers.set("Content-Type", "application/json");
    }

    const { baseURL = BaseURL, version = API_VERSION } = this.options ?? {};
    let url = `${baseURL}/v${version}/${path}`;
    if (options?.query) {
      url += `?${encodeQuery(options.query)}`;
    }

    return new Request(url, {
      body,
      headers,
      method: options?.method,
    });
  }

  //#region http
  /** Make a `DELETE` request */
  delete(endpoint: string, options?: RequestOptions) {
    return this.request(endpoint, {
      method: "DELETE",
      ...options,
    });
  }

  /** Make a `GET` request */
  get(endpoint: string, options?: RequestOptions) {
    return this.request(endpoint, {
      method: "GET",
      ...options,
    });
  }

  /** Make a `PATCH` request */
  patch(endpoint: string, options?: RequestOptions) {
    return this.request(endpoint, {
      method: "PATCH",
      ...options,
    });
  }

  /** Make a `POST` request */
  post(endpoint: string, options?: RequestOptions) {
    return this.request(endpoint, {
      method: "POST",
      ...options,
    });
  }

  /** Make a `PUT` request */
  put(endpoint: string, options?: RequestOptions) {
    return this.request(endpoint, {
      method: "PUT",
      ...options,
    });
  }
  //#endregion http
}
