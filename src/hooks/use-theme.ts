"use client";

import { useState, useEffect } from "react";

type Theme = "system" | "light" | "dark";

export function useTheme() {
  // Always start with "system" so SSR and first client render agree (no hydration mismatch).
  // A separate effect syncs to localStorage after mount.
  const [theme, setTheme] = useState<Theme>("system");

  // Sync from localStorage once after mount (runs only on client, after hydration)
  useEffect(() => {
    const stored = localStorage.getItem("nn-theme") as Theme | null;
    if (stored === "light" || stored === "dark") setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const apply = (resolved: "light" | "dark") =>
      root.setAttribute("data-theme", resolved);

    if (theme === "system") {
      localStorage.removeItem("nn-theme");
      apply(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    } else {
      localStorage.setItem("nn-theme", theme);
      apply(theme);
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (theme === "system") apply(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  // Cycles: system → light → dark → system
  const cycle = () =>
    setTheme((t) => (t === "system" ? "light" : t === "light" ? "dark" : "system"));

  return { theme, setTheme, cycle };
}
