import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import exifr from "exifr";

export interface GalleryImage {
  filename: string;
  original: string;
  thumbnail: string;
  takenAt: string;
}

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

export async function getGalleryImages(id: string): Promise<GalleryImage[]> {
  const publicDir = path.join(process.cwd(), "public");
  const galleryDir = path.join(publicDir, "gallery", id);
  const thumbnailDir = path.join(publicDir, "gallery-thumbs", id);

  let files: string[];

  try {
    files = await fs.readdir(galleryDir);
  } catch {
    return [];
  }

  await fs.mkdir(thumbnailDir, { recursive: true });

  const images: GalleryImage[] = [];

  for (const filename of files) {
    const ext = path.extname(filename).toLowerCase();

    if (!IMAGE_EXTENSIONS.includes(ext)) continue;

    const originalPath = path.join(galleryDir, filename);
    const thumbnailFilename = `${filename}.webp`;
    const thumbnailPath = path.join(thumbnailDir, thumbnailFilename);

    const stat = await fs.stat(originalPath);

    // EXIF撮影日時を取得。取得できなければ更新日時を使用
    let date = stat.mtime;

    try {
      const exif = await exifr.parse(originalPath);

      const exifDate = exif?.DateTimeOriginal ?? exif?.CreateDate;

      if (exifDate instanceof Date && !isNaN(exifDate.getTime())) {
        date = exifDate;
      }
    } catch {
      // EXIF情報がない画像は更新日時を使用
    }

    // サムネイルを生成
    await sharp(originalPath)
      .rotate()
      .resize(400, 400, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(thumbnailPath);

    images.push({
      filename,
      original: `/gallery/${id}/${encodeURIComponent(filename)}`,
      thumbnail: `/gallery-thumbs/${id}/${encodeURIComponent(thumbnailFilename)}`,
      takenAt: date.toISOString(),
    });
  }

  // 撮影日時の古い順。同日時ならファイル名順
  images.sort((a, b) => {
    const dateDiff =
      new Date(a.takenAt).getTime() - new Date(b.takenAt).getTime();

    return dateDiff !== 0
      ? dateDiff
      : a.filename.localeCompare(b.filename, "ja");
  });

  return images;
}
