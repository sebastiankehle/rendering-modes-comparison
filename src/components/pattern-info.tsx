import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PatternInfoProps {
  title: string;
  description: string;
  pattern: "ssr" | "ssg" | "isr" | "csr";
  pros: string[];
  cons: string[];
  useCases: string[];
}

export function PatternInfo({
  title,
  description,
  pattern,
  pros,
  cons,
  useCases,
}: PatternInfoProps) {
  const patternColors = {
    ssr: "bg-chart-1/10 text-chart-1 border-chart-1",
    ssg: "bg-chart-2/10 text-chart-2 border-chart-2",
    isr: "bg-chart-5/10 text-chart-5 border-chart-5",
    csr: "bg-chart-4/10 text-chart-4 border-chart-4",
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge className={patternColors[pattern]} variant="outline">
            {pattern.toUpperCase()}
          </Badge>
        </div>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 text-xs">
        <div>
          <h4 className="font-semibold mb-1 flex items-center gap-1">
            <span className="text-green-600 dark:text-green-400">✓</span>
            {pros.map((pro, index) => (
              <span key={index}>
                {pro}
                {index < pros.length - 1 ? " • " : ""}
              </span>
            ))}
          </h4>
        </div>

        <div>
          <h4 className="font-semibold mb-1 flex items-center gap-1">
            <span className="text-orange-600 dark:text-orange-400">✗</span>
            {cons.map((con, index) => (
              <span key={index}>
                {con}
                {index < cons.length - 1 ? " • " : ""}
              </span>
            ))}
          </h4>
        </div>

        <div>
          <h4 className="font-semibold mb-1">Use: {useCases.join(", ")}</h4>
        </div>
      </CardContent>
    </Card>
  );
}
