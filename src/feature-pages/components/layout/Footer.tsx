import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const productLinks = [
    { name: "Needle AI", href: "/needle" },
    { name: "Live Ops", href: "/live-ops" },
    { name: "Logbook", href: "/logbook" },
    { name: "Kitchen Board", href: "/kitchen-board" },
    { name: "Inventory", href: "/inventory" }
  ];

  const operationsLinks = [
    { name: "Customers", href: "/customers" },
    { name: "Finance", href: "/finance" },
    { name: "Campaigns", href: "/campaigns" },
    { name: "Staff", href: "/staff" },
    { name: "Orders", href: "/orders" }
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[#080808] py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-[#141418] group-hover:border-white/30 transition-colors">
                <Compass className="w-4 h-4 text-[#6F6F78] group-hover:text-white transition-colors" />
                <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#E03131]" />
              </div>
              <span className="text-sm font-semibold tracking-wide group-hover:text-white transition-colors">STEWARD</span>
            </Link>
            <p className="text-sm text-[#6F6F78] leading-relaxed font-light">
              The luxury operating system for modern restaurants. Precision. Direction. Calm intelligence.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
            <div className="flex flex-col gap-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6F6F78] font-semibold">Product</p>
              {productLinks.map(l => (
                <Link key={l.name} to={l.href} className="text-[#A4A4AA] hover:text-white transition-colors">{l.name}</Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6F6F78] font-semibold">Operations</p>
              {operationsLinks.map(l => (
                <Link key={l.name} to={l.href} className="text-[#A4A4AA] hover:text-white transition-colors">{l.name}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6F6F78] text-xs">© 2026 Steward Technologies, Inc. All rights reserved.</p>
          <p className="text-[#6F6F78] text-xs">Engineered for operators who move first.</p>
        </div>
      </div>
    </footer>
  );
}
