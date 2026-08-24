/**
 * Decorative rangoli-inspired mandala. Purely ornamental accent — hidden from
 * assistive tech. Colour comes from `currentColor` so it inherits design tokens.
 */
export function Rangoli({ className = "" }: { className?: string }) {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
      stroke="currentColor"
    >
      <circle cx="100" cy="100" r="18" strokeWidth="1" />
      <circle cx="100" cy="100" r="46" strokeWidth="0.6" />
      <circle cx="100" cy="100" r="74" strokeWidth="0.6" />
      <circle cx="100" cy="100" r="96" strokeWidth="0.4" strokeDasharray="2 6" />
      {petals.map((deg) => (
        <g key={deg} transform={`rotate(${deg} 100 100)`}>
          <path d="M100 54 C112 74 112 86 100 100 C88 86 88 74 100 54 Z" strokeWidth="0.7" />
          <path d="M100 26 L104 40 L100 46 L96 40 Z" strokeWidth="0.6" />
          <circle cx="100" cy="60" r="1.6" strokeWidth="0.8" />
        </g>
      ))}
    </svg>
  );
}

/** Small diamond-and-line divider used between sections. */
export function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="rule-ornament w-16 sm:w-28" />
      <svg viewBox="0 0 24 24" className="h-3 w-3 text-gold" fill="none" stroke="currentColor">
        <path d="M12 2 L22 12 L12 22 L2 12 Z" strokeWidth="1.4" />
      </svg>
      <span className="rule-ornament w-16 sm:w-28" />
    </div>
  );
}
