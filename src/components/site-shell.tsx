import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

type Pattern = "ssr" | "ssg" | "isr" | "csr";

export const patternMeta: Record<
  Pattern,
  {
    key: Pattern;
    label: string;
    name: string;
    tagline: string;
    directive: string;
    dotClass: string;
    fgClass: string;
  }
> = {
  ssr: {
    key: "ssr",
    label: "SSR",
    name: "Server-Side Rendering",
    tagline: "HTML built on every request.",
    directive: "export const dynamic = 'force-dynamic'",
    dotClass: "bg-[var(--ssr)]",
    fgClass: "text-[var(--ssr)]",
  },
  ssg: {
    key: "ssg",
    label: "SSG",
    name: "Static Site Generation",
    tagline: "HTML generated once at build time.",
    directive: "export const dynamic = 'force-static'",
    dotClass: "bg-[var(--ssg)]",
    fgClass: "text-[var(--ssg)]",
  },
  isr: {
    key: "isr",
    label: "ISR",
    name: "Incremental Static Regeneration",
    tagline: "Cached static, regenerated in the background.",
    directive: "export const revalidate = 10",
    dotClass: "bg-[var(--isr)]",
    fgClass: "text-[var(--isr)]",
  },
  csr: {
    key: "csr",
    label: "CSR",
    name: "Client-Side Rendering",
    tagline: "Shell delivered, UI painted in the browser.",
    directive: "'use client'",
    dotClass: "bg-[var(--csr)]",
    fgClass: "text-[var(--csr)]",
  },
};

export function TopBar({ path }: { path?: string }) {
  return (
    <header className="sticky top-0 z-10 -mx-4 border-b border-border bg-background/80 px-4 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between font-mono text-xs">
        <Link
          href="/"
          className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="inline-flex size-5 items-center justify-center border border-border text-[10px] font-medium text-foreground">
            rm
          </span>
          <span>rendering-modes</span>
          {path ? (
            <>
              <span className="text-border">/</span>
              <span className="text-foreground">{path}</span>
            </>
          ) : null}
        </Link>
        <div className="flex items-center gap-2">
          <span className="hidden text-[10px] uppercase tracking-widest text-muted-foreground sm:inline">
            v0.1
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-svh max-w-6xl flex-col px-4">
      {children}
    </div>
  );
}

export function Section({
  label,
  title,
  children,
  className,
}: {
  label: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "border border-border bg-card/60 backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-border px-3 py-1.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
        {title ? (
          <span className="font-mono text-[10px] text-muted-foreground/70">
            {title}
          </span>
        ) : null}
      </div>
      <div className="p-3">{children}</div>
    </section>
  );
}

export function PatternDot({ pattern }: { pattern: Pattern }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block size-2 rounded-[1px]",
        patternMeta[pattern].dotClass
      )}
    />
  );
}
