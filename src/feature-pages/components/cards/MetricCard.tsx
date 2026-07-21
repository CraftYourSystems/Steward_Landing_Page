
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface MetricCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  delay?: number;
}

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export function MetricCard({ value, suffix = "", prefix = "", label, description, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-2 p-8 rounded-[24px] border border-white/[0.07] bg-[#141418] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <p className="text-5xl md:text-6xl font-bold text-white tracking-tight">
        {prefix}<CountUp target={value} />{suffix}
      </p>
      <p className="text-base font-semibold text-white/80">{label}</p>
      {description && <p className="text-sm text-[#6F6F78] leading-relaxed">{description}</p>}
    </motion.div>
  );
}
