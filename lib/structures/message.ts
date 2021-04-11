import {
  APIMessage,
  RESTGetAPIChannelMessageReactionUsersQuery,
  RESTPatchAPIChannelMessageJSONBody,
} from "../../deps.ts";
import Structure from "./structure.ts";
import Client from "../client/client.ts";
import { ActualSnowflake } from "../util/mod.ts";

export class Message extends Structure {
  channelID;
  guildID;
  author;
  member;
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
  editedTimestamp!: number | null;
  mentionEveryone!: APIMessage["mention_everyone"];
  mentions!: APIMessage["mentions"];
  mentionRoles!: bigint[];
  mentionChannels?: bigint[];
  embeds!: APIMessage["embeds"];
  pinned!: APIMessage["pinned"];
  flags: APIMessage["flags"];

  constructor(data: APIMessage, client: Client) {
    super(data, client);

    this.channelID = BigInt(data.channel_id);
    this.guildID = data.guild_id && BigInt(data.guild_id);
    this.author = data.author; // TODO: cache without the Promise thing
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
    this.referencedMessage = data.referenced_message &&
      new Message(data.referenced_message, client);
    this.interaction = data.interaction;
  }

  update(data: APIMessage) {
    super.update(data);

    this.content = data.content;
    this.editedTimestamp = data.edited_timestamp
      ? Date.parse(data.edited_timestamp)
      : null;
    this.mentionEveryone = data.mention_everyone;
    this.mentions = data.mentions;
    this.mentionRoles = data.mention_roles.map(BigInt);
    this.mentionChannels = data.mention_channels?.map(BigInt);
    this.embeds = data.embeds;
    this.pinned = data.pinned;
    this.flags = data.flags;
  }

  crosspost() {
    return this.client.rest.crosspostMessage(this.channelID, this.id);
  }

  react(emoji: string) {
    return this.client.rest.createReaction(this.channelID, this.id, emoji);
  }

  unreact(emoji: string) {
    return this.client.rest.deleteOwnReaction(this.channelID, this.id, emoji);
  }

  deleteUserReaction(emoji: string, userID: ActualSnowflake) {
    return this.client.rest.deleteUserReaction(
      this.channelID,
      this.id,
      emoji,
      userID,
    );
  }

  getReactions(
    emoji: string,
    query: RESTGetAPIChannelMessageReactionUsersQuery,
  ) {
    return this.client.rest.getReactions(this.channelID, this.id, emoji, query);
  }

  edit(data: RESTPatchAPIChannelMessageJSONBody) {
    return this.client.rest.editMessage(this.channelID, this.id, data);
  }

  delete() {
    return this.client.rest.deleteMessage(this.channelID, this.id);
  }

  pin(reason?: string) {
    return this.client.rest.addPinnedChannelMessage(
      this.channelID,
      this.id,
      reason,
    );
  }

  unpin(reason?: string) {
    return this.client.rest.deletePinnedChannelMessage(
      this.channelID,
      this.id,
      reason,
    );
  }
}

export default Message;
