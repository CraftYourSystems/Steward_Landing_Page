import { motion } from 'framer-motion';

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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const
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
      className="w-full bg-white section-spacing flex items-center justify-center"
    >
      <div className="container max-w-[800px] flex flex-col items-center px-4 sm:px-6 text-center">
        
        {/* Eyebrow - Font: Inter (Primary), Weight: Medium (500) */}
        <motion.p
          variants={fadeVariants}
          className="font-primary font-medium text-sm sm:text-base tracking-normal text-gray-600 mb-[24px]"
        >
          Ready to Explore Steward?
        </motion.p>

        {/* Heading - Font: Newsreader (Secondary), Weight: Bold (700) */}
        <motion.h2
          variants={fadeVariants}
          className="font-secondary font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.2] text-black max-w-[680px] mb-[32px]"
        >
          Let's see how Steward fits your restaurant.
        </motion.h2>

        {/* Supporting Copy - Font: Inter (Primary), Size: Body (16px), Weight: Regular (400) */}
        <motion.p
          variants={fadeVariants}
          className="font-primary font-regular text-[16px] leading-[1.7] text-gray-700 max-w-[640px] mb-[48px]"
        >
          Every restaurant operates differently. Book a personalized demo, and we'll walk through your workflow, understand your operations, and show how Steward can support your team.
          <br /><br />
          No pressure. Just a conversation.
        </motion.p>

        {/* CTA Button Group - increased horizontal spacing to gap-[24px] */}
        <motion.div
          variants={fadeVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-[24px] mb-[24px] w-full sm:w-auto"
        >
          {/* Primary CTA - Prominent padding and font-semibold, Touch target >= 44px */}
          <a
            href="#book-a-demo"
            className="touch-target flex items-center justify-center w-full sm:w-auto px-[36px] py-[14px] text-base font-semibold font-primary border border-black hover:bg-black hover:text-white transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            Book a Demo
          </a>

          {/* Secondary CTA - Balanced padding and font-medium, Touch target >= 44px */}
          <a
            href="#contact-form"
            className="touch-target flex items-center justify-center w-full sm:w-auto px-[28px] py-[14px] text-base font-medium font-primary border border-transparent hover:underline transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Supporting Note - Subdued text below buttons */}
        <motion.p
          variants={fadeVariants}
          className="font-primary font-regular text-xs sm:text-sm text-gray-500 max-w-[450px]"
        >
          No commitments. No hidden costs. We'll simply understand your restaurant and answer your questions.
        </motion.p>

      </div>
    </motion.section>
  );
}
