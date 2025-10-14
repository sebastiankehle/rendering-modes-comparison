import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RenderingDemoProps {
  pattern: "ssr" | "ssg" | "isr" | "csr";
  timestamp: string;
  requestCount?: number;
  buildTime?: string;
  renderLocation: "server" | "client" | "build" | "hybrid";
}

export function RenderingDemo({
  pattern,
  timestamp,
  requestCount,
  buildTime,
  renderLocation,
}: RenderingDemoProps) {
  const patternColors = {
    ssr: "bg-chart-1/10 text-chart-1 border-chart-1",
    ssg: "bg-chart-2/10 text-chart-2 border-chart-2",
    isr: "bg-chart-5/10 text-chart-5 border-chart-5",
    csr: "bg-chart-4/10 text-chart-4 border-chart-4",
  };

  const locationLabels = {
    server: "🖥️ Rendered on Server",
    client: "💻 Rendered in Browser",
    build: "🏗️ Built at Build Time",
    hybrid: "🔄 Hybrid (Static + Dynamic)",
  };

  const locationColors = {
    server: "bg-chart-1/10 text-chart-1 border-chart-1",
    client: "bg-chart-4/10 text-chart-4 border-chart-4",
    build: "bg-chart-2/10 text-chart-2 border-chart-2",
    hybrid: "bg-chart-5/10 text-chart-5 border-chart-5",
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Render Info</CardTitle>
          <Badge className={patternColors[pattern]} variant="outline">
            {pattern.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-center py-4">
          <Badge
            className={`${locationColors[renderLocation]} text-xs`}
            variant="outline"
          >
            {locationLabels[renderLocation]}
          </Badge>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex justify-between items-center">
            <span className="font-medium text-muted-foreground">
              Timestamp:
            </span>
            <span className="font-mono">{timestamp}</span>
          </div>

          {requestCount !== undefined && (
            <div className="flex justify-between items-center">
              <span className="font-medium text-muted-foreground">
                Requests:
              </span>
              <span className="font-mono text-lg font-bold">
                {requestCount}
              </span>
            </div>
          )}

          {buildTime && (
            <div className="flex justify-between items-center">
              <span className="font-medium text-muted-foreground">Build:</span>
              <span className="font-mono">{buildTime}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
