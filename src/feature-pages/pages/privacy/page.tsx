import SEOHead from '@/seo/SEOHead';
import FeaturePageWrapper from '@/feature-pages/components/FeaturePageWrapper';

export default function PrivacyPage() {
  return (
    <>
      <SEOHead path="/privacy" />
      <FeaturePageWrapper>
        <main className="min-h-screen flex flex-col relative overflow-hidden bg-steward-canvas text-white py-16 px-4">
          <div className="max-w-3xl mx-auto w-full pt-16">
            <h1 className="font-secondary font-bold text-4xl sm:text-5xl mb-4 text-steward-text-primary">Privacy Policy</h1>
            <p className="text-steward-text-muted text-sm mb-12">Last Updated: July 2026</p>
            
            <div className="space-y-8 font-primary text-steward-text-secondary leading-relaxed text-base">
              <section className="space-y-3">
                <h2 className="font-secondary font-bold text-2xl text-steward-text-primary">1. Information We Collect</h2>
                <p>
                  We collect information necessary to provide and improve the Steward restaurant operating system. This includes contact details, billing details, and operational data (such as orders, ticket times, and staff logs) provided during the setup and usage of our platform.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-secondary font-bold text-2xl text-steward-text-primary">2. How We Use Your Data</h2>
                <p>
                  Operational data is used solely to facilitate restaurant operations—routing orders to the kitchen display, processing payments, calculating operational statistics, and generating Needle Briefings. We do not sell or rent your data to third parties.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-secondary font-bold text-2xl text-steward-text-primary">3. Data Security</h2>
                <p>
                  We use modern security protocols to encrypt data in transit and at rest. Access control is enforced across all endpoints to ensure only authorized roles within your restaurant can access sensitive reports and logs.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-secondary font-bold text-2xl text-steward-text-primary">4. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. If significant changes are made, we will notify our restaurant partners through active controls in the dashboard.
                </p>
              </section>
            </div>
          </div>
        </main>
      </FeaturePageWrapper>
    </>
  );
}
