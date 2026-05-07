import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

export function WorkflowDiagram({ steps }: { steps: { label: string; icon?: ReactNode }[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-3 md:gap-4">
          <div className="rounded-2xl border border-primary/20 bg-card px-5 py-4 shadow-card flex items-center gap-3 min-w-[160px]">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {s.icon ?? <span className="text-sm font-bold">{i + 1}</span>}
            </span>
            <span className="text-sm font-semibold text-navy">{s.label}</span>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className="text-primary shrink-0" size={20} />
          )}
        </div>
      ))}
    </div>
  );
}
