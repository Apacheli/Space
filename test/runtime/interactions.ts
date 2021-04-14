import { Server } from "../../mod.ts";

const token = prompt("token:");
const publicKey = prompt("public key:");

if (!(token && publicKey)) {
  throw new Error("bad input");
}

const server = new Server(`Bot ${token}`, publicKey);

server.start(8080);
