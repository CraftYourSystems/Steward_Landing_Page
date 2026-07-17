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
        duration: 0.5,
        ease: 'easeOut' as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
        delay: 0.2
      }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
        delay: 0.4
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
      className="w-full bg-white section-spacing flex flex-col items-center justify-center"
    >
      <div className="container max-w-[1100px] flex flex-col items-center px-4 sm:px-6">
        
        {/* Eyebrow - Font: Inter (Primary), Weight: Medium (500) */}
        <p className="font-primary font-medium text-sm sm:text-base tracking-normal text-gray-600 mb-[24px]">
          Growing Together
        </p>

        {/* Heading - Font: Newsreader (Secondary), Weight: Bold (700), constrained width for editorial balance */}
        <h2 className="font-secondary font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.2] text-black text-center max-w-[680px] mb-[32px]">
          Built with restaurants. <br className="hidden sm:inline" />
          Improved through every partnership.
        </h2>

        {/* Supporting Copy - Font: Inter (Primary), Size: Body (16px), Weight: Regular (400), narrower measure for scanability */}
        <p className="font-primary font-regular text-[16px] leading-[1.7] text-gray-700 text-center max-w-[640px] mb-[96px]">
          Every restaurant operates differently. By working closely with our early partners, Steward continues to evolve around real operational needs instead of assumptions.
        </p>

        {/* Single Centered Partner Card (since only Venna Café is documented) */}
        <motion.div
          variants={cardVariants}
          tabIndex={0}
          className="w-full max-w-[520px] bg-white border border-gray-100 rounded-lg p-[56px] shadow-sm hover:border-gray-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black transition-all duration-200 text-center mb-[96px]"
        >
          {/* Monochromatic Logo Representation / Text */}
          <div className="w-[64px] h-[64px] rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-[24px] border border-gray-100 font-secondary font-bold text-xl text-black">
            V
          </div>

          <h3 className="font-secondary font-bold text-2xl text-black mb-[8px]">
            Venna Café
          </h3>

          <p className="font-primary font-medium text-sm text-gray-500 mb-[16px]">
            Hyderabad
          </p>

          <span className="inline-block bg-gray-50 text-gray-600 font-primary font-medium text-xs px-[12px] py-[6px] rounded-full mb-[24px] border border-gray-100">
            Early Partner
          </span>

          <p className="font-primary font-regular text-sm text-gray-600 border-t border-gray-100 pt-[20px]">
            “Helping shape Steward's first release.”
          </p>
        </motion.div>

        {/* Progress Timeline milestone row */}
        <motion.div
          variants={timelineVariants}
          className="w-full max-w-[800px] flex flex-col md:flex-row items-center justify-center gap-[24px] md:gap-[16px] border-t border-gray-100 pt-[48px]"
        >
          {milestones.map((milestone, idx) => {
            const isLast = idx === milestones.length - 1;
            return (
              <div key={idx} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                <div className="flex items-center space-x-2">
                  <span
                    className={`font-primary font-semibold text-sm ${
                      milestone.completed ? 'text-green-600' : 'text-gray-400'
                    }`}
                  >
                    {milestone.completed ? '✓' : '•'} {milestone.label}
                  </span>
                </div>

                {!isLast && (
                  <div className="flex items-center justify-center py-[8px] md:py-0 md:px-[16px] text-gray-300">
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
