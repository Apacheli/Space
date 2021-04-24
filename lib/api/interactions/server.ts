import { InteractionResponseType, InteractionType } from "./deps.ts";
import {
  decodeString,
  readAll,
  serve,
  ServerRequest,
  sign,
  Status,
} from "./deps.ts";
import { AsyncEventTarget } from "../../util/mod.ts";

export const respond = (req: ServerRequest, body: any, status = Status.OK) =>
  req.respond({ body: JSON.stringify(body), status });

export class Server extends AsyncEventTarget {
  constructor(public publicKey: string) {
    super();
  }

  async connect(port: number) {
    const server = serve({ port });
    for await (const req of server) {
      this.onRequest(req);
    }
  }

  private async onRequest(req: ServerRequest) {
    const signature = req.headers.get("X-Signature-Ed25519");
    const timestamp = req.headers.get("X-Signature-Timestamp");

    if (!(signature && timestamp)) {
      return respond(req, "bad request", Status.BadRequest);
    }

    const body = await readAll(req.body);

    const isVerified = sign.verify(
      decodeString(this.publicKey),
      decodeString(signature),
      Uint8Array.from([...new TextEncoder().encode(timestamp), ...body]),
    );

    console.log(!isVerified);

    if (!isVerified) {
      return respond(req, "invalid request signature", Status.Unauthorized);
    }

    const interaction = JSON.parse(new TextDecoder().decode(body));

    switch (interaction.type) {
      case InteractionType.Ping: {
        return respond(req, { type: InteractionResponseType.Pong });
      }

      case InteractionType.ApplicationCommand: {
        this.dispatch(interaction.id, interaction, respond.bind(null, req));
        break;
      }
    }
  }
}
