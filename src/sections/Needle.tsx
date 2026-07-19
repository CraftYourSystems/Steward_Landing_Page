import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../config/contact';

const links = [
  { label: 'QR Ordering is active', type: 'south' },
  { label: 'Kitchen Display is online', type: 'south' },
  { label: 'Payments are connected', type: 'south' },
  { label: 'No pending orders', type: 'north' }
];

export default function Needle() {
  const sectionVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 100, damping: 15, delay: 0.3 }
    }
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)', scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: { duration: 0.8, ease: [0.15, 0.85, 0.35, 1] }
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
      className="w-full bg-steward-section section-spacing flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Subtle sweeping background accent */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-steward-accent to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />

      <div className="container max-w-[900px] flex flex-col items-center px-4 sm:px-6 relative z-10">
        
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-[20px]">
          <motion.div 
            animate={{ opacity: [1, 0.5, 1] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-steward-accent"
          />
          <p className="font-primary font-medium text-sm sm:text-base tracking-widest uppercase text-steward-accent">
            System Active
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          variants={itemVariants}
          className="font-secondary font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.2] text-steward-text-primary text-center max-w-[700px] mb-[28px] mx-auto"
        >
          The Needle points the way.
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p 
          variants={itemVariants}
          className="font-primary font-regular text-[16px] leading-[1.7] text-steward-text-secondary text-center max-w-[650px] mb-[56px]"
        >
          Needle reviews what Steward already knows and prepares a clear, precise operational briefing before your day begins. No noise, just the true north of your business.
        </motion.p>

        {/* Primary Component: Dashboard Panel */}
        <motion.div
          variants={cardVariants}
          className="w-full max-w-[560px] bg-steward-surface border border-steward-border rounded-xl px-[24px] py-[32px] sm:px-[40px] sm:py-[48px] lg:px-[56px] lg:py-[64px] shadow-steward-md mb-[48px] relative overflow-hidden"
        >
          {/* Dashboard scanner VFX */}
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-steward-accent-secondary to-transparent opacity-20 pointer-events-none"
          />

          {/* Greeting */}
          <h3 className="font-secondary font-medium text-xl text-steward-text-primary mb-[32px] flex items-center gap-3">
            <span className="font-primary text-xs uppercase tracking-widest text-steward-text-muted">Status</span>
            All systems nominal.
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
                className="flex items-center space-x-4 text-steward-text-primary font-primary text-sm sm:text-base font-regular"
              >
                {/* Dynamic Indicator */}
                <motion.span 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                  className={`w-2.5 h-2.5 rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.2)] ${
                    item.type === 'north' 
                      ? 'bg-steward-accent shadow-steward-accent/50' 
                      : 'bg-steward-accent-secondary shadow-steward-accent-secondary/50'
                  }`} 
                  aria-hidden="true" 
                />
                <span className="font-medium tracking-wide">{item.label}</span>
              </motion.li>
            ))}
            
            <motion.li
              variants={itemVariants}
              className="font-primary text-sm sm:text-base font-medium text-steward-text-primary pt-[16px] border-t border-steward-border/50 flex items-center justify-between"
            >
              <span>Ready for service</span>
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 rounded-full border border-steward-accent border-t-transparent"
              />
            </motion.li>
          </motion.ul>

          {/* Card Footer */}
          <div className="flex items-center justify-between pt-[20px] border-t border-steward-border/50">
            <span className="font-primary text-xs tracking-widest uppercase text-steward-text-muted font-medium">
              Sync: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            <a
              href={CONTACT_INFO.whatsappUrl}
              className="touch-target inline-flex items-center font-primary text-sm font-bold text-steward-accent hover:text-steward-accent-hover transition-colors duration-150"
            >
              Access Dashboard &rarr;
            </a>
          </div>
        </motion.div>

        {/* Secondary Content */}
        <motion.p 
          variants={itemVariants}
          className="font-primary font-regular text-sm text-steward-text-secondary text-center max-w-[450px]"
        >
          Precision engineering for your restaurant.
        </motion.p>
      </div>
    </motion.section>
  );
}
