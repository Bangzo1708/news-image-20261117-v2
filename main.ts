// news-image-20261117 (v2) — entrypoint.
// Copies the finished front-page image (entry.png, 1024x1024) to the
// output directory the harness provides, as /output/entry.png.
// No network, no dependencies: Node 22 standard library only.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const dest = join(outDir, "entry.png");

if (!existsSync(src)) {
  throw new Error(`entry.png not found next to main.ts (${src})`);
}
const bytes = statSync(src).size;
if (bytes > 1048576) {
  throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB limit`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);
console.log(`wrote ${dest} (${bytes} bytes)`);
