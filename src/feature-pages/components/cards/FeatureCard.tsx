
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

export function FeatureCard({ icon, title, description, delay = 0, className }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative rounded-[22px] border border-white/[0.07] bg-[#141418] p-6",
        "hover:border-white/[0.12] transition-all duration-500",
        "shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)]",
        className
      )}
    >
      <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center mb-5 group-hover:border-white/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-primary text-base font-semibold text-white mb-2 tracking-tight">{title}</h3>
      <p className="font-primary text-sm text-[#6F6F78] leading-relaxed">{description}</p>
    </motion.div>
  );
}
