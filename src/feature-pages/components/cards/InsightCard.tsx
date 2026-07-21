
import { motion } from "framer-motion";

interface InsightCardProps {
  quote: string;
  author: string;
  role: string;
  restaurant: string;
  delay?: number;
}

export function InsightCard({ quote, author, role, restaurant, delay = 0 }: InsightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative rounded-[24px] border border-white/[0.07] bg-[#141418] p-8 flex flex-col justify-between gap-8 overflow-hidden"
    >
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <blockquote className="font-primary text-lg text-[#A4A4AA] leading-relaxed font-light">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.05] flex items-center justify-center text-sm font-semibold text-white/60">
          {author.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{author}</p>
          <p className="text-xs text-[#6F6F78]">{role} · {restaurant}</p>
        </div>
      </div>
    </motion.div>
  );
}
