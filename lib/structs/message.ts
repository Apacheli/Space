import { APIMessage } from "../../deps.ts";
import Client from "../client/client.ts";
import Struct from "./struct.ts";

export class Message extends Struct {
  channelID;
  guildID;
  author;
  member;
  // timestamp; Already exists in `Struct`
  tts;
  attachments;
  reactions; // Probably not changeable by MESSAGE_UPDATE(?)
  nonce;
  webhookID;
  type;
  activity;
  application;
  messageReference;
  stickers;
  referencedMessage;
  interaction;

  content!: APIMessage["content"];
  editedTimestamp!: APIMessage["edited_timestamp"];
  mentionEveryone!: APIMessage["mention_everyone"];
  mentions!: APIMessage["mentions"];
  mentionRoles!: APIMessage["mention_roles"];
  mentionChannels: APIMessage["mention_channels"];
  embeds!: APIMessage["embeds"];
  pinned!: APIMessage["pinned"];
  flags: APIMessage["flags"];

  constructor(data: APIMessage, client: Client) {
    super(data, client);

    this.channelID = BigInt(data.channel_id);
    this.guildID = data.guild_id && BigInt(data.guild_id);
    this.author = data.author;
    this.member = data.member;
    this.tts = data.tts;
    this.attachments = data.attachments;
    this.reactions = data.reactions;
    this.nonce = data.nonce;
    this.webhookID = data.webhook_id && BigInt(data.webhook_id);
    this.type = data.type;
    this.activity = data.activity;
    this.application = data.application;
    this.messageReference = data.message_reference;
    this.stickers = data.stickers;
    this.referencedMessage = data.referenced_message;
    this.interaction = data.interaction;
  }

  update(data: APIMessage) {
    this.content = data.content;
    this.editedTimestamp = data.edited_timestamp;
    this.mentionEveryone = data.mention_everyone;
    this.mentions = data.mentions;
    this.mentionRoles = data.mention_roles;
    this.mentionChannels = data.mention_channels;
    this.embeds = data.embeds;
    this.pinned = data.pinned;
    this.flags = data.flags;
  }
}

export default Message;
