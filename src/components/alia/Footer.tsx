import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const cols: { title: string; links: [string, string][] }[] = [
  { title: "Products", links: [["ALIA Identity","/products"],["ALIA Routing","/products"],["ALIA Checkout","/products"],["ALIA Issuing","/issuing"],["ALIA Open Banking","/products"],["ALIA Fraud","/fraud"]] },
  { title: "Solutions", links: [["Banks","/banks"],["Merchants","/merchants"],["Government","/government"],["Regulators","/regulator"],["Developers","/developers"],["Partners","/partners"]] },
  { title: "Consoles", links: [["Network Ops","/noc"],["Executive","/executive"],["Trust Center","/trust-center"],["Fraud SOC","/fraud"],["Marketplace","/marketplace"],["Academy","/academy"]] },
  { title: "Company", links: [["About","/about"],["Investor Center","/investor"],["Careers","/careers"],["Security","/security"],["Compliance","/compliance"],["Contact","/contact"]] },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-hairline bg-background">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The Financial Identity Network for Africa. Identity, routing, trust and open-banking infrastructure for banks, governments and merchants.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
              <span className="rounded border border-hairline px-2 py-1 font-mono">NDPA</span>
              <span className="rounded border border-hairline px-2 py-1 font-mono">PCI-DSS</span>
              <span className="rounded border border-hairline px-2 py-1 font-mono">ISO 27001</span>
              <span className="rounded border border-hairline px-2 py-1 font-mono">SOC 2</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">{c.title}</div>
                <ul className="space-y-2">
                  {c.links.map(([label, href]) => (
                    <li key={label}>
                      <Link to={href} className="text-sm text-foreground/80 hover:text-foreground">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} RALD ALIA Infrastructure. Lagos · Nairobi · Accra · Cape Town.</div>
          <div className="flex items-center gap-4">
            <Link to="/compliance">Privacy</Link>
            <Link to="/compliance">Terms</Link>
            <Link to="/status" className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> Operational
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}