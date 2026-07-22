import fs from 'fs';
import { PNG } from 'pngjs';
import path from 'path';

const landingDir = process.cwd();
const publicDir = path.join(landingDir, 'public');
const assetsDir = path.join(landingDir, 'src', 'assets');

const fullLogoFile = path.join(landingDir, 'Modern logo design with growth symbol.png');
const symbolFile = path.join(landingDir, 'Stylized logo with growth symbolism.png');

console.log('Reading source image files...');
const fullLogoPng = PNG.sync.read(fs.readFileSync(fullLogoFile));
const symbolPng = PNG.sync.read(fs.readFileSync(symbolFile));

function getBoundingBox(png, threshold = 230) {
  let minX = png.width, minY = png.height, maxX = 0, maxY = 0;
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      const lightness = (png.data[idx] + png.data[idx + 1] + png.data[idx + 2]) / 3;
      if (png.data[idx + 3] > 20 && lightness < threshold) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const padding = 16;
  return {
    x: Math.max(0, minX - padding),
    y: Math.max(0, minY - padding),
    w: Math.min(png.width, (maxX - minX + 1) + padding * 2),
    h: Math.min(png.height, (maxY - minY + 1) + padding * 2)
  };
}

function cropPNG(png, box) {
  const cropped = new PNG({ width: box.w, height: box.h });
  for (let y = 0; y < box.h; y++) {
    for (let x = 0; x < box.w; x++) {
      const srcX = box.x + x;
      const srcY = box.y + y;
      if (srcX < png.width && srcY < png.height) {
        const srcIdx = (png.width * srcY + srcX) << 2;
        const dstIdx = (box.w * y + x) << 2;
        cropped.data[dstIdx] = png.data[srcIdx];
        cropped.data[dstIdx + 1] = png.data[srcIdx + 1];
        cropped.data[dstIdx + 2] = png.data[srcIdx + 2];
        cropped.data[dstIdx + 3] = png.data[srcIdx + 3];
      }
    }
  }
  return cropped;
}

// Convert dark sketch lines on white bg to bold white (or dark) strokes on transparent bg
function processToBoldTransparent(png, targetR = 255, targetG = 255, targetB = 255, dilateRadius = 2) {
  // 1. Initial alpha map
  const tempAlpha = new Float32Array(png.width * png.height);
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      const lightness = (png.data[idx] + png.data[idx + 1] + png.data[idx + 2]) / 3;
      const stroke = Math.max(0, (240 - lightness) / 240);
      // High contrast boost
      tempAlpha[png.width * y + x] = Math.min(1.0, stroke * 1.8);
    }
  }

  // 2. Morphological Dilation (thickening lines so thin sketch lines become bold solid strokes)
  const dilatedAlpha = new Float32Array(png.width * png.height);
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      let maxVal = 0;
      for (let dy = -dilateRadius; dy <= dilateRadius; dy++) {
        for (let dx = -dilateRadius; dx <= dilateRadius; dx++) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < png.width && ny >= 0 && ny < png.height) {
            const val = tempAlpha[png.width * ny + nx];
            if (val > maxVal) maxVal = val;
          }
        }
      }
      dilatedAlpha[png.width * y + x] = maxVal;
    }
  }

  // 3. Construct output PNG
  const result = new PNG({ width: png.width, height: png.height });
  for (let i = 0; i < dilatedAlpha.length; i++) {
    const idx = i << 2;
    const a = Math.round(dilatedAlpha[i] * 255);
    result.data[idx] = targetR;
    result.data[idx + 1] = targetG;
    result.data[idx + 2] = targetB;
    result.data[idx + 3] = a;
  }
  return result;
}

function resizePNG(png, newWidth, newHeight) {
  const resized = new PNG({ width: newWidth, height: newHeight });
  const xRatio = png.width / newWidth;
  const yRatio = png.height / newHeight;

  for (let y = 0; y < newHeight; y++) {
    for (let x = 0; x < newWidth; x++) {
      const px = Math.floor(x * xRatio);
      const py = Math.floor(y * yRatio);
      const srcIdx = (png.width * py + px) << 2;
      const dstIdx = (newWidth * y + x) << 2;

      resized.data[dstIdx] = png.data[srcIdx];
      resized.data[dstIdx + 1] = png.data[srcIdx + 1];
      resized.data[dstIdx + 2] = png.data[srcIdx + 2];
      resized.data[dstIdx + 3] = png.data[srcIdx + 3];
    }
  }
  return resized;
}

// 1. Symbol
const symbolBox = getBoundingBox(symbolPng);
const croppedSymbol = cropPNG(symbolPng, symbolBox);
const symbolWhiteTransparent = processToBoldTransparent(croppedSymbol, 255, 255, 255, 3);
const symbolDarkTransparent = processToBoldTransparent(croppedSymbol, 10, 10, 15, 3);

// 2. Full Logo
const fullLogoBox = getBoundingBox(fullLogoPng);
const croppedFullLogo = cropPNG(fullLogoPng, fullLogoBox);
const fullLogoWhiteTransparent = processToBoldTransparent(croppedFullLogo, 255, 255, 255, 2);
const fullLogoDarkTransparent = processToBoldTransparent(croppedFullLogo, 10, 10, 15, 2);

// Save outputs
fs.writeFileSync(path.join(publicDir, 'symbol-white.png'), PNG.sync.write(symbolWhiteTransparent));
fs.writeFileSync(path.join(publicDir, 'symbol-dark.png'), PNG.sync.write(symbolDarkTransparent));
fs.writeFileSync(path.join(publicDir, 'logo-white.png'), PNG.sync.write(fullLogoWhiteTransparent));
fs.writeFileSync(path.join(publicDir, 'logo-dark.png'), PNG.sync.write(fullLogoDarkTransparent));

// Favicon with dark circular badge container for crisp tab display
const favicon512 = new PNG({ width: 512, height: 512 });
const cx = 256, cy = 256, r = 240;
for (let y = 0; y < 512; y++) {
  for (let x = 0; x < 512; x++) {
    const idx = (512 * y + x) << 2;
    const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
    if (dist <= r) {
      const edge = Math.min(1, Math.max(0, r + 1 - dist));
      favicon512.data[idx] = 12;
      favicon512.data[idx + 1] = 12;
      favicon512.data[idx + 2] = 18;
      favicon512.data[idx + 3] = Math.round(255 * edge);
    }
  }
}
const scaledSym = resizePNG(symbolWhiteTransparent, 360, 360);
const off = Math.floor((512 - 360) / 2);
for (let y = 0; y < 360; y++) {
  for (let x = 0; x < 360; x++) {
    const srcIdx = (360 * y + x) << 2;
    const dstIdx = (512 * (y + off) + (x + off)) << 2;
    const sa = scaledSym.data[srcIdx + 3] / 255;
    if (sa > 0) {
      favicon512.data[dstIdx] = Math.round(255 * sa + favicon512.data[dstIdx] * (1 - sa));
      favicon512.data[dstIdx + 1] = Math.round(255 * sa + favicon512.data[dstIdx + 1] * (1 - sa));
      favicon512.data[dstIdx + 2] = Math.round(255 * sa + favicon512.data[dstIdx + 2] * (1 - sa));
      favicon512.data[dstIdx + 3] = Math.max(favicon512.data[dstIdx + 3], Math.round(sa * 255));
    }
  }
}

fs.writeFileSync(path.join(publicDir, 'favicon.png'), PNG.sync.write(resizePNG(favicon512, 32, 32)));
fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), PNG.sync.write(resizePNG(favicon512, 32, 32)));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), PNG.sync.write(resizePNG(favicon512, 180, 180)));
fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), PNG.sync.write(favicon512));

console.log('Bold line logos and favicons processed!');
