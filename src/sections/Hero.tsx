import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../config/contact';

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
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45, // Slow duration
        ease: [0.15, 0.85, 0.35, 1] as const // Emphasizedtiming curve
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
        className="font-primary font-medium text-sm sm:text-base tracking-normal text-steward-text-secondary mb-[32px]"
      >
        Restaurant Operating System
      </motion.p>

      {/* Headline - Font: Newsreader (Secondary), Size: Display (scaled down to 56px for balance), Weight: Bold (700) */}
      <motion.h1
        variants={fadeVariants}
        className="font-secondary font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] text-steward-text-primary max-w-[900px] mx-auto mb-[40px]"
      >
        Everything your restaurant runs on. One quiet system.
      </motion.h1>

      {/* Supporting Copy - Font: Inter (Primary), Size: Body (16px), Weight: Regular (400) */}
      <motion.p
        variants={fadeVariants}
        className="font-primary font-regular text-[18px] leading-[1.7] text-steward-text-secondary max-w-[700px] mx-auto mb-[64px]"
      >
        Steward brings ordering, payments, kitchen operations, and daily insights into one dependable system—so you spend less time managing and more time running your restaurant.
      </motion.p>
    </motion.div>
  );
}

// Sub-component for CTA Buttons
function CTAGroup() {
  const ctaTransition = {
    duration: 0.45, // Slow duration
    ease: [0.15, 0.85, 0.35, 1] as const, // Emphasizedtiming curve
    delay: 0.35
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
        href={CONTACT_INFO.whatsappUrl}
        className="touch-target flex items-center justify-center w-full sm:w-auto px-[32px] py-[14px] text-base font-semibold font-primary bg-steward-accent text-steward-canvas border border-steward-accent rounded-md hover:bg-steward-accent-hover hover:border-steward-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas steward-interactive"
      >
        Book a Demo
      </a>

      {/* Secondary CTA - Scaled up button dimensions */}
      <a
        href="#product"
        className="touch-target flex items-center justify-center w-full sm:w-auto px-[32px] py-[14px] text-base font-medium font-primary border border-steward-text-primary text-steward-text-primary bg-transparent rounded-md hover:bg-steward-text-primary hover:text-steward-canvas focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas steward-interactive"
      >
        Explore Steward
      </a>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="w-full bg-steward-canvas min-h-[90vh] section-spacing flex items-center justify-center"
    >
      <div className="container max-w-[900px] flex flex-col items-center">
        {/* Render clean, stateless sub-components inside the layout container */}
        <HeroContent />
        <CTAGroup />
      </div>
    </section>
  );
}
