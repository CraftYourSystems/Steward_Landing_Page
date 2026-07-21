import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';
import { seoConfig } from '@/seo/seoConfig';
import { Hero } from "@/feature-pages/components/hero/Hero";
import { GlassCard } from "@/feature-pages/components/cards/GlassCard";
import { FeatureCard } from "@/feature-pages/components/cards/FeatureCard";
import { IndianRupee, PieChart, TrendingDown, FileSpreadsheet } from "lucide-react";
import { StatusLabel } from "@/feature-pages/components/hero/StatusLabel";

export default function FinancePage() {
  const seo = seoConfig['/finance'] || seoConfig['/'];
  return (
    <>
      <SEOHead path="/finance" />
      <FeaturePageWrapper
        answerBlock={seo.answerBlock}
        faqs={seo.faqs}
        relatedPages={seo.relatedPages}
      >
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      
      <Hero
        statusLabel="FINANCIAL CLARITY"
        headline="Finance"
        description="Costs, margins, and variances — presented plainly. No spreadsheets. No guesswork. Just clarity."
      />

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <StatusLabel className="mb-6">THE PROBLEM &amp; THE SHIFT</StatusLabel>
            <h2 className="font-hero text-4xl md:text-5xl text-white mb-6">Financial health shouldn&apos;t require an accountant to decode.</h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Finance translates your numbers into plain language. Revenue, costs, margins, and variances — all visible in real time without exporting a single file.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Revenue Tracking</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Daily, weekly, and monthly revenue breakdowns by channel, category, and service period. Know exactly where your money comes from.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Cost Control</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Track food cost, labour cost, and overheads as a percentage of revenue. Steward flags when ratios drift beyond your set thresholds.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Margin Visibility</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                See gross and net margins per dish, per category, and per service. Identify where profitability is strong and where it leaks.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#0A0A0C] p-8 shadow-2xl">
            <div className="border-b border-white/[0.06] pb-4 mb-6 flex justify-between items-center">
              <span className="text-sm font-medium text-text-primary">Financial Summary</span>
              <span className="text-xs text-text-muted font-mono">July 2026</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "—", value: "—", change: "—", changeColor: "text-text-muted" },
                { label: "—", value: "—", change: "—", changeColor: "text-text-muted" },
                { label: "—", value: "—", change: "—", changeColor: "text-text-muted" },
                { label: "—", value: "—", change: "—", changeColor: "text-text-muted" },
              ].map((m, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-text-muted mb-2">{m.label.toUpperCase()}</p>
                  <p className="text-2xl font-bold text-white">{m.value}</p>
                  <p className={`text-xs font-medium mt-1 ${m.changeColor}`}>{m.change} vs last month</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <p className="text-[10px] font-bold tracking-[0.2em] text-text-muted mb-3">COST BREAKDOWN</p>
              <div className="space-y-2">
                {[
                  { label: "—", pct: 0, color: "bg-white/10" },
                  { label: "—", pct: 0, color: "bg-white/10" },
                  { label: "—", pct: 0, color: "bg-white/10" },
                  { label: "—", pct: 0, color: "bg-white/10" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-text-secondary w-32 shrink-0">{c.label}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div className={`h-full rounded-full ${c.color}`} style={{ width: `${c.pct * 2}%` }} />
                    </div>
                    <span className="text-xs font-mono text-text-muted w-8">—</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FeatureCard icon={<IndianRupee className="text-text-secondary" size={20} />} title="Revenue Reports" description="Daily and monthly revenue breakdowns by channel, category, and time period." />
            <FeatureCard icon={<PieChart className="text-text-secondary" size={20} />} title="Cost Analysis" description="Track food cost, labour cost, and overheads as live percentages of revenue." />
            <FeatureCard icon={<TrendingDown className="text-text-secondary" size={20} />} title="Variance Alerts" description="Automatic notifications when cost ratios exceed your defined thresholds." />
            <FeatureCard icon={<FileSpreadsheet className="text-text-secondary" size={20} />} title="P&L Snapshots" description="Clean profit and loss summaries generated automatically at end of period." />
          </div>
        </div>
      </section>

          </main>
  </FeaturePageWrapper>
  </>
  );
}
