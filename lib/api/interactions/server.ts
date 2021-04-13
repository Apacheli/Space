import { InteractionResponseType, InteractionType } from "../../../deps.ts";
import { decodeString, serve, ServerRequest, verify } from "./deps.ts";

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
    const body = await Deno.readAll(req.body);

    if (!(signature && timestamp)) {
      return req.respond({ status: 400, body: "bad request" });
    }

    const message = new Uint8Array(body.length + timestamp.length);
    message.set(new TextEncoder().encode(timestamp));
    message.set(body, timestamp.length);

    const isVerified = verify(
      decodeString(this.publicKey),
      decodeString(signature),
      message,
    );

    if (!isVerified) {
      return req.respond({ status: 401, body: "invalid request signature" });
    }

    const data = JSON.parse(new TextDecoder().decode(body));
    switch (data.type) {
      case InteractionType.Ping: {
        req.respond({ status: 200, body: JSON.stringify({ type: 1 }) });
        break;
      }
      case InteractionType.ApplicationCommand: {
        req.respond({
          status: 200,
          body: JSON.stringify({
            type: InteractionResponseType.ChannelMessageWithSource,
            data: {
              content: "hi this is a test message",
            },
          }),
        });
      }
    }
  }
}

export default Server;
