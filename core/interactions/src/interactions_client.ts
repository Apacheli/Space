import type {
  Interaction,
  InteractionApplicationCommandCallbackData,
} from "../../types/src/interactions/slash_commands.ts";
import { AsyncEventTarget } from "../../util/src/async_event_target.ts";
import { hexDecode } from "../../util/src/hex_codec.ts";
import {
  uint8Concat,
  utf8Decode,
  utf8Encode,
} from "../../util/src/utf8_codec.ts";
import type { ServerRequest } from "../deps.ts";
import { readAll, Status, STATUS_TEXT, verify } from "../deps.ts";
import {
  HEADER_SIGNATURE,
  HEADER_TIMESTAMP,
  InteractionCallbackType,
  InteractionRequestType,
} from "./constants.ts";

export type Callback = (
  type: InteractionCallbackType,
  data?: InteractionApplicationCommandCallbackData,
) => Promise<void>;

export type InteractionsClientListeners = {
  [InteractionRequestType.ApplicationCommand]: [
    callback: Callback,
    interaction: Interaction,
  ];
  [InteractionRequestType.MessageComponent]: [
    callback: Callback,
    interaction: Interaction,
  ];
};

/** Discord interactions client */
export class InteractionsClient
  extends AsyncEventTarget<InteractionsClientListeners> {
  /**
   * @param publicKey Bot application public key
   */
  constructor(public publicKey: string) {
    super();
  }

  /**
   * Handle a server request
   * @param request The server request to handle
   */
  async handleRequest(request: ServerRequest) {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    const respond = (body: unknown, status = Status.OK) =>
      request.respond({
        body: JSON.stringify(body),
        headers,
        status,
        statusText: STATUS_TEXT.get(status),
      });

    const contentType = request.headers.get("Content-Type");
    const signature = request.headers.get(HEADER_SIGNATURE);
    const timestamp = request.headers.get(HEADER_TIMESTAMP);

    if (
      request.method !== "POST" ||
      contentType !== "application/json" ||
      !signature ||
      !timestamp
    ) {
      return respond("bad request", Status.BadRequest);
    }

    const body = await readAll(request.body);

    if (!this.validateRequest(signature, timestamp, body)) {
      return respond("unauthorized", Status.Unauthorized);
    }

    const interaction: Interaction = JSON.parse(utf8Decode(body));

    const callback = (
      type: InteractionCallbackType,
      data?: InteractionApplicationCommandCallbackData,
    ) => respond({ data, type });

    if (interaction.type === InteractionRequestType.Ping) {
      return callback(InteractionCallbackType.Pong);
    }

    this.dispatch(interaction.type, callback, interaction);
  }

  /**
   * Validate a request
   * @param signature The request header `X-Signature-Ed25519`
   * @param timestamp The request header `X-Signature-Timestamp`
   * @param body The request body
   */
  validateRequest(signature: string, timestamp: string, body: Uint8Array) {
    return verify(
      hexDecode(this.publicKey),
      hexDecode(signature),
      uint8Concat(utf8Encode(timestamp), body),
    );
  }

  /** Create a stream listener for `ApplicationCommand` events */
  onApplicationCommand() {
    return this.listen(InteractionRequestType.ApplicationCommand);
  }

  /** Create a stream listener for `MessageComponent` events */
  onMessageComponent() {
    return this.listen(InteractionRequestType.MessageComponent);
  }
}
