import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero, SectionHeader } from "@/components/alia/Shell";
import { Boxes, Plug, Puzzle, ShieldCheck, Fingerprint, Users, Briefcase, Wrench } from "lucide-react";
import { FeatureCard } from "@/components/alia/Card";

export const Route = createFileRoute("/marketplace")({
  head: () => ({ meta: [{ title: "Marketplace — RALD ALIA" }, { name: "description", content: "SDKs, integrations, plugins, fraud and identity providers, consultants and developer tools." }]}),
  component: MarketplacePage,
});

const items = [
  { icon: <Boxes className="h-4 w-4" />, title: "SDKs", description: "Official and community SDKs for every major stack." },
  { icon: <Plug className="h-4 w-4" />, title: "Integrations", description: "Shopify, WooCommerce, Magento, Odoo, SAP and more." },
  { icon: <Puzzle className="h-4 w-4" />, title: "Plugins", description: "Drop-in plugins for checkout, billing and consent." },
  { icon: <ShieldCheck className="h-4 w-4" />, title: "Fraud Providers", description: "Specialist fraud signals composable into ALIA Fraud." },
  { icon: <Fingerprint className="h-4 w-4" />, title: "Identity Providers", description: "KYC, KYB and biometrics vendors certified for ALIA." },
  { icon: <Users className="h-4 w-4" />, title: "Consultants", description: "Independent experts for migration and rollout." },
  { icon: <Briefcase className="h-4 w-4" />, title: "Implementation Partners", description: "Tier-1 systems integrators across Africa." },
  { icon: <Wrench className="h-4 w-4" />, title: "Developer Tools", description: "Testing harnesses, mock banks, observability adapters." },
];

function MarketplacePage() {
  return (
    <Shell>
      <PageHero eyebrow="Marketplace" title="The ecosystem around the network." description="Hundreds of vendors, plugins and tools built on top of ALIA." />
      <section className="container-page py-16">
        <SectionHeader eyebrow="Categories" title="Find what you need." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => <FeatureCard key={i.title} {...i} href="/marketplace" />)}
        </div>
      </section>
    </Shell>
  );
}