import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

const patterns = [
  {
    title: "SSR",
    fullName: "Server-Side Rendering",
    description: "HTML is built on every request",
    icon: "🖥️",
    color: "bg-chart-1/10 text-chart-1 border-chart-1",
    pros: ["Fresh data every time", "SEO-friendly"],
    cons: ["Slower TTFB", "More server load"],
    useCases: "Dashboards, personalized pages, authenticated routes",
    path: "/ssr",
  },
  {
    title: "SSG",
    fullName: "Static Site Generation",
    description: "HTML built once at build time, then cached",
    icon: "⚡",
    color: "bg-chart-2/10 text-chart-2 border-chart-2",
    pros: ["Fastest load", "Served via CDN"],
    cons: ["Outdated data until next build"],
    useCases: "Blogs, docs, marketing pages",
    path: "/ssg",
  },
  {
    title: "ISR",
    fullName: "Incremental Static Regeneration",
    description: "Middle ground: rebuild pages that get traffic",
    icon: "🔄",
    color: "bg-chart-5/10 text-chart-5 border-chart-5",
    pros: ["Static speed + dynamic freshness"],
    cons: ["Slightly stale data window"],
    useCases: "E-commerce, feeds, landing pages",
    path: "/isr",
  },
  {
    title: "CSR",
    fullName: "Client-Side Rendering",
    description: "HTML shell + JS does everything after load",
    icon: "💻",
    color: "bg-chart-4/10 text-chart-4 border-chart-4",
    pros: ["Flexible", "Fully interactive"],
    cons: ["Slow first load", "Bad SEO"],
    useCases: "Dashboards, internal tools",
    path: "/csr",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto py-4 px-4 max-w-6xl min-h-screen flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-3xl font-bold">Next.js Rendering Modes</h1>
        <ThemeToggle />
      </div>

      <p className="text-sm text-muted-foreground mb-4 text-center">
        SSR, SSG, ISR, and CSR - Choose the right pattern for your app
      </p>

      <Separator className="mb-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
        {patterns.map((pattern) => (
          <Card
            key={pattern.title}
            className="hover:shadow-lg transition-shadow flex flex-col"
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between mb-1">
                <div className="text-2xl">{pattern.icon}</div>
                <Badge className={pattern.color} variant="outline">
                  {pattern.title}
                </Badge>
              </div>
              <CardTitle className="text-lg">{pattern.fullName}</CardTitle>
              <CardDescription className="text-xs">
                {pattern.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 flex-1 flex flex-col">
              <div className="text-xs space-y-1 flex-1">
                <div className="flex items-start gap-1">
                  <span className="text-green-600 dark:text-green-400">✓</span>
                  <p className="text-muted-foreground">
                    {pattern.pros.join(" • ")}
                  </p>
                </div>
                <div className="flex items-start gap-1">
                  <span className="text-orange-600 dark:text-orange-400">
                    ✗
                  </span>
                  <p className="text-muted-foreground">
                    {pattern.cons.join(" • ")}
                  </p>
                </div>
                <p className="text-muted-foreground pt-1">
                  <span className="font-medium">Use:</span> {pattern.useCases}
                </p>
              </div>

              <Link href={pattern.path} className="block">
                <Button className="w-full" size="sm">
                  View Demo →
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
