import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — RALD ALIA" },
    { name: "description", content: "RALD ALIA is building the Financial Identity Network for Africa — the identity, trust, authorization and routing layer beneath the continent's banks, governments and merchants." },
  ]}),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Shell>
      <PageHero eyebrow="About RALD" title="Infrastructure built in Africa, for Africa, for the world." description="We are building the identity, trust and routing layer beneath the next era of African finance — designed in Lagos, Nairobi, Accra and Cape Town." />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6 text-base leading-relaxed text-foreground/85">
            <p>The next billion participants in the global financial system will be African. The infrastructure to verify, authorize, route and settle for them does not yet exist at the precision their lives demand.</p>
            <p>RALD ALIA is building that infrastructure as a single coherent network — an identity layer that replaces account numbers, a trust layer that replaces opaque scoring, an authorization layer that replaces fragile chains, and a routing fabric that connects every bank, merchant, regulator and developer on the continent.</p>
            <p>We work with central banks, tier-one institutions, governments and the developer community to deliver infrastructure that meets enterprise SLAs and regulator-grade governance — without sacrificing the speed Africa's builders need.</p>
          </div>
          <aside className="rounded-xl border border-hairline bg-surface/40 p-6">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Operating centers</div>
            <ul className="mt-3 space-y-2 text-sm">
              {[["Lagos","Headquarters · Engineering"],["Nairobi","East Africa · Operations"],["Accra","West Africa · Partnerships"],["Cape Town","Southern Africa · Risk"],["Cairo","North Africa · Regulator desk"]].map(([c,d]) => (
                <li key={c} className="flex items-start justify-between border-b border-hairline pb-2 last:border-0"><span className="font-medium">{c}</span><span className="text-right text-muted-foreground">{d}</span></li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-t border-hairline bg-surface/30">
        <div className="container-page py-16">
          <SectionHeader eyebrow="Principles" title="What we build for." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Decades, not quarters","Infrastructure must outlive its founders."],
              ["Regulator-grade by default","Auditable, attested, explainable."],
              ["African-first, globally fluent","Designed for our markets, interoperable with the world."],
              ["Developer obsession","If the API is bad, nothing else matters."],
              ["Trust is the product","Every signal is verifiable, every action attested."],
              ["Resilience is non-negotiable","Offline, low-bandwidth and cross-border by design."],
            ].map(([t,d]) => (
              <div key={t} className="rounded-xl border border-hairline bg-background p-5"><div className="font-medium">{t}</div><div className="mt-1 text-sm text-muted-foreground">{d}</div></div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
