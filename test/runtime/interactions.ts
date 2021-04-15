import { Server } from "../../mod.ts";

const token = prompt("token:");
const publicKey = prompt("public key:");

if (!(token && publicKey)) {
  throw new Error("bad input");
}

const server = new Server(publicKey, `Bot ${token}`);

server.connect(8080);

server.listen("INTERACTION_CREATE", (interaction) => {
  if (interaction.data.name === "ping") {
    return {
      type: 4,
      data: { content: "hello world" },
    };
  }
});
