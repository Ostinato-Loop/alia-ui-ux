import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — RALD ALIA" }, { name: "description", content: "Build the financial infrastructure that powers a continent." }]}),
  component: CareersPage,
});

const roles = [
  ["Staff Engineer, Routing","Engineering","Lagos · Remote"],
  ["Security Engineer, Cryptography","Security","Nairobi · Remote"],
  ["Product Lead, Open Banking","Product","Lagos · Cape Town"],
  ["Partnerships Director, West Africa","Partnerships","Accra · Lagos"],
  ["Compliance Counsel, Regulatory","Legal","Remote · Sub-Saharan"],
  ["Senior Designer, Console","Product","Remote"],
];

function CareersPage() {
  return (
    <Shell>
      <PageHero eyebrow="Careers" title="Build the rails of African finance." description="We're a small team of engineers, designers and operators building the most critical infrastructure on the continent." />
      <section className="container-page py-16">
        <SectionHeader eyebrow="What we believe" title="Infrastructure-first. Continent-first. Quality-first." />
        <div className="grid gap-4 md:grid-cols-3">
          {[["Mission","Replace account numbers with identity. Make every African actor a first-class citizen of the global financial system."],["Values","Stability, transparency, craft, candor, autonomy."],["Benefits","Remote-first, global health, learning stipend, equity, paid sabbatical."]].map(([k,v]) => (
            <div key={k} className="rounded-xl border border-hairline bg-surface/60 p-5">
              <div className="text-sm font-semibold">{k}</div>
              <p className="mt-2 text-sm text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-page pb-20">
        <SectionHeader eyebrow="Open Roles" title="Join the team." />
        <ul className="divide-y divide-hairline rounded-xl border border-hairline bg-surface/60">
          {roles.map(([t,team,loc]) => (
            <li key={t} className="flex items-center justify-between gap-4 px-5 py-4">
              <div>
                <div className="text-sm font-medium">{t}</div>
                <div className="text-xs text-muted-foreground">{team} · {loc}</div>
              </div>
              <Link to="/careers" className="inline-flex items-center gap-1 rounded-md border border-hairline px-3 py-1.5 text-xs font-medium hover:bg-surface">Apply <ArrowUpRight className="h-3 w-3" /></Link>
            </li>
          ))}
        </ul>
      </section>
    </Shell>
  );
}