import { AsyncEventTarget } from "../util/async_event_target.ts";

export abstract class DiscordSocket extends AsyncEventTarget {
  protocols?: string | string[];
  socket?: WebSocket;
  url?: string;

  connect(url: string, protocols?: string | string[]) {
    this.protocols = protocols;
    this.url = url;

    const socket = this.socket = new WebSocket(url, protocols);

    socket.addEventListener("close", (event) => this.onSocketClose(event));
    socket.addEventListener("error", (event) => this.onSocketError(event));
    socket.addEventListener("message", (event) => this.onSocketMessage(event));

    return new Promise((resolve) => socket.addEventListener("open", resolve));
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
    return JSON.stringify(payload);
  }

  decodePayload<T>(payload: string): T {
    return JSON.parse(payload);
  }

  abstract onSocketClose(event: CloseEvent): void;
  abstract onSocketError(event: Event): void;
  abstract onSocketMessage(event: MessageEvent<string>): void;
}
