import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { VideoPlaceholder } from "@/components/site/VideoPlaceholder";
import { PageHeader } from "@/components/site/Geometric";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Demo | AccelP3" },
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
    videoSrc: `${import.meta.env.BASE_URL}videos/ai-scientist-demo.mp4`,
    chips: ["Hypothesis input", "Structured plan", "Reviewable output"],
  },
  {
    tag: "Demo 02",
    title: "Early outcome prediction",
    blurb: "Conversational interface for early recovery and risk signals prediction.",
    label: "Early outcome prediction demo video",
    videoSrc: `${import.meta.env.BASE_URL}videos/endpoint-detection-demo.mp4`,
    maskTop: true,
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

      <Section>
        <div className="mx-auto max-w-5xl space-y-14">
          {demos.map((d) => (
            <div key={d.title} className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                  {d.tag}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy">{d.title}</h2>
              <p className="text-navy/70 text-sm leading-relaxed">{d.blurb}</p>
              <VideoPlaceholder label={d.label} src={d.videoSrc} maskTop={d.maskTop} />
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
    </>
  );
}
