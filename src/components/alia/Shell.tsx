import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: string; description?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="absolute inset-0 radial-spot opacity-60" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="container-page relative py-20 md:py-28">
        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-signal">{eyebrow}</div>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-gradient md:text-5xl lg:text-6xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-signal">{eyebrow}</div>}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-muted-foreground">{description}</p>}
    </div>
  );
}