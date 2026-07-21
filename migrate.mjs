import fs from 'fs';
import path from 'path';

const srcBase = '/home/karthik/Desktop/Coding/CYS/steward components/new project/steward/src';
const destBase = '/home/karthik/Desktop/Coding/CYS/Landing_page/Steward_Landing_Page/src/feature-pages';

function copyAndTransform(sourceDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(sourceDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyAndTransform(srcPath, destPath);
    } else {
      if (entry.name === 'globals.css' || entry.name === 'favicon.ico' || entry.name === 'layout.tsx' || (entry.name === 'page.tsx' && sourceDir === path.join(srcBase, 'app'))) {
        continue;
      }

      let content = fs.readFileSync(srcPath, 'utf8');

      // Transformations
      content = content.replace(/"use client";?\r?\n/g, '');
      content = content.replace(/'use client';?\r?\n/g, '');
      content = content.replace(/import Link from ["']next\/link["']/g, 'import { Link } from "react-router-dom"');
      content = content.replace(/@\/components\//g, '@/feature-pages/components/');

      fs.writeFileSync(destPath, content);
      console.log(`Migrated: ${destPath}`);
    }
  }
}

console.log('Migrating components...');
copyAndTransform(path.join(srcBase, 'components'), path.join(destBase, 'components'));

console.log('Migrating pages...');
copyAndTransform(path.join(srcBase, 'app'), path.join(destBase, 'pages'));

console.log('Migration complete!');
