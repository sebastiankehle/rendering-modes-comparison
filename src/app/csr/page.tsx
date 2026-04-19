"use client";

import { useState, useEffect } from "react";
import { RenderingDemo } from "@/components/rendering-demo";
import { PatternInfo } from "@/components/pattern-info";
import { FlowDiagram } from "@/components/flow-diagram";
import { CodeBlock } from "@/components/code-block";
import { Section, Shell, TopBar } from "@/components/site-shell";
import { DemoHero } from "@/components/demo-hero";

export default function CSRPage() {
  const [timestamp, setTimestamp] = useState<string>("—");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimestamp(new Date().toISOString());
    setMounted(true);
  }, []);

  return (
    <Shell>
      <TopBar path="csr" />
      <DemoHero pattern="csr" />

      <div className="grid grid-cols-1 gap-3 pb-6 lg:grid-cols-2">
        <div className="space-y-4">
          <Section label="pattern">
            <PatternInfo
              pattern="csr"
              pros={["highly interactive", "rich ux"]}
              cons={["slower first paint", "weaker seo"]}
              useCases={["dashboards", "web apps", "admin panels"]}
            />
          </Section>

          <Section label="flow" title="shell → js → paint">
            <FlowDiagram pattern="csr" />
          </Section>

          <Section label="source" title="app/csr/page.tsx">
            <CodeBlock
              filename="app/csr/page.tsx"
              code={`'use client'
import { useState, useEffect } from 'react'

export default function Page() {
  const [data, setData] = useState('')
  useEffect(() => {
    setData(new Date().toISOString())
  }, [])
  return <div>{data}</div>
}`}
            />
          </Section>
        </div>

        <div className="space-y-4">
          <Section label="live" title="rendered in the browser">
            {mounted ? (
              <RenderingDemo
                pattern="csr"
                timestamp={timestamp}
                renderLocation="client"
              />
            ) : (
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="inline-block size-1.5 animate-pulse rounded-full bg-muted-foreground" />
                hydrating…
              </div>
            )}
          </Section>

          <Section label="hint">
            <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
              view source: the timestamp is absent from initial html — javascript
              fills it after hydration.
            </p>
          </Section>
        </div>
      </div>
    </Shell>
  );
}
