import { PatternDot, patternMeta } from "@/components/site-shell";

interface PatternInfoProps {
  pattern: "ssr" | "ssg" | "isr" | "csr";
  pros: string[];
  cons: string[];
  useCases: string[];
  description?: string;
}

export function PatternInfo({
  pattern,
  pros,
  cons,
  useCases,
  description,
}: PatternInfoProps) {
  const meta = patternMeta[pattern];
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2 font-mono text-xs">
          <PatternDot pattern={pattern} />
          <span className={meta.fgClass}>{meta.label}</span>
          <span className="text-muted-foreground">— {meta.name}</span>
        </div>
        <p className="text-sm leading-relaxed text-foreground/90">
          {description ?? meta.tagline}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <List label="pros" items={pros} prefix="+" tone="ok" />
        <List label="cons" items={cons} prefix="−" tone="warn" />
      </div>

      <div>
        <Label>use-cases</Label>
        <ul className="mt-1.5 flex flex-wrap gap-1">
          {useCases.map((u) => (
            <li
              key={u}
              className="border border-border px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {u.toLowerCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </span>
  );
}

function List({
  label,
  items,
  prefix,
  tone,
}: {
  label: string;
  items: string[];
  prefix: string;
  tone: "ok" | "warn";
}) {
  const toneCls =
    tone === "ok"
      ? "text-emerald-600 dark:text-emerald-400"
      : "text-amber-600 dark:text-amber-400";
  return (
    <div>
      <Label>{label}</Label>
      <ul className="mt-1.5 space-y-1 font-mono text-xs">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className={`${toneCls} shrink-0`}>{prefix}</span>
            <span className="text-foreground/85">{item.toLowerCase()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
