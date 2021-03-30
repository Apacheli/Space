import { APIRole } from "../../deps.ts";
import Struct from "../struct.ts";

export default class Role extends Struct {
  name!: APIRole["name"];
  color!: APIRole["color"];
  hoist!: APIRole["hoist"];
  position!: APIRole["position"];
  permissions!: APIRole["permissions"];
  managed!: APIRole["managed"];
  mentionable!: APIRole["mentionable"];
  tags: APIRole["tags"];

  update(data: APIRole) {
    super.update(data);

    this.name = data.name;
    this.color = data.color;
    this.hoist = data.hoist;
    this.position = data.position;
    this.permissions = data.permissions;
    this.managed = data.managed;
    this.mentionable = data.mentionable;
    this.tags = data.tags;
  }
}
