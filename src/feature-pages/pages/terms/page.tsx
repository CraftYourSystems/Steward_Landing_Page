import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';

export default function TermsPage() {
  return (
    <>
      <SEOHead path="/terms" />
      <FeaturePageWrapper>
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-steward-canvas text-white py-16 px-4">
          <div className="max-w-3xl mx-auto w-full pt-16">
            <h1 className="font-secondary font-bold text-4xl sm:text-5xl mb-4 text-steward-text-primary">Terms of Service</h1>
            <p className="text-steward-text-muted text-sm mb-12">Last Updated: July 2026</p>
            
            <div className="space-y-8 font-primary text-steward-text-secondary leading-relaxed text-base">
              <section className="space-y-3">
                <h2 className="font-secondary font-bold text-2xl text-steward-text-primary">1. Acceptable Use</h2>
                <p>
                  Steward is designed to assist with live restaurant operations, including QR ordering, KDS ticket routing, staff management, and business payments. You agree to use the platform solely for valid operations and in compliance with all local laws and regulations.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-secondary font-bold text-2xl text-steward-text-primary">2. Service SLA & Onboarding</h2>
                <p>
                  During onboarding, Steward is configured specifically around your operational workflow. While we aim for 100% availability, temporary maintenance windows may occur, which will be announced beforehand whenever possible.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-secondary font-bold text-2xl text-steward-text-primary">3. Operational Integrity</h2>
                <p>
                  Restaurant partners are responsible for securing local devices, kitchen screens, and login details. Any unauthorized activity on your console should be reported immediately.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-secondary font-bold text-2xl text-steward-text-primary">4. General Agreements</h2>
                <p>
                  By using Steward, you agree to these terms. If you do not agree, please contact support to decommission your terminals.
                </p>
              </section>
            </div>
          </div>
        </main>
      </FeaturePageWrapper>
    </>
  );
}
