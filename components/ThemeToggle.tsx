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
      className="theme-toggle"
    >
      {mounted ? (isDark ? <Sun size={13} strokeWidth={2} /> : <Moon size={13} strokeWidth={2} />) : <span style={{ width: 13, height: 13 }} />}
    </button>
  );
}
