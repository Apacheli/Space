import type { EncodingTypes } from "../../types/mod.ts";
import { AsyncEventTarget } from "./async_event_target.ts";
import { pack, unpack } from "./etf_codec.ts";
import { parse, stringify } from "./json_codec.ts";

/** A socket client for Discord consumed by gateway and voice */
export abstract class DiscordSocket extends AsyncEventTarget {
  /** The active socket */
  protected socket?: WebSocket;
  /** When the socket closes */
  protected abstract onSocketClose(event: CloseEvent): void;
  /** When the socket encounters an error */
  protected abstract onSocketError(event: Event): void;
  /** When the socket receives a message */
  protected abstract onSocketMessage(event: MessageEvent): void;

  /**
   * @param url Socket URL
   * @param encoding Socket encoding
   */
  constructor(public url: string, public encoding: EncodingTypes = "json") {
    super();
  }

  /** Open a socket connection */
  connect() {
    const socket = this.socket = new WebSocket(this.url);

    socket.addEventListener("close", (event) => this.onSocketClose(event));
    socket.addEventListener("error", (event) => this.onSocketError(event));
    socket.addEventListener("message", (event) => this.onSocketMessage(event));

    return new Promise((resolve) => socket.addEventListener("open", resolve));
  }

  /**
   * Disconnect the current socket connection
   * @param code Disconnect code
   * @param reason Disconnect reason
   */
  disconnect(code?: number, reason?: string) {
    this.socket?.close(code, reason);
  }

  /**
   * Send a payload
   * @param opcode Payload opcode
   * @param data Payload data
   */
  protected sendPayload(opcode: number, data: unknown) {
    const payload = {
      d: data,
      op: opcode,
    };
    this.socket?.send(this.encodePayload(payload));
  }

  /** Decode an incoming payload */
  protected decodePayload(payload: string | Uint8Array) {
    return typeof payload === "string" ? parse(payload) : unpack(payload);
  }

  /** Encode an outgoing payload */
  protected encodePayload(payload: unknown) {
    switch (this.encoding) {
      case "etf":
        return pack(payload);
      case "json":
        return stringify(payload);
    }
  }
}
