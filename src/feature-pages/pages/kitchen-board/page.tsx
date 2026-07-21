import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';
import { seoConfig } from '@/seo/seoConfig';
import { Hero } from "@/feature-pages/components/hero/Hero";
import { GlassCard } from "@/feature-pages/components/cards/GlassCard";
import { FeatureCard } from "@/feature-pages/components/cards/FeatureCard";
import { ChefHat, Flame, ListOrdered, MonitorCheck } from "lucide-react";
import { StatusLabel } from "@/feature-pages/components/hero/StatusLabel";

export default function KitchenBoardPage() {
  const seo = seoConfig['/kitchen-board'] || seoConfig['/'];
  return (
    <>
      <SEOHead path="/kitchen-board" />
      <FeaturePageWrapper
        answerBlock={seo.answerBlock}
        faqs={seo.faqs}
        relatedPages={seo.relatedPages}
      >
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      
      <Hero
        statusLabel="KITCHEN INTELLIGENCE"
        headline="Kitchen Board"
        description="Every ticket prioritised, every station aligned. The kitchen moves with you, not against you."
      />

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <StatusLabel className="mb-6">THE PROBLEM &amp; THE SHIFT</StatusLabel>
            <h2 className="font-hero text-4xl md:text-5xl text-white mb-6">The pass should never be a guessing game.</h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Kitchen Board replaces paper tickets and shouting with a structured, real-time display that keeps every station informed and every course on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Station View</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Each station sees only its relevant tickets. The tandoor station sees tandoor items. The grill sees grill items. No noise, no confusion.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Course Timing</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Coordinate multi-course meals across stations. Fire signals ensure starters, mains, and desserts arrive in sequence without delay.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Ticket Prioritisation</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Long-waiting tickets rise to the top automatically. The kitchen always knows what needs attention first.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#0A0A0C] p-8 shadow-2xl">
            <div className="border-b border-white/[0.06] pb-4 mb-6 flex justify-between items-center">
              <span className="text-sm font-medium text-text-primary">Kitchen Board — All Stations</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-text-muted">Live</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  station: "—",
                  tickets: [
                    { id: "—", items: "—", time: "—", priority: false },
                    { id: "—", items: "—", time: "—", priority: false },
                  ]
                },
                {
                  station: "—",
                  tickets: [
                    { id: "—", items: "—", time: "—", priority: false },
                  ]
                },
                {
                  station: "—",
                  tickets: [
                    { id: "—", items: "—", time: "—", priority: false },
                  ]
                }
              ].map((s, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 flex flex-col h-full">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-text-muted mb-3">{s.station}</p>
                  <div className="space-y-2">
                    {s.tickets.map((t) => (
                      <div key={t.id} className={`p-3 rounded-lg border ${t.priority ? 'border-amber-500/30 bg-amber-500/[0.04]' : 'border-white/[0.05] bg-white/[0.01]'}`}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono text-text-muted">{t.id}</span>
                          <span className={`text-xs font-mono ${t.priority ? 'text-amber-400' : 'text-text-muted'}`}>{t.time}</span>
                        </div>
                        <p className="text-xs text-text-secondary">{t.items}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FeatureCard icon={<ChefHat className="text-text-secondary" size={20} />} title="Station Routing" description="Tickets automatically split and routed to the correct station based on item type." />
            <FeatureCard icon={<Flame className="text-text-secondary" size={20} />} title="Fire Control" description="Coordinate multi-course meals with fire signals that keep timing precise across stations." />
            <FeatureCard icon={<ListOrdered className="text-text-secondary" size={20} />} title="Priority Queue" description="Long-waiting tickets auto-escalate. The team always knows what needs attention first." />
            <FeatureCard icon={<MonitorCheck className="text-text-secondary" size={20} />} title="Display Mode" description="Full-screen display mode designed for kitchen monitors with high-contrast readability." />
          </div>
        </div>
      </section>

          </main>
  </FeaturePageWrapper>
  </>
  );
}
