import { RenderingDemo } from "@/components/rendering-demo";
import { PatternInfo } from "@/components/pattern-info";
import { FlowDiagram } from "@/components/flow-diagram";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { incrementCounter } from "@/lib/counter";

// Force dynamic rendering on every request
export const dynamic = "force-dynamic";

export default function SSRPage() {
  // This runs on every request - fresh timestamp every time
  const timestamp = new Date().toISOString();
  const requestCount = incrementCounter("ssr");

  return (
    <div className="container mx-auto py-4 px-4 max-w-6xl min-h-screen flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">SSR - Server-Side Rendering</h1>
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
            title="SSR"
            description="HTML built on every request."
            pattern="ssr"
            pros={["Fresh data", "SEO-friendly"]}
            cons={["Slower TTFB", "Higher server load"]}
            useCases={["Dashboards", "Personalized pages"]}
          />

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">How SSR Works</h2>
            <FlowDiagram pattern="ssr" />
          </div>

          <div className="bg-muted p-3 rounded-lg">
            <p className="text-xs font-semibold mb-2">Code Example:</p>
            <pre className="text-[10px] leading-tight">
              <code>{`export const dynamic = 'force-dynamic'

export default function Page() {
  const data = new Date().toISOString()
  return <div>{data}</div>
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <RenderingDemo
            pattern="ssr"
            timestamp={timestamp}
            requestCount={requestCount}
            renderLocation="server"
          />

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-xs text-muted-foreground">
              💡 Refresh multiple times - timestamp and count update each time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
