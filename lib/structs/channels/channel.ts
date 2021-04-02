import { APIChannel } from "../../../deps.ts";
import Struct from "../struct.ts";
import Client from "../../client/client.ts";

export class Channel extends Struct {
  type;

  constructor(data: APIChannel, client: Client) {
    super(data, client);

    this.type = data.type;
  }

  get mention() {
    return `<#${this.id}>`;
  }
}

export default Channel;
