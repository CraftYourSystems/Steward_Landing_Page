import { Helmet } from 'react-helmet-async';
import { seoConfig, PageSEO } from './seoConfig';

interface SEOHeadProps {
  path: string;
  overrides?: Partial<PageSEO>;
}

const DOMAIN = 'https://steward.com'; // ← update to production domain

export default function SEOHead({ path, overrides }: SEOHeadProps) {
  const config = { ...(seoConfig[path] || seoConfig['/']), ...overrides };

  const jsonLdSchemas = Array.isArray(config.jsonLd)
    ? config.jsonLd
    : config.jsonLd
    ? [config.jsonLd]
    : [];

  // BreadcrumbList schema
  const isFeaturePage = path !== '/';
  const breadcrumbSchema = isFeaturePage
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: DOMAIN,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: config.title.split('—')[0].trim(),
            item: `${DOMAIN}${path}`,
          },
        ],
      }
    : null;

  // FAQPage schema
  const faqSchema =
    config.faqs && config.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: config.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  const allSchemas = [
    ...jsonLdSchemas,
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ...(faqSchema ? [faqSchema] : []),
  ];

  const ogImageUrl = config.ogImage || `${DOMAIN}/og-default.png`;
  const canonicalUrl = config.canonical || `${DOMAIN}${path}`;

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      {config.keywords && <meta name="keywords" content={config.keywords} />}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={path === '/' ? 'website' : 'article'} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Steward" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Robots */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

      {/* JSON-LD Schemas */}
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
      ))}
    </Helmet>
  );
}
