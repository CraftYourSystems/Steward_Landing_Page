import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '@/seo/SEOHead';
import { seoConfig } from '@/seo/seoConfig';

interface ResourceArticleWrapperProps {
  path: string;
  children: React.ReactNode;
}

export default function ResourceArticleWrapper({ path, children }: ResourceArticleWrapperProps) {
  const config = seoConfig[path];

  return (
    <>
      <SEOHead path={path} />
      
      {/* Inject Article JSON-LD Schema explicitly since it's an article */}
      {config && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": config.title,
              "description": config.description,
              "author": {
                "@type": "Organization",
                "name": "Steward"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Steward"
              }
            })}
          </script>
        </Helmet>
      )}

      <main className="min-h-screen bg-steward-canvas pt-[100px] pb-24">
        <div className="container-reading">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            <a 
              href="/resources" 
              className="inline-flex items-center gap-2 font-primary text-sm font-medium text-steward-text-secondary hover:text-steward-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </a>
          </motion.div>

          {config?.answerBlock && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-12 p-6 rounded-xl bg-steward-surface border border-steward-border shadow-sm"
            >
              <h2 className="sr-only">Quick Answer</h2>
              <p className="font-primary text-lg md:text-xl text-steward-text-primary leading-relaxed">
                {config.answerBlock}
              </p>
            </motion.div>
          )}

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-steward-text-secondary text-lg leading-relaxed font-primary space-y-8"
          >
            {children}
          </motion.article>
        </div>
      </main>
    </>
  );
}
