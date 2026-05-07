import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, Eyebrow, Section } from "@/components/site/Section";
import { useRevealOnView } from "@/hooks/useRevealOnView";
import mixLogo from "@/assets/mix-logo.webp";
import hackNationLogo from "@/assets/hack-nation-logo.avif";
import { DiamondMark } from "@/components/site/Geometric";
import { AIAgentVisual } from "@/components/site/AIAgentVisual";
import {
  WorkflowTimeline,
  TrialPlanPreview,
  ChatBubblePreview,
  MiniRecoveryChart,
  RecoveryChart,
  EndpointRiskCard,
} from "@/components/site/ProductMockups";
import {
  ArrowRight,
  Beaker,
  Building2,
  Database,
  FlaskConical,
  GraduationCap,
  LineChart,
  MessagesSquare,
  Microscope,
  ShieldAlert,
  Users,
  Activity,
  Sparkles,
  Stethoscope,
  Gauge,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AccelP3 — AI Endpoint Risk Intelligence for Clinical Trials" },
      {
        name: "description",
        content:
          "AccelP3 is an AI platform for clinical trial endpoint risk intelligence. Plan trials, capture early patient signals, and detect endpoint risk earlier.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-panel-gradient border-b border-border/60">
        <div className="absolute inset-0 bg-grid-faint opacity-40" />
        <div className="absolute top-10 right-10 hidden lg:block opacity-70">
          <DiamondMark size={36} variant="green" />
        </div>
        <div className="absolute bottom-12 left-10 hidden md:block opacity-60">
          <DiamondMark size={24} variant="teal" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6">
            <Eyebrow>Endpoint Risk Intelligence</Eyebrow>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.04] tracking-tight">
              Accelerate your clinical trial with <span className="text-primary">Agent Intelligence</span>
            </h1>
            <p className="mt-6 text-lg text-navy/70 leading-relaxed max-w-xl">
              AI-Powered Phase III Clinical Trial Acceleration Platform
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90 transition"
              >
                See the Platform <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Trial Design", "Patient Data Collection", "Early Outcome Prediction"].map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full bg-card/80 backdrop-blur border border-border/70 px-3 py-1.5 text-xs font-semibold text-navy/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <AIAgentVisual />
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR — compact horizontal band */}
      <section className="relative overflow-hidden bg-navy border-y border-navy/40 py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
            <div className="flex items-center gap-3 shrink-0">
              <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary font-semibold whitespace-nowrap">
                Built for
              </span>
              <span className="hidden lg:block h-px w-10 bg-white/20" />
            </div>
            <div className="mt-5 lg:mt-0 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 flex-1">
              {[
                { icon: <Microscope size={16} />, label: "Biotech Companies" },
                { icon: <Building2 size={16} />, label: "Academic Institutions" },
                { icon: <Users size={16} />, label: "CROs" },
                { icon: <GraduationCap size={16} />, label: "Pharma Companies" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-2.5 text-white/90"
                >
                  <span className="text-primary shrink-0">{c.icon}</span>
                  <span className="text-sm font-semibold">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <Section className="bg-mint-gradient relative overflow-hidden">
        <div className="absolute top-8 right-10 hidden md:block opacity-60">
          <DiamondMark size={28} variant="teal" />
        </div>
        <div className="relative max-w-2xl">
          <Eyebrow>Product Workflow</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
            From hypothesis to endpoint risk signal.
          </h2>
        </div>
        <div className="relative mt-14">
          <WorkflowTimeline />
        </div>
      </Section>

      {/* PLATFORM MODULES — connected workflow */}
      <Section className="relative overflow-hidden bg-navy-deep border-y border-navy/40">
        <div className="absolute inset-0 bg-grid-faint opacity-[0.07]" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 10%, oklch(0.66 0.18 158 / 0.18), transparent 55%), radial-gradient(ellipse at 80% 90%, oklch(0.72 0.16 200 / 0.20), transparent 55%)",
          }}
        />
        <div className="absolute top-10 right-12 hidden md:block opacity-70">
          <DiamondMark size={28} variant="green" />
        </div>
        <div className="absolute bottom-16 left-10 hidden md:block opacity-50">
          <DiamondMark size={20} variant="teal" />
        </div>
        <div className="absolute top-1/2 right-6 hidden lg:block opacity-30">
          <DiamondMark size={16} variant="teal" />
        </div>

        <div className="relative max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-soft-pulse" />
            The Platform
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
            Three Connected Modules
          </h2>
          <p className="mt-3 text-sm text-white/60 max-w-md">
            Trial Planning, Patient Signal Collection, and Endpoint Risk Detection work together as one AccelP3 workflow.
          </p>
        </div>

        {/* Connecting workflow rail */}
        <div className="relative mt-16">
          <div
            aria-hidden
            className="hidden lg:block absolute left-1/2 top-6 bottom-6 w-px -translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg, transparent, oklch(0.66 0.18 158 / 0.55) 12%, oklch(0.72 0.16 200 / 0.45) 50%, oklch(0.66 0.18 158 / 0.55) 88%, transparent)",
            }}
          />

          <div className="space-y-20 lg:space-y-28">
            <ModuleRow
              index={0}
              tag="Module 01"
              icon={<Beaker />}
              title="Trial Planning"
              description="Translate a clinical hypothesis into a structured trial plan that teams can review and refine."
              bullets={[
                "Plain-language hypothesis input",
                "Schema-validated trial plan",
                "Reviewable JSON output",
              ]}
              statusLabel="Validated Plan"
              statusTone="green"
              visual={<TrialPlanPreview />}
            />
            <ModuleRow
              index={1}
              reverse
              tag="Module 02"
              icon={<MessagesSquare />}
              title="Patient Signal Collection"
              description="Collect patient symptom and recovery updates through a simple conversational workflow."
              bullets={[
                "Chatbot interface for patient updates",
                "Daily symptom and recovery tracking",
                "Alerts when a patient's condition worsens",
              ]}
              statusLabel="Alert Ready"
              statusTone="teal"
              visual={<ChatBubblePreview />}
            />
            <ModuleRow
              index={2}
              tag="Module 03"
              icon={<LineChart />}
              title="Endpoint Risk Detection"
              description="Analyze early recovery patterns to help teams spot endpoint risk sooner."
              bullets={[
                "Recovery trajectory modeling",
                "Endpoint risk score",
                "Early warning during trial",
              ]}
              statusLabel="Risk Signal Detected"
              statusTone="amber"
              visual={
                <div className="grid gap-3">
                  <div
                    className="rounded-xl border p-3.5"
                    style={{
                      background: "oklch(0.955 0.028 180)",
                      borderColor: "oklch(0.80 0.06 195 / 0.8)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-navy/60">
                        Predicted recovery
                      </span>
                      <span className="text-[10px] text-primary font-semibold inline-flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-soft-pulse" />
                        live
                      </span>
                    </div>
                    <RecoveryChart height={70} showGrid={false} />
                  </div>
                  <EndpointRiskCard />
                </div>
              }
            />
          </div>
        </div>
      </Section>


      {/* EARLY VALIDATION & FEEDBACK */}
      <Section className="bg-blue-gray relative overflow-hidden border-t border-border/50">
        <div className="absolute top-12 right-14 hidden md:block opacity-50">
          <DiamondMark size={24} variant="teal" />
        </div>
        <div className="relative max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Early Validation & Feedback
          </h2>
        </div>
        <div className="relative mt-10 grid md:grid-cols-3 gap-6">
          {/* Card 1: HSIL */}
          <div
            className="rounded-2xl bg-card border p-6 shadow-card flex flex-col hover:-translate-y-0.5 transition"
            style={{ borderColor: "oklch(0.88 0.04 200 / 0.7)" }}
          >
            <div className="h-32 flex items-center justify-center rounded-xl bg-mint border border-border/60 px-4">
              <div className="text-center">
                <div className="font-display font-bold text-3xl tracking-tight text-navy leading-none">
                  HSIL
                </div>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-navy/60 mt-2">
                  Hackathon 2026
                </div>
              </div>
            </div>
            <h3 className="mt-5 text-base font-semibold text-navy">HSIL Hackathon 2026</h3>
            <p className="mt-2 text-sm text-navy/75 leading-relaxed">
              Presented as a clinical trial AI workflow concept at a healthcare innovation
              hackathon.
            </p>
          </div>

          {/* Card 2: Hack-Nation */}
          <div
            className="rounded-2xl bg-card border p-6 shadow-card flex flex-col hover:-translate-y-0.5 transition"
            style={{ borderColor: "oklch(0.88 0.04 200 / 0.7)" }}
          >
            <div className="h-32 flex items-center justify-center rounded-xl bg-mint border border-border/60 px-4 overflow-hidden">
              <img
                src={hackNationLogo}
                alt="Hack-Nation"
                className="max-h-28 max-w-[90%] object-contain"
              />
            </div>
            <h3 className="mt-5 text-base font-semibold text-navy">Hack-Nation</h3>
            <p className="mt-2 text-sm text-navy/75 leading-relaxed">
              Refined AI-agent product thinking through a global AI hackathon community.
            </p>
          </div>

          {/* Card 3: MIX */}
          <div
            className="rounded-2xl bg-card border p-6 shadow-card flex flex-col hover:-translate-y-0.5 transition"
            style={{ borderColor: "oklch(0.88 0.04 200 / 0.7)" }}
          >
            <div className="h-32 flex items-center justify-center rounded-xl bg-mint border border-border/60 px-4">
              <img
                src={mixLogo}
                alt="Mason Innovation Exchange"
                className="max-h-24 max-w-[85%] object-contain"
              />
            </div>
            <h3 className="mt-5 text-base font-semibold text-navy">Mason Innovation Exchange</h3>
            <p className="mt-2 text-sm text-navy/75 leading-relaxed">
              Explored through George Mason University's innovation and entrepreneurship
              ecosystem.
            </p>
          </div>
        </div>
        <p className="relative mt-6 text-xs text-navy/50 text-right">
          Does not imply sponsorship or endorsement.
        </p>
      </Section>

      {/* INSIGHT / POSITIONING BAND - hidden */}
      {false && (
      <Section>
        <div />
      </Section>
      )}

      {/* CTA - hidden */}
      {false && (
      <Section>
        <div />
      </Section>
      )}
    </>
  );
}

function ModuleRow({
  index = 0,
  tag,
  icon,
  title,
  description,
  bullets,
  visual,
  statusLabel,
  statusTone = "green",
  reverse = false,
}: {
  index?: number;
  tag: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  visual: React.ReactNode;
  statusLabel?: string;
  statusTone?: "green" | "teal" | "amber";
  reverse?: boolean;
}) {
  const revealRef = useRevealOnView<HTMLDivElement>();
  const toneStyles: Record<string, { bg: string; border: string; text: string; dot: string }> = {
    green: {
      bg: "oklch(0.66 0.16 158 / 0.15)",
      border: "oklch(0.66 0.16 158 / 0.5)",
      text: "oklch(0.78 0.14 158)",
      dot: "oklch(0.66 0.16 158)",
    },
    teal: {
      bg: "oklch(0.72 0.10 200 / 0.18)",
      border: "oklch(0.72 0.10 200 / 0.55)",
      text: "oklch(0.85 0.08 200)",
      dot: "oklch(0.72 0.10 200)",
    },
    amber: {
      bg: "oklch(0.78 0.14 75 / 0.18)",
      border: "oklch(0.78 0.14 75 / 0.55)",
      text: "oklch(0.85 0.12 80)",
      dot: "oklch(0.78 0.14 75)",
    },
  };
  const tone = toneStyles[statusTone];

  return (
    <div
      ref={revealRef}
      className="group reveal-on-view relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* node on the central rail */}
      <div
        aria-hidden
        className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 h-4 w-4 items-center justify-center"
      >
        <span
          className="h-3 w-3 rounded-full border-2 animate-soft-pulse"
          style={{
            background: "oklch(0.32 0.06 230)",
            borderColor: tone.dot,
            boxShadow: `0 0 0 6px ${tone.bg}`,
          }}
        />
      </div>

      <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
            {tag}
          </span>
          <span className="h-px flex-1 bg-white/20 max-w-[120px]" />
        </div>
        <div className="mt-4 flex items-center gap-3">
          <span className="h-11 w-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center ring-soft-primary">
            {icon}
          </span>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="mt-4 text-white/75 leading-relaxed max-w-lg">{description}</p>
        <ul className="mt-5 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-white/80">
              <span className="mt-1.5 h-1.5 w-1.5 rotate-45 bg-primary" />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
        <div className="relative">
          <div
            className="absolute -inset-10 rounded-[36px] -z-10 blur-3xl opacity-90"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, oklch(0.72 0.16 200 / 0.65), transparent 60%), radial-gradient(circle at 80% 80%, oklch(0.66 0.18 158 / 0.55), transparent 60%)",
            }}
          />
          <div className="module-glow rounded-2xl border bg-card overflow-hidden"
            style={{ borderColor: "oklch(0.88 0.04 200 / 0.9)" }}
          >
            <div className="flex items-center justify-between px-5 py-2.5 border-b border-border/60 bg-mint-gradient">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary/60" />
                <span className="h-2 w-2 rounded-full" style={{ background: "oklch(0.72 0.10 200 / 0.6)" }} />
                <span className="h-2 w-2 rounded-full" style={{ background: "oklch(0.85 0.07 215 / 0.7)" }} />
              </div>
              <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-navy/45">
                {tag.toLowerCase().replace(" ", "_")}
              </span>
            </div>
            <div className="p-5">{visual}</div>
            {statusLabel && (
              <div
                className="flex items-center gap-2 px-5 py-2 border-t text-[10px] font-mono uppercase tracking-[0.15em]"
                style={{
                  background: "oklch(0.98 0.012 195)",
                  borderColor: "oklch(0.88 0.04 200 / 0.6)",
                  color: "oklch(0.45 0.05 220)",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full animate-soft-pulse"
                  style={{ background: tone.dot }}
                />
                <span className="font-semibold">{statusLabel}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

