import { createFileRoute } from "@tanstack/react-router";
import { ConsoleLayout, ConsoleMetric } from "@/components/alia/ConsoleLayout";

export const Route = createFileRoute("/government")({
  head: () => ({ meta: [{ title: "Government Portal — RALD ALIA" }, { name: "description", content: "Collections, taxes, permits, licenses, citizen identity verification, analytics, compliance, audit and reporting." }]}),
  component: GovPage,
});

const sidebar = [
  { label: "Revenue", items: [{ label: "Collections", active: true },{ label: "Tax Payments" },{ label: "Permits" },{ label: "Licenses" }]},
  { label: "Citizens", items: [{ label: "Identity Verification" },{ label: "Citizen Services" }]},
  { label: "Oversight", items: [{ label: "Analytics" },{ label: "Compliance" },{ label: "Audit" },{ label: "Reporting" }]},
];

function GovPage() {
  return (
    <ConsoleLayout title="Federal Revenue · Collections" subtitle="Q3 2026 · Live" env="Government" sidebar={sidebar}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ConsoleMetric label="Collections (QTD)" value="₦1.42T" delta="▲ 11.2% YoY" tone="success" series={[8,9,10,11,11,12,13,13,14,15,15,16]} />
        <ConsoleMetric label="Active Taxpayers" value="8.41M" delta="▲ 412k onboarded" tone="success" series={[5,6,7,7,8,9,9,10,11,11,12,13]} />
        <ConsoleMetric label="Permits Issued" value="62,108" delta="98.2% digital" />
        <ConsoleMetric label="Verification Pass Rate" value="97.4%" delta="ALIA Identity" tone="success" />
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-hairline bg-surface/60 p-4">
          <div className="text-sm font-medium">Top revenue lines</div>
          <ul className="mt-3 space-y-3 text-sm">
            {[["VAT","₦612B",78],["PAYE","₦318B",62],["Customs","₦241B",51],["Stamp Duty","₦88B",24],["Permits","₦52B",18]].map(([k,v,w]) => (
              <li key={k as string}>
                <div className="flex items-center justify-between"><span className="text-muted-foreground">{k}</span><span className="font-mono text-foreground">{v}</span></div>
                <div className="mt-1 h-1 rounded-full bg-background"><div className="h-1 rounded-full bg-signal" style={{ width: `${w}%` }} /></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-hairline bg-surface/60 p-4">
          <div className="text-sm font-medium">Audit & compliance</div>
          <ul className="mt-3 space-y-2 text-sm">
            {[["NDPA Data Subject Access","On schedule","success"],["Open Banking Reporting","Submitted Q2","success"],["Reconciliation Window","Closes in 8 days","warning"],["Penetration Test","Cleared","success"]].map(([k,v,t]) => (
              <li key={k as string} className="flex items-center justify-between"><span className="text-muted-foreground">{k}</span><span className={`rounded border px-2 py-0.5 font-mono text-[11px] ${t==="success"?"border-success/30 bg-success/10 text-success":"border-warning/30 bg-warning/10 text-warning"}`}>{v}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </ConsoleLayout>
  );
}