import raldMark from "@/assets/rald-mark.png";
import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-md bg-background">
        <img
          src={raldMark}
          alt=""
          className="h-7 w-7 object-contain mix-blend-screen brightness-110 contrast-110"
          draggable={false}
        />
      </span>
      <span className="flex items-baseline gap-1.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">RALD</span>
        <span className="text-base font-semibold tracking-[0.18em] text-foreground" style={{ fontFeatureSettings: '"ss01"' }}>
          ALIA
        </span>
      </span>
    </Link>
  );
}