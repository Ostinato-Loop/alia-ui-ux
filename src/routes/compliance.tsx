import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";

export const Route = createFileRoute("/compliance")({
  head: () => ({ meta: [{ title: "Compliance — RALD ALIA" }, { name: "description", content: "NDPA, Open Banking, data governance, audit and risk frameworks, and country-by-country regulatory architecture." }]}),
  component: CompliancePage,
});

const items = [
  ["NDPA","Full alignment with Nigeria Data Protection Act, including DPO governance and DPIA practices."],
  ["Open Banking","Compliant with CBN and CBK Open Banking frameworks for consent, access and data minimization."],
  ["Financial Regulations","CBN, CBK, BoG, SARB and BCEAO operating frameworks. Quarterly regulatory reporting."],
  ["Data Governance","Data classification, residency, retention and DSAR pipelines."],
  ["Audit Framework","SOC 2 Type II controls with continuous evidence collection."],
  ["Risk Framework","Enterprise risk register, third-party risk management, BCP and DR drills."],
  ["Country Compliance","Local data residency in NG, KE, GH and ZA; regional residency in WAEMU and EAC."],
  ["Regulatory Architecture","Per-jurisdiction control surfaces with traceable approvals."],
];

function CompliancePage() {
  return (
    <Shell>
      <PageHero eyebrow="Compliance" title="Built for regulators, not around them." description="ALIA operates with the assumption that every market we serve will eventually audit us." />
      <section className="container-page py-16">
        <SectionHeader eyebrow="Frameworks" title="What we comply with." />
        <div className="grid gap-4 md:grid-cols-2">
          {items.map(([k,v]) => (
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