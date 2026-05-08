import { Brain, FlaskConical, Users, LineChart } from "lucide-react";

/**
 * Conceptual animated AI agent visual for clinical trials.
 * Pure CSS / SVG animations — no external libs.
 */
export function AIAgentVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[560px] mx-auto">
      {/* Soft radial backdrop */}
      <div
        className="absolute inset-0 rounded-full -z-10 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.88 0.10 200 / 0.55), transparent 65%), radial-gradient(circle at 70% 70%, oklch(0.85 0.12 158 / 0.35), transparent 60%)",
        }}
      />

      {/* Rotating dashed ring */}
      <svg
        className="absolute inset-[6%] animate-[spin_40s_linear_infinite]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle
          cx="100"
          cy="100"
          r="92"
          stroke="oklch(0.55 0.14 200)"
          strokeOpacity="0.35"
          strokeWidth="0.6"
          strokeDasharray="2 4"
        />
      </svg>

      {/* Counter-rotating ring */}
      <svg
        className="absolute inset-[14%] animate-[spin_60s_linear_infinite_reverse]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle
          cx="100"
          cy="100"
          r="86"
          stroke="oklch(0.66 0.16 158)"
          strokeOpacity="0.30"
          strokeWidth="0.6"
          strokeDasharray="1 6"
        />
      </svg>

      {/* SVG connection lines + traveling pulses */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
      >
        <defs>
          <linearGradient id="line-grad" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.14 200)" stopOpacity="0.05" />
            <stop offset="50%" stopColor="oklch(0.55 0.14 200)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.66 0.16 158)" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Lines from center to each node */}
        {[
          { x: 200, y: 60 },   // top
          { x: 340, y: 200 },  // right
          { x: 200, y: 340 },  // bottom
          { x: 60, y: 200 },   // left
        ].map((p, i) => (
          <line
            key={i}
            x1="200"
            y1="200"
            x2={p.x}
            y2={p.y}
            stroke="url(#line-grad)"
            strokeWidth="1.2"
          />
        ))}

        {/* Traveling pulses along each line */}
        {[
          { x: 200, y: 60, delay: "0s" },
          { x: 340, y: 200, delay: "0.8s" },
          { x: 200, y: 340, delay: "1.6s" },
          { x: 60, y: 200, delay: "2.4s" },
        ].map((p, i) => (
          <circle key={i} r="3.5" fill="oklch(0.66 0.16 158)">
            <animateMotion
              dur="3.2s"
              begin={p.delay}
              repeatCount="indefinite"
              path={`M200,200 L${p.x},${p.y}`}
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur="3.2s"
              begin={p.delay}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      {/* Center AI Agent core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl animate-pulse" />
          <div className="relative h-24 w-24 rounded-2xl bg-navy text-white flex flex-col items-center justify-center shadow-2xl border border-primary/40">
            <Brain size={28} className="text-primary" />
            <span className="mt-1 text-[10px] font-mono uppercase tracking-wider text-white/80">
              AI Agent
            </span>
          </div>
        </div>
      </div>

      {/* 4 Orbiting nodes */}
      <Node
        position="top-[3%] sm:top-[6%] left-1/2 -translate-x-1/2"
        icon={<FlaskConical size={18} />}
        label="Hypothesis"
      />
      <Node
        position="top-1/2 right-[3%] sm:right-[6%] -translate-y-1/2"
        icon={<Users size={18} />}
        label="Patients"
      />
      <Node
        position="bottom-[3%] sm:bottom-[6%] left-1/2 -translate-x-1/2"
        icon={<LineChart size={18} />}
        label="Outcome"
      />
      <Node
        position="top-1/2 left-[3%] sm:left-[6%] -translate-y-1/2"
        icon={<DataIcon />}
        label="Signals"
      />
    </div>
  );
}

function Node({
  position,
  icon,
  label,
}: {
  position: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className={`absolute ${position}`}>
      <div className="flex flex-col items-center gap-2">
        <div
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-card border shadow-soft flex items-center justify-center text-primary animate-[float_4s_ease-in-out_infinite]"
          style={{ borderColor: "oklch(0.88 0.04 200 / 0.7)" }}
        >
          {icon}
        </div>
        <span className="max-w-20 text-center text-[10px] sm:text-[11px] font-semibold text-navy/80 bg-card/80 backdrop-blur px-2 py-0.5 rounded-full border border-border/60">
          {label}
        </span>
      </div>
    </div>
  );
}

function DataIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12h4l3-8 4 16 3-8h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
