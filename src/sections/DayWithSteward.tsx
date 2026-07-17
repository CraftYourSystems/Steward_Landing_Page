import { motion } from 'framer-motion';
import { ClipboardList, QrCode, Flame, Activity, FileText } from 'lucide-react';

const timelineEvents = [
  {
    time: 'Morning',
    title: 'Opening Brief',
    description: "Needle prepares the day's operational summary before service begins.",
    bullets: [
      'Systems connected',
      'Staff ready',
      'No pending operational issues'
    ],
    icon: ClipboardList
  },
  {
    time: 'Service Begins',
    title: 'Orders Flow Naturally',
    description: 'Customers scan, order, and payments begin flowing while the kitchen receives orders instantly.',
    icon: QrCode
  },
  {
    time: 'Lunch Rush',
    title: 'Operations Stay Connected',
    description: 'Kitchen activity, customer orders, and payments remain synchronized without switching between multiple systems.',
    icon: Flame
  },
  {
    time: 'Afternoon',
    title: 'Everything Keeps Moving',
    description: 'Steward quietly tracks operations while your team focuses on serving customers.',
    icon: Activity
  },
  {
    time: 'Closing Time',
    title: 'The Day Ends with Clarity',
    description: "Needle prepares a concise summary of the day's operations so tomorrow starts with confidence.",
    icon: FileText
  }
];

export default function DayWithSteward() {
  // Motion configurations for viewport transitions
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const
      }
    }
  };

  return (
    <motion.section
      id="day-with-steward"
      aria-label="A Day with Steward"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={sectionVariants}
      className="w-full bg-white section-spacing flex flex-col items-center justify-center"
    >
      <div className="container max-w-[1100px] flex flex-col items-center px-4 sm:px-6">
        
        {/* Eyebrow - Font: Inter (Primary), Weight: Medium (500) */}
        <p className="font-primary font-medium text-sm sm:text-base tracking-normal text-gray-600 mb-[24px]">
          A Day with Steward
        </p>

        {/* Heading - Font: Newsreader (Secondary), Weight: Bold (700), narrower measure for editorial balance */}
        <h2 className="font-secondary font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.2] text-black text-center max-w-[720px] mb-[32px]">
          From opening to closing, Steward works quietly in the background.
        </h2>

        {/* Supporting Copy - Font: Inter (Primary), Size: Body (16px), Weight: Regular (400) */}
        <p className="font-primary font-regular text-[16px] leading-[1.7] text-gray-700 text-center max-w-[650px] mb-[96px]">
          Every service brings hundreds of small operational decisions. 
          Steward connects them into one continuous workflow, helping your restaurant stay organized without demanding your attention.
        </p>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Thinner, lighter vertical line to reduce visual dominance */}
          <div className="absolute left-[24px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 -translate-x-1/2" aria-hidden="true" />

          <div className="space-y-[48px] sm:space-y-[64px] w-full">
            {timelineEvents.map((event, idx) => {
              const Icon = event.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-20%' }}
                  variants={cardVariants}
                  className={`flex flex-col lg:flex-row items-stretch w-full ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card Side */}
                  <div className="w-full lg:w-1/2 flex justify-start lg:justify-end px-[48px] lg:px-[64px] pl-[48px]">
                    <div
                      tabIndex={0}
                      className="w-full max-w-[460px] bg-white border border-gray-100 rounded-lg px-[40px] py-[48px] shadow-sm hover:border-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black transition-all"
                    >
                      {/* Event Header - Time indicator (Time of day stands out as anchor) */}
                      <span className="font-primary font-semibold text-xs text-black uppercase tracking-wider block mb-[8px]">
                        {event.time}
                      </span>

                      {/* Event Title */}
                      <h3 className="font-secondary font-bold text-xl text-black mb-[12px]">
                        {event.title}
                      </h3>

                      {/* Event Description */}
                      <p className="font-primary font-regular text-sm sm:text-base text-gray-700 leading-[1.6]">
                        {event.description}
                      </p>

                      {/* Optional Bullets */}
                      {event.bullets && (
                        <ul className="mt-[16px] space-y-[8px] pl-[8px]">
                          {event.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="font-primary font-regular text-sm text-gray-600 flex items-center space-x-2"
                            >
                              <span className="w-[4px] h-[4px] rounded-full bg-gray-400" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Icon Node Side - Smaller milestones with lighter weight */}
                  <div className="absolute left-[24px] lg:left-1/2 -translate-x-1/2 flex items-center justify-center top-[40px]">
                    <div className="w-[32px] h-[32px] rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400">
                      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Empty Side (For desktop grid symmetry) */}
                  <div className="hidden lg:block w-1/2" aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </motion.section>
  );
}
