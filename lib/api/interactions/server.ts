import {
  APIInteraction,
  InteractionResponseType,
  InteractionType,
  RESTGetAPIOauth2CurrentApplicationResult,
  RESTPostAPIApplicationCommandsJSONBody,
  Snowflake,
} from "../../../deps.ts";
import { decodeString, serve, ServerRequest, Status, verify } from "./deps.ts";
import { HTTPClient, HTTPClientOptions } from "../http/http_client.ts";
import Command from "./command.ts";
import Cache, { Storable } from "../../util/cache.ts";

export const respond = (req: ServerRequest, status: number, body: any) =>
  req.respond({ status, body: JSON.stringify(body) });

// TODO: Make guild commands work
export class Server {
  application?: RESTGetAPIOauth2CurrentApplicationResult;
  http: HTTPClient;
  globalCommands: Storable<Command> = new Cache<Command>(undefined, Command);

  constructor(
    token: string,
    public publicKey: string,
    options?: HTTPClientOptions,
  ) {
    this.http = new HTTPClient(token, options);
  }

  async createGlobalApplicationCommand(
    data: RESTPostAPIApplicationCommandsJSONBody,
  ) {
    if (!this.application) {
      throw new Error("No application");
    }
    const command = await this.http.createGlobalApplicationCommand(
      this.application.id,
      data,
    );
    await this.globalCommands.add(command);
    return command;
  }

  async start(port: number) {
    const application = await this.http.getCurrentBotApplicationInformation();
    const commands = await this.http.getGlobalApplicationCommands(
      application.id,
    );
    commands.forEach((command) => this.globalCommands.add(command));
    this.application = application;

    return this.connect(port);
  }

  private async connect(port: number) {
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

    const body = await Deno.readAll(req.body);

    const isVerified = verify(
      decodeString(this.publicKey),
      decodeString(signature),
      Uint8Array.from([...new TextEncoder().encode(timestamp), ...body]),
    );

    if (!isVerified) {
      return respond(req, Status.Unauthorized, "invalid request signature");
    }

    const data: APIInteraction = JSON.parse(new TextDecoder().decode(body));

    switch (data.type) {
      case InteractionType.Ping: {
        return respond(req, Status.OK, { type: InteractionResponseType.Pong });
      }

      case InteractionType.ApplicationCommand: {
        const callbackData = await this.onInteraction(data);
        return respond(req, Status.OK, callbackData);
      }
    }
  }

  async onInteraction(interaction: APIInteraction) {
    if (!interaction.data) {
      return; // idk why there isn't data
    }
    const command = await this.globalCommands.get(interaction.data.id);
    return command?.run(interaction);
  }
}

export default Server;
