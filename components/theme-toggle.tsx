"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { LuSun, LuMoon } from "react-icons/lu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="w-24 h-8 rounded-full bg-bg-card border border-border-card animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="group inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card border border-border-card hover:border-accent/40 text-text-secondary hover:text-accent shadow-sm transition-all duration-300 cursor-pointer focus:outline-none"
    >
      {isDark ? (
        <>
          <LuSun className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
          <span className="font-mono text-[10px] uppercase tracking-widest font-medium">Light</span>
        </>
      ) : (
        <>
          <LuMoon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-12" />
          <span className="font-mono text-[10px] uppercase tracking-widest font-medium">Dark</span>
        </>
      )}
    </button>
  );
}
