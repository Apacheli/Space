import { AsyncEventTarget } from "./async_event_target.ts";

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
   * Create a socket connection
   * @param url The address to establish a socket connection to
   */
  connect(url: string) {
    const socket = this.socket = new WebSocket(url);

    socket.addEventListener("close", (event) => this.onSocketClose(event));
    socket.addEventListener("error", (event) => this.onSocketError(event));
    socket.addEventListener("message", (event) => this.onSocketMessage(event));

    return new Promise((resolve) => socket.addEventListener("open", resolve));
  }

  /**
   * Disconnect the socket connection
   * @param code Disconnection code
   * @param reason Disconnection reason
   */
  disconnect(code?: number, reason?: string) {
    if (!this.socket) {
      throw new Error("No socket to disconnect.");
    }
    this.socket.close(code, reason);
  }

  /**
   * Send a payload
   * @param opcode Payload opcode
   * @param data Payload data
   */
  protected sendPayload(opcode: number, data: unknown) {
    if (!this.socket) {
      throw new Error("No connected socket.");
    }
    const payload = {
      d: data,
      op: opcode,
    };
    this.socket.send(this.encodePayload(payload));
  }

  /** Decode a payload that was received */
  protected decodePayload(payload: string) {
    return JSON.parse(payload);
  }

  /** Encode a payload to send */
  protected encodePayload(payload: unknown) {
    return JSON.stringify(payload);
  }
}
