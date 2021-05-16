import { parse } from "https://deno.land/std@0.95.0/path/mod.ts";
import { version } from "../meta.ts";

const stage = "alpha";

async function* getMods(path: string): AsyncGenerator<string> {
  for await (const dirEntry of Deno.readDir(path)) {
    const filePath = `${path}/${dirEntry.name}`;
    if (dirEntry.isDirectory) {
      yield* getMods(filePath);
    } else if ([".md", ".ts"].some((ext) => filePath.endsWith(ext))) {
      yield filePath;
    }
  }
}

const write = async (file: string) => {
  const content = await Deno.readTextFile(file);
  const newContent = content.replace(new RegExp(version, "g"), newVersion);
  if (newContent !== content) {
    const { ext, name } = parse(file);
    console.log(`Fixed version documentation in '${file}'.`);
    return Deno.writeTextFile(`${name}_new${ext}`, newContent);
  }
};

const promptVersion = prompt("new version:");
if (!promptVersion) {
  throw new Error("bad new version");
}
const newVersion = `${promptVersion}${stage ? `-${stage}` : ""}`;

console.log("Running 'upgrade' script...");

const promises = [];
for await (const modPath of getMods(".")) {
  promises.push(write(modPath));
}
await Promise.all(promises);

console.log(`Done. Upgraded to version '${newVersion}' from '${version}'.`);
