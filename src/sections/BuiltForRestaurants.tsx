import { motion } from 'framer-motion';

const principles = [
  {
    title: 'Quiet by Design',
    description: 'Steward stays out of your way. Information appears only when it helps you make better operational decisions.'
  },
  {
    title: 'Connected by Default',
    description: 'Ordering, kitchen operations, payments, and reporting work together as one continuous system. No switching between disconnected tools.'
  },
  {
    title: 'Reliable Every Day',
    description: 'Consistency matters more than novelty. Steward prioritizes dependable operation throughout every service.'
  },
  {
    title: 'Built to Grow',
    description: "Whether you're running one restaurant or expanding to multiple locations, Steward grows alongside your business without changing how you work."
  }
];

export default function BuiltForRestaurants() {
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
      id="about"
      aria-label="Built for Restaurants"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={sectionVariants}
      className="w-full bg-steward-canvas section-spacing flex flex-col items-center justify-center"
    >
      <div className="container max-w-[1100px] flex flex-col items-center px-4 sm:px-6">
        
        {/* Eyebrow - Font: Inter (Primary), Weight: Medium (500) */}
        <p className="font-primary font-medium text-sm sm:text-base tracking-normal text-steward-text-secondary mb-[32px]">
          Built with Restaurants in Mind
        </p>

        {/* Heading - Font: Newsreader (Secondary), Weight: Bold (700), constrained width for editorial balance */}
        <h2 className="font-secondary font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.2] text-steward-text-primary text-center max-w-[680px] mb-[48px]">
          Designed around restaurant operations—not software.
        </h2>

        {/* Supporting Copy - Font: Inter (Primary), Size: Body (16px), Weight: Regular (400), narrower measure for scanability */}
        <p className="font-primary font-regular text-[16px] leading-[1.7] text-steward-text-secondary text-center max-w-[640px] mb-[128px]">
          Restaurants move quickly. Orders change. Teams coordinate constantly. Customers expect speed. 
          Steward is designed around these realities, providing operational clarity without adding unnecessary complexity.
        </p>

        {/* Principles Grid - 2x2 on Desktop/Tablet, 1-col on Mobile */}
        <motion.div
          variants={gridVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-[24px] lg:gap-[32px] w-full"
        >
          {principles.map((item, idx) => {
            const isCore = idx === 1; // "Connected by Default" is the core differentiator
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                tabIndex={0}
                className={`bg-steward-surface rounded-md px-[40px] py-[64px] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-steward-focus focus-visible:ring-offset-2 focus-visible:ring-offset-steward-canvas ${
                  isCore
                    ? 'border border-steward-border shadow-steward-md hover:border-steward-border/80 hover:bg-steward-hover lg:scale-[1.02]'
                    : 'border border-steward-border shadow-steward-sm hover:border-steward-border/80 hover:bg-steward-hover'
                }`}
              >
                {/* Principle Numbering Tag - Establishes tenets/beliefs rather than generic features */}
                <span className="font-primary font-semibold text-[10px] tracking-widest text-steward-text-muted block mb-[16px] uppercase">
                  Principle 0{idx + 1}
                </span>

                {/* Card Title - Newsreader, Bold */}
                <h3 className="font-secondary font-bold text-xl text-steward-text-primary mb-[20px]">
                  {item.title}
                </h3>

                {/* Card Description - Inter, Body Regular */}
                <p className="font-primary font-regular text-sm sm:text-base text-steward-text-secondary leading-[1.6]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </motion.section>
  );
}
