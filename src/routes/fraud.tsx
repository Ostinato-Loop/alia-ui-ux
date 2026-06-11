import { createFileRoute } from "@tanstack/react-router";
import { ConsoleLayout, ConsoleMetric } from "@/components/alia/ConsoleLayout";
import { AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/fraud")({
  head: () => ({ meta: [{ title: "Fraud Command Center — RALD ALIA" }, { name: "description", content: "SOC-style real-time fraud monitoring, threats, investigations, cases, alerts and risk scoring." }]}),
  component: FraudPage,
});

const sidebar = [
  { label: "Operate", items: [{ label: "Threats", active: true, badge: "live" },{ label: "Investigations" },{ label: "Cases", badge: "12" },{ label: "Alerts" }]},
  { label: "Intel", items: [{ label: "Risk Scores" },{ label: "Device Intelligence" },{ label: "Identity Monitoring" },{ label: "Behavior Analytics" }]},
  { label: "Report", items: [{ label: "Fraud Reports" }]},
];

function FraudPage() {
  return (
    <ConsoleLayout title="Fraud Command Center" subtitle="Pan-African view · Real-time" env="SOC" sidebar={sidebar}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ConsoleMetric label="Threats (24h)" value="14,902" delta="3,114 blocked" tone="danger" series={[2,3,4,3,5,4,6,5,7,6,8,9]} />
        <ConsoleMetric label="False Positives" value="0.62%" delta="Target ≤1.0%" tone="success" series={[3,3,4,3,4,3,4,3,3,3,2,2]} />
        <ConsoleMetric label="Avg Decision Time" value="48ms" delta="p95 132ms" tone="success" series={[6,5,6,5,5,4,5,4,4,4,3,3]} />
        <ConsoleMetric label="Funds Protected" value="₦18.4M" delta="Today" tone="success" series={[2,4,6,5,7,8,9,8,11,10,12,13]} />
      </div>
      <div className="mt-6 rounded-xl border border-hairline bg-surface/60">
        <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
          <div className="flex items-center gap-2 text-sm font-medium"><AlertTriangle className="h-4 w-4 text-signal" /> Active threat feed</div>
          <span className="font-mono text-[10px] uppercase text-muted-foreground">streaming</span>
        </div>
        <ul className="divide-y divide-hairline text-sm font-mono">
          {[
            ["12:42:18","CRIT","ATO attempt","@kunle.lg","Lagos, NG","BLOCKED"],
            ["12:42:11","HIGH","Device emulator","sess_19f2","Nairobi, KE","CHALLENGE"],
            ["12:42:03","MED","Velocity anomaly","@biz_a91","Accra, GH","MONITOR"],
            ["12:41:57","CRIT","Mule pattern","@guest_42","Johannesburg, ZA","BLOCKED"],
            ["12:41:30","HIGH","Synthetic identity","@new.user","Kigali, RW","CHALLENGE"],
          ].map(r => (
            <li key={r[0]+r[3]} className="grid grid-cols-[80px_70px_1fr_140px_120px_110px] items-center gap-3 px-4 py-3">
              <span className="text-muted-foreground">{r[0]}</span>
              <span className={`rounded px-2 py-0.5 text-[10px] ${r[1]==="CRIT"?"bg-signal/15 text-signal":r[1]==="HIGH"?"bg-warning/15 text-warning":"bg-info/15 text-info"}`}>{r[1]}</span>
              <span className="text-foreground">{r[2]}</span>
              <span className="text-muted-foreground">{r[3]}</span>
              <span className="text-muted-foreground">{r[4]}</span>
              <span className={`text-[10px] ${r[5]==="BLOCKED"?"text-success":r[5]==="CHALLENGE"?"text-warning":"text-info"}`}>{r[5]}</span>
            </li>
          ))}
        </ul>
      </div>
    </ConsoleLayout>
  );
}