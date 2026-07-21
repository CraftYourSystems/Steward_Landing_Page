
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glow?: boolean;
}

export function GlassCard({ children, className, delay = 0, glow = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative rounded-[24px] border border-white/[0.08] bg-[#141418] p-8",
        "shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]",
        "backdrop-blur-sm overflow-hidden group",
        glow && "before:absolute before:inset-0 before:rounded-[24px] before:bg-gradient-to-b before:from-white/[0.04] before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
