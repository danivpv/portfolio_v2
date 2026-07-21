"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    let cancelled = false;
    setError(null);
    ref.current.innerHTML = "";

    mermaid.initialize({
      startOnLoad: false,
      theme: theme === "light" ? "default" : "dark",
      securityLevel: "loose",
    });

    const id = `mermaid-${Math.random().toString(36).substring(2, 11)}`;

    mermaid
      .render(id, chart)
      .then(({ svg }) => {
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
        }
      })
      .catch((err) => {
        if (cancelled) return;
        console.error("Mermaid rendering error:", { chart, error: err.message });
        setError(err.message || "Syntax error in Mermaid diagram");
        if (ref.current) {
          ref.current.innerHTML = `
            <div className="border border-red-500/40 rounded-lg p-4 bg-red-500/10 text-red-400 font-mono text-xs">
              <strong>⚠️ Unable to render diagram</strong>
              <pre className="mt-2 whitespace-pre-wrap overflow-x-auto">${err.message || "Syntax error"}</pre>
            </div>
          `;
        }
      });

    return () => {
      cancelled = true;
    };
  }, [chart, theme]);

  return (
    <div className="my-8 p-6 bg-bg-card rounded-xl border border-border-card overflow-x-auto shadow-xl [&_.mermaid-container_svg]:max-w-full [&_.mermaid-container_svg]:h-auto">
      <div ref={ref} className="mermaid-container flex justify-center" />
    </div>
  );
}
