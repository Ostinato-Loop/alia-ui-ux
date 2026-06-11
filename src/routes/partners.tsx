import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";

export const Route = createFileRoute("/partners")({
  head: () => ({ meta: [{ title: "Partners — RALD ALIA" }, { name: "description", content: "Banks, fintechs, merchants, developers, governments, technology, integration and consulting partners." }]}),
  component: PartnersPage,
});

const groups = [
  ["Banks","Stanbic IBTC","GTBank","Equity","KCB","Access","ABSA","Standard Bank","Ecobank","UBA","Zenith"],
  ["Fintechs","Flutterwave","Paystack","Chipper","Yellow Card","Kuda","PalmPay","M-Pesa","MTN MoMo","Wave","OPay"],
  ["Governments","FIRS","KRA","SARS","GRA","CBN","CBK","BoG","SARB","NCC","NITDA"],
  ["Technology","Cloudflare","Auth0","Datadog","Snowflake","HashiCorp","Twilio","Segment","MongoDB","Vercel","AWS"],
];

function PartnersPage() {
  return (
    <Shell>
      <PageHero eyebrow="Partners" title="The institutions building African finance — together." />
      <section className="container-page py-16 space-y-10">
        {groups.map((g) => {
          const [title, ...names] = g;
          return (
            <div key={title}>
              <SectionHeader eyebrow={title} title={`${title} on the ALIA network`} />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                {names.map((n) => (
                  <div key={n} className="flex h-16 items-center justify-center rounded-md border border-hairline bg-surface/60 px-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground">{n}</div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </Shell>
  );
}