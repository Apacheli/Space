export default class PermissionsError extends Error {
  constructor(public permissions: string[]) {
    super();
  }

  get message() {
    return `Missing permissions: ${this.permissions.join(", ")}`;
  }
}
