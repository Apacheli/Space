import { decode as hexDecode } from "../../util/src/hex_codec.ts";
import { encode as utf8Encode } from "../../util/src/utf8_codec.ts";
import { verify } from "../deps.ts";

/**
 * Verify a request
 * @param publicKey The bot application's public key
 * @param signature The request header `X-Signature-Ed25519`
 * @param timestamp The request header `X-Signature-Timestamp`
 * @param body The request body
 */
export const verifys = (
  publicKey: string,
  signature: string,
  timestamp: string,
  body: string,
) =>
  verify(
    hexDecode(utf8Encode(publicKey)),
    hexDecode(utf8Encode(signature)),
    utf8Encode(timestamp + body),
  );
