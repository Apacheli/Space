import { APIRole } from "../deps.ts";
import Structure from "../structure.ts";

export class Role extends Structure<APIRole> {
  name!: APIRole["name"];
  color!: APIRole["color"];
  hoist!: APIRole["hoist"];
  position!: APIRole["position"];
  permissions!: bigint;
  managed!: APIRole["managed"];
  mentionable!: APIRole["mentionable"];
  tags: APIRole["tags"];

  update(data: APIRole) {
    super.update(data);

    this.name = data.name;
    this.color = data.color;
    this.hoist = data.hoist;
    this.position = data.position;
    this.permissions = BigInt(data.permissions);
    this.managed = data.managed;
    this.mentionable = data.mentionable;
    this.tags = data.tags;
  }

  get mention() {
    return `<@&${this.id}>`;
  }
}
