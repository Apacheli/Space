import { logger } from "../util/mod.ts";

export class PermissionsError extends Error {
  name = "PermissionsError";

  constructor(public permissions: string[]) {
    super();
  }

  get message() {
    return logger.highlight(
      `Missing permissions: "${this.permissions.join('", "')}"`,
    );
  }
}
