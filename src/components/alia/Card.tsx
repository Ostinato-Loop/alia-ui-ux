import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function FeatureCard({ icon, title, description, href = "/products", tag }: { icon: ReactNode; title: string; description: string; href?: string; tag?: string }) {
  return (
    <Link to={href} className="group relative flex flex-col gap-3 overflow-hidden rounded-xl border border-hairline bg-surface/60 p-5 transition-colors hover:bg-surface">
      <div className="flex items-center justify-between">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline bg-background text-signal">{icon}</div>
        {tag && <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{tag}</span>}
      </div>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
        Learn more <ArrowUpRight className="h-3 w-3" />
      </span>
    </Link>
  );
}

export function StatTile({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-xl border border-hairline bg-surface/60 p-5">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
      <div className="mt-2 font-mono text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{value}</div>
      {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
    </div>
  );
}