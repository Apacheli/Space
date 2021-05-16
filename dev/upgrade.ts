import { parse } from "https://deno.land/std@0.95.0/path/mod.ts";
import { version } from "../meta.ts";

const stage = "alpha";

const promptVersion = prompt("new version:");
if (!promptVersion) {
  throw new Error("bad new version");
}
const newVersion = `${promptVersion}${stage ? `-${stage}` : ""}`;

const write = async (file: string) => {
  const content = await Deno.readTextFile(file);
  const newContent = content.replace(new RegExp(version, "g"), newVersion);
  const { ext, name } = parse(file);
  return Deno.writeTextFile(`${name}_new${ext}`, newContent);
};

const files = ["meta.ts", "README.md"];

console.log("Running 'upgrade' script...");
await Promise.all(files.map(write));
console.log(`Done. Upgraded to version '${newVersion}' from '${version}'.`);
