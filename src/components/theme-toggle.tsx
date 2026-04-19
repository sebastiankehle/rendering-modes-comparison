"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-7 w-7 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:text-foreground hover:bg-accent disabled:opacity-50"
      disabled={!mounted}
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-3.5" strokeWidth={1.5} />
        ) : (
          <Moon className="size-3.5" strokeWidth={1.5} />
        )
      ) : null}
    </button>
  );
}
