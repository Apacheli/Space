import { InteractionResponseType, InteractionType } from "./deps.ts";
import {
  decodeString,
  readAll,
  serve,
  ServerRequest,
  Status,
  verify,
} from "./deps.ts";
import EventPipeline from "../../util/event_pipeline.ts";

export const respond = (req: ServerRequest, status: number, body: any) =>
  req.respond({ status, body: JSON.stringify(body) });

export class Server extends EventPipeline {
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
      return respond(req, Status.BadRequest, "bad request");
    }

    const body = await readAll(req.body);

    const isVerified = verify(
      decodeString(this.publicKey),
      decodeString(signature),
      Uint8Array.from([...new TextEncoder().encode(timestamp), ...body]),
    );

    if (!isVerified) {
      return respond(req, Status.Unauthorized, "invalid request signature");
    }

    const interaction = JSON.parse(new TextDecoder().decode(body));

    switch (interaction.type) {
      case InteractionType.Ping: {
        return respond(req, Status.OK, { type: InteractionResponseType.Pong });
      }

      case InteractionType.ApplicationCommand: {
        const result = await this.dispatch("INTERACTION_CREATE", interaction) ??
          {
            type: InteractionResponseType.ChannelMessageWithSource,
            data: { content: `Bad command \`${interaction.data.name}\`` },
          };
        return respond(req, Status.OK, result);
      }
    }
  }
}

export default Server;
