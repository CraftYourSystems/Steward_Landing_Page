import { Link } from 'react-router-dom';
import { FAQItem, RelatedLink } from '@/seo/seoConfig';

interface FeaturePageWrapperProps {
  children: React.ReactNode;
  answerBlock?: string;
  faqs?: FAQItem[];
  relatedPages?: RelatedLink[];
}

/**
 * Wraps every feature page with the AEO answer block, FAQ section,
 * and related page cross-links — injected in consistent position.
 */
export default function FeaturePageWrapper({
  children,
  answerBlock,
  faqs,
  relatedPages,
}: FeaturePageWrapperProps) {
  return (
    <>
      {children}

      {/* AEO Direct-Answer Block */}
      {answerBlock && (
        <section
          aria-label="What is this feature"
          className="px-4 py-10 relative z-10"
        >
          <div className="max-w-3xl mx-auto border border-white/[0.06] rounded-2xl bg-white/[0.02] p-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-semibold mb-3">
              Quick Answer
            </p>
            <p className="text-text-secondary leading-relaxed text-base font-light">
              {answerBlock}
            </p>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section
          aria-label="Frequently Asked Questions"
          className="py-24 px-4 relative z-10"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-semibold mb-4 text-center">
              FAQ
            </p>
            <h2 className="font-hero text-3xl md:text-4xl text-white mb-12 text-center">
              Common questions
            </h2>
            <div className="space-y-0 divide-y divide-white/[0.06]">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group py-6 cursor-pointer list-none"
                >
                  <summary className="flex items-center justify-between gap-4 text-white font-medium text-sm md:text-base select-none list-none">
                    <span>{faq.question}</span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-xs text-text-muted group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-text-secondary text-sm leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Pages */}
      {relatedPages && relatedPages.length > 0 && (
        <section
          aria-label="Explore more Steward features"
          className="py-12 px-4 relative z-10 border-t border-white/[0.04]"
        >
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-semibold">
              Explore more Steward features
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/"
                className="px-4 py-2 rounded-full border border-white/[0.08] text-text-secondary hover:text-white hover:border-white/20 text-sm transition-all"
              >
                ← Back to Home
              </Link>
              {relatedPages.map((page) => (
                <Link
                  key={page.href}
                  to={page.href}
                  className="px-4 py-2 rounded-full border border-white/[0.08] text-text-secondary hover:text-white hover:border-white/20 text-sm transition-all"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
