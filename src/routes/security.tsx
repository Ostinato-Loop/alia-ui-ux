import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";
import { Lock, ShieldCheck, KeyRound, Server, AlertTriangle, FileCheck2, RefreshCw, Globe2, Download } from "lucide-react";

export const Route = createFileRoute("/security")({
  head: () => ({ meta: [{ title: "Security — RALD ALIA" }, { name: "description", content: "Zero-trust architecture, tokenization, encryption, compliance, fraud protection, audit controls and disaster recovery." }]}),
  component: SecurityPage,
});

const items = [
  [Lock,"Zero Trust","Every request, internal or external, is authenticated, scoped and continuously verified."],
  [KeyRound,"Encryption","AES-256 at rest, TLS 1.3 in transit, HSM-backed key custody and per-tenant data keys."],
  [ShieldCheck,"Tokenization","Sensitive identifiers are tokenized at the edge before they ever touch a database."],
  [FileCheck2,"Compliance","NDPA, PCI-DSS L1, ISO 27001, SOC 2 Type II, CBN and CBK regulatory alignment."],
  [AlertTriangle,"Fraud Protection","Real-time ML, device intelligence and behavioural analytics on every authorization."],
  [Server,"Infrastructure","Multi-region active-active with sovereign data residency in NG, KE, GH and ZA."],
  [RefreshCw,"Disaster Recovery","RPO ≤ 1 minute, RTO ≤ 15 minutes, quarterly fail-over drills."],
  [Globe2,"Audit Controls","Tamper-evident audit logs, immutable retention, customer-facing access reviews."],
];

function SecurityPage() {
  return (
    <Shell>
      <PageHero eyebrow="Security" title="Built like critical financial infrastructure should be." description="ALIA carries the weight of African finance. Our security model assumes it." />
      <section className="container-page py-16">
        <SectionHeader eyebrow="Architecture" title="Defense in depth, by default." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map(([I,t,d]) => {
            const Icon = I as typeof Lock;
            return (
              <div key={t as string} className="rounded-xl border border-hairline bg-surface/60 p-5">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline bg-background text-signal"><Icon className="h-4 w-4" /></div>
                <div className="mt-4 text-sm font-semibold">{t as string}</div>
                <p className="mt-2 text-sm text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          {["NDPA","PCI-DSS L1","ISO 27001","ISO 22301","SOC 2 Type II","CBN","CBK"].map(b => <span key={b} className="rounded-md border border-hairline bg-background px-3 py-1.5 font-mono uppercase tracking-wider">{b}</span>)}
        </div>
        <div className="mt-10 flex items-center gap-3">
          <Link to="/compliance" className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background"><Download className="h-4 w-4" /> Security Whitepaper</Link>
          <Link to="/status" className="rounded-md border border-hairline px-4 py-2.5 text-sm">View Status</Link>
        </div>
      </section>
    </Shell>
  );
}