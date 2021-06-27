import { DiscordSocket } from "../../util/src/discord_socket.ts";
import { GatewayOpcodes } from "../../types/src/topics/opcodes_and_status_codes.ts";

export class Shard extends DiscordSocket {
  heartbeat() {
    this.sendPayload(GatewayOpcodes.Heartbeat);
  }

  identify() {
    this.sendPayload(GatewayOpcodes.Identify);
  }

  presenceUpdate() {
    this.sendPayload(GatewayOpcodes.PresenceUpdate);
  }

  voiceStateUpdate() {
    this.sendPayload(GatewayOpcodes.VoiceStateUpdate);
  }

  resume() {
    this.sendPayload(GatewayOpcodes.Resume);
  }

  requestGuildMembers() {
    this.sendPayload(GatewayOpcodes.RequestGuildMembers);
  }
}
