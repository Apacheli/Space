import { parse } from "https://deno.land/std@0.95.0/path/mod.ts";
import { version } from "../meta.ts";

const stage = "alpha";

const promptVersion = prompt("new version:");
if (!promptVersion) {
  throw new Error("bad new version");
}
const newVersion = `${promptVersion}${stage && `-${stage}`}`;

const write = async (file: string) => {
  const content = await Deno.readTextFile(file);
  const newContent = content.replace(new RegExp(version, "g"), newVersion);
  const { ext, name } = parse(file);
  await Deno.writeTextFile(`${name}-new${ext}`, newContent);
};

const files = ["meta.ts", "README.md"];

await Promise.all(files.map(write));
console.log("Done.");
