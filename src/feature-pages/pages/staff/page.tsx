import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';
import { seoConfig } from '@/seo/seoConfig';
import { Hero } from "@/feature-pages/components/hero/Hero";
import { GlassCard } from "@/feature-pages/components/cards/GlassCard";
import { FeatureCard } from "@/feature-pages/components/cards/FeatureCard";
import { Users, CalendarDays, Clock, UserCheck } from "lucide-react";
import { StatusLabel } from "@/feature-pages/components/hero/StatusLabel";

export default function StaffPage() {
  const seo = seoConfig['/staff'] || seoConfig['/'];
  return (
    <>
      <SEOHead path="/staff" />
      <FeaturePageWrapper
        answerBlock={seo.answerBlock}
        faqs={seo.faqs}
        relatedPages={seo.relatedPages}
      >
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      
      <Hero
        statusLabel="TEAM OPERATIONS"
        headline="Staff"
        description="Schedules, coverage gaps, and shift changes — handled before anyone has to ask."
      />

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <StatusLabel className="mb-6">THE PROBLEM &amp; THE SHIFT</StatusLabel>
            <h2 className="font-hero text-4xl md:text-5xl text-white mb-6">Your team shouldn&apos;t wonder who&apos;s working tomorrow.</h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Staff brings scheduling, attendance, and role management into one clear system so every shift starts with a plan and every team member knows their position.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Shift Scheduling</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Build weekly rosters with drag-and-drop simplicity. Account for availability, overtime rules, and role requirements automatically.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Coverage Analysis</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Identify understaffed or overstaffed shifts based on historical demand patterns. Steward flags gaps before they become problems.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Attendance &amp; Time</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Track clock-ins, clock-outs, breaks, and late arrivals. Build a reliable record without manual logbooks or paper timesheets.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#0A0A0C] p-8 shadow-2xl">
            <div className="border-b border-white/[0.06] pb-4 mb-6 flex justify-between items-center">
              <span className="text-sm font-medium text-text-primary">This Week&apos;s Roster</span>
              <span className="text-xs text-text-muted font-mono">Mon 21 – Sun 27 Jul</span>
            </div>
            <div className="space-y-3">
              {[
                { name: "—", role: "—", shifts: "—", hours: "—", status: "—", statusColor: "text-text-muted border-white/10" },
                { name: "—", role: "—", shifts: "—", hours: "—", status: "—", statusColor: "text-text-muted border-white/10" },
                { name: "—", role: "—", shifts: "—", hours: "—", status: "—", statusColor: "text-text-muted border-white/10" },
                { name: "—", role: "—", shifts: "—", hours: "—", status: "—", statusColor: "text-text-muted border-white/10" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.05] flex items-center justify-center text-xs font-semibold text-white/60">{row.name.charAt(0)}</div>
                    <div>
                      <p className="text-sm text-white font-medium">{row.name}</p>
                      <p className="text-xs text-text-muted">{row.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xs text-text-muted">{row.shifts}</span>
                    <span className="text-xs font-mono text-text-muted">{row.hours}</span>
                    <span className={`text-[10px] font-medium border px-2 py-0.5 rounded-full ${row.statusColor}`}>{row.status}</span>
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
            <FeatureCard icon={<CalendarDays className="text-text-secondary" size={20} />} title="Roster Builder" description="Create and manage weekly schedules with role-based assignments and availability tracking." />
            <FeatureCard icon={<Users className="text-text-secondary" size={20} />} title="Team Directory" description="A complete view of your team — roles, certifications, contact details, and performance notes." />
            <FeatureCard icon={<Clock className="text-text-secondary" size={20} />} title="Time Tracking" description="Digital clock-in and clock-out with break monitoring and overtime calculations." />
            <FeatureCard icon={<UserCheck className="text-text-secondary" size={20} />} title="Swap Requests" description="Staff can request shift swaps directly. Managers approve with one tap." />
          </div>
        </div>
      </section>

          </main>
  </FeaturePageWrapper>
  </>
  );
}
