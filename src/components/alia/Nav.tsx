import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/products", label: "Products" },
  { to: "/developers", label: "Developers" },
  { to: "/banks", label: "Banks" },
  { to: "/government", label: "Government" },
  { to: "/security", label: "Security" },
  { to: "/pricing", label: "Pricing" },
  { to: "/docs", label: "Docs" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/70 backdrop-blur-xl">
      <div className="container-page flex h-14 items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                activeProps={{ className: "text-foreground bg-surface" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/status" className="hidden items-center gap-1.5 rounded-full border border-hairline px-2.5 py-1 text-[11px] text-muted-foreground hover:text-foreground sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            All systems normal
          </Link>
          <Link to="/developers" className="hidden rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground md:inline-block">
            Sign in
          </Link>
          <Link
            to="/banks"
            className="hidden items-center gap-1.5 rounded-md bg-signal px-3 py-1.5 text-sm font-medium text-signal-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            Partner with ALIA <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-foreground lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-hairline bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground">
                {l.label}
              </Link>
            ))}
            <Link to="/banks" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-signal px-3 py-2 text-sm font-medium text-signal-foreground">
              Partner with ALIA <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}