import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing — RALD ALIA" }, { name: "description", content: "Usage-based pricing for developers, merchants, banks and governments. Custom enterprise contracts." }]}),
  component: PricingPage,
});

const tiers = [
  { name: "Developer", price: "$0", per: "/ month", desc: "For builders shipping early-stage products.", features: ["100k API calls / mo","Sandbox banks","Webhooks & logs","Community support"], cta: "Open Console", href: "/developers" },
  { name: "Growth", price: "Usage", per: "based", desc: "For merchants and fintechs in production.", features: ["From $0.0008 / call","ALIA Checkout & Billing","Trust & fraud included","99.95% SLA","Priority support"], cta: "Talk to Sales", href: "/banks", highlight: true },
  { name: "Enterprise", price: "Custom", per: "contract", desc: "For banks, governments and large institutions.", features: ["Volume contracts","Dedicated routing capacity","Custom compliance scope","99.99% SLA + credits","Named CSM"], cta: "Request Partnership", href: "/banks" },
];

function PricingPage() {
  return (
    <Shell>
      <PageHero eyebrow="Pricing" title="Infrastructure pricing, built to scale." description="Pay for what you use. Custom contracts for institutions. No hidden routing or trust fees." />
      <section className="container-page py-16">
        <div className="grid gap-4 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border p-6 ${t.highlight ? "border-signal/50 bg-surface" : "border-hairline bg-surface/60"}`}>
              {t.highlight && <div className="absolute right-4 top-4 rounded-full bg-signal px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-signal-foreground">Most chosen</div>}
              <div className="text-sm font-medium text-muted-foreground">{t.name}</div>
              <div className="mt-3 flex items-baseline gap-1.5"><div className="text-4xl font-semibold tracking-tight">{t.price}</div><div className="text-sm text-muted-foreground">{t.per}</div></div>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => <li key={f} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-success" /> {f}</li>)}
              </ul>
              <Link to={t.href} className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium ${t.highlight ? "bg-signal text-signal-foreground" : "border border-hairline text-foreground hover:bg-surface"}`}>{t.cta}</Link>
            </div>
          ))}
        </div>
      </section>
      <section className="container-page pb-20">
        <SectionHeader eyebrow="By segment" title="Designed for every actor." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[["Developers","Usage-based after free tier."],["Merchants","Per-transaction pricing with trust included."],["Banks","Volume contracts and routing capacity."],["Governments","Programmatic collections, transparent invoicing."]].map(([k,v]) => (
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