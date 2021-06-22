import { hexEncode } from "../../util/src/hex_codec.ts";
import { uint8Concat, utf8Encode } from "../../util/src/utf8_codec.ts";
import type { ServerRequest } from "../deps.ts";
import { readAll, verify } from "../deps.ts";

/** Determines if a request is bad or not */
export const bad = (
  method: string,
  contentType?: string | null,
  signature?: string | null,
  timestamp?: string | null,
) =>
  method !== "POST" ||
  contentType !== "application/json" ||
  !signature ||
  !timestamp;

/**
 * Parse a request body
 * @param request Server request
 */
export const parse = (request: ServerRequest) => readAll(request.body);

/**
 * Validate a request
 * @param publicKey The bot application's public key
 * @param signature The request header `X-Signature-Ed25519`
 * @param timestamp The request header `X-Signature-Timestamp`
 * @param body The request body
 */
export const validate = (
  publicKey: string,
  signature: string,
  timestamp: string,
  body: Uint8Array,
) =>
  verify(
    hexEncode(publicKey),
    hexEncode(signature),
    uint8Concat(utf8Encode(timestamp), body),
  );

/**
 * Request respond helper
 * @param request Server request
 */
export const wrap = (request: ServerRequest) =>
  (body: unknown, status = 200) =>
    request.respond({
      body: JSON.stringify(body),
      headers: new Headers({ "Content-Type": "application/json" }),
      status,
    });
