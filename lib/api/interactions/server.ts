import { InteractionResponseType, InteractionType } from "./deps.ts";
import {
  decodeString,
  readAll,
  serve,
  ServerRequest,
  Status,
  verify,
} from "./deps.ts";
import { AsyncEventTarget } from "../../util/mod.ts";

export const headers = new Headers();
headers.set("content-type", "application/json");

export const respond = (req: ServerRequest, body: any, status = Status.OK) =>
  req.respond({ body: JSON.stringify(body), status, headers });

export class Server extends AsyncEventTarget {
  constructor(public publicKey: string, public port: number) {
    super();
  }

  private async onRequest(req: ServerRequest) {
    const signature = req.headers.get("X-Signature-Ed25519");
    const timestamp = req.headers.get("X-Signature-Timestamp");

    if (!(signature && timestamp)) {
      return respond(req, "bad request", Status.BadRequest);
    }

    const body = await readAll(req.body);

    const isVerified = verify(
      decodeString(this.publicKey),
      decodeString(signature),
      Uint8Array.from([...new TextEncoder().encode(timestamp), ...body]),
    );

    if (!isVerified) {
      return respond(req, "invalid request signature", Status.Unauthorized);
    }

    const interaction = JSON.parse(new TextDecoder().decode(body));

    switch (interaction.type) {
      case InteractionType.Ping: {
        return respond(req, { type: InteractionResponseType.Pong });
      }

      case InteractionType.ApplicationCommand: {
        return this.dispatch("COMMAND", interaction, respond.bind(null, req));
      }

      case 3: { // buttons
        return this.dispatch("COMPONENT", interaction, respond.bind(null, req));
      }
    }
  }

  [Symbol.asyncIterator]() {
    const server = serve({ port: this.port });
    (async () => {
      for await (const req of server) {
        this.onRequest(req);
      }
    })();
    return super[Symbol.asyncIterator]();
  }
}
