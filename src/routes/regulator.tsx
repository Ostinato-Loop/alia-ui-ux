import { createFileRoute } from "@tanstack/react-router";
import { ConsoleLayout, ConsoleMetric } from "@/components/alia/ConsoleLayout";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/regulator")({
  head: () => ({ meta: [
    { title: "Regulator Portal — RALD ALIA" },
    { name: "description", content: "Supervisory dashboards for central banks and regulators — institution monitoring, compliance reports, audit trails and incident reporting." },
  ]}),
  component: RegulatorPage,
});

const sidebar = [
  { label: "Supervision", items: [{ label: "Institutions", active: true }, { label: "Compliance Reports" }, { label: "Audit Trails" }, { label: "Incident Reports" }] },
  { label: "Intelligence", items: [{ label: "Fraud Monitoring" }, { label: "Network Health" }, { label: "Country Metrics" }] },
  { label: "Governance", items: [{ label: "Data Governance" }, { label: "Security Reports" }] },
];

function RegulatorPage() {
  return (
    <ConsoleLayout title="Central Bank · Supervisory Console" subtitle="Pan-African regulator view · Tier 0 access" env="Regulator" sidebar={sidebar}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ConsoleMetric label="Licensed Institutions" value="312" delta="▲ 14 YTD" tone="success" series={[10,11,11,12,12,13,13,14,14,15,15,16]} />
        <ConsoleMetric label="Compliance Score" value="98.4%" delta="Sector avg 94.1%" tone="success" series={[14,14,15,15,15,16,15,16,16,16,17,17]} />
        <ConsoleMetric label="Open Incidents" value="3" delta="2 medium · 1 low" tone="warning" series={[5,4,5,4,3,4,3,3,2,3,3,3]} />
        <ConsoleMetric label="AML Reports (30d)" value="14,820" delta="On schedule" tone="success" series={[8,9,9,10,10,11,11,12,12,13,13,14]} />
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-hairline bg-surface/60 p-4 lg:col-span-2">
          <div className="flex items-center justify-between"><div className="text-sm font-medium">Institutions under supervision</div><span className="font-mono text-[10px] uppercase text-muted-foreground">live</span></div>
          <table className="mt-3 w-full text-sm">
            <thead className="text-left text-[11px] uppercase tracking-wider text-muted-foreground"><tr><th className="pb-2 font-medium">Institution</th><th>Tier</th><th>Compliance</th><th>Incidents</th><th>Last Audit</th></tr></thead>
            <tbody className="font-mono">
              {[
                ["Stanbic IBTC","I","99.1%","0","Apr 2026"],
                ["Equity Bank KE","I","98.4%","1","Mar 2026"],
                ["Access Holdings","I","97.8%","0","May 2026"],
                ["GCB Bank","II","96.2%","2","Feb 2026"],
                ["Capitec","I","98.9%","0","Apr 2026"],
              ].map(r => <tr key={r[0]} className="border-t border-hairline"><td className="py-2 text-foreground">{r[0]}</td><td>{r[1]}</td><td className="text-success">{r[2]}</td><td>{r[3]}</td><td className="text-muted-foreground">{r[4]}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border border-hairline bg-surface/60 p-4">
          <div className="flex items-center gap-2 text-sm font-medium"><ShieldCheck className="h-4 w-4 text-signal" /> Recent filings</div>
          <ul className="mt-3 space-y-2 text-sm">
            {[["AML Quarterly Q2","Submitted"],["Open Banking Audit","Submitted"],["Card Issuer Risk","In review"],["Cross-border SAR","Filed"]].map(([k,v]) => (
              <li key={k} className="flex items-center justify-between"><span className="text-muted-foreground">{k}</span><span className="rounded border border-info/30 bg-info/10 px-2 py-0.5 font-mono text-[11px] text-info">{v}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </ConsoleLayout>
  );
}
