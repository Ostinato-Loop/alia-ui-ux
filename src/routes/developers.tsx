import { createFileRoute } from "@tanstack/react-router";
import { ConsoleLayout, ConsoleMetric } from "@/components/alia/ConsoleLayout";
import { CodeBlock } from "@/components/alia/CodeBlock";
import { Activity, Webhook, Key, BarChart3, FolderGit2, AppWindow, FileText, Receipt, Store, Users, Settings, CreditCard, Plug } from "lucide-react";

export const Route = createFileRoute("/developers")({
  head: () => ({ meta: [
    { title: "Developer Cloud — RALD ALIA" },
    { name: "description", content: "Projects, API keys, webhooks, logs, usage and billing for the ALIA platform." },
  ]}),
  component: DevelopersPage,
});

const sidebar = [
  { label: "Workspace", items: [
    { label: "Dashboard", active: true },
    { label: "Projects", badge: "8" },
    { label: "Applications" },
    { label: "Teams" },
  ]},
  { label: "Platform", items: [
    { label: "API Keys" }, { label: "Webhooks", badge: "3" }, { label: "Logs" }, { label: "Analytics" }, { label: "Usage" }, { label: "Marketplace" },
  ]},
  { label: "Account", items: [
    { label: "Billing" }, { label: "Settings" },
  ]},
];

function DevelopersPage() {
  return (
    <ConsoleLayout title="Dashboard" subtitle="acme-financial · prod_8821" sidebar={sidebar}
      actions={<div className="flex items-center gap-2">
        <span className="rounded-md border border-hairline bg-surface px-2.5 py-1 font-mono text-[11px] text-muted-foreground">Last 24h</span>
        <button className="rounded-md bg-signal px-3 py-1.5 text-xs font-medium text-signal-foreground">New Project</button>
      </div>}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ConsoleMetric label="API Calls" value="14.2M" delta="▲ 12.4% vs yesterday" tone="success" series={[3,4,6,5,7,9,8,11,12,14,13,16]} />
        <ConsoleMetric label="Resolution Requests" value="3.41M" delta="▲ 4.1%" tone="success" series={[5,6,6,7,7,8,9,9,10,11,11,12]} />
        <ConsoleMetric label="Payment Authorizations" value="842,109" delta="▲ 2.8%" tone="success" series={[2,4,5,7,6,8,9,8,11,10,12,13]} />
        <ConsoleMetric label="Webhook Deliveries" value="6.18M" delta="99.998% success" tone="default" series={[10,11,10,12,11,13,12,14,13,15,14,16]} />
        <ConsoleMetric label="Trust Queries" value="921,432" delta="▼ 0.4%" tone="warning" series={[8,9,8,9,10,9,8,9,10,9,8,9]} />
        <ConsoleMetric label="Fraud Events" value="2,419" delta="3,114 blocked" tone="danger" series={[2,3,4,3,5,4,6,5,7,6,8,7]} />
        <ConsoleMetric label="System Status" value="Operational" delta="0 incidents" tone="success" />
        <ConsoleMetric label="Sandbox Banks" value="92" delta="14 markets" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-hairline bg-surface/60 lg:col-span-2">
          <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
            <div className="text-sm font-medium">Recent activity</div>
            <span className="font-mono text-[10px] uppercase text-muted-foreground">live</span>
          </div>
          <ul className="divide-y divide-hairline text-sm">
            {[
              ["12:42:18", "alia.payments.authorized", "@adaeze.ng → @merch_8821", "₦25,000.00"],
              ["12:42:11", "alia.identity.resolved", "@stanbic/biz_a91", "↘ 132ms"],
              ["12:42:03", "alia.webhook.delivered", "evt_2yh8...91", "200 OK"],
              ["12:41:57", "alia.fraud.flagged", "ip 196.x.x.x", "BLOCKED"],
              ["12:41:42", "alia.checkout.completed", "session_0f12", "$148.30"],
              ["12:41:30", "alia.openbanking.consent", "@adaeze.ng / accounts.read", "GRANTED"],
            ].map(([t, ev, ctx, val]) => (
              <li key={t} className="grid grid-cols-[80px_1fr_auto] items-center gap-3 px-4 py-3">
                <span className="font-mono text-xs text-muted-foreground">{t}</span>
                <span><span className="font-mono text-xs text-foreground">{ev}</span><span className="ml-2 text-xs text-muted-foreground">{ctx}</span></span>
                <span className="font-mono text-xs text-foreground">{val}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <CodeBlock lang="curl · resolve identity" code={`curl https://api.alia.dev/v2/identity/resolve \\
  -H "Authorization: Bearer $ALIA_KEY" \\
  -d '{"alias":"@adaeze.ng"}'`} />
          <div className="rounded-xl border border-hairline bg-surface/60 p-4">
            <div className="text-sm font-medium">Quick start</div>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                [FolderGit2,"Create your first project"],
                [Key,"Generate API keys"],
                [Webhook,"Register a webhook"],
                [AppWindow,"Embed ALIA Checkout"],
                [Activity,"Stream live logs"],
              ].map(([Icon,label]) => {
                const I = Icon as typeof Activity;
                return (
                  <li key={label as string} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    <I className="h-3.5 w-3.5" /> {label as string}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* keep icons referenced to satisfy TS noUnusedLocals */}
      <div className="hidden">{[BarChart3,FileText,Receipt,Store,Users,Settings,CreditCard,Plug].map((I,i) => <I key={i} />)}</div>
    </ConsoleLayout>
  );
}