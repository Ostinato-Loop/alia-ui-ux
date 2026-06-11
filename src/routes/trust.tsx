import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";
import { StatTile } from "@/components/alia/Card";

export const Route = createFileRoute("/trust")({
  head: () => ({ meta: [{ title: "Trust Center — RALD ALIA" }, { name: "description", content: "Identity, merchant, developer, business and institution trust on the ALIA network." }]}),
  component: TrustPage,
});

function TrustPage() {
  return (
    <Shell>
      <PageHero eyebrow="Trust Center" title="A continuous, audit-grade reputation graph." description="Every identity on ALIA carries a trust score backed by verified credentials, behavioural signals and institutional vouching." />
      <section className="container-page py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <StatTile label="Identity Trust" value="A+" hint="Median network score" />
          <StatTile label="Merchant Trust" value="912" hint="of 1000" />
          <StatTile label="Developer Trust" value="98%" hint="Verified applications" />
          <StatTile label="Business Trust" value="A" hint="Tier-1 institutions" />
          <StatTile label="Institution Trust" value="AAA" hint="Banks & regulators" />
        </div>
      </section>
      <section className="container-page pb-20">
        <SectionHeader eyebrow="Inside the graph" title="How ALIA computes trust." description="Signals from KYC, behaviour, dispute history, peer attestation and institutional verification are continuously aggregated. Scores are explainable and exportable." />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Verification","KYC, KYB, biometrics, document and bank match — all consent-scoped."],
            ["Behaviour","Anomaly detection, device intelligence, network velocity, dispute patterns."],
            ["Attestation","Bank vouching, government registry checks, partner endorsements."],
          ].map(([k,v]) => (
            <div key={k} className="rounded-xl border border-hairline bg-surface/60 p-5">
              <div className="text-sm font-semibold">{k}</div>
              <p className="mt-2 text-sm text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}