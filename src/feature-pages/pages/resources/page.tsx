import { motion } from 'framer-motion';
import { ArrowRight, Calculator, BarChart3 } from 'lucide-react';
import SEOHead from '@/seo/SEOHead';

const RESOURCES = [
  {
    title: 'The End of the POS: Why 60% of Restaurants are Moving to Unified Systems',
    description: 'An original data report analyzing the shift from fragmented point-of-sale setups to complete operating systems in high-volume venues.',
    category: 'Data Report',
    icon: <BarChart3 className="w-5 h-5" />,
    href: '/resources/end-of-pos-report',
    date: 'July 2026'
  },
  {
    title: 'True Food Cost & Margin Calculator',
    description: 'Stop guessing your margins. Input your recipe costs and see your real profit margins instantly with our free operational tool.',
    category: 'Free Tool',
    icon: <Calculator className="w-5 h-5" />,
    href: '/resources/food-cost-calculator',
    date: 'Updated Monthly'
  }
];

export default function ResourcesPage() {
  return (
    <>
      <SEOHead path="/resources" />
      <main className="min-h-screen bg-steward-canvas pt-[120px] pb-24">
        <div className="container-primary">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="font-display font-medium text-4xl md:text-5xl text-steward-text-primary mb-6">
              Resources & Insights
            </h1>
            <p className="font-primary text-lg text-steward-text-secondary max-w-2xl leading-relaxed">
              Data reports, operational guides, and free tools built for high-volume restaurant operators.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {RESOURCES.map((resource, i) => (
              <motion.a
                key={resource.title}
                href={resource.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col p-8 rounded-2xl bg-steward-surface border border-steward-border hover:border-steward-accent/50 transition-all duration-300 hover:shadow-glow-cyan"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-steward-canvas text-steward-accent border border-steward-border group-hover:bg-steward-accent/10 transition-colors">
                    {resource.icon}
                  </div>
                  <span className="font-primary font-medium text-sm text-steward-text-secondary uppercase tracking-wider">
                    {resource.category}
                  </span>
                  <span className="ml-auto font-primary text-sm text-steward-text-muted">
                    {resource.date}
                  </span>
                </div>
                
                <h3 className="font-display font-medium text-2xl text-steward-text-primary mb-4 group-hover:text-steward-accent transition-colors">
                  {resource.title}
                </h3>
                
                <p className="font-primary text-steward-text-secondary leading-relaxed mb-8 flex-grow">
                  {resource.description}
                </p>

                <div className="flex items-center gap-2 font-primary font-medium text-sm text-steward-accent group-hover:text-steward-accent-hover transition-colors mt-auto">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
