import { patternMeta } from "@/components/site-shell";
import { cn } from "@/lib/utils";

interface FlowDiagramProps {
  pattern: "ssr" | "ssg" | "isr" | "csr";
}

const flows: Record<FlowDiagramProps["pattern"], string[]> = {
  ssr: ["request", "server renders", "stream html", "paint"],
  ssg: ["build", "generate html", "cdn cache", "instant serve"],
  isr: ["request", "serve cached", "background rebuild", "update cache"],
  csr: ["shell html", "download js", "execute", "render ui"],
};

export function FlowDiagram({ pattern }: FlowDiagramProps) {
  const steps = flows[pattern];
  const accent = patternMeta[pattern].fgClass;
  return (
    <ol className="grid grid-cols-1 gap-2 font-mono text-[11px] sm:grid-cols-4 sm:gap-0">
      {steps.map((label, i) => (
        <li
          key={label}
          className="relative flex items-center gap-2 border border-border px-2 py-2 sm:border-r-0 sm:last:border-r"
        >
          <span
            className={cn(
              "tabular-nums text-muted-foreground",
              i === 0 && accent
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-foreground/90">{label}</span>
          {i < steps.length - 1 ? (
            <span
              aria-hidden
              className="absolute right-[-7px] top-1/2 hidden size-3 -translate-y-1/2 items-center justify-center bg-background font-mono text-muted-foreground sm:inline-flex"
            >
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
