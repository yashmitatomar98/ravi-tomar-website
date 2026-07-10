"use client";

type Kind = "quality" | "ethics" | "accessibility" | "precision";

/** Abstract, non-literal laboratory visuals — no stock photography, no clichés. */
export default function PrincipleVisual({ kind }: { kind: Kind }) {
  const common = "h-full w-full text-sci";
  switch (kind) {
    case "quality":
      // microscope focusing — concentric rings tightening to a point
      return (
        <svg viewBox="0 0 200 200" className={common} fill="none" aria-hidden>
          {[70, 54, 38, 22].map((r, i) => (
            <circle
              key={r}
              cx="100"
              cy="100"
              r={r}
              stroke="currentColor"
              strokeOpacity={0.15 + i * 0.15}
              strokeWidth="0.6"
            />
          ))}
          <circle cx="100" cy="100" r="4" fill="currentColor" />
          <line x1="100" y1="10" x2="100" y2="34" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="100" y1="166" x2="100" y2="190" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="10" y1="100" x2="34" y2="100" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
          <line x1="166" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.4" />
        </svg>
      );
    case "ethics":
      // perfectly aligned laboratory samples
      return (
        <svg viewBox="0 0 200 200" className={common} fill="none" aria-hidden>
          {Array.from({ length: 7 }).map((_, i) => {
            const x = 24 + i * 25;
            return (
              <g key={i}>
                <rect x={x} y="50" width="10" height="100" rx="5" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.6" />
                <rect x={x} y={150 - (30 + (i % 3) * 12)} width="10" height={30 + (i % 3) * 12} rx="5" fill="currentColor" fillOpacity="0.18" />
                <circle cx={x + 5} cy="46" r="3" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.6" />
              </g>
            );
          })}
        </svg>
      );
    case "accessibility":
      // network lines expanding across a region
      return (
        <svg viewBox="0 0 200 200" className={common} fill="none" aria-hidden>
          <circle cx="100" cy="100" r="4" fill="currentColor" />
          {[
            [40, 40], [160, 50], [30, 130], [170, 150], [100, 30], [60, 170], [150, 110],
          ].map(([x, y], i) => (
            <g key={i}>
              <line x1="100" y1="100" x2={x} y2={y} stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" />
              <circle cx={x} cy={y} r="3" fill="currentColor" fillOpacity="0.6" />
            </g>
          ))}
        </svg>
      );
    case "precision":
    default:
      // automated diagnostic equipment — grid + tracing arm
      return (
        <svg viewBox="0 0 200 200" className={common} fill="none" aria-hidden>
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <circle
                key={`${r}-${c}`}
                cx={40 + c * 30}
                cy={40 + r * 30}
                r="2"
                fill="currentColor"
                fillOpacity="0.25"
              />
            ))
          )}
          <rect x="34" y="34" width="132" height="132" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.6" />
          <line x1="34" y1="70" x2="166" y2="70" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.8" />
          <circle cx="130" cy="70" r="4" fill="currentColor" />
        </svg>
      );
  }
}
