"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid place-items-center w-10 h-10 rounded-full border-2 border-[var(--shadow-color)] bg-[var(--card)] text-[var(--foreground)] shadow-pop-sm hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-pop active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all duration-200 ease-[var(--ease-bounce)]"
    >
      {mounted ? (isDark ? <Sun size={16} strokeWidth={2.5} /> : <Moon size={16} strokeWidth={2.5} />) : <span className="w-4 h-4" />}
    </button>
  );
}
