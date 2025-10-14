"use client";

import { useState, useEffect } from "react";
import { RenderingDemo } from "@/components/rendering-demo";
import { PatternInfo } from "@/components/pattern-info";
import { FlowDiagram } from "@/components/flow-diagram";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function CSRPage() {
  const [timestamp, setTimestamp] = useState<string>("Loading...");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This runs in the browser after the component mounts
    setTimestamp(new Date().toISOString());
    setMounted(true);
  }, []);

  return (
    <div className="container mx-auto py-4 px-4 max-w-6xl min-h-screen flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">CSR - Client-Side Rendering</h1>
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
            title="CSR"
            description="JS renders UI in the browser."
            pattern="csr"
            pros={["Highly interactive", "Rich UX"]}
            cons={["Slower initial load", "Poor SEO"]}
            useCases={["Dashboards", "Web apps", "Admin panels"]}
          />

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">How CSR Works</h2>
            <FlowDiagram pattern="csr" />
          </div>

          <div className="bg-muted p-3 rounded-lg">
            <p className="text-xs font-semibold mb-2">Code Example:</p>
            <pre className="text-[10px] leading-tight">
              <code>{`'use client'
import { useState, useEffect } from 'react'

export default function Page() {
  const [data, setData] = useState('')
  useEffect(() => {
    setData(new Date().toISOString())
  }, [])
  return <div>{data}</div>
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          {mounted ? (
            <RenderingDemo
              pattern="csr"
              timestamp={timestamp}
              renderLocation="client"
            />
          ) : (
            <div className="bg-muted p-8 rounded-lg text-center text-muted-foreground text-sm">
              Loading client-side content...
            </div>
          )}

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-xs text-muted-foreground">
              💡 View page source - content not in HTML, rendered by JS in
              browser.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
