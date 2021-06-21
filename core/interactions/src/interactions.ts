import { utf8Decode } from "../../util/src/utf8_codec.ts";
import type { ServerRequest } from "../deps.ts";
import { Status } from "../deps.ts";
import { bad, parse, validate, wrap } from "./util.ts";

/** Interactions options */
export interface InteractionsOptions {
  /** Determine how the request body will be parsed */
  body?: (request: ServerRequest) => Promise<Uint8Array>;
}

/** A class for HTTP server interactions */
export class Interactions {
  /**
   * @param publicKey Bot application public key
   * @param options Interactions options
   */
  constructor(public publicKey: string, public options?: InteractionsOptions) {
  }

  /** Handle a request */
  async handle(request: ServerRequest) {
    const respond = wrap(request);

    const contentType = request.headers.get("Content-Type");
    const signature = request.headers.get("X-Signature-Ed25519");
    const timestamp = request.headers.get("X-Signature-Timestamp");

    if (bad(request.method, contentType, signature, timestamp)) {
      return respond("bad request", Status.BadRequest);
    }

    const body = await (this.options?.body ?? parse)(request);

    // https://github.com/microsoft/TypeScript/issues/26916
    if (validate(this.publicKey, signature!, timestamp!, body)) {
      return respond("invalid request", Status.Unauthorized);
    }

    console.log(JSON.parse(utf8Decode(body)));
  }
}
