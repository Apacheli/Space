import { logger } from "../util/mod.ts";

export default class PermissionsError extends Error {
  constructor(public permissions: string[]) {
    super();
  }

  get message() {
    return `Missing permissions: ${
      logger.highlight(`"${this.permissions.join('", "')}"`)
    }`;
  }
}
