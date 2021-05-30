// deno-lint-ignore-file no-explicit-any

import { logger } from "../../util/mod.ts";

/** Represents an exception from an invalid HTTP request */
export class HTTPError extends Error {
  /** The JSON error code */
  code;
  /** The JSON errors */
  errors;
  name = "HTTPError";

  #message;

  constructor(body: any) {
    super();

    this.code = body.code;
    this.errors = body.errors;

    this.#message = body.message;
  }

  get message() {
    const message = `[${this.code}] ${this.#message}\n${this.#formatErrors()}`;
    return logger.highlight(message.slice(0, -1));
  }

  toString() {
    return `${this.name}: ${this.#message}`;
  }

  // https://github.com/abalabahaha/eris/blob/master/lib/errors/DiscordRESTError.js#L49
  #formatErrors = (errors = this.errors, x = "") => {
    let str = "";
    for (const k in errors) {
      str += errors[k]._errors?.map((e: any) => `${x}${k}: ${e.message}\n`) ??
        this.#formatErrors(errors[k], `${x}${k}.`);
    }
    return str;
  };
}
