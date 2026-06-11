import { createFileRoute } from "@tanstack/react-router";
import { ConsoleLayout, ConsoleMetric } from "@/components/alia/ConsoleLayout";

export const Route = createFileRoute("/merchants")({
  head: () => ({ meta: [{ title: "Merchant Portal — RALD ALIA" }, { name: "description", content: "Payments, subscriptions, invoices, customers, products, checkout, analytics and disputes." }]}),
  component: MerchantsPage,
});

const sidebar = [
  { label: "Operate", items: [{ label: "Overview", active: true },{ label: "Payments" },{ label: "Subscriptions" },{ label: "Invoices" },{ label: "Customers" },{ label: "Products" }]},
  { label: "Grow",    items: [{ label: "Checkout" },{ label: "Analytics" },{ label: "Disputes", badge: "4" }]},
  { label: "Build",   items: [{ label: "Integrations" },{ label: "Settings" }]},
];

function MerchantsPage() {
  return (
    <ConsoleLayout title="Adire Studio · Overview" subtitle="Merchant · Lagos · Live" sidebar={sidebar}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ConsoleMetric label="Revenue (30d)" value="₦48.2M" delta="▲ 18.4%" tone="success" series={[5,6,7,8,9,8,11,10,12,13,12,14]} />
        <ConsoleMetric label="Collections" value="₦41.7M" delta="86.5% capture" tone="success" series={[6,7,7,8,8,9,9,10,11,11,12,12]} />
        <ConsoleMetric label="Subscription Growth" value="+412" delta="▲ 9.1% MoM" tone="success" series={[2,3,4,5,5,6,7,8,9,9,10,11]} />
        <ConsoleMetric label="Success Rate" value="98.4%" delta="Network avg 96.8%" tone="success" series={[12,13,13,14,14,15,14,15,16,15,16,16]} />
        <ConsoleMetric label="Trust Score" value="912 / 1000" delta="Tier A" />
        <ConsoleMetric label="Reputation" value="Excellent" delta="2.4k positive signals" tone="success" />
        <ConsoleMetric label="Disputes Open" value="4" delta="₦182,000 at risk" tone="warning" />
        <ConsoleMetric label="Refunds (7d)" value="₦284,000" delta="0.6% of revenue" />
      </div>
      <div className="mt-6 rounded-xl border border-hairline bg-surface/60 p-4">
        <div className="text-sm font-medium">Recent transactions</div>
        <table className="mt-3 w-full text-sm">
          <thead className="text-left text-[11px] uppercase tracking-wider text-muted-foreground"><tr><th className="pb-2 font-medium">When</th><th>Customer</th><th>Method</th><th>Amount</th><th>Status</th></tr></thead>
          <tbody className="font-mono">
            {[
              ["12:42","@adaeze.ng","ALIA Identity","₦25,000.00","Authorized"],
              ["12:38","@kunle.lg","ALIA Identity","₦12,800.00","Authorized"],
              ["12:31","@maya.ke","Bank Transfer","KES 4,200.00","Settled"],
              ["12:24","@biz_a91","Open Banking","₦184,200.00","Authorized"],
              ["12:18","@guest_42","Checkout","$48.30","Refunded"],
            ].map(r => <tr key={r[0]+r[1]} className="border-t border-hairline"><td className="py-2 text-muted-foreground">{r[0]}</td><td className="text-foreground">{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td className="text-success">{r[4]}</td></tr>)}
          </tbody>
        </table>
      </div>
    </ConsoleLayout>
  );
}