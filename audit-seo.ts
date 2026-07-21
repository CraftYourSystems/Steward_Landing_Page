import { seoConfig } from './src/seo/seoConfig';

function runAudit() {
  console.log('--- Steward SEO Audit ---');
  console.log(`Found ${Object.keys(seoConfig).length} routes configured.\n`);

  const titles = new Set<string>();
  const descriptions = new Set<string>();
  const keywords = new Set<string>();

  const table = [];
  let hasErrors = false;

  for (const [route, config] of Object.entries(seoConfig)) {
    const hasSchema = !!config.jsonLd;
    const hasFaq = !!config.faqs && config.faqs.length > 0;
    
    // Check for duplicates
    const isDuplicateTitle = titles.has(config.title);
    const isDuplicateDesc = descriptions.has(config.description);
    const isDuplicateKw = config.keywords && keywords.has(config.keywords);

    if (isDuplicateTitle || isDuplicateDesc || isDuplicateKw) {
      hasErrors = true;
    }

    titles.add(config.title);
    descriptions.add(config.description);
    if (config.keywords) keywords.add(config.keywords);

    // Schema inspection
    let schemas: any[] = [];
    if (Array.isArray(config.jsonLd)) {
      schemas = config.jsonLd.map((s: any) => s['@type']);
    } else if (config.jsonLd) {
      schemas = [(config.jsonLd as any)['@type']];
    }

    table.push({
      URL: route,
      TitleLength: config.title.length,
      DescLength: config.description.length,
      TargetKeyword: config.keywords.split(',')[0],
      HasSchema: hasSchema ? schemas.join(', ') : 'No',
      HasFAQ: hasFaq ? 'Yes' : 'No',
      Status: (isDuplicateTitle || isDuplicateDesc) ? 'DUPLICATE' : 'OK'
    });
  }

  console.table(table);

  if (hasErrors) {
    console.error('\n❌ Audit failed: Duplicate titles, descriptions, or exact keywords found across routes.');
    process.exit(1);
  } else {
    console.log('\n✅ Audit passed: All routes have unique metadata and schemas.');
  }
}

runAudit();
