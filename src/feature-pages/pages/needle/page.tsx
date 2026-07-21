import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';
import { seoConfig } from '@/seo/seoConfig';
import { Hero } from "@/feature-pages/components/hero/Hero";
import { GlassCard } from "@/feature-pages/components/cards/GlassCard";
import { FeatureCard } from "@/feature-pages/components/cards/FeatureCard";
import { Brain, Zap, LineChart, FileText } from "lucide-react";
import { StatusLabel } from "@/feature-pages/components/hero/StatusLabel";

export default function NeedlePage() {
  const seo = seoConfig['/needle'] || seoConfig['/'];
  return (
    <>
      <SEOHead path="/needle" />
      <FeaturePageWrapper
        answerBlock={seo.answerBlock}
        faqs={seo.faqs}
        relatedPages={seo.relatedPages}
      >
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      
      <Hero
        statusLabel="AI INTELLIGENCE"
        headline="Needle"
        description="Your AI Assistant. Merging insights, predictive forecasts, and analytics into one clear brief."
      />

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <StatusLabel className="mb-6">THE SHIFT</StatusLabel>
            <h2 className="font-hero text-4xl md:text-5xl text-white mb-6">Needle interprets. You act.</h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Stop looking at dashboards trying to find the story. Needle reads your data overnight and hands you the three things that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Briefing</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Replaces manual AI Insights. A concise, readable summary delivered to your device before service. Know exactly what to focus on.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Forecasts</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Replaces Predictive AI. Anticipate demand, staffing needs, and inventory shortages days in advance with high-confidence modeling.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Trends</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Replaces raw Analytics. Deep analysis of sales, guest behavior, and performance, surfaced intelligently without needing a spreadsheet.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#0A0A0C] p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            
            <div className="flex items-center gap-3 mb-8">
              <Brain className="text-purple-400" />
              <span className="text-lg font-hero text-white">Morning Briefing</span>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 min-h-[80px]">
                <p className="text-sm text-text-primary font-medium mb-1">—</p>
                <p className="text-xs text-text-muted">—</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 min-h-[80px]">
                <p className="text-sm text-text-primary font-medium mb-1">—</p>
                <p className="text-xs text-text-muted">—</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 min-h-[80px]">
                <p className="text-sm text-text-primary font-medium mb-1">—</p>
                <p className="text-xs text-text-muted">—</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FeatureCard 
              icon={<Brain className="text-text-secondary" size={20} />} 
              title="AI Briefings" 
              description="Daily consolidated insights from across your entire operation." 
            />
            <FeatureCard 
              icon={<LineChart className="text-text-secondary" size={20} />} 
              title="Trend Analysis" 
              description="Deep analytics on sales, behavior, and performance." 
            />
            <FeatureCard 
              icon={<Zap className="text-text-secondary" size={20} />} 
              title="Predictions" 
              description="Forecasts that learn and adapt to your unique restaurant." 
            />
            <FeatureCard 
              icon={<FileText className="text-text-secondary" size={20} />} 
              title="Smart Reports" 
              description="Automated report generation linked directly to your Logbook." 
            />
          </div>
        </div>
      </section>

          </main>
  </FeaturePageWrapper>
  </>
  );
}
