import { createFileRoute, Link } from "@tanstack/react-router";
import { Fingerprint, Network, Receipt, Wallet, BadgeCheck, ScanFace, Database, Landmark, Code2, Store, BarChart3, FileCheck2, ArrowUpRight } from "lucide-react";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";

export const Route = createFileRoute("/products")({
  head: () => ({ meta: [
    { title: "Products — RALD ALIA" },
    { name: "description", content: "Identity, routing, checkout, billing, trust, fraud, open banking, government, developer, merchant, analytics and consent infrastructure." },
    { property: "og:title", content: "Products — RALD ALIA" },
    { property: "og:description", content: "The complete RALD ALIA product platform." },
  ]}),
  component: ProductsPage,
});

const PRODUCTS = [
  { icon: Fingerprint, name: "ALIA Identity", tag: "IDENTITY", desc: "Portable, verifiable financial identities for individuals, businesses and institutions." },
  { icon: Network, name: "ALIA Routing", tag: "ROUTING", desc: "Deterministic cross-bank, cross-wallet and cross-border routing with automatic failover." },
  { icon: Receipt, name: "ALIA Checkout", tag: "CHECKOUT", desc: "Drop-in checkout that authorizes payments using identities, not card numbers." },
  { icon: Wallet, name: "ALIA Billing", tag: "BILLING", desc: "Subscriptions, invoices and recurring authorizations on the identity layer." },
  { icon: BadgeCheck, name: "ALIA Trust", tag: "TRUST", desc: "Continuous trust scoring and verification state for every identity on the network." },
  { icon: ScanFace, name: "ALIA Fraud", tag: "FRAUD", desc: "Real-time fraud detection, device intelligence, and behavioral analytics." },
  { icon: Database, name: "ALIA Open Banking", tag: "OPEN BANKING", desc: "Consent-managed APIs to read accounts and initiate payments across institutions." },
  { icon: Landmark, name: "ALIA Government", tag: "GOVERNMENT", desc: "Collections, taxes, permits, licenses and citizen verification." },
  { icon: Code2, name: "ALIA Developer Cloud", tag: "DEV CLOUD", desc: "Projects, API keys, webhooks, logs and usage analytics — built for production teams." },
  { icon: Store, name: "ALIA Merchant Platform", tag: "MERCHANT", desc: "Payments, subscriptions, disputes, customers and reconciliation in one portal." },
  { icon: BarChart3, name: "ALIA Analytics", tag: "ANALYTICS", desc: "Real-time analytics for transaction flow, network health and customer behavior." },
  { icon: FileCheck2, name: "ALIA Consent Platform", tag: "CONSENT", desc: "Granular, revocable consent records aligned to NDPA and Open Banking regulation." },
];

function ProductsPage() {
  return (
    <Shell>
      <PageHero eyebrow="Products" title="One platform. Twelve financial primitives." description="Use one product, or compose all of them. Everything speaks the same identity, trust and routing language." />
      <section className="container-page py-16 md:py-20">
        <SectionHeader eyebrow="Catalog" title="Pick the primitives you need." description="Each product ships with SDKs, console, sandbox banks, signed webhooks and audit-grade logs." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <Link key={p.name} to="/docs" className="group rounded-xl border border-hairline bg-surface/60 p-6 transition-colors hover:bg-surface">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-hairline bg-background text-signal">
                  <p.icon className="h-4 w-4" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{p.tag}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-foreground">Documentation <ArrowUpRight className="h-3 w-3" /></div>
            </Link>
          ))}
        </div>
      </section>
    </Shell>
  );
}