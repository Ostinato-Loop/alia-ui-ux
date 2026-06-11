import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Search, Bell, ChevronDown } from "lucide-react";

type Group = { label: string; items: { to?: string; label: string; active?: boolean; badge?: string }[] };

export function ConsoleLayout({ title, subtitle, sidebar, children, env = "Production", actions }: { title: string; subtitle?: string; sidebar: Group[]; children: ReactNode; env?: string; actions?: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-hairline bg-background/80 backdrop-blur">
        <div className="flex h-12 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-foreground/30">/</span>
            <button className="inline-flex items-center gap-1.5 rounded-md border border-hairline px-2 py-1 text-xs text-foreground">
              acme-financial <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </button>
            <span className="rounded border border-hairline px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-success">{env}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-md border border-hairline bg-surface px-2.5 py-1 text-xs text-muted-foreground md:flex">
              <Search className="h-3.5 w-3.5" /> Search resources
              <span className="ml-2 rounded bg-background px-1.5 py-0.5 font-mono text-[10px]">⌘K</span>
            </div>
            <button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-hairline"><Bell className="h-3.5 w-3.5" /></button>
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-titanium to-foreground" />
          </div>
        </div>
      </header>
      <div className="flex">
        <aside className="sticky top-0 hidden h-[calc(100vh-3rem)] w-60 shrink-0 border-r border-hairline px-3 py-4 md:block">
          {sidebar.map((g) => (
            <div key={g.label} className="mb-4">
              <div className="px-2 pb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{g.label}</div>
              <ul className="space-y-0.5">
                {g.items.map((it) => (
                  <li key={it.label}>
                    <Link to={it.to || "#"} className={`flex items-center justify-between rounded px-2 py-1.5 text-sm ${it.active ? "bg-surface text-foreground" : "text-muted-foreground hover:bg-surface/50 hover:text-foreground"}`}>
                      <span>{it.label}</span>
                      {it.badge && <span className="rounded bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">{it.badge}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline px-6 py-5">
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-foreground">{title}</h1>
              {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
            </div>
            {actions}
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Sparkline({ values, color = "currentColor" }: { values: number[]; color?: string }) {
  const w = 120, h = 36, p = 2;
  const min = Math.min(...values), max = Math.max(...values), range = max - min || 1;
  const pts = values.map((v, i) => {
    const x = p + (i * (w - p * 2)) / (values.length - 1);
    const y = h - p - ((v - min) / range) * (h - p * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-9 w-full" preserveAspectRatio="none">
      <polyline fill="none" stroke={color} strokeWidth="1.5" points={pts} />
    </svg>
  );
}

export function ConsoleMetric({ label, value, delta, series, tone = "default" }: { label: string; value: string; delta?: string; series?: number[]; tone?: "default" | "success" | "warning" | "danger" }) {
  const toneClass = tone === "success" ? "text-success" : tone === "warning" ? "text-warning" : tone === "danger" ? "text-signal" : "text-titanium";
  return (
    <div className="rounded-lg border border-hairline bg-surface/60 p-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="mt-1 font-mono text-2xl font-semibold tracking-tight">{value}</div>
          {delta && <div className={`mt-0.5 text-xs ${toneClass}`}>{delta}</div>}
        </div>
        {series && <div className={`w-24 ${toneClass}`}><Sparkline values={series} /></div>}
      </div>
    </div>
  );
}