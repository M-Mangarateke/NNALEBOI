import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directories = [
  path.join(__dirname, 'public', 'images'),
  path.join(__dirname, 'public', 'Gallery', 'images'),
  path.join(__dirname, 'public', 'Brand'),
];

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const inputPath = path.join(dir, file);
      const name = path.basename(file, ext);
      const outputPath = path.join(dir, `${name}.webp`);

      try {
        await sharp(inputPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
        
        console.log(`Converted: ${file} -> ${name}.webp`);
        fs.unlinkSync(inputPath); // Delete original
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

async function run() {
  for (const dir of directories) {
    await processDirectory(dir);
  }
  console.log('All images converted.');
}

run();
