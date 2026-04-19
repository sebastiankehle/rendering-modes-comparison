import { RenderingDemo } from "@/components/rendering-demo";
import { PatternInfo } from "@/components/pattern-info";
import { FlowDiagram } from "@/components/flow-diagram";
import { CodeBlock } from "@/components/code-block";
import { Section, Shell, TopBar } from "@/components/site-shell";
import { DemoHero } from "@/components/demo-hero";

export const dynamic = "force-static";

export default function SSGPage() {
  const buildTimestamp = new Date().toISOString();

  return (
    <Shell>
      <TopBar path="ssg" />
      <main className="flex flex-1 flex-col gap-3 pb-4">
        <DemoHero pattern="ssg" />

        <div className="grid flex-1 grid-cols-1 gap-3 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <Section label="pattern">
              <PatternInfo
                pattern="ssg"
                pros={["fastest load", "cdn-cached"]}
                cons={["data can be stale", "requires rebuild"]}
                useCases={["blogs", "docs", "marketing"]}
              />
            </Section>

            <Section label="flow" title="build → cache → serve">
              <FlowDiagram pattern="ssg" />
            </Section>
          </div>

          <div className="flex flex-col gap-3">
            <Section label="live" title="frozen at build time">
              <RenderingDemo
                pattern="ssg"
                timestamp={buildTimestamp}
                buildTime={buildTimestamp}
                renderLocation="build"
              />
            </Section>

            <Section label="source" title="app/ssg/page.tsx">
              <CodeBlock
                filename="app/ssg/page.tsx"
                code={`export const dynamic = 'force-static'

export default function Page() {
  const data = new Date().toISOString()
  return <div>{data}</div>
}`}
              />
            </Section>

            <Section label="hint">
              <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                production only: timestamp stays pinned to the deploy. ship a
                new build to move it.
              </p>
            </Section>
          </div>
        </div>
      </main>
    </Shell>
  );
}
