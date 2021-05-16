const RELEASES = await Deno.readTextFile("./RELEASES.md");

console.log(`Parsing 'RELEASES.md' to make it tag compatible...`);

const tagReleases = RELEASES
  .replace(/\[`\w{7}`\]\((.+?)\)/g, "$1")
  .replace(/\n(?![\n-])/g, "")
  .replace(/ +/g, " ");

await Deno.writeTextFile("RELEASES_new.md", tagReleases);

console.log("Done. See 'RELEASES_new.md' for tag compatible version.");
