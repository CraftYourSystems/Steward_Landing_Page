import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const milestones = [
  { label: 'First Restaurant Partner', completed: true },
  { label: 'First Live Deployment', completed: true },
  { label: 'Multi-Branch Support', completed: true },
  { label: 'Future Partnerships', completed: false }
];

export default function EarlyPartners() {
  // Motion configurations following Level 2/3 timing rules
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: [0.15, 0.85, 0.35, 1] as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.15, 0.85, 0.35, 1] as const,
        delay: 0.15
      }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: [0.15, 0.85, 0.35, 1] as const,
        delay: 0.3
      }
    }
  };

  return (
    <motion.section
      id="early-partners"
      aria-label="Early Partners"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={sectionVariants}
      className="w-full bg-steward-canvas section-spacing flex flex-col items-center justify-center"
    >
      <div className="container max-w-[1100px] flex flex-col items-center px-4 sm:px-6">
        
        {/* Eyebrow - Font: Inter (Primary), Weight: Medium (500) */}
        <p className="font-primary font-medium text-sm sm:text-base tracking-normal text-steward-text-secondary mb-[20px]">
          Growing Together
        </p>

        {/* Heading - Font: Newsreader (Secondary), Weight: Bold (700), constrained width for editorial balance */}
        <h2 className="font-secondary font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.2] text-steward-text-primary text-center max-w-[680px] mb-[28px] mx-auto">
          Built with restaurants. <br className="hidden sm:inline" />
          Improved through every partnership.
        </h2>

        {/* Supporting Copy - Font: Inter (Primary), Size: Body (16px), Weight: Regular (400), narrower measure for scanability */}
        <p className="font-primary font-regular text-[16px] leading-[1.7] text-steward-text-secondary text-center max-w-[640px] mb-[56px]">
          Every restaurant operates differently. By working closely with our early partners, Steward continues to evolve around real operational needs instead of assumptions.
        </p>

        {/* Single Centered Partner Card (since only Venna Café is documented) */}
        <motion.div
          variants={cardVariants}
          tabIndex={0}
          className="w-full max-w-[520px] bg-steward-surface border border-steward-border rounded-md p-[24px] sm:p-[40px] lg:p-[56px] shadow-steward-sm hover:border-steward-border/80 hover:bg-steward-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas transition-all duration-200 text-center mb-[56px]"
        >
          {/* Monochromatic Logo Representation / Text */}
          <div className="w-[64px] h-[64px] rounded-full bg-steward-section flex items-center justify-center mx-auto mb-[24px] border border-steward-border font-secondary font-bold text-xl text-steward-text-primary">
            V
          </div>

          <h3 className="font-secondary font-bold text-2xl text-steward-text-primary mb-[8px]">
            Venna Café
          </h3>

          <p className="font-primary font-medium text-sm text-steward-text-muted mb-[16px]">
            Hyderabad
          </p>

          <span className="inline-block bg-steward-section text-steward-text-secondary font-primary font-semibold text-[10px] tracking-widest px-[10px] py-[4px] rounded-sm mb-[24px] border border-steward-border uppercase">
            Early Partner
          </span>

          <p className="font-primary font-regular text-sm text-steward-text-secondary border-t border-steward-border pt-[20px]">
            “Helping shape Steward's first release.”
          </p>
        </motion.div>

        {/* Progress Timeline milestone row */}
        <motion.div
          variants={timelineVariants}
          className="w-full max-w-[800px] flex flex-col md:flex-row items-center justify-center gap-[24px] md:gap-[16px] border-t border-steward-border pt-[40px]"
        >
          {milestones.map((milestone, idx) => {
            const isLast = idx === milestones.length - 1;
            return (
              <div key={idx} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                <div className="flex items-center space-x-2">
                  <span
                    className={`font-primary font-semibold text-sm ${
                      milestone.completed ? 'text-steward-accent' : 'text-steward-text-disabled'
                    }`}
                  >
                    {milestone.completed ? '✓' : '•'} {milestone.label}
                  </span>
                </div>

                {!isLast && (
                  <div className="flex items-center justify-center py-[8px] md:py-0 md:px-[16px] text-steward-text-muted">
                    <ArrowRight className="hidden md:block w-4 h-4" aria-hidden="true" />
                    <ArrowDown className="block md:hidden w-4 h-4" aria-hidden="true" />
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

      </div>
    </motion.section>
  );
}
