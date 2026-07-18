import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    description: 'For independent restaurants beginning with digital operations.',
    priceText: 'Custom pricing based on your restaurant.',
    features: [
      'QR Ordering',
      'Kitchen Display',
      'Payments',
      'Basic Daily Reports'
    ],
    ctaText: 'Book a Demo',
    ctaLink: '#book-a-demo'
  },
  {
    name: 'Growth',
    description: 'For restaurants managing higher daily volumes.',
    priceText: 'Custom pricing based on your restaurant.',
    features: [
      'Advanced Insights',
      'Multi-device Management',
      'Operational Reporting',
      'Priority Support'
    ],
    ctaText: 'Book a Demo',
    ctaLink: '#book-a-demo',
    isHighlighted: true // Growth receives a very subtle emphasis
  },
  {
    name: 'Enterprise',
    description: 'For multi-location restaurant groups.',
    priceText: 'Custom pricing based on your restaurant.',
    features: [
      'Multi-Branch Management',
      'Centralized Operations',
      'Advanced Reporting',
      'Dedicated Onboarding'
    ],
    ctaText: 'Contact Us',
    ctaLink: '#book-a-demo'
  }
];

export default function Pricing() {
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

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
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
        ease: [0.15, 0.85, 0.35, 1] as const
      }
    }
  };

  return (
    <motion.section
      id="pricing"
      aria-label="Pricing"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={sectionVariants}
      className="w-full bg-steward-section section-spacing flex flex-col items-center justify-center"
    >
      <div className="container max-w-[1100px] flex flex-col items-center px-4 sm:px-6">
        
        {/* Eyebrow - Font: Inter (Primary), Weight: Medium (500) */}
        <p className="font-primary font-medium text-sm sm:text-base tracking-normal text-steward-text-secondary mb-[32px]">
          Pricing
        </p>

        {/* Heading - Font: Newsreader (Secondary), Weight: Bold (700), constrained width for editorial balance */}
        <h2 className="font-secondary font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.2] text-steward-text-primary text-center max-w-[680px] mb-[48px]">
          Simple pricing for growing restaurants.
        </h2>

        {/* Supporting Copy - Font: Inter (Primary), Size: Body (16px), Weight: Regular (400), narrower measure for scanability */}
        <p className="font-primary font-regular text-[16px] leading-[1.7] text-steward-text-secondary text-center max-w-[640px] mb-[128px]">
          Every restaurant is different. We'll recommend the right Steward setup based on your operations, team size, and number of locations. 
          No hidden costs. No unnecessary modules. Only what your restaurant needs.
        </p>

        {/* Pricing Cards Grid - 3-column on Desktop/Tablet, 1-col on Mobile */}
        <motion.div
          variants={gridVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-[24px] lg:gap-[32px] w-full items-stretch"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              tabIndex={0}
              className="bg-steward-surface rounded-md px-[32px] lg:px-[40px] py-[72px] flex flex-col justify-between border border-steward-border shadow-steward-sm hover:border-steward-border/80 hover:bg-steward-hover transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas"
            >
              <div>
                {/* Plan Name */}
                <h3 className="font-secondary font-bold text-2xl text-steward-text-primary mb-[16px]">
                  {plan.name}
                </h3>

                {/* Plan Description */}
                <p className="font-primary font-regular text-sm text-steward-text-secondary mb-[32px]">
                  {plan.description}
                </p>

                {/* Plan Pricing Note */}
                <div className="font-primary font-semibold text-[15px] text-steward-text-primary tracking-tight mb-[32px] pt-[16px] border-t border-steward-border">
                  {plan.priceText}
                </div>

                {/* Features List */}
                <ul className="space-y-[20px] mb-[48px]">
                  {plan.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="font-primary font-regular text-sm text-steward-text-secondary flex items-start space-x-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-steward-text-muted mt-1.5 flex-shrink-0" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button - Touch target >= 44px */}
              <a
                href={plan.ctaLink}
                className={`touch-target flex items-center justify-center w-full px-[32px] py-[14px] text-base font-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas steward-interactive ${
                  plan.isHighlighted
                    ? 'font-semibold bg-steward-accent text-steward-canvas border border-steward-accent rounded-md hover:bg-steward-accent-hover hover:border-steward-accent-hover'
                    : 'font-medium border border-steward-text-primary text-steward-text-primary bg-transparent rounded-md hover:bg-steward-text-primary hover:text-steward-canvas'
                }`}
              >
                {plan.ctaText}
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}
