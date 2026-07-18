import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../config/contact';

const links = [
  { label: 'QR Ordering is active', active: true },
  { label: 'Kitchen Display is online', active: true },
  { label: 'Payments are connected', active: true },
  { label: 'No pending orders', active: true }
];

export default function Needle() {
  // Stagger configurations conforming to Level 2 (180ms-250ms) and Level 3 (300ms-500ms) motion
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

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const
      }
    }
  };

  return (
    <motion.section
      id="product"
      aria-label="Needle briefing"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={sectionVariants}
      className="w-full bg-steward-section section-spacing flex flex-col items-center justify-center"
    >
      <div className="container max-w-[900px] flex flex-col items-center px-4 sm:px-6">
        
        {/* Eyebrow - Font: Inter (Primary), Weight: Medium (500) */}
        <p className="font-primary font-medium text-sm sm:text-base tracking-normal text-steward-text-secondary mb-[20px]">
          Meet Needle
        </p>

        {/* Heading - Font: Newsreader (Secondary), Size: Display (scaled down for calm balance), Weight: Bold (700) */}
        <h2 className="font-secondary font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.2] text-steward-text-primary text-center max-w-[700px] mb-[28px] mx-auto">
          Your restaurant's operational voice.
        </h2>

        {/* Supporting Copy - Font: Inter (Primary), Size: Body (16px), Weight: Regular (400) */}
        <p className="font-primary font-regular text-[16px] leading-[1.7] text-steward-text-secondary text-center max-w-[650px] mb-[56px]">
          Needle reviews what Steward already knows and prepares a clear operational briefing before your day begins.
          It communicates facts, not assumptions. It exists to help you understand your restaurant with confidence.
        </p>

        {/* Primary Component: Editorial Briefing Card */}
        <motion.div
          variants={cardVariants}
          className="w-full max-w-[560px] bg-steward-surface border border-steward-border rounded-md px-[24px] py-[32px] sm:px-[40px] sm:py-[48px] lg:px-[56px] lg:py-[64px] shadow-steward-sm mb-[48px]"
        >
          {/* Greeting - Font: Newsreader (Secondary), reduced emphasis (text-xl font-medium) */}
          <h3 className="font-secondary font-medium text-xl text-steward-text-primary mb-[24px]">
            Good morning.
          </h3>

          {/* Staggered Briefing Lines */}
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="space-y-[28px] mb-[40px]"
          >
            {links.map((item, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                className="flex items-center space-x-3 text-steward-text-primary font-primary text-sm sm:text-base font-regular"
              >
                {/* Standard checkmark icon representation */}
                <span className="w-2 h-2 rounded-full bg-green-600 flex-shrink-0" aria-hidden="true" />
                <span>{item.label}</span>
              </motion.li>
            ))}
            
            <motion.li
              variants={itemVariants}
              className="font-primary text-sm sm:text-base font-regular text-steward-text-primary pt-[8px] border-t border-steward-border"
            >
              You're ready for today's service.
            </motion.li>
          </motion.ul>

          {/* Card Footer */}
          <div className="flex items-center justify-between pt-[16px] border-t border-steward-border">
            {/* Timestamp - Subdued typography */}
            <span className="font-primary text-xs text-steward-text-muted font-regular">
              Prepared at 8:42 AM
            </span>

            {/* Link - Touch target >= 44px */}
            <a
              href={CONTACT_INFO.whatsappUrl}
              className="touch-target inline-flex items-center font-primary text-sm font-medium text-steward-text-secondary hover:text-steward-text-primary hover:underline underline-offset-4 decoration-1 decoration-steward-accent transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas rounded-md"
            >
              Open Needle &rarr;
            </a>
          </div>
        </motion.div>

        {/* Secondary Content - Explanatory paragraph */}
        <p className="font-primary font-regular text-sm text-steward-text-secondary text-center max-w-[450px]">
          Needle doesn't replace restaurant owners. It simply helps them begin every day with clarity.
        </p>

      </div>
    </motion.section>
  );
}
