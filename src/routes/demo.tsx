import { createFileRoute } from "@tanstack/react-router";
import { Card, Eyebrow, Section } from "@/components/site/Section";
import { VideoPlaceholder } from "@/components/site/VideoPlaceholder";
import { PageHeader, DiamondMark } from "@/components/site/Geometric";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Demo — AccelP3" },
      {
        name: "description",
        content:
          "Watch the AccelP3 prototype: AI Scientist for trial planning and chatbot-based endpoint detection.",
      },
    ],
  }),
  component: DemoPage,
});

const demos = [
  {
    tag: "Demo 01",
    title: "AI Scientist for Trial Planning",
    blurb: "Turn a plain-language hypothesis into a structured trial plan.",
    label: "AI Scientist Demo Video",
    videoSrc: "/videos/ai-scientist-demo.mp4",
    chips: ["Hypothesis input", "Structured plan", "Reviewable output"],
  },
  {
    tag: "Demo 02",
    title: "Early outcome prediction",
    blurb: "Conversational interface for early recovery and risk signals prediction.",
    label: "Early outcome prediction demo video",
    videoSrc: "/videos/endpoint-detection-demo.mp4",
    chips: ["Chat-based exploration", "Recovery signals", "Early risk flags"],
  },
];

function DemoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product Walkthrough"
        title={<>See AccelP3 <span className="text-primary">in motion</span>.</>}
        subtitle="Two short walkthroughs: Agentic AI-based trial design and early outcome prediction."
      />

      {/* DEMO VIDEOS — main visual focus */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-8">
          {demos.map((d) => (
            <div key={d.title} className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                  {d.tag}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy whitespace-nowrap">{d.title}</h2>
              <p className="text-navy/70 text-sm leading-relaxed">{d.blurb}</p>
              <VideoPlaceholder label={d.label} src={d.videoSrc} />
              <div className="flex flex-wrap gap-2">
                {d.chips.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full bg-mint border border-border/70 px-3 py-1.5 text-xs font-semibold text-navy/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* INITIAL USE CASE — light mint */}
      <Section className="bg-mint-gradient relative overflow-hidden">
        <div className="absolute top-8 right-10 hidden md:block opacity-60">
          <DiamondMark size={28} variant="teal" />
        </div>
        <div className="relative max-w-2xl">
          <Eyebrow>Initial Use Case</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Infectious Disease Trials</h2>
          <p className="mt-4 text-navy/70">
            First prototype: influenza-like illness, time-to-symptom alleviation.
          </p>
        </div>
        <div className="relative mt-10 grid md:grid-cols-3 gap-5">
          {[
            { label: "Endpoint", value: "Time to symptom alleviation" },
            { label: "Early window", value: "First 72 hours" },
            { label: "Output", value: "Predicted recovery & risk signal" },
          ].map((c) => (
            <Card key={c.label}>
              <div className="text-xs uppercase tracking-wide text-primary font-semibold">
                {c.label}
              </div>
              <div className="mt-2 text-lg font-semibold text-navy">{c.value}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CURRENT STAGE */}
      <Section>
        <div className="rounded-3xl bg-navy p-10 lg:p-14 relative overflow-hidden">
          <div
            className="absolute -top-16 -right-16 h-56 w-56 rounded-full"
            style={{ background: "radial-gradient(circle, oklch(0.66 0.16 158 / 0.30), transparent 70%)" }}
          />
          <div className="absolute bottom-6 right-8 opacity-80">
            <DiamondMark size={28} variant="teal" />
          </div>
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold text-white">Current Stage</h2>
            <p className="mt-4 text-white/75">
              Early proof-of-concept preparing for pilot validation.
            </p>
            <a
              href="mailto:accelp3.contact@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Contact for Demo Access <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
