import { createFileRoute } from "@tanstack/react-router";
import { ConsoleLayout, ConsoleMetric } from "@/components/alia/ConsoleLayout";
import { Activity } from "lucide-react";

export const Route = createFileRoute("/noc")({
  head: () => ({ meta: [
    { title: "Network Operations Center — RALD ALIA" },
    { name: "description", content: "Real-time pan-African infrastructure health, country and institution status, latency, availability and incident management." },
  ]}),
  component: NocPage,
});

const sidebar = [
  { label: "Health", items: [{ label: "Global", active: true }, { label: "Countries" }, { label: "Institutions" }, { label: "Routing" }] },
  { label: "Telemetry", items: [{ label: "API Health" }, { label: "Queue Health" }, { label: "Latency" }, { label: "Availability" }] },
  { label: "Operate", items: [{ label: "Incidents", badge: "1" }, { label: "Maintenance" }] },
];

const countries = [
  ["Nigeria","NG","99.998%","42ms","operational"],
  ["Kenya","KE","99.996%","58ms","operational"],
  ["Ghana","GH","99.992%","61ms","operational"],
  ["South Africa","ZA","99.991%","71ms","degraded"],
  ["Rwanda","RW","99.999%","49ms","operational"],
  ["Egypt","EG","99.984%","88ms","operational"],
  ["Côte d'Ivoire","CI","99.990%","67ms","operational"],
  ["Senegal","SN","99.994%","72ms","operational"],
];

function NocPage() {
  return (
    <ConsoleLayout title="Network Operations Center" subtitle="Global infrastructure · last 5 minutes" env="NOC" sidebar={sidebar}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ConsoleMetric label="Network Availability" value="99.997%" delta="30d rolling" tone="success" series={[16,16,17,16,17,16,17,17,17,17,18,17]} />
        <ConsoleMetric label="Edge Latency p50" value="52ms" delta="Continent-wide" tone="success" series={[6,6,5,6,5,5,4,5,4,4,4,4]} />
        <ConsoleMetric label="In-flight requests" value="48.2k/s" delta="▲ 4.1% peak" tone="default" series={[10,11,12,12,13,14,14,15,15,16,16,17]} />
        <ConsoleMetric label="Active Incidents" value="1" delta="ZA · degraded" tone="warning" series={[1,0,0,0,0,0,1,1,1,1,1,1]} />
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-hairline bg-surface/60 p-4">
          <div className="flex items-center gap-2 text-sm font-medium"><Activity className="h-4 w-4 text-signal" /> Country health</div>
          <ul className="mt-3 divide-y divide-hairline text-sm font-mono">
            {countries.map(([n,c,a,l,s]) => (
              <li key={c} className="grid grid-cols-[1fr_50px_90px_80px_110px] items-center gap-3 py-2">
                <span className="text-foreground">{n}</span>
                <span className="text-muted-foreground">{c}</span>
                <span className="text-success">{a}</span>
                <span className="text-muted-foreground">{l}</span>
                <span className={`rounded px-2 py-0.5 text-[10px] ${s==="operational"?"bg-success/15 text-success":"bg-warning/15 text-warning"}`}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-hairline bg-surface/60 p-4">
          <div className="text-sm font-medium">Routing fabric</div>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["Identity Resolution","p95 138ms","healthy"],
              ["Authorization","p95 214ms","healthy"],
              ["Open Banking Consent","p95 144ms","healthy"],
              ["Card Authorization","p95 132ms","healthy"],
              ["Settlement Queue","12 in flight","healthy"],
              ["ZA Edge","p95 412ms","degraded"],
            ].map(([k,v,s]) => (
              <li key={k} className="flex items-center justify-between rounded border border-hairline bg-background px-3 py-2 font-mono text-[12px]">
                <span className="text-foreground">{k}</span>
                <span className="text-muted-foreground">{v}</span>
                <span className={`rounded px-2 py-0.5 text-[10px] ${s==="healthy"?"bg-success/15 text-success":"bg-warning/15 text-warning"}`}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ConsoleLayout>
  );
}
