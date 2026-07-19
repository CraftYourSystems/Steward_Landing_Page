import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';

export default function CompassBackground() {
  const { scrollYProgress } = useScroll();

  // Spring-based needle rotation — heavy, physical feel
  const rawRotate = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const needleRotate = useSpring(rawRotate, { stiffness: 50, damping: 20, mass: 2 });

  // Parallax drift
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Gauge arc fill
  const arcProgress = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);
  const springArc = useSpring(arcProgress, { stiffness: 80, damping: 25 });

  // Breathing pulse
  const pulseOpacity = useMotionValue(0.3);
  useAnimationFrame((t) => {
    pulseOpacity.set(0.2 + Math.sin(t / 1500) * 0.15);
  });

  const arcRadius = 380;
  const arcCircumference = 2 * Math.PI * arcRadius;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      style={{ y: yOffset }}
      className="fixed inset-0 z-[1] pointer-events-none overflow-hidden flex items-center justify-center"
      aria-hidden="true"
    >
      <svg
        width="1200"
        height="1200"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translateY(25%)' }}
      >
            <defs>
              {/* Vignette — strong fade at edges */}
              <radialGradient id="vg" cx="50%" cy="50%" r="50%">
                <stop offset="20%" stopColor="white" stopOpacity="1" />
                <stop offset="80%" stopColor="white" stopOpacity="0.3" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <mask id="vm">
                <rect width="900" height="900" fill="url(#vg)" />
              </mask>

              {/* Needle gradient — cyan tip to white to transparent */}
              <linearGradient id="nGrad" x1="450" y1="60" x2="450" y2="440" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="30%"  stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
              </linearGradient>

              {/* Multi-pass needle glow */}
              <filter id="nGlow" x="-400%" y="-100%" width="900%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="wide" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="mid" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="tight" />
                <feMerge>
                  <feMergeNode in="wide" />
                  <feMergeNode in="mid" />
                  <feMergeNode in="tight" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Hub glow */}
              <filter id="hubGlow" x="-200%" y="-200%" width="500%" height="500%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Pulse ring blur */}
              <filter id="pGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
              </filter>

              {/* Arc gradient */}
              <linearGradient id="arcGrad" x1="100" y1="450" x2="800" y2="450" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#888888" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            <g mask="url(#vm)">

              {/* ── OUTER RING ─────────────────────────────── */}
              <circle cx="450" cy="450" r="420" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

              {/* ── GAUGE ARC — fills cyan as you scroll ───── */}
              <circle
                cx="450" cy="450" r={arcRadius}
                stroke="rgba(255,255,255,0.025)"
                strokeWidth="2"
                fill="none"
              />
              <motion.circle
                cx="450" cy="450" r={arcRadius}
                stroke="url(#arcGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                strokeDasharray={arcCircumference}
                style={{
                  strokeDashoffset: useTransform(springArc, (v: number) => arcCircumference * (1 - v)),
                  rotate: -90,
                  transformOrigin: '450px 450px',
                }}
              />

              {/* ── TICK MARKS — 12 at 30° intervals ──────── */}
              {[...Array(12)].map((_, i) => {
                const isMajor = i % 3 === 0;
                const isNorth = i === 0;
                return (
                  <line
                    key={i}
                    x1="450" y1="34"
                    x2="450" y2={isMajor ? '62' : '50'}
                    transform={`rotate(${i * 30} 450 450)`}
                    stroke={isNorth ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.1)'}
                    strokeWidth={isMajor ? '1.5' : '0.8'}
                  />
                );
              })}

              {/* N label */}
              <text
                x="450" y="78"
                fontFamily="'Inter', sans-serif"
                fontSize="14"
                fontWeight="700"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#FF3333"
                letterSpacing="0.15em"
              >
                N
              </text>

              {/* Removed breathing pulse rings for a cleaner aesthetic */}

              {/* ── THE NEEDLE ────────────────────────────── */}
              <motion.g
                style={{
                  rotate: needleRotate,
                  transformOrigin: '450px 450px',
                }}
              >
                {/* Multi-layer glow */}
                <g filter="url(#nGlow)">
                  <path
                    d="M450 65 L459 415 L450 448 L441 415 Z"
                    fill="url(#nGrad)"
                  />
                </g>

                {/* Razor-sharp center line */}
                <line
                  x1="450" y1="65"
                  x2="450" y2="440"
                  stroke="rgba(255,255,255,0.9)"
                  strokeWidth="1"
                />

                {/* Glowing tip */}
                <circle cx="450" cy="68" r="3.5" fill="#FFFFFF" filter="url(#hubGlow)" />

                {/* South counterweight — dim amber */}
                <path
                  d="M450 835 L454 490 L450 458 L446 490 Z"
                  fill="rgba(255,184,0,0.05)"
                />
              </motion.g>

              {/* ── CENTER HUB (Minimalist) ───────────────── */}
              <circle cx="450" cy="450" r="10" fill="#0A0A0F" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
              <circle cx="450" cy="450" r="3" fill="#FFFFFF" />

            </g>
          </svg>
    </motion.div>
  );
}
