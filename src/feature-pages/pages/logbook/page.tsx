import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';
import { seoConfig } from '@/seo/seoConfig';
import { Hero } from "@/feature-pages/components/hero/Hero";
import { GlassCard } from "@/feature-pages/components/cards/GlassCard";
import { FeatureCard } from "@/feature-pages/components/cards/FeatureCard";
import { BookOpen, MessageSquare, CheckCircle, Search } from "lucide-react";
import { StatusLabel } from "@/feature-pages/components/hero/StatusLabel";

export default function LogbookPage() {
  const seo = seoConfig['/logbook'] || seoConfig['/'];
  return (
    <>
      <SEOHead path="/logbook" />
      <FeaturePageWrapper
        answerBlock={seo.answerBlock}
        faqs={seo.faqs}
        relatedPages={seo.relatedPages}
      >
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      
      <Hero
        statusLabel="OPERATIONAL MEMORY"
        headline="Logbook"
        description="Everything worth knowing, exactly when you need it. Nothing slips through the gaps again."
      />

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <StatusLabel className="mb-6">THE PROBLEM &amp; THE SHIFT</StatusLabel>
            <h2 className="font-hero text-4xl md:text-5xl text-white mb-6">Shift handovers shouldn&apos;t rely on memory.</h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Logbook captures every shift note, incident, guest complaint, maintenance issue, and instruction — creating a permanent operational record your entire team can access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Shift Notes</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                End-of-shift notes captured digitally. What happened, what to watch for, and what the next team needs to know — all in one place.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Incident Logging</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Record guest complaints, equipment issues, staff incidents, and near-misses. Build a history that helps prevent recurrence.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Task Handover</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Assign follow-up tasks to the incoming shift. Track completion status so nothing gets lost between teams.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#0A0A0C] p-8 shadow-2xl">
            <div className="border-b border-white/[0.06] pb-4 mb-6 flex justify-between items-center">
              <span className="text-sm font-medium text-text-primary">Recent Entries</span>
              <span className="text-xs text-text-muted font-mono">Today</span>
            </div>
            <div className="space-y-3">
              {[
                { time: "—", author: "—", type: "—", content: "—", typeColor: "text-text-muted" },
                { time: "—", author: "—", type: "—", content: "—", typeColor: "text-text-muted" },
                { time: "—", author: "—", type: "—", content: "—", typeColor: "text-text-muted" },
                { time: "—", author: "—", type: "—", content: "—", typeColor: "text-text-muted" },
              ].map((entry, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-text-muted">{entry.time}</span>
                    <span className="text-xs text-text-secondary">{entry.author}</span>
                    <span className={`text-[10px] font-medium ${entry.typeColor}`}>· {entry.type}</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{entry.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FeatureCard icon={<BookOpen className="text-text-secondary" size={20} />} title="Shift Log" description="Structured end-of-shift reports with categorised notes, flags, and follow-ups." />
            <FeatureCard icon={<MessageSquare className="text-text-secondary" size={20} />} title="Team Comments" description="Staff can add context and replies to log entries, creating a threaded operational record." />
            <FeatureCard icon={<CheckCircle className="text-text-secondary" size={20} />} title="Task Tracking" description="Assign and track follow-up actions between shifts with completion status." />
            <FeatureCard icon={<Search className="text-text-secondary" size={20} />} title="Searchable History" description="Find any past entry by date, author, type, or keyword. Your operational memory is always accessible." />
          </div>
        </div>
      </section>

          </main>
  </FeaturePageWrapper>
  </>
  );
}
