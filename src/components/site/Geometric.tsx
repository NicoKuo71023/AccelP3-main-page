/**
 * Subtle geometric brand accents inspired by the AccelP3 visual:
 * small, lightly overlapping diagonal squares used as a recurring motif.
 * Use sparingly — at most one or two per section.
 */

type ClusterProps = {
  className?: string;
  size?: number;
  /** 0..1 overall opacity multiplier */
  intensity?: number;
};

/**
 * Small diamond cluster — three lightly offset rotated squares.
 * Default size kept small so it reads as an accent, not decoration.
 */
export function DiamondCluster({
  className = "",
  size = 220,
  intensity = 1,
}: ClusterProps) {
  const id = `dc-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size, opacity: intensity }}
      aria-hidden
    >
      <svg viewBox="0 0 220 220" width="100%" height="100%" className="overflow-visible">
        <defs>
          <linearGradient id={`${id}-green`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.66 0.16 158)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="oklch(0.72 0.10 200)" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id={`${id}-teal`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.09 205)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.90 0.05 210)" stopOpacity="0.30" />
          </linearGradient>
          <linearGradient id={`${id}-cyan`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.92 0.04 210)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="oklch(0.96 0.02 200)" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <rect x="20" y="40" width="120" height="120" rx="10"
          fill={`url(#${id}-cyan)`} transform="rotate(45 80 100)" />
        <rect x="80" y="20" width="120" height="120" rx="10"
          fill={`url(#${id}-teal)`} transform="rotate(45 140 80)" />
        <rect x="70" y="80" width="110" height="110" rx="10"
          fill={`url(#${id}-green)`} transform="rotate(45 125 135)" />
      </svg>
    </div>
  );
}

/** Tiny single-diamond accent — for corners, dividers, page header chips. */
export function DiamondMark({
  className = "",
  size = 56,
  variant = "green",
}: {
  className?: string;
  size?: number;
  variant?: "green" | "teal" | "cyan";
}) {
  const fill =
    variant === "green"
      ? "oklch(0.66 0.16 158)"
      : variant === "teal"
        ? "oklch(0.72 0.10 200)"
        : "oklch(0.85 0.07 215)";
  return (
    <div
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg viewBox="0 0 56 56" width="100%" height="100%">
        <rect x="12" y="12" width="32" height="32" rx="5"
          fill={fill} fillOpacity="0.9" transform="rotate(45 28 28)" />
      </svg>
    </div>
  );
}

/** Page header band with consistent styling and a subtle accent in the corner. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden bg-mint-gradient border-b border-border/60">
      {/* subtle accent — small, top-right only */}
      <div className="absolute -top-6 -right-6 md:top-4 md:right-6 opacity-80">
        <DiamondCluster size={180} intensity={0.85} />
      </div>
      <div className="absolute -bottom-3 left-8 hidden md:block opacity-70">
        <DiamondMark size={28} variant="teal" />
      </div>
      <div
        className={`relative mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {eyebrow}
          </div>
        )}
        <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base lg:text-lg text-navy/70 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function DiamondDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <span className="h-2 w-2 rotate-45 bg-primary/80" />
      <span className="h-2 w-2 rotate-45" style={{ background: "oklch(0.72 0.10 200 / 0.8)" }} />
      <span className="h-2 w-2 rotate-45" style={{ background: "oklch(0.85 0.07 215 / 0.8)" }} />
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </div>
  );
}

/* Backwards-compat exports — now alias to subtler primitives */
export const DiamondStack = DiamondCluster;
export function CornerDiamonds({
  className = "",
  position = "tr",
  size = 160,
}: {
  className?: string;
  position?: "tr" | "tl" | "br" | "bl";
  size?: number;
}) {
  const pos = {
    tr: "top-4 right-4",
    tl: "top-4 left-4",
    br: "bottom-4 right-4",
    bl: "bottom-4 left-4",
  }[position];
  return (
    <div className={`absolute ${pos} ${className}`} aria-hidden>
      <DiamondCluster size={size} intensity={0.6} />
    </div>
  );
}
