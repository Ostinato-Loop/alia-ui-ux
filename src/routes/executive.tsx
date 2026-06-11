import { createFileRoute } from "@tanstack/react-router";
import { ConsoleLayout, ConsoleMetric } from "@/components/alia/ConsoleLayout";

export const Route = createFileRoute("/executive")({
  head: () => ({ meta: [
    { title: "Executive Command Center — RALD ALIA" },
    { name: "description", content: "Board-level dashboard for network growth, adoption, revenue, fraud prevention and country expansion across the ALIA infrastructure." },
  ]}),
  component: ExecutivePage,
});

const sidebar = [
  { label: "Strategic", items: [{ label: "Overview", active: true }, { label: "Network Growth" }, { label: "Adoption" }, { label: "Revenue" }] },
  { label: "Risk", items: [{ label: "Fraud Prevention" }, { label: "Country Expansion" }, { label: "Strategic Risk" }] },
];

function ExecutivePage() {
  return (
    <ConsoleLayout title="Executive Command Center" subtitle="Board-level view · FY2026 to date" env="Executive" sidebar={sidebar}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ConsoleMetric label="Active Identities" value="42.8M" delta="▲ 18% YoY" tone="success" series={[8,9,10,11,12,13,14,15,16,17,18,19]} />
        <ConsoleMetric label="Connected Institutions" value="312" delta="▲ 14 YTD" tone="success" series={[10,11,12,12,13,13,14,14,15,15,16,16]} />
        <ConsoleMetric label="Annualised Volume" value="$48.2B" delta="▲ 26% YoY" tone="success" series={[6,7,8,9,10,11,12,13,14,15,16,17]} />
        <ConsoleMetric label="Fraud Prevented YTD" value="$214M" delta="0.62% FPR" tone="success" series={[3,4,5,6,7,8,9,10,11,12,13,14]} />
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-hairline bg-surface/60 p-4 lg:col-span-2">
          <div className="text-sm font-medium">Country expansion</div>
          <table className="mt-3 w-full text-sm">
            <thead className="text-left text-[11px] uppercase tracking-wider text-muted-foreground"><tr><th className="pb-2 font-medium">Market</th><th>Status</th><th>Institutions</th><th>Identities</th><th>YoY</th></tr></thead>
            <tbody className="font-mono">
              {[
                ["Nigeria","Live","94","18.4M","+22%"],
                ["Kenya","Live","62","8.1M","+19%"],
                ["Ghana","Live","41","4.2M","+24%"],
                ["South Africa","Live","58","6.8M","+12%"],
                ["Egypt","Pilot","18","2.1M","+38%"],
                ["Côte d'Ivoire","Pilot","12","1.4M","+44%"],
              ].map(r => <tr key={r[0]} className="border-t border-hairline"><td className="py-2 text-foreground">{r[0]}</td><td className="text-success">{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td className="text-success">{r[4]}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border border-hairline bg-surface/60 p-4">
          <div className="text-sm font-medium">Strategic KPIs</div>
          <ul className="mt-3 space-y-3 text-sm">
            {[["Net Revenue Retention","124%"],["Enterprise NPS","71"],["Reg-grade SLAs met","100%"],["Developer signups (30d)","4,812"]].map(([k,v]) => (
              <li key={k} className="flex items-center justify-between border-b border-hairline pb-2 last:border-0"><span className="text-muted-foreground">{k}</span><span className="font-mono text-foreground">{v}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </ConsoleLayout>
  );
}
