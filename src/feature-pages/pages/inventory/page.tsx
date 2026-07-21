import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';
import { seoConfig } from '@/seo/seoConfig';
import { Hero } from "@/feature-pages/components/hero/Hero";
import { GlassCard } from "@/feature-pages/components/cards/GlassCard";
import { FeatureCard } from "@/feature-pages/components/cards/FeatureCard";
import { Package, AlertTriangle, BarChart3, Truck } from "lucide-react";
import { StatusLabel } from "@/feature-pages/components/hero/StatusLabel";

export default function InventoryPage() {
  const seo = seoConfig['/inventory'] || seoConfig['/'];
  return (
    <>
      <SEOHead path="/inventory" />
      <FeaturePageWrapper
        answerBlock={seo.answerBlock}
        faqs={seo.faqs}
        relatedPages={seo.relatedPages}
      >
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      
      <Hero
        statusLabel="SUPPLY INTELLIGENCE"
        headline="Inventory"
        description="Know what&apos;s running low before service begins. Never run out of an item because no one checked."
      />

      {/* Product Story */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <StatusLabel className="mb-6">THE PROBLEM &amp; THE SHIFT</StatusLabel>
            <h2 className="font-hero text-4xl md:text-5xl text-white mb-6">Waste is a decision made by missing information.</h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Inventory gives you par-level awareness, usage patterns, and waste tracking so every ingredient is accounted for and every dollar is justified.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Par-Level Monitoring</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Set minimum thresholds for every ingredient. Steward watches stock levels and surfaces alerts before you run out during service.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Waste Tracking</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Log waste by category, reason, and shift. Identify patterns over time so you can address root causes rather than symptoms.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Supplier Integration</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Connect supplier catalogues to your inventory. Track deliveries, compare pricing, and flag discrepancies automatically on receipt.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#0A0A0C] p-8 shadow-2xl">
            <div className="border-b border-white/[0.06] pb-4 mb-6 flex justify-between items-center">
              <span className="text-sm font-medium text-text-primary">Stock Levels</span>
              <span className="text-xs text-text-muted font-mono">Updated 4 min ago</span>
            </div>
            <div className="space-y-3">
              {[
                { item: "—", current: "—", par: "—", pct: 0, status: "—", barColor: "bg-white/10", statusColor: "text-text-muted border-white/10" },
                { item: "—", current: "—", par: "—", pct: 0, status: "—", barColor: "bg-white/10", statusColor: "text-text-muted border-white/10" },
                { item: "—", current: "—", par: "—", pct: 0, status: "—", barColor: "bg-white/10", statusColor: "text-text-muted border-white/10" },
                { item: "—", current: "—", par: "—", pct: 0, status: "—", barColor: "bg-white/10", statusColor: "text-text-muted border-white/10" },
                { item: "—", current: "—", par: "—", pct: 0, status: "—", barColor: "bg-white/10", statusColor: "text-text-muted border-white/10" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <span className="text-sm text-text-secondary w-36 shrink-0">{row.item}</span>
                  <div className="flex-1">
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div className={`h-full rounded-full ${row.barColor}`} style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                  <span className="text-xs font-mono text-text-muted w-20 text-right">{row.current} / {row.par}</span>
                  <span className={`text-[10px] font-medium border px-2 py-0.5 rounded-full ${row.statusColor} w-16 text-center`}>{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FeatureCard
              icon={<Package className="text-text-secondary" size={20} />}
              title="Stock Counts"
              description="Quick digital counts by station or category. No clipboards, no spreadsheets."
            />
            <FeatureCard
              icon={<AlertTriangle className="text-text-secondary" size={20} />}
              title="Par Alerts"
              description="Automatic notifications when stock drops below set thresholds before service."
            />
            <FeatureCard
              icon={<BarChart3 className="text-text-secondary" size={20} />}
              title="Usage Analytics"
              description="Track consumption patterns over time to optimise purchasing and reduce waste."
            />
            <FeatureCard
              icon={<Truck className="text-text-secondary" size={20} />}
              title="Receiving"
              description="Log deliveries, verify quantities against purchase orders, and flag discrepancies."
            />
          </div>
        </div>
      </section>

          </main>
  </FeaturePageWrapper>
  </>
  );
}
