import { logger } from "../util/mod.ts";

export default class PermissionsError extends Error {
  constructor(public permissions: string[]) {
    super();
  }

  get message() {
    return logger.highlight(
      `Missing permissions: "${this.permissions.join('", "')}"`,
    );
  }
}
