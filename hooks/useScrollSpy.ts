"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook using IntersectionObserver to detect the currently active section.
 * React 19 compatible with automatic cleanup on unmount.
 */
export function useScrollSpy(sectionIds: string[], offsetPx: number = -120) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");
  const sectionIdsKey = sectionIds.join(",");

  useEffect(() => {
    if (typeof window === "undefined" || !sectionIdsKey) return;

    const ids = sectionIdsKey.split(",");
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: `${offsetPx}px 0px -55% 0px`,
      threshold: 0,
    });

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [sectionIdsKey, offsetPx]);

  return activeId;
}


