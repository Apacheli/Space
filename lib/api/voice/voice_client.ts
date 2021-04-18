import Client from "../../client/client.ts";
import { onReady } from "../../client/events.ts";

const token = "";
const client = new Client(token);

client.gateway.listen("READY", async (_, shard) => {
  await onReady(client, _);
  shard.updateVoiceState({
    channel_id: "588077893318475888",
    guild_id: "588077893205229793",
  });
});

client.gateway.listen("VOICE_SERVER_UPDATE", async (data, shard) => {
  const voice = new VoiceClient(
    data.token,
    data.guild_id,
    shard.sessionID,
    client.user!.id.toString(),
  );
  await voice.connect(data.endpoint);
  voice.identify();
});

client.connect({ intents: 512 });

export default class VoiceClient {
  #interval?: number;
  private socket?: WebSocket;

  constructor(
    public voiceToken: string,
    public guildID: string,
    public sessionID: string,
    public userID: string,
  ) {
  }

  heartbeat() {
    this.sendPayload(3, Date.now());
  }

  connect(url: string) {
    const socket = this.socket = new WebSocket(`wss://${url}`);

    socket.addEventListener("message", (event) => {
      const payload = JSON.parse(event.data);

      console.log(payload);

      switch (payload.op) {
        case 8: { // Hello
          this.#interval = setInterval(
            () => this.heartbeat(),
            payload.d.heartbeat_interval,
          );
          break;
        }

        case 2: { // Identify
          console.log(payload);
          break;
        }
      }
    });

    socket.addEventListener(
      "close",
      ({ code, reason }) => {
        clearInterval(this.#interval);
        this.#interval = undefined;
        console.log("CLOSE", code, reason);
      },
    );

    return new Promise((resolve) => socket.addEventListener("open", resolve));
  }

  sendPayload(opcode: number, data: unknown) {
    console.log(opcode, data);
    this.socket?.send(JSON.stringify({ op: opcode, d: data }));
  }

  identify() {
    this.sendPayload(0, {
      token: this.voiceToken,
      server_id: this.guildID,
      session_id: this.sessionID,
      user_id: this.userID,
    });
  }
}
