"use client";

import { useEffect, useState } from "react";

export function useThemeSwitch() {
	const preferDarkQuery = "(prefers-color-scheme: dark)";
  const storageKey = "theme";

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {}
  };

  const getInitialMode = () => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved === "light" || saved === "dark") return saved;
    } catch {}
    // Fall back to current DOM state (set by inline script) or system
    if (document.documentElement.classList.contains("dark")) return "dark";
    return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
  };

  const [mode, setMode] = useState("light");

  useEffect(() => {
    // Initialize from DOM/localStorage once on mount
    const initial = getInitialMode();
    setMode(initial);
    applyTheme(initial);

    // Keep in sync with system preference when no explicit user choice
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      // Respect explicit user choice if present
      const explicit = (() => {
        try { return window.localStorage.getItem(storageKey); } catch { return null; }
      })();
      if (explicit === "light" || explicit === "dark") return;
      const sys = mediaQuery.matches ? "dark" : "light";
      setMode(sys);
      applyTheme(sys);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  return [mode, setMode];
}
