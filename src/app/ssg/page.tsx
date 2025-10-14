import { RenderingDemo } from "@/components/rendering-demo";
import { PatternInfo } from "@/components/pattern-info";
import { FlowDiagram } from "@/components/flow-diagram";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export const dynamic = "force-static";

export default function SSGPage() {
  // In production, this timestamp is set once at build time and never changes
  const buildTimestamp = new Date().toISOString();

  return (
    <div className="container mx-auto py-4 px-4 max-w-6xl min-h-screen flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">SSG - Static Site Generation</h1>
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
            title="SSG"
            description="HTML built once at build time."
            pattern="ssg"
            pros={["Fastest load", "CDN-cached"]}
            cons={["Data can be stale", "Requires rebuild"]}
            useCases={["Blogs", "Docs", "Marketing pages"]}
          />

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">How SSG Works</h2>
            <FlowDiagram pattern="ssg" />
          </div>

          <div className="bg-muted p-3 rounded-lg">
            <p className="text-xs font-semibold mb-2">Code Example:</p>
            <pre className="text-[10px] leading-tight">
              <code>{`export const dynamic = 'force-static'

export default function Page() {
  const data = new Date().toISOString()
  return <div>{data}</div>
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <RenderingDemo
            pattern="ssg"
            timestamp={buildTimestamp}
            buildTime={buildTimestamp}
            renderLocation="build"
          />

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-xs text-muted-foreground">
              💡 <strong>In production:</strong> Refresh multiple times -
              timestamp stays the same (built once at deploy time).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
