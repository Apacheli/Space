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

const modifyModText = async (modPath: string) => {
  const modText = await Deno.readTextFile(modPath);
  const newText = modText.replace(/com\/developers\/docs/g, "dev");
  if (newText !== modText) {
    await Deno.writeTextFile(modPath, newText);
    console.log(`Fixed URLs in '${modPath}'.`);
  }
};

for await (const modPath of getMods("lib")) {
  modifyModText(modPath);
}
