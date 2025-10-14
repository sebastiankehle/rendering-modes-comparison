interface FlowDiagramProps {
  pattern: "ssr" | "ssg" | "isr" | "csr";
}

export function FlowDiagram({ pattern }: FlowDiagramProps) {
  const flows = {
    ssr: {
      steps: [
        { label: "Request", icon: "🌐" },
        { label: "Server Builds HTML", icon: "🖥️" },
        { label: "Send to Browser", icon: "📤" },
        { label: "Display", icon: "👁️" },
      ],
    },
    ssg: {
      steps: [
        { label: "Build Time", icon: "🏗️" },
        { label: "Generate HTML", icon: "📄" },
        { label: "CDN Cache", icon: "☁️" },
        { label: "Instant Serve", icon: "⚡" },
      ],
    },
    isr: {
      steps: [
        { label: "First Request", icon: "🌐" },
        { label: "Serve Cached", icon: "💾" },
        { label: "Background Rebuild", icon: "🔄" },
        { label: "Update Cache", icon: "✨" },
      ],
    },
    csr: {
      steps: [
        { label: "HTML Shell", icon: "📦" },
        { label: "Download JS", icon: "⬇️" },
        { label: "Execute JS", icon: "⚙️" },
        { label: "Render UI", icon: "🎨" },
      ],
    },
  };

  const currentFlow = flows[pattern];

  return (
    <div className="relative flex items-center justify-between gap-2 py-3">
      {currentFlow.steps.map((step, index) => (
        <div key={index} className="flex items-center gap-2 flex-1">
          <div className="flex flex-col items-center gap-1 flex-1">
            <div className="text-xl">{step.icon}</div>
            <div className="text-[10px] text-center text-muted-foreground font-medium leading-tight">
              {step.label}
            </div>
          </div>
          {index < currentFlow.steps.length - 1 && (
            <div className="flex items-center">
              <div className="h-[2px] w-4 bg-border relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[4px] border-l-border border-y-[3px] border-y-transparent" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
