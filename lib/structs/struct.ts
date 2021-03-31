import { Snowflake } from "../deps.ts";
import Client from "../client/client.ts";

export const DISCORD_EPOCH = 1420070400000; // 2015-01-01
export const TIMESTAMP_SHIFT = 4194304;

export class Struct {
  id;

  constructor(data: { id: Snowflake }, public client: Client) {
    this.id = BigInt(data.id);

    this.update(data);
  }

  get timestamp() {
    return (this.id >> 22n) + 1420070400000n;
  }

  get internalWorkerID() {
    return (this.id & 0x3E0000n) >> 17n;
  }

  get internalProcessID() {
    return (this.id & 0x1F000n) >> 12n;
  }

  get increment() {
    return this.id & 0xFFFn;
  }

  update(data: any) {
  }
}

export default Struct;
