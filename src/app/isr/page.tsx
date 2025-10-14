import { RenderingDemo } from "@/components/rendering-demo";
import { PatternInfo } from "@/components/pattern-info";
import { FlowDiagram } from "@/components/flow-diagram";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export const revalidate = 10; // Revalidate every 10 seconds

export default function ISRPage() {
  // In production, Next.js caches this and regenerates after 10 seconds
  const timestamp = new Date().toISOString();

  return (
    <div className="container mx-auto py-4 px-4 max-w-6xl min-h-screen flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">
          ISR - Incremental Static Regeneration
        </h1>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/">
            <Button variant="outline" size="sm">
              ← Back
            </Button>
          </Link>
        </div>
      </div>

      <Separator className="mb-4" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
        <div className="space-y-4">
          <PatternInfo
            title="ISR"
            description="Static speed with dynamic freshness."
            pattern="isr"
            pros={["Fast + fresh", "CDN-cached"]}
            cons={["Slight staleness", "More complex"]}
            useCases={["E-commerce", "News", "Feeds"]}
          />

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">How ISR Works</h2>
            <FlowDiagram pattern="isr" />
          </div>

          <div className="bg-muted p-3 rounded-lg">
            <p className="text-xs font-semibold mb-2">Code Example:</p>
            <pre className="text-[10px] leading-tight">
              <code>{`export const revalidate = 10

export default function Page() {
  const data = new Date().toISOString()
  return <div>{data}</div>
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <RenderingDemo
            pattern="isr"
            timestamp={timestamp}
            buildTime={timestamp}
            renderLocation="hybrid"
          />

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-xs text-muted-foreground">
              💡 <strong>In production:</strong> Refresh quickly - same
              timestamp (cached). Wait 10s+ then refresh - updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
