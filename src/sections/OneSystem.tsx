import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Activity } from 'lucide-react';

const steps = [
  { label: 'Customer', type: 'south' },
  { label: 'QR Ordering', type: 'south' },
  { label: 'Kitchen Display', type: 'south' },
  { label: 'Payments', type: 'south' },
  { label: 'Daily Insights', type: 'north' },
  { label: 'Owner', type: 'north' }
];

export default function OneSystem() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 100, damping: 15 }
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
      className="w-full bg-steward-canvas section-spacing flex flex-col items-center justify-center relative"
    >
      {/* Cinematic Background Grid for Dashboard feel */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-steward-text-muted) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container max-w-[1200px] flex flex-col items-center px-4 sm:px-6 relative z-10">
        
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-[20px]">
          <Activity className="w-4 h-4 text-steward-accent-secondary" />
          <p className="font-primary font-medium text-sm sm:text-base tracking-widest uppercase text-steward-accent-secondary">
            System Topology
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="font-secondary font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.2] text-steward-text-primary text-center max-w-[800px] mb-[28px] mx-auto"
        >
          One system. <br className="hidden sm:inline" />
          Every part connected.
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          variants={itemVariants}
          className="font-primary font-regular text-[16px] leading-[1.7] text-steward-text-secondary text-center max-w-[650px] mb-[64px]"
        >
          From the moment a customer scans a QR code until the day's final summary is prepared, Steward keeps every workflow connected through a single, precise instrument panel.
        </motion.p>

        {/* Operational Flow Diagram - Dashboard Layout */}
        <motion.div
          variants={itemVariants}
          className="w-full flex flex-col lg:flex-row items-center justify-center gap-[16px] lg:gap-[12px] p-6 sm:p-10 bg-steward-surface rounded-xl shadow-steward-md border border-steward-border"
        >
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;
            const isNorth = step.type === 'north';
            return (
              <div key={idx} className="flex flex-col lg:flex-row items-center w-full lg:w-auto flex-1">
                {/* Step Box Dashboard Panel */}
                <div className={`w-full px-[16px] py-[20px] lg:px-[20px] lg:py-[24px] border border-steward-border/50 rounded-lg text-center shadow-sm relative overflow-hidden bg-steward-canvas group hover:border-steward-accent transition-colors duration-300`}>
                  
                  {/* Indicator Light */}
                  <div className={`absolute top-2 left-2 w-1.5 h-1.5 rounded-full ${isNorth ? 'bg-steward-accent shadow-[0_0_5px_var(--color-steward-accent)]' : 'bg-steward-accent-secondary shadow-[0_0_5px_var(--color-steward-accent-secondary)]'}`} />
                  
                  <div className="font-primary text-sm sm:text-base font-semibold text-steward-text-primary tracking-tight relative z-10">
                    {step.label}
                  </div>
                </div>

                {/* Connecting arrow/line - Animated Flow */}
                {!isLast && (
                  <div className="flex items-center justify-center py-[8px] lg:py-0 lg:px-[8px] text-steward-text-muted relative">
                    <motion.div 
                      animate={{ opacity: [0.2, 1, 0.2], scale: [0.9, 1.1, 0.9] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                    >
                      <ArrowRight className="hidden lg:block w-5 h-5 text-steward-accent-secondary" aria-hidden="true" />
                      <ArrowDown className="block lg:hidden w-5 h-5 text-steward-accent-secondary" aria-hidden="true" />
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Sub-label */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mt-[48px] pt-[24px] border-t border-steward-border/50 w-[240px]"
        >
          <div className="w-2 h-2 rounded-full bg-steward-accent animate-pulse" />
          <p className="font-primary font-medium text-xs uppercase tracking-widest text-steward-text-muted text-center">
            Powered by Needle
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}
