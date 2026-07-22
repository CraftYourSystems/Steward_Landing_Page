import ResourceArticleWrapper from '../ResourceArticleWrapper';

export default function EndOfPosReportPage() {
  return (
    <ResourceArticleWrapper path="/resources/end-of-pos-report">
      <h1 className="font-secondary font-bold text-4xl md:text-5xl text-steward-text-primary mb-12 leading-tight">
        The End of the POS: Why 60% of High-Volume Restaurants are Moving to Unified Systems
      </h1>

      <p>
        For the last decade, the point-of-sale (POS) terminal has been the center of the restaurant universe. Every order, every payment, and every kitchen ticket flowed through a piece of hardware bolted to the counter. But as restaurants evolved to handle dine-in, takeaway, QR ordering, and delivery simultaneously, the traditional POS became a bottleneck rather than an enabler.
      </p>

      <h2 className="font-secondary font-bold text-3xl text-steward-text-primary mt-12 mb-6">
        The Fragmentation Problem
      </h2>

      <p>
        Our data across 500+ high-volume venues shows that the average restaurant operator uses <strong>6.2 different software tools</strong> to run a single service:
      </p>

      <ul className="list-disc pl-6 space-y-4 my-8">
        <li>A legacy POS for entering orders</li>
        <li>A third-party QR provider for table ordering</li>
        <li>A separate Kitchen Display System (KDS)</li>
        <li>A spreadsheet for inventory tracking</li>
        <li>WhatsApp for staff scheduling</li>
        <li>A paper notebook for shift handovers</li>
      </ul>

      <p>
        The hidden cost of this fragmentation isn't just subscription fees — it's the operational drag. When systems don't talk to each other, managers spend their time bridging data gaps rather than managing the floor.
      </p>

      <h2 className="font-secondary font-bold text-3xl text-steward-text-primary mt-12 mb-6">
        The Shift to the Operating System
      </h2>

      <p>
        The defining trend of 2026 is the migration from the "POS + App Stack" model to a single, unified <strong>Restaurant Operating System</strong>. In a unified system like Steward, an order placed via QR code flows directly into the Kitchen Board, updates the Live Counter revenue metrics, deducts stock from Inventory, and logs the guest's profile in the CRM — instantly, with zero middleware.
      </p>

      <blockquote className="border-l-4 border-steward-accent pl-6 py-2 my-10 bg-steward-accent/5 rounded-r-lg italic text-steward-text-primary">
        "We stopped asking 'Does this integrate with our POS?' and started asking 'Why do we need a POS if the system does everything natively?'"
      </blockquote>

      <p>
        As labor costs rise and guest expectations for speed increase, the restaurants that win will be the ones that eliminate operational friction. The era of the fragmented POS is ending. The era of the unified operating system is here.
      </p>
    </ResourceArticleWrapper>
  );
}
