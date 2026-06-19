"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Hydration guard: theme is unknown on the server, so we only render the
  // resolved icon after mount to avoid an SSR/client mismatch. Setting state
  // once on mount is the intended next-themes pattern here.
  // eslint-disable-next-line react-hooks/set-state-in-effect
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
