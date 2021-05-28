import { encode } from "../../util/mod.ts";
import { decodeString, verify } from "../deps.ts";

/**
 * Verify a request signature
 * @param publicKey The application's public key
 * @param signature The signature of the request headers `X-Signature-Ed25519`
 * @param timestamp The timestamp of the request headers `X-Signature-Timestamp`
 * @param uint8 The Uint8Array body processed from `readAll`
 */
export const verifyKey = (
  publicKey: string,
  signature: string,
  timestamp: string,
  uint8: Uint8Array,
) =>
  verify(
    decodeString(publicKey),
    decodeString(signature),
    Uint8Array.from([...encode(timestamp), ...uint8]),
  );
