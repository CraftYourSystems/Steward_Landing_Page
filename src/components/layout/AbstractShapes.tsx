import { motion, useScroll, useTransform } from 'framer-motion';

export default function AbstractShapes() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">

      {/* Soft center glow */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full blur-[160px]"
      >
        <div className="w-full h-full rounded-full bg-white/[0.02]" />
      </motion.div>

      {/* Bottom ambient */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[140px]"
      >
        <div className="w-full h-full rounded-full bg-[rgba(255,255,255,0.015)]" />
      </motion.div>

      {/* Sparse grid — centered only */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 0%, transparent 100%)',
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  );
}
