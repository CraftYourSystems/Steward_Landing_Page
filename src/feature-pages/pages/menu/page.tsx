import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';
import { seoConfig } from '@/seo/seoConfig';
import { Hero } from "@/feature-pages/components/hero/Hero";
import { GlassCard } from "@/feature-pages/components/cards/GlassCard";
import { FeatureCard } from "@/feature-pages/components/cards/FeatureCard";
import { BookOpen, Tag, TrendingUp, Sparkles } from "lucide-react";
import { StatusLabel } from "@/feature-pages/components/hero/StatusLabel";

export default function MenuPage() {
  const seo = seoConfig['/menu'] || seoConfig['/'];
  return (
    <>
      <SEOHead path="/menu" />
      <FeaturePageWrapper
        answerBlock={seo.answerBlock}
        faqs={seo.faqs}
        relatedPages={seo.relatedPages}
      >
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      
      <Hero
        statusLabel="MENU ENGINEERING"
        headline="Menu"
        description="Design, price, and optimise your menu with clarity. Know what sells, what doesn&apos;t, and why."
      />

      {/* Product Story */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <StatusLabel className="mb-6">THE PROBLEM &amp; THE SHIFT</StatusLabel>
            <h2 className="font-hero text-4xl md:text-5xl text-white mb-6">Your menu is your most important revenue lever.</h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Most restaurants guess which items perform. Menu gives you the data to engineer profitability into every section, every season, every service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Item Performance</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                See exactly which dishes are stars, which are underperformers, and which are dragging margins down — updated after every service.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Cost Mapping</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Every dish is linked to its ingredients with live cost tracking. When supplier prices shift, you see the margin impact immediately.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Seasonal Planning</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Plan menu rotations with historical sales data and trend analysis. Know what to introduce, what to retire, and when to make the change.
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
              <span className="text-sm font-medium text-text-primary">Menu Performance Matrix</span>
              <span className="text-xs text-text-muted font-mono">Last 30 days</span>
            </div>

            {/* Matrix grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5">
                <p className="text-[10px] font-bold tracking-[0.2em] text-emerald-400 mb-3">★ STARS</p>
                <p className="text-xs text-text-muted mb-1">High popularity · High profit</p>
                <div className="space-y-1.5 mt-3">
                  <div className="flex justify-between text-xs"><span className="text-text-secondary">—</span><span className="text-emerald-400 font-mono">—</span></div>
                  <div className="flex justify-between text-xs"><span className="text-text-secondary">—</span><span className="text-emerald-400 font-mono">—</span></div>
                </div>
              </div>
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-5">
                <p className="text-[10px] font-bold tracking-[0.2em] text-amber-400 mb-3">⚡ PUZZLES</p>
                <p className="text-xs text-text-muted mb-1">Low popularity · High profit</p>
                <div className="space-y-1.5 mt-3">
                  <div className="flex justify-between text-xs"><span className="text-text-secondary">—</span><span className="text-amber-400 font-mono">—</span></div>
                  <div className="flex justify-between text-xs"><span className="text-text-secondary">—</span><span className="text-amber-400 font-mono">—</span></div>
                </div>
              </div>
              <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.04] p-5">
                <p className="text-[10px] font-bold tracking-[0.2em] text-blue-400 mb-3">♥ WORKHORSES</p>
                <p className="text-xs text-text-muted mb-1">High popularity · Low profit</p>
                <div className="space-y-1.5 mt-3">
                  <div className="flex justify-between text-xs"><span className="text-text-secondary">—</span><span className="text-blue-400 font-mono">—</span></div>
                  <div className="flex justify-between text-xs"><span className="text-text-secondary">—</span><span className="text-blue-400 font-mono">—</span></div>
                </div>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-500/[0.04] p-5">
                <p className="text-[10px] font-bold tracking-[0.2em] text-red-400 mb-3">✕ UNDERPERFORMERS</p>
                <p className="text-xs text-text-muted mb-1">Low popularity · Low profit</p>
                <div className="space-y-1.5 mt-3">
                  <div className="flex justify-between text-xs"><span className="text-text-secondary">—</span><span className="text-red-400 font-mono">—</span></div>
                  <div className="flex justify-between text-xs"><span className="text-text-secondary">—</span><span className="text-red-400 font-mono">—</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FeatureCard
              icon={<BookOpen className="text-text-secondary" size={20} />}
              title="Menu Builder"
              description="Create and manage menus with categories, modifiers, allergens, and pricing in one place."
            />
            <FeatureCard
              icon={<Tag className="text-text-secondary" size={20} />}
              title="Dynamic Pricing"
              description="Adjust pricing based on cost fluctuations, demand patterns, and margin targets."
            />
            <FeatureCard
              icon={<TrendingUp className="text-text-secondary" size={20} />}
              title="Sales Analytics"
              description="Track item-level performance across services, days, and seasons."
            />
            <FeatureCard
              icon={<Sparkles className="text-text-secondary" size={20} />}
              title="Recipe Costing"
              description="Link every dish to its ingredients with live cost calculations and margin tracking."
            />
          </div>
        </div>
      </section>

          </main>
  </FeaturePageWrapper>
  </>
  );
}
