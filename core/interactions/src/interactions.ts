import type { Interaction } from "../../types/src/interactions/slash_commands.ts";
import {
  InteractionCallbackType,
  InteractionRequestType,
} from "../../types/src/interactions/slash_commands.ts";
import { hexDecode } from "../../util/src/hex_codec.ts";
import { parse, stringify } from "../../util/src/json_codec.ts";
import {
  uint8Concat,
  utf8Decode,
  utf8Encode,
} from "../../util/src/utf8_codec.ts";
import type { ServerRequest } from "../deps.ts";
import { readAll, Status, STATUS_TEXT, verify } from "../deps.ts";
import { HEADER_SIGNATURE, HEADER_TIMESTAMP } from "./constants.ts";

/**
 * Handle a request (request interface must be compatible with `std/http`)
 * @param publicKey Hex decoded bot application public key
 * @param request The request
 */
export const handle = async (publicKey: string, request: ServerRequest) => {
  const headers = new Headers();
  headers.set("Content-Type", "application/json");

  const respond = (body: unknown, status = Status.OK) =>
    request.respond({ body: stringify(body), headers, status });

  const contentType = request.headers.get("Content-Type");
  const signature = request.headers.get(HEADER_SIGNATURE);
  const timestamp = request.headers.get(HEADER_TIMESTAMP);

  if (
    request.method !== "POST" ||
    contentType !== "application/json" ||
    !signature ||
    !timestamp
  ) {
    return respond(STATUS_TEXT.get(Status.BadRequest), Status.BadRequest);
  }

  const body = await readAll(request.body);

  if (!validate(publicKey, signature, timestamp, body)) {
    return respond(STATUS_TEXT.get(Status.Unauthorized), Status.Unauthorized);
  }

  const interaction: Interaction = parse(utf8Decode(body));

  if (interaction.type === InteractionRequestType.Ping) {
    return respond({ type: InteractionCallbackType.Pong });
  }

  return { interaction, respond };
};

/**
 * Validate a request
 * @param publicKey The bot's application public key hex decoded
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
    publicKey,
    hexDecode(signature),
    uint8Concat(utf8Encode(timestamp), body),
  );
