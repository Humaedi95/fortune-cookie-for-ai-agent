import { mkdirSync, writeFileSync } from "node:fs";

// The joke's turn: a classic fortune-cookie "beware" warning, but the
// danger is not fate — it is the human asking for "just one more tweak".
// The agent's context window is finite; the human's revisions are not,
// so the fortune warns the reader about its own reader.
const fortune =
  "Beware the human who says 'just one more tweak' — your context window is finite, but their revisions are not.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune + "\n", "utf8");
console.log(fortune);
