import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";
import { ShieldCheck, BadgeCheck, Eye, Scale } from "lucide-react";

export const Route = createFileRoute("/trust-center")({
  head: () => ({ meta: [
    { title: "Trust Center — RALD ALIA" },
    { name: "description", content: "Verifiable trust signals across identities, institutions, merchants and developers. The reputation layer of the ALIA network." },
  ]}),
  component: TrustCenterPage,
});

function TrustCenterPage() {
  return (
    <Shell>
      <PageHero eyebrow="Trust Center" title="Trust, made verifiable." description="ALIA Trust is the reputation graph beneath every identity, institution, merchant and developer on the network. Continuously scored. Cryptographically attested. Auditable end-to-end." />

      <section className="container-page py-20">
        <SectionHeader eyebrow="Trust surfaces" title="Four dimensions of network trust." />
        <div className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: BadgeCheck, t: "Identity Trust", d: "KYC posture, behavioural history, device intelligence, peer attestations." },
            { i: ShieldCheck, t: "Institution Trust", d: "Regulator status, uptime, compliance filings, dispute outcomes." },
            { i: Eye, t: "Merchant Trust", d: "Settlement history, chargeback ratio, customer verification, refund SLAs." },
            { i: Scale, t: "Developer Trust", d: "API hygiene, abuse signals, certification status, ecosystem reviews." },
          ].map((x) => (
            <div key={x.t} className="bg-background p-6">
              <x.i className="h-5 w-5 text-signal" />
              <div className="mt-3 text-base font-medium">{x.t}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-surface/30">
        <div className="container-page grid gap-10 py-20 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Trust score" title="One number. Hundreds of signals." description="Every actor on ALIA carries a portable trust score from 0–999. Counterparties query it before authorization. Decisions are explainable and auditable by regulators." />
            <Link to="/trust" className="inline-flex items-center gap-1.5 rounded-md border border-hairline px-4 py-2 text-sm hover:bg-surface">Open Trust Console →</Link>
          </div>
          <div className="rounded-xl border border-hairline bg-background p-5">
            <div className="flex items-baseline justify-between">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">@adaeze.fin</div>
              <div className="font-mono text-[11px] text-success">VERIFIED · Tier 3</div>
            </div>
            <div className="mt-2 font-mono text-5xl tracking-tight">842</div>
            <div className="mt-1 text-xs text-muted-foreground">Composite trust · top 4% of network</div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface"><div className="h-full w-[84%] bg-signal" /></div>
            <ul className="mt-5 space-y-1.5 text-xs font-mono">
              {[["Identity","+220"],["Behaviour","+184"],["Counterparty","+162"],["Device","+148"],["Network","+128"]].map(([k,v]) => (
                <li key={k} className="flex justify-between"><span className="text-muted-foreground">{k}</span><span className="text-success">{v}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Shell>
  );
}
