export function NetworkMap() {
  const center = { x: 300, y: 200 };
  const nodes = [
    { x: 60,  y: 60,  label: "Bank" },
    { x: 540, y: 60,  label: "Merchant" },
    { x: 30,  y: 220, label: "Citizen" },
    { x: 570, y: 220, label: "Developer" },
    { x: 90,  y: 360, label: "Government" },
    { x: 520, y: 360, label: "Business" },
  ];
  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-hairline bg-surface/60">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <svg viewBox="0 0 600 400" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D90429" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#D90429" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#D90429" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={center.x} cy={center.y} r="130" fill="url(#coreGlow)" />
        {nodes.map((n, i) => (
          <g key={i}>
            <line x1={n.x} y1={n.y} x2={center.x} y2={center.y} stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
            <line x1={n.x} y1={n.y} x2={center.x} y2={center.y} stroke="#D90429" strokeWidth="1.2" className="alia-beam" style={{ animationDelay: `${i * 0.6}s` }} />
          </g>
        ))}
        {nodes.map((n, i) => (
          <g key={`n${i}`}>
            <circle cx={n.x} cy={n.y} r="22" fill="#131313" stroke="rgba(255,255,255,0.2)" />
            <circle cx={n.x} cy={n.y} r="4" fill="#fff" opacity="0.9" />
            <text x={n.x} y={n.y + 42} textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="11" fontFamily="Inter">{n.label}</text>
          </g>
        ))}
        <g>
          <circle cx={center.x} cy={center.y} r="36" fill="#0A0A0A" stroke="#D90429" />
          <text x={center.x} y={center.y - 2} textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Inter" fontWeight={600}>ALIA</text>
          <text x={center.x} y={center.y + 12} textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="8" fontFamily="JetBrains Mono">identity</text>
        </g>
      </svg>
    </div>
  );
}