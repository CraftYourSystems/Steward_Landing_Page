/**
 * inject-seo.mjs
 * Adds SEOHead and FeaturePageWrapper to every feature page.
 * Run once: node inject-seo.mjs
 */
import fs from 'fs';
import path from 'path';

const pagesDir = 'src/feature-pages/pages';

const pages = fs.readdirSync(pagesDir).filter(d =>
  fs.statSync(path.join(pagesDir, d)).isDirectory()
);

for (const slug of pages) {
  const filePath = path.join(pagesDir, slug, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already done
  if (content.includes('SEOHead') || content.includes('FeaturePageWrapper')) {
    console.log(`Skipped (already done): ${slug}`);
    continue;
  }

  // Add imports at the top
  const importBlock = `import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';
import { seoConfig } from '@/seo/seoConfig';
`;
  content = importBlock + content;

  // Find the export default function line and the first return (
  // We wrap the <main> with FeaturePageWrapper + SEOHead
  // Strategy: replace `return (\n    <main` with injected wrapper
  content = content.replace(
    /return \(\s*\n(\s*)<main/,
    (match, indent) => {
      return `const seo = seoConfig['/${slug}'] || seoConfig['/'];
  return (
${indent}<>
${indent}  <SEOHead path="/${slug}" />
${indent}  <FeaturePageWrapper
${indent}    answerBlock={seo.answerBlock}
${indent}    faqs={seo.faqs}
${indent}    relatedPages={seo.relatedPages}
${indent}  >
${indent}    <main`;
    }
  );

  // Close FeaturePageWrapper before the last closing paren
  // Find </main> just before );  and add closing tags
  content = content.replace(
    /(\s*<\/main>)\s*\n(\s*\);\s*\n?})/m,
    (match, mainClose, funcClose) => {
      return `${mainClose}
  </FeaturePageWrapper>
  </>
  );
}`;
    }
  );

  fs.writeFileSync(filePath, content);
  console.log(`✓ Injected SEO into: ${slug}`);
}

console.log('\nDone!');
