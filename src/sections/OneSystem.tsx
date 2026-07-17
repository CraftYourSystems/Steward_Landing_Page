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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const
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
      className="w-full bg-white section-spacing flex flex-col items-center justify-center"
    >
      <div className="container max-w-[1100px] flex flex-col items-center px-4 sm:px-6">
        
        {/* Eyebrow - Font: Inter (Primary), Weight: Medium (500) */}
        <motion.p
          variants={itemVariants}
          className="font-primary font-medium text-sm sm:text-base tracking-normal text-gray-600 mb-[24px]"
        >
          One Connected System
        </motion.p>

        {/* Heading - Font: Newsreader (Secondary), Weight: Bold (700) */}
        <motion.h2
          variants={itemVariants}
          className="font-secondary font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.2] text-black text-center max-w-[700px] mb-[32px]"
        >
          One system. <br className="hidden sm:inline" />
          Every part of your restaurant.
        </motion.h2>

        {/* Supporting Copy - Font: Inter (Primary), Size: Body (16px), Weight: Regular (400) */}
        <motion.p
          variants={itemVariants}
          className="font-primary font-regular text-[16px] leading-[1.7] text-gray-700 text-center max-w-[650px] mb-[96px]"
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
                {/* Step Box - Softer border, stronger typography, and larger padding */}
                <div className="px-[40px] py-[26px] border border-gray-100 rounded-lg text-center bg-white min-w-[180px] font-primary text-base sm:text-lg font-semibold text-black tracking-tight">
                  {step.label}
                </div>

                {/* Connecting arrow/line - larger size to emphasize movement */}
                {!isLast && (
                  <div className="flex items-center justify-center py-[12px] lg:py-0 lg:px-[16px] text-gray-300">
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
          className="font-primary font-medium text-sm text-gray-500 text-center tracking-normal mt-[64px] pt-[24px] border-t border-gray-100 w-[240px]"
        >
          Powered quietly by Needle
        </motion.p>

      </div>
    </motion.section>
  );
}
