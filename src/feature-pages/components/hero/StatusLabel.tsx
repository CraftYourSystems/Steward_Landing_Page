import { cn } from '@/lib/utils';

interface StatusLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function StatusLabel({ children, className }: StatusLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 text-text-muted", className)}>
      <div className="h-[1px] w-8 bg-border" />
      <div className="flex items-center gap-2 border border-border bg-card/30 px-3 py-1.5 rounded-full backdrop-blur-md">
        <div className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse" />
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase pt-[1px]">
          {children}
        </span>
      </div>
      <div className="h-[1px] w-8 bg-border" />
    </div>
  );
}
