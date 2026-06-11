import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";
import { CodeBlock } from "@/components/alia/CodeBlock";
import { Search, Book, Webhook, Key, Shield, Activity, Boxes } from "lucide-react";

export const Route = createFileRoute("/docs")({
  head: () => ({ meta: [{ title: "Documentation — RALD ALIA" }, { name: "description", content: "Stripe-quality docs for the RALD ALIA platform: SDKs, APIs, webhooks, errors, auth and tutorials." }]}),
  component: DocsPage,
});

function DocsPage() {
  return (
    <Shell>
      <PageHero eyebrow="Documentation" title="Build with ALIA in minutes." description="A complete reference for the identity, routing, checkout, trust and open-banking APIs.">
        <div className="flex max-w-xl items-center gap-2 rounded-md border border-hairline bg-surface px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Search docs, APIs, errors, SDKs…" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
          <span className="rounded bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">⌘K</span>
        </div>
      </PageHero>
      <section className="container-page py-16">
        <SectionHeader eyebrow="Start here" title="Quick start" />
        <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            {[
              [Book,"Authentication","Bearer keys, scoped tokens and OAuth for institutions."],
              [Webhook,"Webhooks","Signed deliveries, retries, replay protection."],
              [Key,"Rate Limits","Burst, sustained and per-route quotas."],
              [Shield,"Errors","Stable error codes with remediation."],
              [Activity,"Status","Live network and component health."],
              [Boxes,"SDKs","TypeScript, Python, Go, Java, .NET, Flutter."],
            ].map(([I,t,d]) => {
              const Icon = I as typeof Book;
              return (
                <Link key={t as string} to="/docs" className="flex items-start gap-3 rounded-xl border border-hairline bg-surface/60 p-4 hover:bg-surface">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md border border-hairline bg-background text-signal"><Icon className="h-4 w-4" /></span>
                  <div>
                    <div className="text-sm font-medium">{t as string}</div>
                    <p className="text-xs text-muted-foreground">{d as string}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <CodeBlock lang="typescript · @alia/sdk" code={`import { Alia } from "@alia/sdk";
const alia = new Alia(process.env.ALIA_SECRET_KEY);

// Resolve an identity
const id = await alia.identity.resolve({ alias: "@adaeze.ng" });

// Initiate an authorization
const auth = await alia.payments.authorize({
  payer: id.alias,
  payee: "@merch_8821",
  amount: { currency: "NGN", value: 25_000_00 },
  intent: "checkout.session_0f12",
});`} />
        </div>
      </section>
    </Shell>
  );
}