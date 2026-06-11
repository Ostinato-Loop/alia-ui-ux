import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";
import { Sparkline } from "@/components/alia/ConsoleLayout";

export const Route = createFileRoute("/investor")({
  head: () => ({ meta: [
    { title: "Investor Center — RALD ALIA" },
    { name: "description", content: "Network statistics, growth metrics, market opportunity, partnerships and architecture overviews for institutional investors and analysts." },
  ]}),
  component: InvestorPage,
});

function InvestorPage() {
  return (
    <Shell>
      <PageHero eyebrow="Investor Center" title="The infrastructure layer of African finance." description="A pan-African network of identities, institutions and rails serving the next decade of financial inclusion, regulation and growth." />

      <section className="container-page py-20">
        <SectionHeader eyebrow="By the numbers" title="Network statistics" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Active identities", v: "42.8M", s: [8,9,10,11,12,13,14,15,16,17,18,19] },
            { k: "Connected institutions", v: "312", s: [10,11,12,12,13,13,14,14,15,15,16,16] },
            { k: "Annualised volume", v: "$48.2B", s: [6,7,8,9,10,11,12,13,14,15,16,17] },
            { k: "Countries live", v: "14", s: [4,5,6,7,8,9,10,11,12,12,13,14] },
          ].map((m) => (
            <div key={m.k} className="rounded-xl border border-hairline bg-surface/40 p-5">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{m.k}</div>
              <div className="mt-1 font-mono text-3xl">{m.v}</div>
              <div className="mt-3 text-success"><Sparkline values={m.s} /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-surface/30">
        <div className="container-page grid gap-10 py-20 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Market" title="A $3.4T opportunity by 2034." description="Africa is projected to host 2.5B people and the world's largest working-age population by 2050. Financial identity is the constraint. ALIA removes it." />
            <ul className="space-y-2 text-sm">
              {[
                ["Addressable population","1.5B"],
                ["Banked, formal","48%"],
                ["Mobile money active","720M"],
                ["Cross-border SME flows","$215B / yr"],
              ].map(([k,v]) => (
                <li key={k} className="flex items-center justify-between rounded border border-hairline bg-background px-3 py-2 font-mono text-sm"><span className="text-muted-foreground">{k}</span><span>{v}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-hairline bg-background p-6">
            <div className="text-sm font-medium">Resources</div>
            <ul className="mt-3 space-y-2 text-sm">
              {["FY2026 Network Report","Architecture Whitepaper","Security & Trust Posture","Regulatory Engagement Map","Partner & Ecosystem Atlas"].map(x => (
                <li key={x} className="flex items-center justify-between border-b border-hairline py-2 last:border-0"><span>{x}</span><span className="font-mono text-[11px] text-muted-foreground">PDF · Q2 2026</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Shell>
  );
}
