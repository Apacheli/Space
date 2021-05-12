import {
  APIInteraction,
  decodeString,
  InteractionResponseType,
  InteractionType,
  readAll,
  serve,
  Server,
  ServerRequest,
  Status,
  verify,
} from "./deps.ts";
import { AsyncEventTarget, decode, encode } from "../../util/mod.ts";

const headers = new Headers();
headers.set("content-type", "application/json");

const respond = (request: ServerRequest, body: unknown, status = Status.OK) =>
  request.respond({ body: JSON.stringify(body), status, headers });

export class InteractionsServer extends AsyncEventTarget {
  #server?: Server;

  constructor(public publicKey: string) {
    super();
  }

  async connect(port: number) {
    for await (const request of this.#server = serve({ port })) {
      this.onServerRequest(request);
    }
  }

  close() {
    if (!this.#server) {
      throw new Error("No server");
    }
    this.#server.close();
  }

  private async onServerRequest(request: ServerRequest) {
    const signature = request.headers.get("X-Signature-Ed25519");
    const timestamp = request.headers.get("X-Signature-Timestamp");

    if (!(signature && timestamp)) {
      return respond(request, "bad request", Status.BadRequest);
    }

    const body = await readAll(request.body);

    if (!verifyKey(this.publicKey, signature, timestamp, body)) {
      return respond(request, "invalid request signature", Status.Unauthorized);
    }

    const interaction: APIInteraction = JSON.parse(decode(body));
    const respondd = (body: unknown) => respond(request, body);

    switch (interaction.type) {
      case InteractionType.Ping: {
        return respondd({ type: InteractionResponseType.Pong });
      }
      case InteractionType.ApplicationCommand: {
        return this.dispatch("COMMAND", interaction, respondd);
      }
      case 3: { // Buttons/Components
        return this.dispatch("BUTTON", interaction, respondd);
      }
    }
  }
}

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
