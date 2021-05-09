import { logger } from "../util/mod.ts";

export class PermissionsError extends Error {
  name = "PermissionsError";

  constructor(public permissions: string[]) {
    super();
  }

  get message() {
    const message = `Missing permissions: "${this.permissions.join('", "')}"`;
    return logger.highlight(message);
  }
}
