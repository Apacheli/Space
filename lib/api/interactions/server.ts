import { InteractionResponseType, InteractionType } from "../../../deps.ts";
import { decodeString, serve, ServerRequest, Status, verify } from "./deps.ts";

export const respond = (req: ServerRequest, status: number, body: any) => {
  req.respond({ status, body: JSON.stringify(body) });
};

export class Server {
  constructor(public publicKey: string) {
  }

  async connect(port: number) {
    const server = serve({ port });
    for await (const req of server) {
      this.onRequest(req);
    }
  }

  async onRequest(req: ServerRequest) {
    const signature = req.headers.get("X-Signature-Ed25519");
    const timestamp = req.headers.get("X-Signature-Timestamp");

    if (!(signature && timestamp)) {
      return req.respond({ status: 400, body: "bad request" });
    }

    const body = await Deno.readAll(req.body);

    const isVerified = verify(
      decodeString(this.publicKey),
      decodeString(signature),
      Uint8Array.from([...new TextEncoder().encode(timestamp), ...body]),
    );

    if (!isVerified) {
      return req.respond({ status: 401, body: "invalid request signature" });
    }

    const data = JSON.parse(new TextDecoder().decode(body));

    switch (data.type) {
      case InteractionType.Ping: {
        return respond(req, Status.OK, { type: InteractionResponseType.Pong });
      }

      case InteractionType.ApplicationCommand: {
        return respond(req, Status.OK, {
          type: InteractionResponseType.ChannelMessageWithSource,
          data: { content: "hello" },
        });
      }
    }
  }
}

export default Server;
