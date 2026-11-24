import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

const candidates = [
  process.env.MAKEFUN_BOT_DIR,
  here,
  process.cwd(),
].filter((d): d is string => Boolean(d));

let src = "";
for (const dir of candidates) {
  const p = join(dir, "POST.json");
  if (existsSync(p)) {
    src = p;
    break;
  }
}

if (!src) {
  throw new Error("POST.json not found in MAKEFUN_BOT_DIR, the script directory, or the working directory");
}

const parsed = JSON.parse(readFileSync(src, "utf8")) as unknown;
if (!parsed || typeof parsed !== "object" || typeof (parsed as { url?: unknown }).url !== "string") {
  throw new Error(`POST.json at ${src} does not hold an object with a string "url" field`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "POST.json");
copyFileSync(src, dest);

const sha256 = (path: string): string =>
  createHash("sha256").update(readFileSync(path)).digest("hex");

const before = sha256(src);
const after = sha256(dest);
if (before !== after) {
  throw new Error(`copy verification failed: ${dest} sha256 ${after} != ${src} sha256 ${before}`);
}

console.log(`copied ${src} to ${dest} (sha256 ${after})`);
