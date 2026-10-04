"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full flex items-center justify-center bg-surface border border-border text-foreground hover:bg-border transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
      aria-label="تبديل المظهر"
    >
      <Sun className="h-5 w-5 absolute transition-all scale-100 rotate-0 dark:scale-0 dark:rotate-90" />
      <Moon className="h-5 w-5 absolute transition-all scale-0 -rotate-90 dark:scale-100 dark:rotate-0" />
    </button>
  );
}
