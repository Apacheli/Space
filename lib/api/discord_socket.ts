import { AsyncEventTarget } from "../util/async_event_target.ts";
import { pack, unpack } from "../util/mod.ts";

export interface DiscordSocketOptions {
  encoding?: "json" | "etf";
  protocols?: string | string[];
}

// deno-lint-ignore no-explicit-any
export abstract class DiscordSocket extends AsyncEventTarget<any> {
  socket?: WebSocket;

  constructor(public url: string, public options?: DiscordSocketOptions) {
    super();
  }

  connect() {
    const ws = this.socket = new WebSocket(this.url, this.options?.protocols);

    ws.addEventListener("close", (event) => this.onSocketClose(event));
    ws.addEventListener("error", (event) => this.onSocketError(event));
    ws.addEventListener("message", (event) => this.onSocketMessage(event));

    return new Promise((resolve) => ws.addEventListener("open", resolve));
  }

  disconnect(code: number, reason: string) {
    if (!this.socket) {
      throw new Error("Cannot disconnect if there was no socket connected.");
    }
    this.socket.close(code, reason);
  }

  sendPayload(opcode: number, data: unknown) {
    if (!this.socket) {
      throw new Error("Cannot send payload if no socket exists.");
    }
    const payload = {
      d: data,
      op: opcode,
    };
    this.socket.send(this.encodePayload(payload));
  }

  encodePayload(payload: unknown) {
    return (this.options?.encoding === "etf" ? pack : JSON.stringify)(payload);
  }

  async decodePayload<T>(payload: string | Blob): Promise<T> {
    return typeof payload === "string"
      ? JSON.parse(payload)
      : unpack(new Uint8Array(await payload.arrayBuffer()));
  }

  abstract onSocketClose(event: CloseEvent): void;
  abstract onSocketError(event: Event): void;
  abstract onSocketMessage(event: MessageEvent<string>): void;
}
