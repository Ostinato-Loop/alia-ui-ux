const ITEMS = [
  "₦12.4B routed in last 24h",
  "ALIA Identity v2.4 released",
  "New bank partner: Stanbic IBTC",
  "Open Banking sandbox live in KE",
  "Fraud blocked: 2,419 events today",
  "Status: All systems operational",
  "Government collections SDK GA",
  "ALIA Checkout SLA: 99.997%",
];

export function Ticker() {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-hairline bg-surface/40">
      <div className="alia-ticker flex w-max items-center gap-12 whitespace-nowrap py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {items.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-signal" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}