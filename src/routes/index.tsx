import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, ShieldCheck, Network, Wallet, Building2, Landmark, Code2, Fingerprint, BadgeCheck, Receipt, ScanFace, Globe2, Database, Languages, MapPin } from "lucide-react";
import { Shell, SectionHeader } from "@/components/alia/Shell";
import { NetworkMap } from "@/components/alia/NetworkMap";
import { FeatureCard, StatTile } from "@/components/alia/Card";
import { CodeBlock } from "@/components/alia/CodeBlock";
import { Ticker } from "@/components/alia/Ticker";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RALD ALIA — The Financial Identity Network for Africa" },
      { name: "description", content: "Send, verify, authorize, route and build financial experiences using identities instead of account numbers. Infrastructure for banks, governments, merchants, and developers." },
      { property: "og:title", content: "RALD ALIA — Financial Identity Network for Africa" },
      { property: "og:description", content: "Identity, routing, trust and open-banking infrastructure for Africa." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <Shell>
      <Hero />
      <Ticker />
      <LogosStrip />
      <MarketsBand />
      <Pillars />
      <ProductsGrid />
      <DeveloperBand />
      <SegmentsBand />
      <LanguageBand />
      <TrustBand />
      <CTA />
    </Shell>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 radial-spot" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 adinkra-bg opacity-[0.07]" aria-hidden />
      <div className="container-page relative grid gap-14 py-20 md:py-28 lg:grid-cols-[1.1fr_1fr] lg:py-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" /> Financial Infrastructure · Pan-African
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-[68px]">
            <span className="text-gradient">The Financial Identity</span>
            <br />
            <span className="text-foreground">Network for Africa.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Send, verify, authorize, route and build financial experiences using identities instead of account numbers. One network, every bank, every wallet, every government — across the continent.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
            <Languages className="h-3.5 w-3.5 text-signal" />
            {["English","Français","العربية","Português","Kiswahili","Hausa","Amharic","Yorùbá"].map((l) => (
              <span key={l} className="rounded border border-hairline bg-surface/40 px-2 py-1">{l}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/banks" className="inline-flex items-center gap-1.5 rounded-md bg-signal px-4 py-2.5 text-sm font-medium text-signal-foreground hover:opacity-90">
              Request Bank Partnership <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/developers" className="inline-flex items-center gap-1.5 rounded-md border border-hairline bg-surface px-4 py-2.5 text-sm font-medium text-foreground hover:bg-surface/80">
              Explore Developer Platform
            </Link>
            <Link to="/docs" className="inline-flex items-center gap-1.5 rounded-md px-2 py-2.5 text-sm text-muted-foreground hover:text-foreground">
              View Documentation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <KPI value="99.997%" label="Network uptime" />
            <KPI value="<140ms" label="Resolution p95" />
            <KPI value="42.8M" label="African identities" />
          </div>
        </div>
        <div className="relative">
          <NetworkMap />
          <div className="absolute -bottom-3 left-3 right-3 rounded-lg border border-hairline bg-background/90 p-3 backdrop-blur md:left-6 md:right-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Live route</div>
                <div className="mt-0.5 font-mono text-xs text-foreground">@adaeze.ng → @stanbic → @kra.gov.ke</div>
              </div>
              <span className="rounded border border-success/40 bg-success/10 px-2 py-0.5 font-mono text-[10px] text-success">AUTHORIZED · 132ms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KPI({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-mono text-xl font-semibold text-foreground md:text-2xl">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function LogosStrip() {
  const logos: [string, string][] = [
    ["Stanbic IBTC","NG"], ["GTBank","NG"], ["Access","NG"], ["Flutterwave","NG"],
    ["Equity Bank","KE"], ["KCB","KE"], ["M-Pesa","KE"], ["Safaricom","KE"],
    ["GCB Bank","GH"], ["MTN MoMo","GH"], ["Standard Bank","ZA"], ["Capitec","ZA"],
    ["KRA","KE"], ["FIRS","NG"], ["CBE","EG"], ["BCEAO","XOF"],
  ];
  return (
    <div className="border-b border-hairline">
      <div className="container-page py-10">
        <div className="text-center text-[11px] uppercase tracking-[0.24em] text-muted-foreground">Trusted by institutions, regulators and operators across 14 African markets</div>
        <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-4 md:grid-cols-8">
          {logos.map(([l, cc]) => (
            <div key={l} className="flex h-11 items-center justify-between gap-2 rounded-md border border-hairline bg-surface/40 px-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <span className="truncate text-foreground/85">{l}</span>
              <span className="shrink-0 rounded bg-background/80 px-1.5 py-0.5 text-[9px] tracking-[0.18em] text-muted-foreground">{cc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarketsBand() {
  const markets: [string, string, string, string][] = [
    ["Nigeria","NG","18.4M","Live"],
    ["Kenya","KE","8.1M","Live"],
    ["Ghana","GH","4.2M","Live"],
    ["South Africa","ZA","6.8M","Live"],
    ["Rwanda","RW","1.2M","Live"],
    ["Côte d'Ivoire","CI","1.4M","Pilot"],
    ["Egypt","EG","2.1M","Pilot"],
    ["Senegal","SN","0.9M","Pilot"],
    ["Tanzania","TZ","1.1M","Pilot"],
    ["Uganda","UG","0.8M","Pilot"],
    ["Ethiopia","ET","0.6M","Pilot"],
    ["Morocco","MA","0.5M","Pilot"],
  ];
  return (
    <section className="border-b border-hairline bg-surface/20">
      <div className="container-page py-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-signal"><MapPin className="-mt-0.5 inline h-3 w-3" /> Continent footprint</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">14 markets. One network.</h2>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Live · Q2 2026</div>
        </div>
        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {markets.map(([n, cc, ids, s]) => (
            <div key={cc} className="flex flex-col gap-1 bg-background p-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{cc}</span>
                <span className={`rounded px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider ${s === "Live" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>{s}</span>
              </div>
              <div className="text-sm font-medium text-foreground">{n}</div>
              <div className="font-mono text-[11px] text-muted-foreground">{ids} identities</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LanguageBand() {
  const langs: [string, string, string][] = [
    ["English",   "Send money to @ada.ng",            "EN"],
    ["Français",  "Envoyer à @ada.ci",                 "FR"],
    ["العربية",   "أرسل إلى ‎@ada.eg",                 "AR"],
    ["Português", "Enviar para @ada.ao",               "PT"],
    ["Kiswahili", "Tuma kwa @ada.ke",                  "SW"],
    ["Hausa",     "Aika wa @ada.ng",                   "HA"],
  ];
  return (
    <section className="border-t border-hairline">
      <div className="container-page py-20 md:py-24">
        <SectionHeader eyebrow="Localised by default" title="Eight African languages. One identity layer." description="Every surface — identity, checkout, consent, fraud notices, regulator reports — speaks the language of the citizen in front of it." />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {langs.map(([name, sample, code]) => (
            <div key={code} className="rounded-xl border border-hairline bg-surface/40 p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{name}</span>
                <span className="rounded border border-hairline px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{code}</span>
              </div>
              <div className="mt-3 font-mono text-sm text-muted-foreground" dir={code === "AR" ? "rtl" : "ltr"}>{sample}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    { icon: <Fingerprint className="h-4 w-4" />, title: "Identity Network", desc: "Pay, receive and authorize using a single ALIA identity tied to verified individuals, businesses and institutions." },
    { icon: <Network className="h-4 w-4" />, title: "Routing Infrastructure", desc: "Sub-second cross-bank, cross-wallet, cross-border routing with deterministic settlement and offline fallback." },
    { icon: <ShieldCheck className="h-4 w-4" />, title: "Trust Network", desc: "Continuous trust scoring for identities, merchants and institutions — backed by an audit-grade reputation graph." },
    { icon: <Database className="h-4 w-4" />, title: "Open Banking", desc: "Consent-first APIs to read accounts, initiate payments and surface financial data across every connected institution." },
  ];
  return (
    <section className="container-page py-20 md:py-28">
      <SectionHeader eyebrow="The Network" title="One identity layer. Every financial primitive." description="ALIA replaces brittle account numbers with portable, verifiable financial identities — and gives banks, merchants and governments the rails to use them." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <FeatureCard key={it.title} icon={it.icon} title={it.title} description={it.desc} />
        ))}
      </div>
    </section>
  );
}

function ProductsGrid() {
  const products = [
    { tag: "IDENTITY", icon: <Fingerprint className="h-4 w-4" />, title: "ALIA Identity", desc: "Issue, resolve and verify portable financial identities for individuals and businesses." },
    { tag: "ROUTING",  icon: <Network className="h-4 w-4" />, title: "ALIA Routing", desc: "Smart routing across banks, wallets and rails with automatic failover." },
    { tag: "CHECKOUT", icon: <Receipt className="h-4 w-4" />, title: "ALIA Checkout", desc: "Drop-in checkout with identity-aware payments, no card details required." },
    { tag: "BILLING",  icon: <Wallet className="h-4 w-4" />, title: "ALIA Billing", desc: "Subscriptions, invoices and recurring authorizations on the identity layer." },
    { tag: "TRUST",    icon: <BadgeCheck className="h-4 w-4" />, title: "ALIA Trust", desc: "Trust scores and verification states for every identity on the network.", href: "/trust" },
    { tag: "FRAUD",    icon: <ScanFace className="h-4 w-4" />, title: "ALIA Fraud", desc: "Real-time fraud detection, device intelligence and behavioral analytics.", href: "/fraud" },
    { tag: "OPEN BANKING", icon: <Database className="h-4 w-4" />, title: "ALIA Open Banking", desc: "Consent-managed account and data APIs across every connected institution." },
    { tag: "GOVERNMENT", icon: <Landmark className="h-4 w-4" />, title: "ALIA Government", desc: "Collections, tax, permits and identity verification for public institutions.", href: "/government" },
    { tag: "DEV CLOUD", icon: <Code2 className="h-4 w-4" />, title: "ALIA Developer Cloud", desc: "Projects, keys, webhooks, logs and analytics — built for production teams.", href: "/developers" },
  ];
  return (
    <section className="border-t border-hairline">
      <div className="container-page py-20 md:py-28">
        <SectionHeader eyebrow="Products" title="A platform of financial primitives." description="Compose what you need. Every product speaks the same identity, trust and routing language." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <FeatureCard key={p.title} tag={p.tag} icon={p.icon} title={p.title} description={p.desc} href={p.href || "/products"} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DeveloperBand() {
  const code = `import { Alia } from "@alia/sdk";

const alia = new Alia(process.env.ALIA_SECRET_KEY);

// Authorize a payment using an ALIA identity, not an account number.
const auth = await alia.payments.authorize({
  payer: "@adaeze.ng",
  payee: "@stanbic/merch_8821",
  amount: { currency: "NGN", value: 25_000_00 },
  intent: "checkout.session_0f12",
  consent: "scoped",
});

// Settlement, routing and trust resolution — all inside ALIA.
console.log(auth.status); // "authorized"
console.log(auth.route);  // "alia/routing/v2#bank-direct"`;
  return (
    <section className="border-t border-hairline bg-surface/30">
      <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-signal">Developer Platform</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Build financial products in days, not quarters.</h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Type-safe SDKs, deterministic webhooks, end-to-end testing, sandbox banks and a console designed for production teams. Ship checkout, billing, KYC and routing on one platform.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success" /> SDKs for TypeScript, Python, Go, Java, .NET, Flutter</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success" /> Sandbox covering 90+ African banks and wallets</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success" /> Idempotent APIs, signed webhooks, audit-grade logs</li>
          </ul>
          <div className="mt-8 flex gap-3">
            <Link to="/developers" className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:opacity-90">Open Console <ArrowUpRight className="h-4 w-4" /></Link>
            <Link to="/docs" className="inline-flex items-center gap-1.5 rounded-md border border-hairline px-4 py-2.5 text-sm font-medium">Read the Docs</Link>
          </div>
        </div>
        <CodeBlock code={code} lang="typescript · @alia/sdk" />
      </div>
    </section>
  );
}

function SegmentsBand() {
  const segs = [
    { icon: <Building2 className="h-4 w-4" />, title: "Banks", desc: "Plug into the identity network. Resolve aliases, accept ALIA payments, expose Open Banking surfaces.", href: "/banks" },
    { icon: <Wallet className="h-4 w-4" />, title: "Merchants", desc: "Identity-aware checkout, subscriptions, disputes, trust scoring and reconciliation in one portal.", href: "/merchants" },
    { icon: <Landmark className="h-4 w-4" />, title: "Government", desc: "Collections, taxes, permits and citizen verification on a single audited platform.", href: "/government" },
    { icon: <Code2 className="h-4 w-4" />, title: "Developers", desc: "Production console with projects, keys, webhooks, logs, usage and billing.", href: "/developers" },
  ];
  return (
    <section className="border-t border-hairline">
      <div className="container-page py-20 md:py-28">
        <SectionHeader eyebrow="Built For" title="Every actor in the financial system." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {segs.map((s) => (
            <FeatureCard key={s.title} icon={s.icon} title={s.title} description={s.desc} href={s.href} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBand() {
  return (
    <section className="border-t border-hairline bg-surface/30">
      <div className="container-page py-20 md:py-28">
        <SectionHeader eyebrow="Trust & Compliance" title="Enterprise-grade by default." description="Zero-trust architecture, tokenized data, NDPA & PCI-DSS aligned. Built to satisfy regulators in every market we operate in." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatTile label="Network uptime" value="99.997%" hint="Last 90 days" />
          <StatTile label="Resolution p95" value="138ms" hint="Cross-bank" />
          <StatTile label="Fraud blocked" value="$48.3M" hint="Quarter to date" />
          <StatTile label="Markets live" value="14" hint="Sub-Saharan Africa" />
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          {["NDPA","PCI-DSS L1","ISO 27001","ISO 22301","SOC 2 Type II","CBN Compliant","CBK Sandbox"].map(b => (
            <span key={b} className="rounded-md border border-hairline bg-background px-3 py-1.5 font-mono uppercase tracking-wider">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-t border-hairline">
      <div className="container-page relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 radial-spot opacity-70" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Globe2 className="mx-auto h-8 w-8 text-signal" />
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl text-gradient">Power the next decade of African finance.</h2>
          <p className="mt-4 text-muted-foreground">Whether you're a bank, a regulator, a fintech or a developer — ALIA is the infrastructure your roadmap depends on.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/banks" className="inline-flex items-center gap-1.5 rounded-md bg-signal px-4 py-2.5 text-sm font-medium text-signal-foreground hover:opacity-90">Request Bank Partnership <ArrowUpRight className="h-4 w-4" /></Link>
            <Link to="/developers" className="inline-flex items-center gap-1.5 rounded-md border border-hairline px-4 py-2.5 text-sm font-medium">Explore Developer Platform</Link>
            <Link to="/pricing" className="inline-flex items-center gap-1.5 rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground">See Pricing <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

