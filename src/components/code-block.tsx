import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
  className?: string;
}

export function CodeBlock({
  code,
  filename = "page.tsx",
  language = "tsx",
  className,
}: CodeBlockProps) {
  const lines = code.replace(/\n$/, "").split("\n");
  return (
    <div
      className={cn(
        "overflow-hidden border border-border bg-muted/40 font-mono",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-3 py-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>{filename}</span>
        <span>{language}</span>
      </div>
      <pre className="overflow-x-auto p-3 text-[12px] leading-relaxed">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-3 w-6 shrink-0 select-none text-right text-muted-foreground/60">
                {i + 1}
              </span>
              <span className="whitespace-pre">{line || " "}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
