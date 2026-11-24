import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "At three, cursor blinks",
  "the log insists nothing's wrong",
  "one typo was mine",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
