const RELEASES = await Deno.readTextFile("./RELEASES.md");

const tagReleases = RELEASES
  .replace(/\[`\w{7}`\]\((.+?)\)/g, "$1")
  .replace(/ +/g, " ");

console.log(`Parsing 'RELEASES.md' for GitHub tag format compatibility...`);
await Deno.writeTextFile("RELEASES_new.md", tagReleases);
console.log("Done. See 'RELEASES_new.md' for tag version.");
