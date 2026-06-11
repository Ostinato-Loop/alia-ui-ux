import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero } from "@/components/alia/Shell";
import { Mail, Building2, Shield, Code2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — RALD ALIA" },
    { name: "description", content: "Talk to ALIA — partnerships, institutions, regulators, developers, press and security disclosures." },
  ]}),
  component: ContactPage,
});

const desks = [
  { i: Building2, t: "Institutional partnerships", e: "partners@rald.africa", d: "Banks, fintechs, governments, regulators." },
  { i: Code2, t: "Developer relations", e: "developers@rald.africa", d: "SDKs, integrations, certification." },
  { i: Shield, t: "Security disclosures", e: "security@rald.africa", d: "Responsible disclosure · PGP available." },
  { i: Mail, t: "Press & media", e: "press@rald.africa", d: "Interviews, briefings, statements." },
];

function ContactPage() {
  return (
    <Shell>
      <PageHero eyebrow="Contact" title="Talk to the people building the network." description="We route every message to a named owner. Most enterprise requests receive a response within one business day." />

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {desks.map((d) => (
            <div key={d.t} className="rounded-xl border border-hairline bg-surface/40 p-6">
              <d.i className="h-5 w-5 text-signal" />
              <div className="mt-3 text-base font-medium">{d.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{d.d}</p>
              <a href={`mailto:${d.e}`} className="mt-3 inline-block font-mono text-sm text-foreground hover:text-signal">{d.e}</a>
            </div>
          ))}
        </div>

        <form className="mt-12 rounded-xl border border-hairline bg-background p-6">
          <div className="text-sm font-medium">Send a brief</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="text-xs text-muted-foreground">Full name<input className="mt-1 w-full rounded-md border border-hairline bg-surface px-3 py-2 text-sm text-foreground" placeholder="Adaeze Okonkwo" /></label>
            <label className="text-xs text-muted-foreground">Organisation<input className="mt-1 w-full rounded-md border border-hairline bg-surface px-3 py-2 text-sm text-foreground" placeholder="Stanbic IBTC" /></label>
            <label className="text-xs text-muted-foreground">Work email<input type="email" className="mt-1 w-full rounded-md border border-hairline bg-surface px-3 py-2 text-sm text-foreground" placeholder="you@bank.africa" /></label>
            <label className="text-xs text-muted-foreground">Desk<select className="mt-1 w-full rounded-md border border-hairline bg-surface px-3 py-2 text-sm text-foreground"><option>Partnerships</option><option>Developers</option><option>Security</option><option>Press</option></select></label>
            <label className="text-xs text-muted-foreground md:col-span-2">Brief<textarea rows={5} className="mt-1 w-full rounded-md border border-hairline bg-surface px-3 py-2 text-sm text-foreground" placeholder="Tell us what you're building, the timeline and the stakeholders involved." /></label>
          </div>
          <button type="button" className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-signal px-4 py-2 text-sm font-medium text-signal-foreground hover:opacity-90">Submit brief</button>
        </form>
      </section>
    </Shell>
  );
}
