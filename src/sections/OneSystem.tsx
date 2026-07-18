import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const steps = [
  { label: 'Customer' },
  { label: 'QR Ordering' },
  { label: 'Kitchen Display' },
  { label: 'Payments' },
  { label: 'Daily Insights' },
  { label: 'Owner' }
];

export default function OneSystem() {
  // Motion configurations following Level 2 and Level 3 timing parameters
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.15, 0.85, 0.35, 1] as const
      }
    }
  };

  return (
    <motion.section
      id="one-system"
      aria-label="One System"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={containerVariants}
      className="w-full bg-steward-canvas section-spacing flex flex-col items-center justify-center"
    >
      <div className="container max-w-[1100px] flex flex-col items-center px-4 sm:px-6">
        
        {/* Eyebrow - Font: Inter (Primary), Weight: Medium (500) */}
        <motion.p
          variants={itemVariants}
          className="font-primary font-medium text-sm sm:text-base tracking-normal text-steward-text-secondary mb-[20px]"
        >
          One Connected System
        </motion.p>

        {/* Heading - Font: Newsreader (Secondary), Weight: Bold (700) */}
        <motion.h2
          variants={itemVariants}
          className="font-secondary font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.2] text-steward-text-primary text-center max-w-[700px] mb-[28px] mx-auto"
        >
          One system. <br className="hidden sm:inline" />
          Every part of your restaurant.
        </motion.h2>

        {/* Supporting Copy - Font: Inter (Primary), Size: Body (16px), Weight: Regular (400) */}
        <motion.p
          variants={itemVariants}
          className="font-primary font-regular text-[16px] leading-[1.7] text-steward-text-secondary text-center max-w-[650px] mb-[56px]"
        >
          From the moment a customer scans a QR code until the day's final summary is prepared, Steward keeps every operational workflow connected through one dependable system.
        </motion.p>

        {/* Operational Flow Diagram - Responsive Layout */}
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col lg:flex-row items-center justify-center gap-[32px] lg:gap-[20px]"
        >
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;
            return (
              <div key={idx} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
                {/* Step Box - Softer border, stronger typography, and responsive padding */}
                <div className="px-[24px] py-[16px] sm:px-[32px] sm:py-[20px] lg:px-[40px] lg:py-[24px] border border-steward-border rounded-md text-center bg-steward-surface min-w-[180px] font-primary text-base sm:text-lg font-semibold text-steward-text-primary tracking-tight">
                  {step.label}
                </div>

                {/* Connecting arrow/line - larger size to emphasize movement */}
                {!isLast && (
                  <div className="flex items-center justify-center py-[12px] lg:py-0 lg:px-[16px] text-steward-text-muted">
                    {/* Desktop: Horizontal Arrow */}
                    <ArrowRight className="hidden lg:block w-8 h-8" aria-hidden="true" />
                    {/* Mobile/Tablet: Vertical Arrow */}
                    <ArrowDown className="block lg:hidden w-8 h-8" aria-hidden="true" />
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Sub-label - Centered concluding note with generous top spacing */}
        <motion.p
          variants={itemVariants}
          className="font-primary font-medium text-sm text-steward-text-muted text-center tracking-normal mt-[48px] pt-[24px] border-t border-steward-border w-[240px]"
        >
          Powered quietly by Needle
        </motion.p>

      </div>
    </motion.section>
  );
}
