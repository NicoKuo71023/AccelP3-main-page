import { Activity, ClipboardList, LineChart, MessagesSquare, Sparkles, TrendingDown, AlertTriangle, CheckCircle2, FileText, Stethoscope } from "lucide-react";
import { ReactNode } from "react";

/* ---------- Shared mini primitives ---------- */

function MockChrome({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div
      className="rounded-2xl border bg-card shadow-card overflow-hidden"
      style={{ borderColor: "oklch(0.88 0.04 200 / 0.7)" }}
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 bg-mint-gradient">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-primary/60" />
          <span className="h-2 w-2 rounded-full" style={{ background: "oklch(0.72 0.10 200 / 0.6)" }} />
          <span className="h-2 w-2 rounded-full" style={{ background: "oklch(0.85 0.07 215 / 0.7)" }} />
        </div>
        {label && (
          <span className="text-[10px] font-mono uppercase tracking-wider text-navy/50">{label}</span>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

/* ---------- Recovery curve (SVG) ---------- */

export function RecoveryChart({
  height = 90,
  showGrid = true,
}: {
  height?: number;
  showGrid?: boolean;
}) {
  // mock data: severity declining, with a band
  const points = [85, 80, 72, 65, 55, 44, 36, 28, 22, 17, 14];
  const w = 240;
  const h = height;
  const max = 100;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * (h - 8)}`)
    .join(" ");
  // confidence band
  const upper = points.map((p) => Math.min(100, p + 8));
  const lower = points.map((p) => Math.max(0, p - 8));
  const band =
    upper.map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * (h - 8)}`).join(" ") +
    " " +
    lower
      .map((p, i) => `L ${(upper.length - 1 - i) * step} ${h - (lower[lower.length - 1 - i] / max) * (h - 8)}`)
      .join(" ") +
    " Z";

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} className="overflow-visible">
      <defs>
        <linearGradient id="rc-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.72 0.10 200)" />
          <stop offset="100%" stopColor="oklch(0.66 0.16 158)" />
        </linearGradient>
        <linearGradient id="rc-band" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.66 0.16 158)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="oklch(0.66 0.16 158)" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {showGrid &&
        [0.25, 0.5, 0.75].map((g) => (
          <line
            key={g}
            x1="0"
            x2={w}
            y1={h * g}
            y2={h * g}
            stroke="oklch(0.91 0.02 200)"
            strokeDasharray="2 4"
          />
        ))}
      <path d={band} fill="url(#rc-band)" />
      <path d={path} fill="none" stroke="url(#rc-line)" strokeWidth="2.5" strokeLinecap="round" />
      {points.map((p, i) => (
        <circle key={i} cx={i * step} cy={h - (p / max) * (h - 8)} r="2" fill="oklch(0.66 0.16 158)" />
      ))}
    </svg>
  );
}

/* ---------- Endpoint Risk card ---------- */

export function EndpointRiskCard() {
  return (
    <div
      className="rounded-2xl border bg-card p-4 shadow-card"
      style={{ borderColor: "oklch(0.88 0.04 200 / 0.7)" }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-navy/55">
          Endpoint Risk
        </span>
        <AlertTriangle size={14} className="text-amber-600" />
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-navy">Moderate</span>
        <span className="text-xs text-navy/50">62%</span>
      </div>
      <div className="mt-3 h-1.5 w-full rounded-full bg-mint overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: "62%",
            background:
              "linear-gradient(90deg, oklch(0.66 0.16 158), oklch(0.78 0.14 90), oklch(0.72 0.18 50))",
          }}
        />
      </div>
      <div className="mt-2 flex items-center gap-1 text-[11px] text-navy/55">
        <TrendingDown size={11} className="text-primary" />
        −8% vs. last update
      </div>
    </div>
  );
}

/* ---------- AI Scientist output snippet ---------- */

export function AIScientistOutputCard() {
  return (
    <div
      className="rounded-2xl border bg-navy text-white p-4 shadow-card"
      style={{ borderColor: "oklch(0.30 0.05 230)" }}
    >
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/20 text-primary">
          <Sparkles size={12} />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
          AI Scientist
        </span>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-white/85">
        Suggested endpoint: <span className="text-primary font-semibold">time-to-symptom alleviation</span> over 14 days.
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["ILI cohort", "n≈240", "2 arms"].map((t) => (
          <span
            key={t}
            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-white/80"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Workflow strip used inside hero dashboard ---------- */

function WorkflowStrip() {
  const steps = [
    { icon: <ClipboardList size={14} />, label: "Plan Trial" },
    { icon: <MessagesSquare size={14} />, label: "Collect Data" },
    { icon: <LineChart size={14} />, label: "Detect Risk" },
  ];
  return (
    <div className="flex items-center justify-between gap-2">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-2 flex-1">
          <div className="flex items-center gap-2 rounded-lg bg-mint border border-border/60 px-2.5 py-1.5 flex-1 min-w-0">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary shrink-0">
              {s.icon}
            </span>
            <span className="text-[11px] font-semibold text-navy truncate">{s.label}</span>
          </div>
          {i < steps.length - 1 && (
            <span className="text-primary/50 text-[10px]">→</span>
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------- HERO DASHBOARD MOCKUP ---------- */

export function HeroDashboard() {
  return (
    <MockChrome label="AccelP3 / Trial Console">
      <WorkflowStrip />
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div
          className="col-span-2 rounded-xl border bg-mint p-3"
          style={{ borderColor: "oklch(0.88 0.04 200 / 0.7)" }}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-navy/55">
              Recovery Trajectory
            </span>
            <span className="text-[10px] font-mono text-navy/50">Day 0–10</span>
          </div>
          <RecoveryChart height={80} />
        </div>
        <EndpointRiskCard />
        <AIScientistOutputCard />
      </div>
    </MockChrome>
  );
}

/* ---------- MODULE MINI MOCKUPS ---------- */

export function TrialPlanPreview() {
  const lines = [
    { label: "Population", value: "ILI, age 18–65" },
    { label: "Arms", value: "Treatment + Control" },
    { label: "Endpoint", value: "Time-to-alleviation" },
    { label: "Duration", value: "14 days" },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText size={13} className="text-primary" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-navy/60 font-semibold">
            trial_plan.json
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
          VALIDATED
        </span>
      </div>
      <div
        className="rounded-xl border divide-y"
        style={{
          background: "oklch(0.955 0.028 180)",
          borderColor: "oklch(0.80 0.06 195 / 0.8)",
        }}
      >
        {lines.map((l) => (
          <div
            key={l.label}
            className="flex justify-between items-center gap-2 px-3.5 py-2.5 text-[12px]"
            style={{ borderColor: "oklch(0.80 0.06 195 / 0.35)" }}
          >
            <span className="text-navy/65 font-medium">{l.label}</span>
            <span className="font-semibold text-navy truncate">{l.value}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { k: "Endpoints", v: "1" },
          { k: "Arms", v: "2" },
          { k: "Days", v: "14" },
        ].map((s) => (
          <div
            key={s.k}
            className="rounded-lg border bg-card px-2.5 py-2 text-center"
            style={{ borderColor: "oklch(0.88 0.04 200 / 0.5)" }}
          >
            <div className="text-base font-bold text-navy leading-none">{s.v}</div>
            <div className="text-[9px] font-mono uppercase tracking-wider text-navy/50 mt-1">
              {s.k}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChatBubblePreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessagesSquare size={13} className="text-primary" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-navy/60 font-semibold">
            patient_checkin
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
          DAY 4
        </span>
      </div>
      <div
        className="rounded-xl border p-3 space-y-2"
        style={{
          background: "oklch(0.955 0.028 180)",
          borderColor: "oklch(0.80 0.06 195 / 0.8)",
        }}
      >
        <div className="flex">
          <div className="rounded-2xl rounded-tl-sm bg-card border border-border/70 px-3 py-1.5 text-[11px] text-navy max-w-[80%] shadow-md">
            How is your fever today?
          </div>
        </div>
        <div className="flex justify-end">
          <div
            className="rounded-2xl rounded-tr-sm px-3 py-1.5 text-[11px] text-white max-w-[80%] shadow-md"
            style={{ background: "#00aa66" }}
          >
            Down to 37.4°C, much better
          </div>
        </div>
        <div className="flex">
          <div className="rounded-2xl rounded-tl-sm bg-card border border-border/70 px-3 py-1.5 text-[11px] text-navy max-w-[80%] shadow-md">
            Logged. Day 4 score updated.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { k: "Fever", v: "37.4°C" },
          { k: "Score", v: "2/10" },
          { k: "Trend", v: "↘" },
        ].map((s) => (
          <div
            key={s.k}
            className="rounded-lg border bg-card px-2.5 py-2 text-center"
            style={{ borderColor: "oklch(0.88 0.04 200 / 0.5)" }}
          >
            <div className="text-sm font-bold text-navy leading-none">{s.v}</div>
            <div className="text-[9px] font-mono uppercase tracking-wider text-navy/50 mt-1">
              {s.k}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MiniRecoveryChart() {
  return (
    <div
      className="rounded-xl border bg-mint p-3.5 mt-5"
      style={{ borderColor: "oklch(0.88 0.04 200 / 0.6)" }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-navy/55">
          Predicted recovery
        </span>
        <span className="text-[10px] text-primary font-semibold">↘ on track</span>
      </div>
      <RecoveryChart height={64} showGrid={false} />
    </div>
  );
}

/* ---------- HORIZONTAL WORKFLOW TIMELINE ---------- */

export function WorkflowTimeline() {
  const steps = [
    { icon: <Stethoscope size={18} />, label: "Clinical Hypothesis" },
    { icon: <Sparkles size={18} />, label: "Trial Design" },
    { icon: <MessagesSquare size={18} />, label: "Patient Data Collection" },
    { icon: <Activity size={18} />, label: "Early Outcome Prediction" },
  ];
  return (
    <div className="relative">
      <div className="hidden md:block absolute top-7 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <div key={s.label} className="flex flex-col items-center text-center">
            <div className="relative h-14 w-14 rounded-2xl bg-card border shadow-card flex items-center justify-center text-primary"
              style={{ borderColor: "oklch(0.85 0.05 200 / 0.8)" }}
            >
              {s.icon}
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <div className="mt-3 text-sm font-semibold text-navy">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- TECH LAYER DIAGRAMS ---------- */

export function AILayerDiagram() {
  return (
    <div className="rounded-xl bg-mint border border-border/60 p-4 mt-5 space-y-1.5">
      {["Hypothesis intake", "Literature retrieval", "Planner-critic loop", "Schema-validated output"].map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-navy/40 w-5">0{i + 1}</span>
          <div className="flex-1 rounded-md border border-border/60 bg-card px-2.5 py-1.5 text-[11px] text-navy font-medium">
            {s}
          </div>
        </div>
      ))}
    </div>
  );
}

export function DataLayerDiagram() {
  const fields = ["symptom_score", "fever_temp", "day_index", "patient_id"];
  return (
    <div className="rounded-xl bg-mint border border-border/60 p-4 mt-5">
      <div className="flex items-center gap-2 mb-2.5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-navy/55">
          patient_record.parquet
        </span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {fields.map((f) => (
          <div
            key={f}
            className="rounded-md border border-border/60 bg-card px-2 py-1 text-[10px] font-mono text-navy/70"
          >
            {f}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-primary font-semibold">
        <CheckCircle2 size={11} /> Model-ready export
      </div>
    </div>
  );
}

export function PredictionLayerDiagram() {
  return (
    <div className="rounded-xl bg-mint border border-border/60 p-4 mt-5">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-navy/55">
          Trajectory forecast
        </span>
        <span className="text-[10px] text-primary font-semibold">Neural ODE</span>
      </div>
      <RecoveryChart height={60} showGrid={false} />
    </div>
  );
}
