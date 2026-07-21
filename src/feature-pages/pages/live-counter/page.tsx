import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';
import { seoConfig } from '@/seo/seoConfig';
import { Hero } from "@/feature-pages/components/hero/Hero";
import { GlassCard } from "@/feature-pages/components/cards/GlassCard";
import { FeatureCard } from "@/feature-pages/components/cards/FeatureCard";
import { Radio, Eye, TrendingUp, Bell } from "lucide-react";
import { StatusLabel } from "@/feature-pages/components/hero/StatusLabel";

export default function LiveCounterPage() {
  const seo = seoConfig['/live-counter'] || seoConfig['/'];
  return (
    <>
      <SEOHead path="/live-counter" />
      <FeaturePageWrapper
        answerBlock={seo.answerBlock}
        faqs={seo.faqs}
        relatedPages={seo.relatedPages}
      >
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      
      <Hero
        statusLabel="LIVE METRICS"
        headline="Live Counter"
        description="A real-time pulse on your restaurant. Covers, revenue, and key metrics — updating every second."
      />

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <StatusLabel className="mb-6">THE PROBLEM &amp; THE SHIFT</StatusLabel>
            <h2 className="font-hero text-4xl md:text-5xl text-white mb-6">Stop asking &ldquo;how are we doing?&rdquo; — just look.</h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Live Counter gives you an always-on display of the numbers that matter most — covers served, revenue earned, average ticket size, and table turns — updating in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Real-Time Revenue</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Watch revenue accumulate as orders close. Compare against targets and yesterday&apos;s pace to know exactly where you stand.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Cover Tracking</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                See total covers served and compare against projections. Identify whether you&apos;re ahead or behind expected pace for the service.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Ambient Display</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Designed for a dedicated screen in the back office or manager station. Always visible, never intrusive — a constant pulse on performance.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#0A0A0C] p-8 shadow-2xl">
            <div className="border-b border-white/[0.06] pb-4 mb-6 flex justify-between items-center">
              <span className="text-sm font-medium text-text-primary">Live Counter</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-text-muted">Dinner Service</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "—", value: "—", sub: "—" },
                { label: "—", value: "—", sub: "—" },
                { label: "—", value: "—", sub: "—" },
                { label: "—", value: "—", sub: "—" },
              ].map((m, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 text-center">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-text-muted mb-2">{m.label}</p>
                  <p className="text-3xl font-bold text-white mb-1">{m.value}</p>
                  <p className="text-xs text-text-muted">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FeatureCard icon={<Radio className="text-text-secondary" size={20} />} title="Live Updates" description="All metrics refresh in real time as orders are placed and closed." />
            <FeatureCard icon={<Eye className="text-text-secondary" size={20} />} title="Display Mode" description="Full-screen ambient mode designed for wall-mounted monitors or tablets." />
            <FeatureCard icon={<TrendingUp className="text-text-secondary" size={20} />} title="Pace Tracking" description="Compare current performance against yesterday, last week, and monthly targets." />
            <FeatureCard icon={<Bell className="text-text-secondary" size={20} />} title="Milestone Alerts" description="Get notified when you hit revenue milestones or cover targets during service." />
          </div>
        </div>
      </section>

          </main>
  </FeaturePageWrapper>
  </>
  );
}
