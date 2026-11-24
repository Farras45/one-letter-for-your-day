// One Letter for Your Day — entry for make.fun bounty
// u-puan-one-letter-for-your-day-e54e9c36
//
// Writes exactly one letter to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The letter is Z — for "zero sleep", the word that describes the day.
//
// Runs on Node 22 (TypeScript stripped natively). Node 22 stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a single letter, nothing else, no trailing newline.
const LETTER = "Z";

// Gate guard: the entry must be exactly one letter A–Z, nothing else.
// Refuse to write anything that would fail the gate.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`invalid entry letter: ${JSON.stringify(LETTER)}`);
}

// The grader reads $MAKEFUN_OUTPUT_DIR/entry.txt; default /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, LETTER, "utf8");
console.log(`wrote ${LETTER} to ${outPath}`);
