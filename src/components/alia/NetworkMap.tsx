// Simplified Africa outline (stylised, enterprise-grade — not geographically exact).
const AFRICA_PATH =
  "M298 38 C 332 32, 372 40, 392 60 C 408 76, 420 96, 432 118 C 446 142, 458 168, 466 198 C 472 222, 470 248, 462 272 C 454 296, 442 318, 428 340 C 416 360, 402 380, 386 398 C 372 416, 358 432, 344 446 C 332 458, 318 470, 304 478 C 294 484, 282 488, 270 484 C 256 478, 248 462, 244 446 C 240 428, 240 408, 234 392 C 226 372, 210 360, 198 344 C 184 326, 176 304, 168 282 C 158 254, 148 226, 144 198 C 140 174, 142 150, 152 128 C 162 108, 178 92, 196 80 C 214 68, 234 60, 254 52 C 268 46, 282 42, 298 38 Z";

// African network nodes (city, x, y, country code, role).
const NODES: { c: string; x: number; y: number; cc: string; role: string }[] = [
  { c: "Lagos",        x: 240, y: 268, cc: "NG", role: "Hub" },
  { c: "Accra",        x: 212, y: 280, cc: "GH", role: "Edge" },
  { c: "Abidjan",      x: 196, y: 276, cc: "CI", role: "Edge" },
  { c: "Dakar",        x: 154, y: 224, cc: "SN", role: "Edge" },
  { c: "Cairo",        x: 348, y: 124, cc: "EG", role: "Hub" },
  { c: "Nairobi",      x: 372, y: 308, cc: "KE", role: "Hub" },
  { c: "Kigali",       x: 348, y: 312, cc: "RW", role: "Edge" },
  { c: "Addis Ababa",  x: 376, y: 256, cc: "ET", role: "Edge" },
  { c: "Johannesburg", x: 320, y: 416, cc: "ZA", role: "Hub" },
  { c: "Cape Town",    x: 292, y: 458, cc: "ZA", role: "Edge" },
  { c: "Casablanca",   x: 218, y: 108, cc: "MA", role: "Edge" },
  { c: "Kampala",      x: 354, y: 296, cc: "UG", role: "Edge" },
];

export function NetworkMap() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-hairline bg-[#0c0c0c]">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <svg viewBox="0 0 600 540" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="continentGlow" cx="50%" cy="55%" r="55%">
            <stop offset="0%" stopColor="#D90429" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#D90429" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#D90429" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="continentFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#181818" />
            <stop offset="100%" stopColor="#0f0f0f" />
          </linearGradient>
          <pattern id="meridians" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M0 0 L44 44 M-11 33 L33 -11 M11 55 L55 11" stroke="rgba(255,255,255,0.04)" strokeWidth="0.6" />
          </pattern>
        </defs>

        {/* halo */}
        <ellipse cx="300" cy="270" rx="240" ry="240" fill="url(#continentGlow)" />

        {/* continent */}
        <path d={AFRICA_PATH} fill="url(#continentFill)" stroke="rgba(255,255,255,0.16)" strokeWidth="1.1" />
        <path d={AFRICA_PATH} fill="url(#meridians)" opacity="0.9" />
        <path d={AFRICA_PATH} fill="none" stroke="#D90429" strokeOpacity="0.35" strokeWidth="0.8" strokeDasharray="2 6" />

        {/* routing arcs between hubs */}
        {[
          [NODES[0], NODES[5]], // Lagos → Nairobi
          [NODES[0], NODES[4]], // Lagos → Cairo
          [NODES[5], NODES[8]], // Nairobi → JNB
          [NODES[4], NODES[10]], // Cairo → Casablanca
          [NODES[0], NODES[3]], // Lagos → Dakar
          [NODES[8], NODES[5]], // JNB → Nairobi
        ].map(([a, b], i) => {
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2 - 24;
          return (
            <g key={i}>
              <path d={`M${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="0.8" />
              <path d={`M${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`} fill="none" stroke="#D90429" strokeWidth="1.1" className="alia-beam" style={{ animationDelay: `${i * 0.5}s` }} />
            </g>
          );
        })}

        {/* nodes */}
        {NODES.map((n) => (
          <g key={n.c}>
            <circle cx={n.x} cy={n.y} r={n.role === "Hub" ? 9 : 5} fill="#0A0A0A" stroke={n.role === "Hub" ? "#D90429" : "rgba(255,255,255,0.55)"} strokeWidth="1.2" />
            <circle cx={n.x} cy={n.y} r={n.role === "Hub" ? 3 : 1.8} fill={n.role === "Hub" ? "#D90429" : "#ffffff"} />
            {n.role === "Hub" && <circle cx={n.x} cy={n.y} r="9" fill="none" stroke="#D90429" strokeOpacity="0.5"><animate attributeName="r" values="9;22;9" dur="3.4s" repeatCount="indefinite" /><animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="3.4s" repeatCount="indefinite" /></circle>}
            <text x={n.x + (n.x > 300 ? 14 : -14)} y={n.y + 4} textAnchor={n.x > 300 ? "start" : "end"} fill="rgba(255,255,255,0.78)" fontSize="10.5" fontFamily="Inter" fontWeight={500}>{n.c}</text>
            <text x={n.x + (n.x > 300 ? 14 : -14)} y={n.y + 16} textAnchor={n.x > 300 ? "start" : "end"} fill="rgba(255,255,255,0.4)" fontSize="8.5" fontFamily="JetBrains Mono">{n.cc} · {n.role}</text>
          </g>
        ))}
      </svg>

      {/* corner overlays */}
      <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-hairline bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-signal" /> Live continent fabric
      </div>
      <div className="absolute right-3 top-3 rounded-md border border-hairline bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground backdrop-blur">
        14 markets · 312 institutions
      </div>
      <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
        {["NG","KE","GH","ZA","EG","RW","CI","ET","SN","UG","MA","TZ"].map((cc) => (
          <span key={cc} className="rounded border border-hairline bg-background/70 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">{cc}</span>
        ))}
      </div>
    </div>
  );
}