import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";
import { CreditCard, Globe, Lock, Sparkles, Building2, Briefcase, GraduationCap, Wallet, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/issuing")({
  head: () => ({ meta: [
    { title: "ALIA Issuing — Card Infrastructure for Africa" },
    { name: "description", content: "Virtual, physical, corporate, government and payroll card programs. Tokenization, controls, fraud protection and white-label issuing for banks and enterprises." },
    { property: "og:title", content: "ALIA Issuing — Card Infrastructure for Africa" },
    { property: "og:description", content: "Issue cards on a single API. Virtual, physical, corporate, government, payroll and student programs with tokenization and global acceptance." },
  ]}),
  component: IssuingPage,
});

const programs = [
  { icon: Sparkles, title: "Virtual Cards", body: "Instant issuance via API. Tokenized, single-use or persistent. Apple Pay & Google Pay ready." },
  { icon: CreditCard, title: "Physical Cards", body: "Personalised, contactless, EMV. Fulfilment across 20+ African markets." },
  { icon: Building2, title: "Corporate Cards", body: "Spend controls, approval workflows, ERP sync, real-time policy enforcement." },
  { icon: Briefcase, title: "Government Cards", body: "Disbursement, social benefit and procurement cards with treasury reporting." },
  { icon: Wallet, title: "Payroll & Expense", body: "Sub-accounts, JIT funding, category MCC controls, automatic reconciliation." },
  { icon: GraduationCap, title: "Student Cards", body: "Institution-issued, parental controls, tuition routing, verified identity." },
];

function IssuingPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="ALIA Issuing"
        title="Issue cards on a single, programmable network."
        description="Launch virtual, physical, corporate, government and payroll card programs in weeks — not years. Tokenized at the edge, accepted globally, governed locally."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/banks" className="inline-flex items-center gap-1.5 rounded-md bg-signal px-4 py-2 text-sm font-medium text-signal-foreground hover:opacity-90">Launch a program <ArrowUpRight className="h-3.5 w-3.5" /></Link>
          <Link to="/docs" className="inline-flex items-center gap-1.5 rounded-md border border-hairline px-4 py-2 text-sm text-foreground hover:bg-surface">Read API reference</Link>
        </div>
      </PageHero>

      <section className="container-page py-20">
        <SectionHeader eyebrow="Program types" title="Every card program, one infrastructure." />
        <div className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div key={p.title} className="bg-background p-6">
              <p.icon className="h-5 w-5 text-signal" />
              <div className="mt-3 text-base font-medium">{p.title}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-surface/30">
        <div className="container-page grid gap-10 py-20 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Architecture" title="Tokenized at the edge. Authorized in 48ms." description="ALIA Issuing runs on the same routing fabric as the rest of the network. Cards are minted as identity-bound tokens, authorized through ALIA Routing and protected by ALIA Fraud." />
            <ul className="space-y-3 text-sm">
              {[
                ["Tokenization", "Per-merchant cryptograms. PCI scope reduced to ALIA."],
                ["Authorization", "p50 41ms · p95 138ms · 99.99% network uptime"],
                ["Controls", "MCC, geo, velocity, amount, time-of-day, per-merchant"],
                ["Disputes", "Automated chargeback workflows wired to scheme rails"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-3 rounded-lg border border-hairline bg-background p-3">
                  <Lock className="mt-0.5 h-4 w-4 text-signal" />
                  <div><div className="font-medium">{k}</div><div className="text-muted-foreground">{v}</div></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-hairline bg-background p-5 font-mono text-[12px] leading-relaxed">
            <div className="mb-3 text-[10px] uppercase tracking-wider text-muted-foreground">POST /v2/issuing/cards</div>
            <pre className="whitespace-pre-wrap text-foreground/90">{`{
  "program": "corp_expense_ng",
  "holder": { "alias": "@adaeze.fin" },
  "form_factor": "virtual",
  "controls": {
    "spend_limit": { "amount": 50000000, "ccy": "NGN", "period": "month" },
    "mcc_allow": ["5411","5812","4111"],
    "geo_allow": ["NG","KE","ZA"]
  },
  "tokenize_for": ["apple_pay","google_pay"]
}`}</pre>
            <div className="mt-3 rounded border border-success/30 bg-success/5 px-3 py-2 text-[11px] text-success">201 Created · card_01HX5Q… · pan tokenized</div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeader eyebrow="Coverage" title="Accepted everywhere your cardholders go." description="Visa, Mastercard, AfriGo and Verve scheme connectivity. Acceptance in 210+ countries. Local settlement in 20+ African currencies." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Schemes", "Visa · Mastercard · AfriGo · Verve · UnionPay"],
            ["Wallets", "Apple Pay · Google Pay · Samsung Pay"],
            ["Form factors", "Virtual · Physical · Wearable · Metal"],
            ["Settlement", "T+0 NGN · T+1 KES, GHS, ZAR, USD"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-hairline bg-surface/40 p-5">
              <Globe className="h-4 w-4 text-signal" />
              <div className="mt-3 text-sm font-medium">{k}</div>
              <div className="mt-1 text-xs text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
