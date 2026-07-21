import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';
import { seoConfig } from '@/seo/seoConfig';
import { Hero } from "@/feature-pages/components/hero/Hero";
import { GlassCard } from "@/feature-pages/components/cards/GlassCard";
import { FeatureCard } from "@/feature-pages/components/cards/FeatureCard";
import { Heart, Star, Repeat, UserCircle } from "lucide-react";
import { StatusLabel } from "@/feature-pages/components/hero/StatusLabel";

export default function CustomersPage() {
  const seo = seoConfig['/customers'] || seoConfig['/'];
  return (
    <>
      <SEOHead path="/customers" />
      <FeaturePageWrapper
        answerBlock={seo.answerBlock}
        faqs={seo.faqs}
        relatedPages={seo.relatedPages}
      >
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      
      <Hero
        statusLabel="GUEST INTELLIGENCE"
        headline="Customers"
        description="Every visit, every preference, every pattern — surfaced quietly so your team can make it personal every time."
      />

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <StatusLabel className="mb-6">THE PROBLEM &amp; THE SHIFT</StatusLabel>
            <h2 className="font-hero text-4xl md:text-5xl text-white mb-6">Guests who feel remembered always return.</h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Customers builds a living profile for every guest — dining history, preferences, allergies, and visit frequency — so your team delivers personal service at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Guest Profiles</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                A comprehensive record built automatically from every visit. Dietary preferences, favourite tables, spending patterns, and special occasions.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Visit History</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                See the full timeline of a guest&apos;s relationship with your restaurant. What they ordered, when they visited, and how often they return.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Retention Signals</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Identify guests who haven&apos;t returned in a while. Steward flags at-risk regulars so you can re-engage before they disappear.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#0A0A0C] p-8 shadow-2xl">
            <div className="border-b border-white/[0.06] pb-4 mb-6 flex justify-between items-center">
              <span className="text-sm font-medium text-text-primary">Guest Directory</span>
              <span className="text-xs text-text-muted font-mono">142 profiles</span>
            </div>
            <div className="space-y-3">
              {[
                { name: "—", visits: "—", lastVisit: "—", spend: "—", tag: "—", tagColor: "text-text-muted border-white/10" },
                { name: "—", visits: "—", lastVisit: "—", spend: "—", tag: "—", tagColor: "text-text-muted border-white/10" },
                { name: "—", visits: "—", lastVisit: "—", spend: "—", tag: "—", tagColor: "text-text-muted border-white/10" },
                { name: "—", visits: "—", lastVisit: "—", spend: "—", tag: "—", tagColor: "text-text-muted border-white/10" },
              ].map((guest, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.05] flex items-center justify-center text-xs font-semibold text-white/60">{guest.name.charAt(0)}</div>
                    <div>
                      <p className="text-sm text-white font-medium">{guest.name}</p>
                      <p className="text-xs text-text-muted">{guest.visits} visits · Last: {guest.lastVisit}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-text-muted">{guest.spend}</span>
                    <span className={`text-[10px] font-medium border px-2 py-0.5 rounded-full ${guest.tagColor}`}>{guest.tag}</span>
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
            <FeatureCard icon={<UserCircle className="text-text-secondary" size={20} />} title="Auto Profiles" description="Guest profiles are built automatically from reservation data, orders, and visit patterns." />
            <FeatureCard icon={<Heart className="text-text-secondary" size={20} />} title="Preferences" description="Dietary needs, favourite dishes, seating preferences, and special occasions tracked per guest." />
            <FeatureCard icon={<Repeat className="text-text-secondary" size={20} />} title="Retention Tracking" description="Monitor visit frequency and identify guests at risk of lapsing before it happens." />
            <FeatureCard icon={<Star className="text-text-secondary" size={20} />} title="VIP Management" description="Tag and prioritise high-value guests. Ensure they receive the attention they deserve." />
          </div>
        </div>
      </section>

          </main>
  </FeaturePageWrapper>
  </>
  );
}
