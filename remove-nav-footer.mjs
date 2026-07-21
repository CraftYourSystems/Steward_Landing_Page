import fs from 'fs';
import path from 'path';

const pagesDir = '/home/karthik/Desktop/Coding/CYS/Landing_page/Steward_Landing_Page/src/feature-pages/pages';

function cleanPages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      cleanPages(fullPath);
    } else if (entry.isFile() && fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove imports
      content = content.replace(/import\s+{\s*Navbar\s*}\s+from\s+["']@\/feature-pages\/components\/layout\/Navbar["'];?\r?\n/g, '');
      content = content.replace(/import\s+{\s*Footer\s*}\s+from\s+["']@\/feature-pages\/components\/layout\/Footer["'];?\r?\n/g, '');
      
      // Remove components
      content = content.replace(/<Navbar\s*\/>\r?\n?/g, '');
      content = content.replace(/<Footer\s*\/>\r?\n?/g, '');
      
      fs.writeFileSync(fullPath, content);
      console.log(`Cleaned: ${fullPath}`);
    }
  }
}

cleanPages(pagesDir);
