import { RenderingDemo } from "@/components/rendering-demo";
import { PatternInfo } from "@/components/pattern-info";
import { FlowDiagram } from "@/components/flow-diagram";
import { CodeBlock } from "@/components/code-block";
import { Section, Shell, TopBar } from "@/components/site-shell";
import { DemoHero } from "@/components/demo-hero";

export const revalidate = 10;

export default function ISRPage() {
  const timestamp = new Date().toISOString();

  return (
    <Shell>
      <TopBar path="isr" />
      <main className="flex flex-1 flex-col gap-3 pb-4">
        <DemoHero pattern="isr" />

        <div className="grid flex-1 grid-cols-1 gap-3 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <Section label="pattern">
              <PatternInfo
                pattern="isr"
                pros={["fast + fresh", "cdn-cached"]}
                cons={["slight staleness", "more moving parts"]}
                useCases={["ecommerce", "news", "feeds"]}
              />
            </Section>

            <Section label="flow" title="cached → background rebuild">
              <FlowDiagram pattern="isr" />
            </Section>
          </div>

          <div className="flex flex-col gap-3">
            <Section label="live" title="revalidates every 10s">
              <RenderingDemo
                pattern="isr"
                timestamp={timestamp}
                buildTime={timestamp}
                renderLocation="hybrid"
              />
            </Section>

            <Section label="source" title="app/isr/page.tsx">
              <CodeBlock
                filename="app/isr/page.tsx"
                code={`export const revalidate = 10

export default function Page() {
  const data = new Date().toISOString()
  return <div>{data}</div>
}`}
              />
            </Section>

            <Section label="hint">
              <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                production only: rapid refreshes hit the cache. wait 10
                seconds, refresh again — a fresh render lands in the
                background.
              </p>
            </Section>
          </div>
        </div>
      </main>
    </Shell>
  );
}
