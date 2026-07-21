"use client";

import React from "react";
import { LuChevronDown } from "react-icons/lu";

export interface TocSection {
  level: number;
  title: string;
  id: string;
  subsections: {
    level: number;
    title: string;
    id: string;
  }[];
}

export function parseHierarchicalTableOfContents(markdown: string): TocSection[] {
  const lines = markdown.split(/\r?\n/);
  const sections: TocSection[] = [];
  let currentSection: TocSection | null = null;
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const match = /^##(#?)\s+(.+)$/.exec(line.trim());
    if (match) {
      const isLevel3 = match[1] === "#";
      const title = match[2].trim();
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

      if (!isLevel3) {
        currentSection = { level: 2, title, id, subsections: [] };
        sections.push(currentSection);
      } else {
        if (currentSection) {
          currentSection.subsections.push({ level: 3, title, id });
        } else {
          currentSection = { level: 2, title, id, subsections: [] };
          sections.push(currentSection);
        }
      }
    }
  }
  return sections;
}

export default function TableOfContents({ sections }: { sections: TocSection[] }) {
  // We track expanded sections; defaults to collapsed (empty object)
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});

  const toggleSection = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (sections.length === 0) return null;

  return (
    <aside
      aria-label="Table of contents"
      className="lg:col-span-4 w-full lg:sticky lg:top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-1 self-start"
    >
      <div className="p-6 rounded-2xl bg-bg-card border border-border-card shadow-xl space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent font-semibold border-b border-border-card pb-3">
          <span>{"// Table of Contents"}</span>
        </div>

        <ul className="space-y-3 font-secondary text-xs sm:text-sm">
          {sections.map((section) => {
            const isExpanded = Boolean(expanded[section.id]);
            const hasSubsections = section.subsections.length > 0;

            return (
              <li key={section.id} className="space-y-1.5">
                <div className="flex items-start justify-between gap-1 group">
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(section.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                        window.history.pushState(null, "", `#${section.id}`);
                      }
                    }}
                    className="flex-1 text-text-primary hover:text-accent font-medium transition-colors py-0.5 leading-relaxed"
                  >
                    {section.title}
                  </a>
                  {hasSubsections && (
                    <button
                      type="button"
                      onClick={(e) => toggleSection(section.id, e)}
                      aria-label={isExpanded ? "Collapse subsections" : "Expand subsections"}
                      className="p-1 text-text-muted hover:text-text-primary transition-colors rounded hover:bg-accent-subtle shrink-0 cursor-pointer"
                    >
                      <LuChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpanded ? "rotate-0" : "-rotate-90"
                        }`}
                      />
                    </button>
                  )}
                </div>

                {hasSubsections && isExpanded && (
                  <ul className="pl-4 border-l border-border-card space-y-1.5 mt-1 animate-fade-in">
                    {section.subsections.map((sub) => (
                      <li key={sub.id}>
                        <a
                          href={`#${sub.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(sub.id);
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                              window.history.pushState(null, "", `#${sub.id}`);
                            }
                          }}
                          className="block text-text-secondary hover:text-accent transition-colors py-0.5 leading-relaxed text-xs"
                        >
                          ↳ {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
