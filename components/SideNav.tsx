"use client";

import React from "react";
import { NAV_ITEMS } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

interface SideNavProps {
  activeId?: string;
}

export default function SideNav({ activeId: propActiveId }: SideNavProps = {}) {
  const spyActiveId = useScrollSpy(SECTION_IDS, -150);
  const activeId = propActiveId ?? spyActiveId;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <>
      {/* Desktop & Tablet: De-boxed, minimalist left-aligned floating editorial index */}
      <aside
        aria-label="Editorial Section Index"
        className="fixed z-40 right-4 md:right-6 lg:right-10 xl:right-12 2xl:right-16 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-start gap-4 lg:gap-5 p-0 bg-transparent border-none shadow-none"
      >
        <div className="flex flex-col items-start gap-3">
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeId === item.id;
            const numberLabel = `0${index}`;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-label={item.label}
                className="group flex items-center gap-2.5 py-1 cursor-pointer focus:outline-none text-left transition-colors"
              >
                {/* Sans-serif numbering */}
                <span
                  className={`font-secondary text-xs transition-colors duration-200 ${
                    isActive ? "text-accent font-medium" : "text-text-muted group-hover:text-text-primary font-normal"
                  }`}
                >
                  {numberLabel}
                </span>

                {/* Sans-serif label: highlighted via color alone */}
                <span
                  className={`font-secondary text-xs uppercase tracking-widest transition-colors duration-200 ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-text-secondary group-hover:text-text-primary font-normal"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Theme Toggle centered relative to the section index list */}
        <div className="w-full flex items-center justify-center pt-1.5 pb-0.5">
          <ThemeToggle />
        </div>

        {/* Professional Issues Counter Badge located at the bottom of the sidebar list, centered */}
        <div className="w-full flex items-center justify-center pt-1.5">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent-subtle text-accent font-secondary text-[11px] font-medium border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>N | 0 Issues</span>
          </span>
        </div>
      </aside>

      {/* Mobile: Minimalist Floating Capsule Bar */}
      <aside
        aria-label="Mobile Navigation"
        className="fixed z-40 bottom-5 left-1/2 -translate-x-1/2 flex md:hidden items-center justify-between gap-1 px-4 py-2 rounded-full bg-bg-primary/90 backdrop-blur-md border border-border-card shadow-2xl w-[90%] max-w-sm"
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              aria-label={item.label}
              className={`relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-accent-subtle text-accent border border-accent/30 scale-105"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <Icon className="w-4 h-4" />
            </button>
          );
        })}

        <div className="w-px h-5 bg-border-card mx-1" />
        <ThemeToggle />
      </aside>
    </>
  );
}
