import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';
import { seoConfig } from '@/seo/seoConfig';
import { Hero } from "@/feature-pages/components/hero/Hero";
import { GlassCard } from "@/feature-pages/components/cards/GlassCard";
import { FeatureCard } from "@/feature-pages/components/cards/FeatureCard";
import { Megaphone, Target, Mail, BarChart3 } from "lucide-react";
import { StatusLabel } from "@/feature-pages/components/hero/StatusLabel";

export default function CampaignsPage() {
  const seo = seoConfig['/campaigns'] || seoConfig['/'];
  return (
    <>
      <SEOHead path="/campaigns" />
      <FeaturePageWrapper
        answerBlock={seo.answerBlock}
        faqs={seo.faqs}
        relatedPages={seo.relatedPages}
      >
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      
      <Hero
        statusLabel="MARKETING INTELLIGENCE"
        headline="Campaigns"
        description="Reach your guests with precision. Every campaign informed by real behaviour, not assumptions."
      />

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <StatusLabel className="mb-6">THE PROBLEM &amp; THE SHIFT</StatusLabel>
            <h2 className="font-hero text-4xl md:text-5xl text-white mb-6">Marketing should be guided by data, not desperation.</h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Campaigns connects your guest data to your outreach. Target the right guests, with the right message, at the right time — based on actual dining behaviour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Audience Segments</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Build segments based on visit frequency, spend level, dining preferences, and lapse risk. Every campaign reaches the right people.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Campaign Builder</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Create targeted campaigns with templates designed for restaurants — event promotions, seasonal specials, loyalty rewards, and re-engagement.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Performance Tracking</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Measure open rates, redemption rates, and actual revenue generated per campaign. Know what works and what to retire.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#0A0A0C] p-8 shadow-2xl">
            <div className="border-b border-white/[0.06] pb-4 mb-6 flex justify-between items-center">
              <span className="text-sm font-medium text-text-primary">Active Campaigns</span>
              <span className="text-xs text-text-muted font-mono">3 running</span>
            </div>
            <div className="space-y-3">
              {[
                { name: "—", segment: "—", sent: "—", opened: "—", redeemed: "—", status: "—", statusColor: "text-text-muted border-white/10" },
                { name: "—", segment: "—", sent: "—", opened: "—", redeemed: "—", status: "—", statusColor: "text-text-muted border-white/10" },
                { name: "—", segment: "—", sent: "—", opened: "—", redeemed: "—", status: "—", statusColor: "text-text-muted border-white/10" },
              ].map((c, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-sm text-white font-medium">{c.name}</p>
                      <p className="text-xs text-text-muted">Segment: {c.segment}</p>
                    </div>
                    <span className={`text-[10px] font-medium border px-2 py-0.5 rounded-full ${c.statusColor}`}>{c.status}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">{c.sent}</p>
                      <p className="text-[10px] text-text-muted">Sent</p>
                    </div>
                    <div className="w-px h-6 bg-white/10" />
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">{c.opened}</p>
                      <p className="text-[10px] text-text-muted">Opened</p>
                    </div>
                    <div className="w-px h-6 bg-white/10" />
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">{c.redeemed}</p>
                      <p className="text-[10px] text-text-muted">Redeemed</p>
                    </div>
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
            <FeatureCard icon={<Target className="text-text-secondary" size={20} />} title="Smart Segments" description="Auto-generated audience groups based on visit behaviour, spend, and dining patterns." />
            <FeatureCard icon={<Megaphone className="text-text-secondary" size={20} />} title="Campaign Templates" description="Pre-built templates for events, seasonal specials, loyalty offers, and win-back sequences." />
            <FeatureCard icon={<Mail className="text-text-secondary" size={20} />} title="Multi-Channel" description="Reach guests via SMS, email, or WhatsApp — whichever channel they prefer." />
            <FeatureCard icon={<BarChart3 className="text-text-secondary" size={20} />} title="ROI Tracking" description="Track actual revenue generated per campaign to measure true return on investment." />
          </div>
        </div>
      </section>

          </main>
  </FeaturePageWrapper>
  </>
  );
}
