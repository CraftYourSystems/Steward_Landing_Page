import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';
import { seoConfig } from '@/seo/seoConfig';
import { Hero } from "@/feature-pages/components/hero/Hero";
import { GlassCard } from "@/feature-pages/components/cards/GlassCard";
import { FeatureCard } from "@/feature-pages/components/cards/FeatureCard";
import { ClipboardList, ArrowLeftRight, Layers, Timer } from "lucide-react";
import { StatusLabel } from "@/feature-pages/components/hero/StatusLabel";

export default function OrdersPage() {
  const seo = seoConfig['/orders'] || seoConfig['/'];
  return (
    <>
      <SEOHead path="/orders" />
      <FeaturePageWrapper
        answerBlock={seo.answerBlock}
        faqs={seo.faqs}
        relatedPages={seo.relatedPages}
      >
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      
      <Hero
        statusLabel="ORDER MANAGEMENT"
        headline="Orders"
        description="From placement to fulfilment. Every order tracked, routed, and resolved without friction."
      />

      {/* Product Story */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <StatusLabel className="mb-6">THE PROBLEM &amp; THE SHIFT</StatusLabel>
            <h2 className="font-hero text-4xl md:text-5xl text-white mb-6">Orders shouldn&apos;t get lost between the floor and the kitchen.</h2>
            <p className="text-text-secondary text-lg font-light max-w-2xl">
              Miscommunication between front-of-house and back-of-house costs time, food, and guest trust. Orders brings structure to the flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Unified Order Flow</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Every order — dine-in, takeaway, delivery — flows through one system. No switching between platforms. One view, one truth.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Intelligent Routing</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Orders are automatically routed to the correct station based on item type, prep time, and current kitchen load. No manual sorting.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-hero text-2xl text-white mb-3">Modification Handling</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Allergies, substitutions, and special requests are captured at the point of order and surfaced clearly at every stage of preparation.
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
              <span className="text-sm font-medium text-text-primary">Order Queue</span>
              <span className="text-xs text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>
            <div className="space-y-3">
              {[
                { id: "—", type: "—", table: "—", items: "—", status: "—", statusColor: "text-text-muted border-white/10", time: "—" },
                { id: "—", type: "—", table: "—", items: "—", status: "—", statusColor: "text-text-muted border-white/10", time: "—" },
                { id: "—", type: "—", table: "—", items: "—", status: "—", statusColor: "text-text-muted border-white/10", time: "—" },
                { id: "—", type: "—", table: "—", items: "—", status: "—", statusColor: "text-text-muted border-white/10", time: "—" },
              ].map((order, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-white font-medium">{order.id}</span>
                    <span className="text-xs text-text-muted border border-white/10 px-2 py-0.5 rounded-full">{order.type}</span>
                    <span className="text-xs text-text-muted">{order.table}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-text-muted">{order.items} items</span>
                    <span className={`text-[10px] font-medium border px-2 py-0.5 rounded-full ${order.statusColor}`}>{order.status}</span>
                    <span className="text-xs font-mono text-text-muted w-8 text-right">{order.time}</span>
                  </div>
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
              icon={<ClipboardList className="text-text-secondary" size={20} />}
              title="Order Lifecycle"
              description="Track every order from placement through preparation, quality check, and fulfilment."
            />
            <FeatureCard
              icon={<ArrowLeftRight className="text-text-secondary" size={20} />}
              title="Multi-Channel Sync"
              description="Dine-in, delivery, and takeaway orders unified in a single, real-time queue."
            />
            <FeatureCard
              icon={<Layers className="text-text-secondary" size={20} />}
              title="Station Routing"
              description="Automatic dispatching to the correct prep station based on item and load."
            />
            <FeatureCard
              icon={<Timer className="text-text-secondary" size={20} />}
              title="Time Tracking"
              description="Monitor prep and wait times per order with automatic threshold alerts."
            />
          </div>
        </div>
      </section>

          </main>
  </FeaturePageWrapper>
  </>
  );
}
