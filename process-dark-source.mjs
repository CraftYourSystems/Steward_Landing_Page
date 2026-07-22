import fs from 'fs';
import { PNG } from 'pngjs';
import path from 'path';

const landingDir = process.cwd();
const publicDir = path.join(landingDir, 'public');

const symbolFile = path.join(landingDir, 'Stylized logo with growth symbolism.png');
const fullLogoFile = path.join(landingDir, 'Modern logo design with growth symbol.png');

const symbolPng = PNG.sync.read(fs.readFileSync(symbolFile));
const fullLogoPng = PNG.sync.read(fs.readFileSync(fullLogoFile));

function getBgColor(png) {
  // Sample 4 corners
  const corners = [
    0,
    (png.width - 1) * 4,
    (png.width * (png.height - 1)) * 4,
    (png.width * png.height - 1) * 4
  ];
  let rSum = 0, gSum = 0, bSum = 0;
  for (const c of corners) {
    rSum += png.data[c];
    gSum += png.data[c + 1];
    bSum += png.data[c + 2];
  }
  return {
    r: Math.round(rSum / 4),
    g: Math.round(gSum / 4),
    b: Math.round(bSum / 4)
  };
}

function processDarkSource(png) {
  const bg = getBgColor(png);
  console.log('Detected background color:', bg);

  // Find bounding box of non-bg pixels
  let minX = png.width, minY = png.height, maxX = 0, maxY = 0;
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      const r = png.data[idx];
      const g = png.data[idx + 1];
      const b = png.data[idx + 2];
      const dist = Math.sqrt((r - bg.r) ** 2 + (g - bg.g) ** 2 + (b - bg.b) ** 2);
      if (dist > 25) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const pad = 12;
  const box = {
    x: Math.max(0, minX - pad),
    y: Math.max(0, minY - pad),
    w: Math.min(png.width, (maxX - minX + 1) + pad * 2),
    h: Math.min(png.height, (maxY - minY + 1) + pad * 2)
  };
  console.log('Cropped logo bounds:', box);

  const out = new PNG({ width: box.w, height: box.h });

  for (let y = 0; y < box.h; y++) {
    for (let x = 0; x < box.w; x++) {
      const srcX = box.x + x;
      const srcY = box.y + y;
      const srcIdx = (png.width * srcY + srcX) << 2;
      const dstIdx = (box.w * y + x) << 2;

      const r = png.data[srcIdx];
      const g = png.data[srcIdx + 1];
      const b = png.data[srcIdx + 2];
      const dist = Math.sqrt((r - bg.r) ** 2 + (g - bg.g) ** 2 + (b - bg.b) ** 2);

      if (dist <= 25) {
        // Background -> Transparent
        out.data[dstIdx] = 0;
        out.data[dstIdx + 1] = 0;
        out.data[dstIdx + 2] = 0;
        out.data[dstIdx + 3] = 0;
      } else {
        // Foreground drawing pixel
        // Calculate alpha based on distance from background color
        const alpha = Math.min(255, Math.round((dist / 120) * 255));
        
        // Preserve drawing color or boost brightness for white strokes
        const lightness = (r + g + b) / 3;
        const targetVal = Math.min(255, Math.round(lightness * 1.5));

        out.data[dstIdx] = targetVal;
        out.data[dstIdx + 1] = targetVal;
        out.data[dstIdx + 2] = targetVal;
        out.data[dstIdx + 3] = alpha;
      }
    }
  }
  return out;
}

const cleanSymbol = processDarkSource(symbolPng);
const cleanFullLogo = processDarkSource(fullLogoPng);

fs.writeFileSync(path.join(publicDir, 'exact-symbol-white.png'), PNG.sync.write(cleanSymbol));
fs.writeFileSync(path.join(publicDir, 'exact-logo-white.png'), PNG.sync.write(cleanFullLogo));
fs.writeFileSync(path.join(publicDir, 'symbol-white.png'), PNG.sync.write(cleanSymbol));

console.log('Background removed perfectly from original dark source image!');
