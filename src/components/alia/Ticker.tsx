type Tick = { ccy: string; pair: string; rate: string; delta: string; up: boolean };

const FX: Tick[] = [
  { ccy: "NGN", pair: "USD/NGN", rate: "1,548.20", delta: "+0.18%", up: true },
  { ccy: "KES", pair: "USD/KES", rate: "129.42",   delta: "−0.04%", up: false },
  { ccy: "GHS", pair: "USD/GHS", rate: "14.86",    delta: "+0.22%", up: true },
  { ccy: "ZAR", pair: "USD/ZAR", rate: "18.31",    delta: "−0.11%", up: false },
  { ccy: "EGP", pair: "USD/EGP", rate: "48.92",    delta: "+0.03%", up: true },
  { ccy: "XOF", pair: "EUR/XOF", rate: "655.96",   delta: "0.00%",  up: true },
  { ccy: "RWF", pair: "USD/RWF", rate: "1,338.0",  delta: "+0.12%", up: true },
  { ccy: "MAD", pair: "USD/MAD", rate: "9.84",     delta: "−0.06%", up: false },
  { ccy: "ETB", pair: "USD/ETB", rate: "127.6",    delta: "+0.41%", up: true },
  { ccy: "TZS", pair: "USD/TZS", rate: "2,612",    delta: "+0.08%", up: true },
];

const SIGNALS = [
  "₦12.4B routed · last 24h",
  "ALIA Identity v2.4 GA",
  "New partner · Stanbic IBTC",
  "Open Banking sandbox live · KE",
  "Fraud blocked · 2,419 events today",
  "Government Collections SDK · GA",
  "Checkout SLA · 99.997%",
];

export function Ticker() {
  const stream = [...FX, ...FX];
  const signals = [...SIGNALS, ...SIGNALS];
  return (
    <div className="border-y border-hairline bg-surface/40">
      <div className="overflow-hidden">
        <div className="alia-ticker flex w-max items-center gap-8 whitespace-nowrap py-2.5 font-mono text-[11px] tracking-[0.06em]">
          {stream.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2.5">
              <span className="rounded border border-hairline px-1.5 py-0.5 text-[10px] uppercase text-muted-foreground">{t.ccy}</span>
              <span className="text-muted-foreground">{t.pair}</span>
              <span className="text-foreground">{t.rate}</span>
              <span className={t.up ? "text-success" : "text-signal"}>{t.up ? "▲" : "▼"} {t.delta}</span>
              <span className="ml-2 text-muted-foreground/40">·</span>
            </span>
          ))}
        </div>
      </div>
      <div className="overflow-hidden border-t border-hairline/60">
        <div className="alia-ticker-rev flex w-max items-center gap-10 whitespace-nowrap py-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
          {signals.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-signal" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}