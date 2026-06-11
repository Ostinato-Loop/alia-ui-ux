import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";
import { GraduationCap, Award, BookOpen, Code2 } from "lucide-react";

export const Route = createFileRoute("/academy")({
  head: () => ({ meta: [
    { title: "Certification Academy — RALD ALIA" },
    { name: "description", content: "Official ALIA learning paths, exams and certifications for developers, architects, partners and institutions." },
  ]}),
  component: AcademyPage,
});

function AcademyPage() {
  return (
    <Shell>
      <PageHero eyebrow="Certification Academy" title="Build, ship and certify on ALIA." description="Official learning paths and exams for the engineers, architects and partners building Africa's financial infrastructure." />

      <section className="container-page py-20">
        <SectionHeader eyebrow="Tracks" title="Four certification tracks." />
        <div className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Code2, t: "Developer", d: "Identity, routing, webhooks, idempotency, SDKs.", l: "12 hrs · 80 q exam" },
            { i: BookOpen, t: "Architect", d: "Reference architectures for banks, fintechs, governments.", l: "24 hrs · capstone" },
            { i: Award, t: "Partner", d: "Integrator certification for consulting partners.", l: "16 hrs · case study" },
            { i: GraduationCap, t: "Institution", d: "Bank & regulator operator certification.", l: "20 hrs · proctored" },
          ].map((x) => (
            <div key={x.t} className="bg-background p-6">
              <x.i className="h-5 w-5 text-signal" />
              <div className="mt-3 text-base font-medium">ALIA Certified {x.t}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{x.d}</p>
              <div className="mt-3 font-mono text-[11px] text-muted-foreground">{x.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-surface/30">
        <div className="container-page py-16">
          <SectionHeader eyebrow="Learning paths" title="Curated journeys from first call to production." />
          <ul className="grid gap-3 md:grid-cols-2">
            {[
              ["Identity in 60 minutes","Resolve, verify, attest — your first ALIA app."],
              ["Open Banking integrations","Consent, accounts, transactions, payments initiation."],
              ["Issuing card programs","From program design to tokenized authorization."],
              ["Fraud & risk operations","Models, signals and SOC playbooks."],
              ["Government collections","Tax, permit and benefit disbursement patterns."],
              ["Regulator reporting","NDPA, AML, CBN open-banking compliance flows."],
            ].map(([t,d]) => (
              <li key={t} className="rounded-xl border border-hairline bg-background p-5"><div className="font-medium">{t}</div><div className="mt-1 text-sm text-muted-foreground">{d}</div></li>
            ))}
          </ul>
        </div>
      </section>
    </Shell>
  );
}
