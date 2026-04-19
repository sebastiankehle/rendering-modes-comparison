import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PatternDot, patternMeta } from "@/components/site-shell";

type Pattern = "ssr" | "ssg" | "isr" | "csr";

const order: Pattern[] = ["ssr", "ssg", "isr", "csr"];

export function DemoHero({ pattern }: { pattern: Pattern }) {
  const meta = patternMeta[pattern];
  return (
    <section className="flex flex-col gap-3 py-3 md:flex-row md:items-end md:justify-between">
      <div className="space-y-1.5">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3" strokeWidth={1.5} />
          index
        </Link>
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <PatternDot pattern={pattern} />
          <span className={meta.fgClass}>{meta.label}</span>
          <span className="text-muted-foreground">
            / {meta.name.toLowerCase()}
          </span>
          <code className="border border-border bg-muted/50 px-1.5 py-0.5 text-[11px] text-foreground">
            {meta.directive}
          </code>
        </div>
        <h1 className="max-w-2xl text-base font-semibold tracking-tight sm:text-lg">
          {meta.tagline}
        </h1>
      </div>

      <nav className="flex gap-1 font-mono text-[11px]">
        {order.map((p) => {
          const m = patternMeta[p];
          const active = p === pattern;
          return (
            <Link
              key={p}
              href={`/${p}`}
              className={`inline-flex items-center gap-1.5 border border-border px-2 py-1 transition-colors ${
                active
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <PatternDot pattern={p} />
              {m.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
