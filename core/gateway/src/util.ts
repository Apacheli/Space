import type { GuildMember } from "../../types/src/resources/guild.ts";
import type {
  DispatchPayloadGuildMembersChunkData,
  DispatchPayloadPresenceUpdateData,
} from "../../types/src/topics/gateway.ts";

export interface RequestGuildMembersMapEntry {
  members: GuildMember[];
  presences: DispatchPayloadPresenceUpdateData[];
  notFound: (string | number)[];
  resolve: (value: RequestGuildMembersMapEntry) => void;
}

export const concatGuildMembersChunk = (
  entry: RequestGuildMembersMapEntry,
  chunk: DispatchPayloadGuildMembersChunkData,
) => {
  entry.members.push(...chunk.members);
  if (chunk.presences) {
    entry.presences.push(...chunk.presences);
  }
  if (chunk.not_found) {
    entry.notFound.push(...chunk.not_found);
  }
};
