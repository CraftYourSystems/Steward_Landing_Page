import fs from 'fs';
import path from 'path';

const landingDir = process.cwd();
const publicDir = path.join(landingDir, 'public');
const assetsDir = path.join(landingDir, 'src', 'assets');

// 1. High Precision Pure SVG Symbol (White for Dark Theme)
const symbolWhiteSvg = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Smooth S Curve -->
  <path d="M 345 115 C 230 45, 145 130, 200 230 C 250 300, 320 280, 285 360 C 250 425, 175 400, 135 360" 
        stroke="#FFFFFF" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Bar Chart Columns -->
  <rect x="175" y="270" width="24" height="65" rx="5" fill="#FFFFFF"/>
  <rect x="212" y="235" width="24" height="100" rx="5" fill="#FFFFFF"/>
  <rect x="249" y="195" width="24" height="140" rx="5" fill="#FFFFFF"/>
  <!-- Growth Arrow Swoop -->
  <path d="M 120 365 C 160 455, 315 450, 365 305" 
        stroke="#FFFFFF" stroke-width="24" stroke-linecap="round"/>
  <!-- Arrowhead -->
  <path d="M 342 298 L 382 282 L 376 332 Z" fill="#FFFFFF"/>
</svg>`;

// 2. High Precision Pure SVG Symbol (Dark for Light Theme)
const symbolDarkSvg = symbolWhiteSvg.replaceAll('#FFFFFF', '#0A0A0F');

// 3. Full Logo with Text (SVG)
const fullLogoWhiteSvg = `<svg width="1200" height="320" viewBox="0 0 1200 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(10, -96) scale(0.65)">
    ${symbolWhiteSvg.replace('<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">', '').replace('</svg>', '')}
  </g>
  <text x="360" y="200" font-family="'Inter', system-ui, -apple-system, sans-serif" font-weight="700" font-size="110" letter-spacing="18" fill="#FFFFFF">STEWARD</text>
</svg>`;

const fullLogoDarkSvg = fullLogoWhiteSvg.replaceAll('#FFFFFF', '#0A0A0F');

// Save SVG files to public and assets
fs.writeFileSync(path.join(publicDir, 'symbol-white.svg'), symbolWhiteSvg);
fs.writeFileSync(path.join(publicDir, 'symbol-dark.svg'), symbolDarkSvg);
fs.writeFileSync(path.join(publicDir, 'symbol.svg'), symbolWhiteSvg);
fs.writeFileSync(path.join(publicDir, 'logo-white.svg'), fullLogoWhiteSvg);
fs.writeFileSync(path.join(publicDir, 'logo-dark.svg'), fullLogoDarkSvg);
fs.writeFileSync(path.join(publicDir, 'logo.svg'), fullLogoWhiteSvg);

fs.writeFileSync(path.join(assetsDir, 'symbol-white.svg'), symbolWhiteSvg);
fs.writeFileSync(path.join(assetsDir, 'symbol-dark.svg'), symbolDarkSvg);
fs.writeFileSync(path.join(assetsDir, 'logo-white.svg'), fullLogoWhiteSvg);

console.log('Clean vector SVG logo assets created successfully!');
