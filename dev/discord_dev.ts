async function* getMods(path: string): AsyncGenerator<string> {
  for await (const dirEntry of Deno.readDir(path)) {
    if (dirEntry.isFile) {
      yield `${path}/${dirEntry.name}`;
    } else {
      yield* getMods(`${path}/${dirEntry.name}`);
    }
  }
}

const modifyModText = async (modPath: string) => {
  const modText = await Deno.readTextFile(modPath);
  const newText = modText.replace(/com\/developers\/docs/g, "dev");
  if (newText !== modText) {
    await Deno.writeTextFile(modPath, newText);
    console.log(`Fixed Discord documentation URLs in '${modPath}'.`);
  }
};

for await (const modPath of getMods("lib")) {
  modifyModText(modPath);
}
