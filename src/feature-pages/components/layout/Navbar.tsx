import { Link } from "react-router-dom";
import { Compass } from 'lucide-react';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 border-b border-border/40 bg-background/50 backdrop-blur-xl">
      <Link to="/" className="flex items-center gap-3 group">
        {/* Subtle logo */}
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-border bg-surface/50 group-hover:border-white/30 transition-colors">
          <Compass className="w-4 h-4 text-text-secondary group-hover:text-white transition-colors" />
          <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-accent-red" />
        </div>
        <span className="font-primary text-sm font-medium tracking-wide group-hover:text-white transition-colors">STEWARD</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm text-text-muted font-medium">
        <Link to="/" className="hover:text-text-primary transition-colors">Product</Link>
        <Link to="/live-ops" className="hover:text-text-primary transition-colors">Live Ops</Link>
        <Link to="/needle" className="hover:text-text-primary transition-colors">Needle AI</Link>
        <Link to="/customers" className="hover:text-text-primary transition-colors">Customers</Link>
      </nav>
    </header>
  );
}
