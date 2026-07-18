import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Steward?',
    answer: 'Steward is a restaurant operating system that connects ordering, kitchen operations, payments, and operational insights into one connected platform.'
  },
  {
    question: 'Who is Steward designed for?',
    answer: 'Steward is built for restaurants of different sizes—from independent restaurants to growing multi-location businesses.'
  },
  {
    question: 'How do I get started?',
    answer: "The first step is booking a demo. We'll understand your restaurant's workflow and recommend the most suitable Steward setup."
  },
  {
    question: 'Does Steward support multiple restaurant branches?',
    answer: 'Yes. Steward is designed to support both single-location restaurants and multi-branch operations. The available functionality depends on your deployment.'
  },
  {
    question: 'Will Steward work with my existing workflow?',
    answer: "During onboarding, Steward is configured around your restaurant's operational needs whenever possible. The goal is to improve your workflow rather than replace it unnecessarily."
  },
  {
    question: 'How long does onboarding take?',
    answer: "Onboarding depends on the size and operational complexity of your restaurant. We'll discuss the expected timeline during your demo."
  },
  {
    question: 'How is pricing determined?',
    answer: "Pricing depends on the size of your restaurant, the modules required, and the number of locations. You'll receive clear pricing before any commitment."
  },
  {
    question: 'Is my restaurant data secure?',
    answer: 'Protecting operational data is a core responsibility. Steward follows modern security practices and continues to improve its infrastructure as the platform evolves.'
  },
  {
    question: 'Can I request new features?',
    answer: "Yes. Feedback from restaurant partners plays an important role in Steward's evolution. Many improvements are driven by real operational requirements."
  },
  {
    question: 'Do I need special hardware?',
    answer: "This depends on the modules you choose. We'll recommend suitable hardware requirements during your demo if necessary."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="w-full bg-steward-section section-spacing flex flex-col items-center justify-center"
    >
      <div className="container max-w-[900px] flex flex-col items-center px-4 sm:px-6">
        
        {/* Eyebrow - Font: Inter (Primary), Weight: Medium (500) */}
        <p className="font-primary font-medium text-sm sm:text-base tracking-normal text-steward-text-secondary mb-[32px]">
          Frequently Asked Questions
        </p>

        {/* Heading - Font: Newsreader (Secondary), Weight: Bold (700), constrained width for editorial balance */}
        <h2 className="font-secondary font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.2] text-steward-text-primary text-center max-w-[680px] mb-[48px]">
          Everything you might be wondering.
        </h2>

        {/* Supporting Copy - Font: Inter (Primary), Size: Body (16px), Weight: Regular (400), narrower measure for scanability */}
        <p className="font-primary font-regular text-[16px] leading-[1.7] text-steward-text-secondary text-center max-w-[640px] mb-[128px]">
          If you don't see your question here, we're happy to answer it during a demo.
        </p>

        {/* Accordion List */}
        <div className="w-full border-t border-steward-border divide-y divide-steward-border">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <div key={idx} className="w-full">
                <button
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFAQ(idx)}
                  className="touch-target w-full flex items-center justify-between py-[32px] text-left font-primary font-semibold text-base sm:text-lg text-steward-text-primary hover:text-steward-text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas rounded-md transition-colors"
                >
                  <span>{faq.question}</span>
                  {/* Subtle Disclosure Arrow with rotation */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                  >
                    <ChevronDown className="w-5 h-5 text-steward-text-muted" aria-hidden="true" />
                  </motion.div>
                </button>

                {/* Animated content expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
                      className="overflow-hidden"
                    >
                      <p className="font-primary font-regular text-sm sm:text-base text-steward-text-secondary leading-[1.7] pb-[24px]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
