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

export const headers = new Headers();
headers.append("content-type", "application/json");

export const respondWrapper = (request: ServerRequest) =>
  (body: unknown, status = Status.OK) =>
    request.respond({ body: JSON.stringify(body), headers, status });

export class InteractionsServer extends AsyncEventTarget {
  server?: Server;

  constructor(public publicKey: string) {
    super();
  }

  async connect(port: number) {
    for await (const request of this.server = serve({ port })) {
      this.onServerRequest(request);
    }
  }

  close() {
    if (!this.server) {
      throw new Error("No server to close.");
    }
    this.server.close();
  }

  async onServerRequest(request: ServerRequest) {
    const signature = request.headers.get("X-Signature-Ed25519");
    const timestamp = request.headers.get("X-Signature-Timestamp");

    const respond = respondWrapper(request);

    if (!(signature && timestamp)) {
      return respond("bad request", Status.BadRequest);
    }

    const body = await readAll(request.body);

    if (!verifyKey(this.publicKey, signature, timestamp, body)) {
      return respond("invalid request signature", Status.Unauthorized);
    }

    const interaction: APIInteraction = JSON.parse(decode(body));

    switch (interaction.type) {
      case InteractionType.Ping: {
        return respond({ type: InteractionResponseType.Pong });
      }
      case InteractionType.ApplicationCommand: {
        return this.dispatch("COMMAND", interaction, respond);
      }
      case 3: { // Buttons/Components
        return this.dispatch("COMPONENT", interaction, respond);
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
