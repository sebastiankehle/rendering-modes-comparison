import { PatternDot, patternMeta } from "@/components/site-shell";

interface RenderingDemoProps {
  pattern: "ssr" | "ssg" | "isr" | "csr";
  timestamp: string;
  requestCount?: number;
  buildTime?: string;
  renderLocation: "server" | "client" | "build" | "hybrid";
}

const locationLabels: Record<RenderingDemoProps["renderLocation"], string> = {
  server: "server",
  client: "browser",
  build: "build-time",
  hybrid: "hybrid",
};

export function RenderingDemo({
  pattern,
  timestamp,
  requestCount,
  buildTime,
  renderLocation,
}: RenderingDemoProps) {
  const meta = patternMeta[pattern];

  const rows: Array<[string, React.ReactNode]> = [
    ["location", locationLabels[renderLocation]],
    ["timestamp", timestamp],
  ];
  if (requestCount !== undefined) rows.push(["requests", String(requestCount)]);
  if (buildTime) rows.push(["build", buildTime]);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PatternDot pattern={pattern} />
          <span className={`font-mono text-xs ${meta.fgClass}`}>
            {meta.label}
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">
            render-info
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          live
          <span className="ml-1.5 inline-block size-1.5 animate-pulse rounded-full bg-emerald-500/80" />
        </span>
      </div>

      <dl className="font-mono text-xs">
        {rows.map(([k, v]) => (
          <div
            key={k}
            className="flex items-baseline gap-2 border-b border-dashed border-border/60 py-1.5 last:border-b-0"
          >
            <dt className="shrink-0 text-muted-foreground">{k}</dt>
            <dd className="flex-1 leader h-[1px] translate-y-[-3px] text-border" />
            <dd className="shrink-0 text-right text-foreground">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
