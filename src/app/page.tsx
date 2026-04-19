import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Section,
  Shell,
  TopBar,
  patternMeta,
  PatternDot,
} from "@/components/site-shell";

const summary = {
  ssr: {
    pros: ["fresh data per request", "seo-friendly"],
    cons: ["slower ttfb", "higher server load"],
    use: "dashboards · personalized pages · auth routes",
  },
  ssg: {
    pros: ["fastest load", "served via cdn"],
    cons: ["stale until next build"],
    use: "blogs · docs · marketing pages",
  },
  isr: {
    pros: ["static speed", "dynamic freshness"],
    cons: ["slight staleness window"],
    use: "ecommerce · feeds · landing pages",
  },
  csr: {
    pros: ["flexible", "fully interactive"],
    cons: ["slower first paint", "weaker seo"],
    use: "dashboards · internal tools · rich apps",
  },
} as const;

export default function Home() {
  const patterns = (["ssr", "ssg", "isr", "csr"] as const).map((k) => ({
    ...patternMeta[k],
    ...summary[k],
  }));

  return (
    <Shell>
      <TopBar />

      <section className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[1.1fr_1fr] md:py-16">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            next.js 15 · app router
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Four rendering modes.
            <br />
            <span className="text-muted-foreground">One side-by-side.</span>
          </h1>
          <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
            A minimalist demo of{" "}
            <span className="font-mono text-foreground">ssr</span>,{" "}
            <span className="font-mono text-foreground">ssg</span>,{" "}
            <span className="font-mono text-foreground">isr</span>, and{" "}
            <span className="font-mono text-foreground">csr</span>. Live
            timestamps, request counters, and annotated flow — so the tradeoffs
            show themselves.
          </p>
          <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <span>run</span>
            <code className="border border-border bg-muted/50 px-2 py-1 text-foreground">
              npm run build &amp;&amp; npm start
            </code>
            <span className="hidden sm:inline">to see real behavior</span>
          </div>
        </div>

        <div className="border border-border bg-card/60 p-4 font-mono text-[11px]">
          <div className="mb-2 flex items-center justify-between text-muted-foreground">
            <span>rendering.matrix</span>
            <span>4 × 3</span>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-muted-foreground">
                <th className="py-1 font-normal">mode</th>
                <th className="py-1 font-normal">runs</th>
                <th className="py-1 pr-0 text-right font-normal">cache</th>
              </tr>
            </thead>
            <tbody className="[&>tr>td]:border-t [&>tr>td]:border-border/60 [&>tr>td]:py-1.5">
              <tr>
                <td className="flex items-center gap-2">
                  <PatternDot pattern="ssr" /> ssr
                </td>
                <td>per request</td>
                <td className="text-right text-muted-foreground">none</td>
              </tr>
              <tr>
                <td className="flex items-center gap-2">
                  <PatternDot pattern="ssg" /> ssg
                </td>
                <td>build time</td>
                <td className="text-right text-muted-foreground">forever</td>
              </tr>
              <tr>
                <td className="flex items-center gap-2">
                  <PatternDot pattern="isr" /> isr
                </td>
                <td>on interval</td>
                <td className="text-right text-muted-foreground">10s</td>
              </tr>
              <tr>
                <td className="flex items-center gap-2">
                  <PatternDot pattern="csr" /> csr
                </td>
                <td>in browser</td>
                <td className="text-right text-muted-foreground">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-3 pb-16 md:grid-cols-2">
        {patterns.map((p) => (
          <Link
            key={p.key}
            href={`/${p.key}`}
            className="group relative block border border-border bg-card/60 p-4 transition-colors hover:bg-accent/40"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2 font-mono text-xs">
                <PatternDot pattern={p.key} />
                <span className={p.fgClass}>{p.label}</span>
                <span className="text-muted-foreground">— {p.name}</span>
              </div>
              <ArrowUpRight
                className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </div>

            <p className="mt-3 text-sm text-foreground/85">{p.tagline}</p>

            <div className="mt-4 grid grid-cols-2 gap-4 font-mono text-[11px]">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  pros
                </div>
                <ul className="mt-1 space-y-0.5">
                  {p.pros.map((x) => (
                    <li key={x} className="flex gap-1.5">
                      <span className="text-emerald-600 dark:text-emerald-400">
                        +
                      </span>
                      <span className="text-foreground/85">{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  cons
                </div>
                <ul className="mt-1 space-y-0.5">
                  {p.cons.map((x) => (
                    <li key={x} className="flex gap-1.5">
                      <span className="text-amber-600 dark:text-amber-400">
                        −
                      </span>
                      <span className="text-foreground/85">{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 border-t border-dashed border-border pt-3 font-mono text-[11px] text-muted-foreground">
              {p.use}
            </div>
          </Link>
        ))}
      </div>

      <Section label="notes">
        <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
          dev mode renders everything dynamically. build + start to see ssg
          freeze, isr revalidate on a 10-second window, and csr hydrate in the
          browser.
        </p>
      </Section>

      <div className="py-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
        mit · 2026
      </div>
    </Shell>
  );
}
