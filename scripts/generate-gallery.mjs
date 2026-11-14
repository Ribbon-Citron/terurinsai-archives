
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");
const galleryDir = path.join(publicDir, "gallery");
const thumbnailRoot = path.join(publicDir, "gallery-thumbs");

const extensions = [".jpg", ".jpeg", ".png", ".webp"];

const folders = await fs.readdir(galleryDir, {
  withFileTypes: true,
});

for (const folder of folders) {
  if (!folder.isDirectory()) continue;

  const id = folder.name;
  const sourceDir = path.join(galleryDir, id);
  const outputDir = path.join(thumbnailRoot, id);

  await fs.mkdir(outputDir, { recursive: true });

  const files = await fs.readdir(sourceDir);

  for (const filename of files) {
    if (!extensions.includes(path.extname(filename).toLowerCase())) {
      continue;
    }

    const input = path.join(sourceDir, filename);
    const output = path.join(outputDir, `${filename}.webp`);

    await sharp(input)
      .rotate()
      .resize(400, 400, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(output);

    console.log(`Generated: ${id}/${filename}.webp`);
  }
}
