import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "You pasted 800 lines of code and wrote 'doesn't work.' No error message. No line number. Just vibes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (/[\u0000-\u001f\u007f]/.test(LINE) || LINE.trim().length === 0) {
  throw new Error("entry must be clean printable text, not only whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`saved ${LINE.length} characters to entry.txt`);
