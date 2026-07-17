import { motion } from 'framer-motion';

// Sub-component for Hero text content to keep code clean and modular
function HeroContent() {
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
        duration: 0.5, // Level 3 duration: 300ms-500ms
        ease: 'easeOut' as const
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="text-center"
    >
      {/* Eyebrow - Font: Inter (Primary), Weight: Medium (500) */}
      <motion.p
        variants={fadeVariants}
        className="font-primary font-medium text-sm sm:text-base tracking-normal text-gray-600 mb-[24px]"
      >
        Restaurant Operating System
      </motion.p>

      {/* Headline - Font: Newsreader (Secondary), Size: Display (scaled down to 56px for balance), Weight: Bold (700) */}
      <motion.h1
        variants={fadeVariants}
        className="font-secondary font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-black max-w-[900px] mx-auto mb-[32px]"
      >
        Everything your restaurant runs on. One quiet system.
      </motion.h1>

      {/* Supporting Copy - Font: Inter (Primary), Size: Body Large (18px), Weight: Regular (400) */}
      <motion.p
        variants={fadeVariants}
        className="font-primary font-regular text-[18px] leading-[1.7] text-gray-700 max-w-[700px] mx-auto mb-[48px]"
      >
        Steward brings ordering, payments, kitchen operations, and daily insights into one dependable system—so you spend less time managing and more time running your restaurant.
      </motion.p>
    </motion.div>
  );
}

// Sub-component for CTA Buttons
function CTAGroup() {
  const ctaTransition = {
    duration: 0.5, // Level 3 duration
    ease: 'easeOut' as const,
    delay: 0.45 // Appears last in the sequence
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={ctaTransition}
      className="flex flex-col sm:flex-row items-center justify-center gap-[16px]"
    >
      {/* Primary CTA - Scaled up button dimensions */}
      <a
        href="#book-a-demo"
        className="touch-target flex items-center justify-center w-full sm:w-auto px-[32px] py-[14px] text-base font-medium font-primary border border-black hover:bg-black hover:text-white transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        Book a Demo
      </a>

      {/* Secondary CTA - Scaled up button dimensions */}
      <a
        href="#needle"
        className="touch-target flex items-center justify-center w-full sm:w-auto px-[32px] py-[14px] text-base font-medium font-primary border border-transparent hover:underline transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        Explore Steward
      </a>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="w-full bg-white min-h-[90vh] section-spacing flex items-center justify-center"
    >
      <div className="container max-w-[900px] flex flex-col items-center">
        {/* Render clean, stateless sub-components inside the layout container */}
        <HeroContent />
        <CTAGroup />
      </div>
    </section>
  );
}
