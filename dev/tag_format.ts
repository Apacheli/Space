const RELEASES = await Deno.readTextFile("./RELEASES.md");

// TODO: Make a better regex
const tagReleases = RELEASES
  .replace(/\[`\w{7}`\]\((.+?)\)/g, "$1")
  .replace(/ +/g, " ");

await Deno.writeTextFile("README-new.md", tagReleases);
console.log("Done.");
