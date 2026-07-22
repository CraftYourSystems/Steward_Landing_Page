import fs from 'fs';
import { PNG } from 'pngjs';
import path from 'path';

const landingDir = process.cwd();
const publicDir = path.join(landingDir, 'public');

const symbolFile = path.join(landingDir, 'Stylized logo with growth symbolism.png');
const fullLogoFile = path.join(landingDir, 'Modern logo design with growth symbol.png');

const symbolPng = PNG.sync.read(fs.readFileSync(symbolFile));
const fullLogoPng = PNG.sync.read(fs.readFileSync(fullLogoFile));

function getCropBox(png) {
  let minX = png.width, minY = png.height, maxX = 0, maxY = 0;
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      const l = (png.data[idx] + png.data[idx + 1] + png.data[idx + 2]) / 3;
      if (l <= 130) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const pad = 12;
  return {
    x: Math.max(0, minX - pad),
    y: Math.max(0, minY - pad),
    w: Math.min(png.width, (maxX - minX + 1) + pad * 2),
    h: Math.min(png.height, (maxY - minY + 1) + pad * 2)
  };
}

function processPerfectClean(png, isWhiteOutput = true) {
  const box = getCropBox(png);
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
      const l = (r + g + b) / 3;

      if (l > 135) {
        // 100% Background -> Zero alpha
        out.data[dstIdx] = 0;
        out.data[dstIdx + 1] = 0;
        out.data[dstIdx + 2] = 0;
        out.data[dstIdx + 3] = 0;
      } else {
        // True stroke pixel -> Solid stroke with smooth anti-aliased edge
        const strokeAlpha = Math.min(1.0, (135 - l) / 60);
        const alpha = Math.round(strokeAlpha * 255);

        if (isWhiteOutput) {
          out.data[dstIdx] = 255;
          out.data[dstIdx + 1] = 255;
          out.data[dstIdx + 2] = 255;
        } else {
          out.data[dstIdx] = 10;
          out.data[dstIdx + 1] = 10;
          out.data[dstIdx + 2] = 15;
        }
        out.data[dstIdx + 3] = alpha;
      }
    }
  }
  return out;
}

const exactSymbolWhite = processPerfectClean(symbolPng, true);
const exactSymbolDark = processPerfectClean(symbolPng, false);
const exactFullLogoWhite = processPerfectClean(fullLogoPng, true);
const exactFullLogoDark = processPerfectClean(fullLogoPng, false);

fs.writeFileSync(path.join(publicDir, 'exact-symbol-white.png'), PNG.sync.write(exactSymbolWhite));
fs.writeFileSync(path.join(publicDir, 'exact-symbol-dark.png'), PNG.sync.write(exactSymbolDark));
fs.writeFileSync(path.join(publicDir, 'exact-logo-white.png'), PNG.sync.write(exactFullLogoWhite));
fs.writeFileSync(path.join(publicDir, 'exact-logo-dark.png'), PNG.sync.write(exactFullLogoDark));

console.log('100% Perfect background removal complete!');
