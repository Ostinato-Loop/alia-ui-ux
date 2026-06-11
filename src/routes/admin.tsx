import { createFileRoute } from "@tanstack/react-router";
import { ConsoleLayout, ConsoleMetric } from "@/components/alia/ConsoleLayout";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin · Network — RALD ALIA" }, { name: "description", content: "Internal admin platform — network health, institutions, developers, merchants, governments, fraud, trust, audit and incidents." }, { name: "robots", content: "noindex" }]}),
  component: AdminPage,
});

const sidebar = [
  { label: "Network", items: [{ label: "Global Dashboard", active: true },{ label: "Network Health" },{ label: "Incidents", badge: "0" }]},
  { label: "Actors", items: [{ label: "Institutions" },{ label: "Developers" },{ label: "Merchants" },{ label: "Governments" }]},
  { label: "Risk & Audit", items: [{ label: "Fraud" },{ label: "Trust" },{ label: "Audit" }]},
  { label: "Finance", items: [{ label: "Billing" },{ label: "Revenue" },{ label: "System Controls" }]},
];

function AdminPage() {
  return (
    <ConsoleLayout title="Global · Network Dashboard" subtitle="ALIA Infrastructure · Pan-African" env="Internal" sidebar={sidebar}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ConsoleMetric label="Active Identities" value="24.1M" delta="▲ 412k / 24h" tone="success" series={[6,7,7,8,9,9,10,11,11,12,13,14]} />
        <ConsoleMetric label="Network TPS" value="18,402" delta="peak 24,118" tone="success" series={[8,9,10,11,11,12,13,13,14,15,15,16]} />
        <ConsoleMetric label="Authorization Success" value="99.62%" delta="rolling 7d" tone="success" series={[12,13,13,14,14,15,14,15,16,15,16,16]} />
        <ConsoleMetric label="Fraud Blocked QTD" value="$48.3M" delta="142k events" tone="danger" series={[2,4,6,5,7,8,9,8,11,10,12,13]} />
        <ConsoleMetric label="Institutions Live" value="48" delta="6 onboarding" />
        <ConsoleMetric label="Markets" value="14" delta="2 in pilot" />
        <ConsoleMetric label="Open Incidents" value="0" delta="MTTR 11m" tone="success" />
        <ConsoleMetric label="Revenue (MTD)" value="$8.41M" delta="▲ 14% MoM" tone="success" />
      </div>
    </ConsoleLayout>
  );
}