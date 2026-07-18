import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../config/contact';

export default function FinalCTA() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeVariants = {
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
      id="contact"
      aria-label="Final Call to Action"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={containerVariants}
      className="w-full bg-steward-canvas section-spacing flex items-center justify-center"
    >
      <div className="container max-w-[800px] flex flex-col items-center px-4 sm:px-6 text-center">
        
        {/* Eyebrow - Font: Inter (Primary), Weight: Medium (500) */}
        <motion.p
          variants={fadeVariants}
          className="font-primary font-medium text-sm sm:text-base tracking-normal text-steward-text-secondary mb-[32px]"
        >
          Ready to Explore Steward?
        </motion.p>

        {/* Heading - Font: Newsreader (Secondary), Weight: Bold (700) */}
        <motion.h2
          variants={fadeVariants}
          className="font-secondary font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.2] text-steward-text-primary max-w-[680px] mb-[48px]"
        >
          Let's see how Steward fits your restaurant.
        </motion.h2>

        {/* Supporting Copy - Font: Inter (Primary), Size: Body (16px), Weight: Regular (400) */}
        <motion.p
          variants={fadeVariants}
          className="font-primary font-regular text-[16px] leading-[1.7] text-steward-text-secondary max-w-[640px] mb-[64px]"
        >
          Every restaurant operates differently. Book a personalized demo, and we'll walk through your workflow, understand your operations, and show how Steward can support your team.
          <br /><br />
          No pressure. Just a conversation.
        </motion.p>

        {/* CTA Button Group - increased horizontal spacing to gap-[24px] */}
        {/* CTA Button Group - increased horizontal spacing to gap-[24px] */}
        <motion.div
          variants={fadeVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-[24px] mb-[24px] w-full sm:w-auto"
        >
          {/* Primary CTA - Prominent padding and font-semibold, Touch target >= 44px */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            className="touch-target flex items-center justify-center w-full sm:w-auto px-[36px] py-[14px] text-base font-semibold font-primary bg-steward-accent text-steward-canvas border border-steward-accent rounded-md hover:bg-steward-accent-hover hover:border-steward-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas steward-interactive"
          >
            Book a Demo
          </a>

          {/* Secondary CTA - Balanced padding and font-medium, Touch target >= 44px */}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="touch-target flex items-center justify-center w-full sm:w-auto px-[28px] py-[14px] text-base font-medium font-primary border border-steward-text-primary text-steward-text-primary bg-transparent rounded-md hover:bg-steward-text-primary hover:text-steward-canvas focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas steward-interactive"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Supporting Note - Subdued text below buttons */}
        <motion.p
          variants={fadeVariants}
          className="font-primary font-regular text-xs sm:text-sm text-steward-text-muted max-w-[450px]"
        >
          No commitments. No hidden costs. We'll simply understand your restaurant and answer your questions.
        </motion.p>

      </div>
    </motion.section>
  );
}
