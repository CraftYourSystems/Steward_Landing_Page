import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';
import { seoConfig } from '@/seo/seoConfig';
import { Hero } from "@/feature-pages/components/hero/Hero";
import { GlassCard } from "@/feature-pages/components/cards/GlassCard";
import { FeatureCard } from "@/feature-pages/components/cards/FeatureCard";
import { Activity, Clock, ShieldAlert, Crosshair } from "lucide-react";
import { StatusLabel } from "@/feature-pages/components/hero/StatusLabel";

export default function LiveOpsPage() {
  const seo = seoConfig['/live-ops'] || seoConfig['/'];
  return (
    <>
      <SEOHead path="/live-ops" />
      <FeaturePageWrapper
        answerBlock={seo.answerBlock}
        faqs={seo.faqs}
        relatedPages={seo.relatedPages}
      >
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      
      <Hero
        statusLabel="REAL-TIME OPERATIONS"
        headline="Live Ops"
        description="Every table, every ticket, every second — Steward watches so you can move with absolute certainty."
      />

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <StatusLabel className="mb-6">THE PROBLEM & THE SHIFT</StatusLabel>
            <h2 className="font-hero text-4xl md:text-5xl text-white mb-6">Stop chasing the floor.</h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Most restaurants run a step behind. Live Ops puts you a step ahead by reading your floor in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Instant Visibility</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                See exactly which tables are waiting, which tickets are long, and where the bottlenecks are forming before they become guest complaints.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Quiet Alerts</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                No loud buzzers or red screens. Subtle, intelligent notifications sent directly to the right manager when a threshold is crossed.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#0A0A0C] p-8 shadow-2xl">
            <div className="border-b border-white/[0.06] pb-4 mb-6 flex justify-between items-center">
              <span className="text-sm font-medium text-text-primary">Live Floor Map</span>
              <span className="text-xs text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Syncing
              </span>
            </div>
            <div className="h-[400px] rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center flex-col gap-4">
               {/* Minimalist diagram of floor map */}
               <div className="w-full max-w-md h-full flex flex-wrap gap-4 p-4 content-start">
                  {[1,2,3,4,5,6,7,8].map(i => (
                    <div key={i} className={`h-16 w-16 rounded-lg border flex items-center justify-center text-xs font-mono border-white/10 bg-white/5 text-text-muted`}>
                      —
                    </div>
                  ))}
               </div>
               <p className="text-xs text-text-muted absolute bottom-12">—</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FeatureCard 
              icon={<Activity className="text-text-secondary" size={20} />} 
              title="Pacing Monitor" 
              description="Track course times and predict turn bottlenecks automatically." 
            />
            <FeatureCard 
              icon={<Clock className="text-text-secondary" size={20} />} 
              title="Ticket Times" 
              description="Sync directly with the Kitchen Board for exact prep times." 
            />
            <FeatureCard 
              icon={<ShieldAlert className="text-text-secondary" size={20} />} 
              title="Drift Alerts" 
              description="Detect anomalies in operations and notify staff instantly." 
            />
            <FeatureCard 
              icon={<Crosshair className="text-text-secondary" size={20} />} 
              title="Precision Routing" 
              description="Direct front-of-house staff to where they are needed most." 
            />
          </div>
        </div>
      </section>

          </main>
  </FeaturePageWrapper>
  </>
  );
}
