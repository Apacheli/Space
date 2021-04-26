import { logger } from "../../util/mod.ts";

export interface ResponseError {
  code: number;
  // deno-lint-ignore no-explicit-any
  errors?: any; // TODO: Get this type correct
  message: string;
}

export class HTTPError extends Error implements ResponseError {
  #message;
  code;
  errors;
  name = "HTTPError";

  constructor(body: ResponseError, public response: Response) {
    super();

    this.#message = body.message;
    this.code = body.code;
    this.errors = body.errors;
  }

  get message() {
    const message = `[${this.code}] ${this.#message}\n${this.formatErrors()}`;
    return logger.highlight(message.slice(0, -1));
  }

  // https://github.com/abalabahaha/eris/blob/master/lib/errors/DiscordRESTError.js#L49
  private formatErrors(errors = this.errors, x = "") {
    let str = "";
    for (const k in errors) {
      str += errors[k]._errors?.map((e: Error) => `${x}${k}: ${e.message}\n`) ??
        this.formatErrors(errors[k], `${x}${k}.`);
    }
    return str;
  }
}
