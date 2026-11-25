// Two Robots in an Elevator — a make.fun micro entry.
// Writes one line of awkward robot small talk to /output/entry.txt,
// where the sealed scorer and the judge read it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ran a full diagnostic to find something to talk about. Results inconclusive. Nice chassis, though.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
