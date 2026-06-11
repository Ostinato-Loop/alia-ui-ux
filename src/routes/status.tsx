import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";

export const Route = createFileRoute("/status")({
  head: () => ({ meta: [{ title: "Status — RALD ALIA" }, { name: "description", content: "Real-time health of the ALIA network: API, identity, trust, developer platform, bank integrations and merchant platform." }]}),
  component: StatusPage,
});

const components = [
  ["API","operational"],["Identity Network","operational"],["Trust Network","operational"],
  ["Developer Platform","operational"],["Bank Integrations","operational"],["Merchant Platform","operational"],
  ["Open Banking","operational"],["Notifications","operational"],
];

function bars() {
  return Array.from({ length: 90 }, (_, i) => {
    const r = (i * 37) % 100;
    const tone = r > 96 ? "warning" : r > 99 ? "danger" : "success";
    return tone;
  });
}

function StatusPage() {
  return (
    <Shell>
      <PageHero eyebrow="Status" title="All systems operational." description="Real-time infrastructure health across the entire ALIA network." />
      <section className="container-page py-12">
        <div className="rounded-xl border border-success/30 bg-success/5 px-5 py-4 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-success">
              <span className="h-2 w-2 rounded-full bg-success" /> All systems normal
            </div>
            <span className="font-mono text-xs text-muted-foreground">Updated 12s ago</span>
          </div>
        </div>
      </section>
      <section className="container-page pb-16">
        <SectionHeader eyebrow="Components" title="Last 90 days of uptime" />
        <div className="overflow-hidden rounded-xl border border-hairline bg-surface/60">
          {components.map(([name, state], idx) => (
            <div key={name} className={`grid grid-cols-[1fr_auto_auto] items-center gap-6 px-5 py-4 ${idx ? "border-t border-hairline" : ""}`}>
              <div className="text-sm font-medium">{name}</div>
              <div className="flex items-center gap-[2px]">
                {bars().map((t, i) => <span key={i} className={`h-6 w-[3px] rounded-sm ${t==="success"?"bg-success/70":t==="warning"?"bg-warning":"bg-signal"}`} />)}
              </div>
              <span className="rounded border border-success/30 bg-success/10 px-2 py-0.5 font-mono text-[11px] text-success">{state}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="container-page pb-20">
        <SectionHeader eyebrow="Incidents" title="Recent incident history" />
        <ul className="divide-y divide-hairline rounded-xl border border-hairline bg-surface/60">
          {[
            ["May 28","Resolved","Brief elevation in resolution latency in NG-WEST",""],
            ["May 12","Resolved","Maintenance window: Open Banking sandbox",""],
            ["Apr 30","Resolved","Webhook redelivery backlog (no data loss)",""],
          ].map((r) => (
            <li key={r[0]+r[2]} className="grid grid-cols-[80px_100px_1fr] items-center gap-3 px-5 py-3 text-sm">
              <span className="font-mono text-xs text-muted-foreground">{r[0]}</span>
              <span className="rounded border border-hairline px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{r[1]}</span>
              <span className="text-foreground">{r[2]}</span>
            </li>
          ))}
        </ul>
      </section>
    </Shell>
  );
}