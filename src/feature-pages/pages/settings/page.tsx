import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';
import { seoConfig } from '@/seo/seoConfig';
import { Hero } from "@/feature-pages/components/hero/Hero";
import { GlassCard } from "@/feature-pages/components/cards/GlassCard";
import { FeatureCard } from "@/feature-pages/components/cards/FeatureCard";
import { Settings2, Shield, Bell, Database } from "lucide-react";
import { StatusLabel } from "@/feature-pages/components/hero/StatusLabel";

export default function SettingsPage() {
  const seo = seoConfig['/settings'] || seoConfig['/'];
  return (
    <>
      <SEOHead path="/settings" />
      <FeaturePageWrapper
        answerBlock={seo.answerBlock}
        faqs={seo.faqs}
        relatedPages={seo.relatedPages}
      >
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      
      <Hero
        statusLabel="SYSTEM CONFIGURATION"
        headline="Settings"
        description="Configure Steward to match your restaurant. Roles, permissions, integrations, and preferences — all in one place."
      />

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <StatusLabel className="mb-6">SYSTEM CONTROL</StatusLabel>
            <h2 className="font-hero text-4xl md:text-5xl text-white mb-6">Your system, your rules.</h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Settings gives you full control over how Steward operates within your restaurant — from user roles and notification preferences to third-party integrations and data management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Roles &amp; Permissions</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Define who sees what. Assign roles with granular permissions — from full admin access to view-only for specific modules.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Integrations</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Connect Steward to your POS, accounting software, delivery platforms, and payment systems. Data flows in, decisions flow out.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Notifications</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Configure alert thresholds, notification channels, and quiet hours. Steward communicates on your terms, not its own.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#0A0A0C] p-8 shadow-2xl">
            <div className="border-b border-white/[0.06] pb-4 mb-6">
              <span className="text-sm font-medium text-text-primary">Configuration Overview</span>
            </div>
            <div className="space-y-3">
              {[
                { category: "—", items: "—", status: "—" },
                { category: "—", items: "—", status: "—" },
                { category: "—", items: "—", status: "—" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div>
                    <p className="text-sm text-white font-medium">{row.category}</p>
                    <p className="text-xs text-text-muted mt-0.5">{row.items}</p>
                  </div>
                  <span className="text-xs text-text-muted border border-white/10 px-2 py-0.5 rounded-full">{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FeatureCard icon={<Shield className="text-text-secondary" size={20} />} title="Access Control" description="Granular role-based permissions for every module and feature in Steward." />
            <FeatureCard icon={<Settings2 className="text-text-secondary" size={20} />} title="System Config" description="Operating hours, service periods, table maps, and restaurant-level preferences." />
            <FeatureCard icon={<Bell className="text-text-secondary" size={20} />} title="Alert Rules" description="Define custom thresholds and notification channels for every operational metric." />
            <FeatureCard icon={<Database className="text-text-secondary" size={20} />} title="Data Management" description="Export data, schedule backups, and manage retention policies for compliance." />
          </div>
        </div>
      </section>

          </main>
  </FeaturePageWrapper>
  </>
  );
}
