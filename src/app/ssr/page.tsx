import { RenderingDemo } from "@/components/rendering-demo";
import { PatternInfo } from "@/components/pattern-info";
import { FlowDiagram } from "@/components/flow-diagram";
import { CodeBlock } from "@/components/code-block";
import { Section, Shell, TopBar } from "@/components/site-shell";
import { incrementCounter } from "@/lib/counter";
import { DemoHero } from "@/components/demo-hero";

export const dynamic = "force-dynamic";

export default function SSRPage() {
  const timestamp = new Date().toISOString();
  const requestCount = incrementCounter("ssr");

  return (
    <Shell>
      <TopBar path="ssr" />
      <main className="flex flex-1 flex-col gap-3 pb-4">
        <DemoHero pattern="ssr" />

        <div className="grid flex-1 grid-cols-1 gap-3 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <Section label="pattern">
              <PatternInfo
                pattern="ssr"
                pros={["fresh data per request", "seo-friendly"]}
                cons={["slower ttfb", "higher server load"]}
                useCases={["dashboards", "personalized", "auth routes"]}
              />
            </Section>

            <Section label="flow" title="request → paint">
              <FlowDiagram pattern="ssr" />
            </Section>
          </div>

          <div className="flex flex-col gap-3">
            <Section label="live" title="regenerates on every request">
              <RenderingDemo
                pattern="ssr"
                timestamp={timestamp}
                requestCount={requestCount}
                renderLocation="server"
              />
            </Section>

            <Section label="source" title="app/ssr/page.tsx">
              <CodeBlock
                filename="app/ssr/page.tsx"
                code={`export const dynamic = 'force-dynamic'

export default function Page() {
  const data = new Date().toISOString()
  return <div>{data}</div>
}`}
              />
            </Section>

            <Section label="hint">
              <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                refresh this tab. timestamp and request counter advance every
                time — each hit re-renders on the server.
              </p>
            </Section>
          </div>
        </div>
      </main>
    </Shell>
  );
}
