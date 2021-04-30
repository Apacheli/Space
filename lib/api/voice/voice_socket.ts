import { VoiceOPCodes } from "./deps.ts";
import { DiscordSocket } from "../discord_socket.ts";

export class VoiceSocket extends DiscordSocket {
  ip?: string;
  modes?: string[];
  port?: number;
  ssrc?: number;
  heartbeatInterval?: number;

  /**
   * @param token Voice server update token (not the same thing as a bot token)
   * @param guildID The guild the voice connection was created for
   * @param sessionID Voice state session ID
   */
  constructor(
    public token: string,
    public guildID: string,
    public sessionID: string,
  ) {
    super();
  }

  onSocketClose(event: CloseEvent) {
  }

  onSocketError(event: Event) {
  }

  onSocketMessage(event: MessageEvent<string>) {
    const payload = this.decodePayload<any>(event.data);

    switch (payload.op) {
      case VoiceOPCodes.Ready: {
        this.ip = payload.d.ip;
        this.modes = payload.d.modes;
        this.port = payload.d.port;
        this.ssrc = payload.d.ssrc;
        break;
      }

      case VoiceOPCodes.Hello: {
        const delay = payload.d.heartbeat_interval;
        this.heartbeatInterval = setInterval(() => this.heartbeat(), delay);
        break;
      }
    }
  }

  heartbeat() {
    this.sendPayload(VoiceOPCodes.Heartbeat, Date.now());
  }
}
