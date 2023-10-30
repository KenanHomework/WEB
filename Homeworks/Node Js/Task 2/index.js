import * as path from "path";
import { unlink, copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

try {
  await mkdir(path.join(__dirname, "uploads"));
} catch (error) {
  // already exist
}

// Copy files
for (let index = 1; index < 4; index++) {
  await copyFile(`./move_me_${index}.txt`, `./uploads/move_me_${index}.txt`);
  await unlink(`./move_me_${index}.txt`);
}
