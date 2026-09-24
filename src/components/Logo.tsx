// This geometric shears design fits the modern, sleek aesthetic and scales perfectly without pixelation
export default function Logo({
  className = "w-48 text-brand-primary",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Geometric Frame */}
      <circle cx="60" cy="60" r="45" stroke="currentColor" strokeWidth="4" />

      {/* Abstract Modern Shears */}
      <line
        x1="42"
        y1="78"
        x2="78"
        y2="42"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="42"
        y1="42"
        x2="78"
        y2="78"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="35" cy="85" r="7" stroke="currentColor" strokeWidth="4" />
      <circle cx="85" cy="85" r="7" stroke="currentColor" strokeWidth="4" />

      {/* Typography */}
      <text
        x="130"
        y="65"
        fontFamily="system-ui, sans-serif"
        fontSize="36"
        fontWeight="800"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        NEW CUTS
      </text>
      <text
        x="132"
        y="92"
        fontFamily="system-ui, sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="var(--brand-secondary)"
        letterSpacing="5"
      >
        BARBERSHOP
      </text>
    </svg>
  );
}
