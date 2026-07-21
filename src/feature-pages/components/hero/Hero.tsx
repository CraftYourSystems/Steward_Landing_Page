
import { motion } from "framer-motion";
import { StatusLabel } from "./StatusLabel";

interface HeroProps {
  statusLabel: string;
  headline: string;
  description: string;
  primaryCta?: string;
  secondaryCta?: string;
}

export function Hero({
  statusLabel,
  headline,
  description,
}: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      {/* Background compass rings */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[600px] h-[600px] rounded-full border border-white/5 absolute animate-spin-slow" style={{ animationDuration: '120s' }} />
        <div className="w-[800px] h-[800px] rounded-full border border-white/5 absolute animate-spin-slow" style={{ animationDuration: '180s', animationDirection: 'reverse' }} />
        <div className="w-[1000px] h-[1000px] rounded-full border border-white/5 absolute animate-spin-slow" style={{ animationDuration: '240s' }} />
      </div>

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <StatusLabel className="mb-6">{statusLabel}</StatusLabel>

        <h1 className="font-hero text-6xl md:text-7xl lg:text-[90px] leading-[1.1] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tight mb-6">
          {headline}
        </h1>

        <p className="font-primary text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed mb-12 font-light">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
