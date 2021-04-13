import { HTTPClient, Server } from "../../mod.ts";

const important = ["public key", "token"].map((x) => prompt(`${x}:`));

if (important.some((x) => x === null)) {
  throw new Error("bad input");
}

const server = new Server(important[0] as string);
const http = new HTTPClient(`Bot ${important[1]}`);

const application = await http.getCurrentBotApplicationInformation();

const commands = await http.getGlobalApplicationCommands(application.id);

let command = commands.find((command) => command.name === "ping") ??
  await http.createGlobalApplicationCommand(application.id, {
    name: "ping",
    description: "says pong",
  });

command;

server.connect(8080);
