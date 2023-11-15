import fs from "fs";
import path from "path";
import archiver from "archiver";

const sourceDirectory = "target_folder";
const targetPath = "zipped_target_folder.zip";

const output = fs.createWriteStream(targetPath);
const archive = archiver("zip", { zlib: { level: 9 } });

output.on("close", () => {
  console.log("Finished.");
});

archive.on("error", (err) => {
  console.error("Error accrued:", err);
});

archive.pipe(output);

const files = fs.readdirSync(sourceDirectory);

for (const file of files) {
  const filePath = path.join(sourceDirectory, file);
  archive.file(filePath, { name: file });
}

archive.finalize();
