import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of the Moon. 107 UTF-8 bytes, inside the 1-120 gate.
// The gag: the Moon makes no light of its own — a middleman with a god
// complex, fronting on the Sun's work and taking all the credit.
const ENTRY =
  "One star. Zero own light. Just a middleman with a god complex reflecting the Sun and taking all the credit.";
const MAX_CHARS = 120;

function validateEntry(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function writeEntry(text: string): void {
  validateEntry(text);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

function main(): void {
  writeEntry(ENTRY);
}

main();
