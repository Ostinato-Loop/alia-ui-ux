import { createFileRoute } from "@tanstack/react-router";
import { ConsoleLayout, ConsoleMetric } from "@/components/alia/ConsoleLayout";

export const Route = createFileRoute("/banks")({
  head: () => ({ meta: [
    { title: "Bank Portal — RALD ALIA" },
    { name: "description", content: "Enterprise dashboard for ALIA bank partners — integrations, API health, alias resolution, trust, fraud, compliance and audit." },
  ]}),
  component: BanksPage,
});

const sidebar = [
  { label: "Institution", items: [
    { label: "Overview", active: true }, { label: "Integrations" }, { label: "API Health" }, { label: "Alias Resolution" },
  ]},
  { label: "Risk", items: [
    { label: "Trust Metrics" }, { label: "Fraud Monitoring" }, { label: "Compliance Reports" }, { label: "Audit Logs" },
  ]},
  { label: "Account", items: [{ label: "Bank Settings" }, { label: "Partner Support" }]},
];

function BanksPage() {
  return (
    <ConsoleLayout title="Stanbic IBTC · Overview" subtitle="Connected institution · Tier 1 · Production" env="Production" sidebar={sidebar}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ConsoleMetric label="Transaction Volume" value="₦182.4B" delta="▲ 6.2% MoM" tone="success" series={[10,11,12,11,13,14,13,15,16,15,17,18]} />
        <ConsoleMetric label="Success Rate" value="99.62%" delta="Target 99.50%" tone="success" series={[12,13,13,14,14,15,14,15,16,15,16,16]} />
        <ConsoleMetric label="Resolution Latency p95" value="138ms" delta="SLA 200ms" tone="success" series={[14,13,15,14,13,12,13,12,11,12,11,10]} />
        <ConsoleMetric label="Fraud Blocked (24h)" value="412" delta="₦18.4M prevented" tone="danger" series={[2,3,4,3,5,4,6,5,7,6,8,7]} />
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-hairline bg-surface/60 p-4 lg:col-span-2">
          <div className="flex items-center justify-between"><div className="text-sm font-medium">API Performance · last 24h</div><span className="font-mono text-[10px] uppercase text-muted-foreground">live</span></div>
          <table className="mt-3 w-full text-sm">
            <thead className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr><th className="pb-2 font-medium">Endpoint</th><th>RPM</th><th>p50</th><th>p95</th><th>Errors</th></tr>
            </thead>
            <tbody className="font-mono">
              {[
                ["/v2/identity/resolve","48,210","41ms","128ms","0.01%"],
                ["/v2/payments/authorize","31,402","82ms","214ms","0.04%"],
                ["/v2/accounts/balance","12,118","36ms","98ms","0.00%"],
                ["/v2/openbanking/consent","3,902","52ms","144ms","0.02%"],
              ].map(r => <tr key={r[0]} className="border-t border-hairline"><td className="py-2 text-foreground">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td className="text-success">{r[4]}</td></tr>)}
            </tbody>
          </table>
        </div>
        <div className="rounded-xl border border-hairline bg-surface/60 p-4">
          <div className="text-sm font-medium">Compliance status</div>
          <ul className="mt-3 space-y-2 text-sm">
            {[["NDPA","Compliant"],["CBN Open Banking","Compliant"],["AML Reporting","On schedule"],["Quarterly Audit","Due in 14 days"]].map(([k,v]) => (
              <li key={k} className="flex items-center justify-between"><span className="text-muted-foreground">{k}</span><span className="rounded border border-success/30 bg-success/10 px-2 py-0.5 font-mono text-[11px] text-success">{v}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </ConsoleLayout>
  );
}