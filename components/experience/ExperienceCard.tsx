"use client";

import React from "react";
import Image from "next/image";
import { IndustryExperienceItem } from "@/lib/types";

interface ExperienceCardProps {
  exp: IndustryExperienceItem;
  onSelect: (exp: IndustryExperienceItem) => void;
}

export default function ExperienceCard({ exp, onSelect }: ExperienceCardProps) {
  return (
    <button
      onClick={() => onSelect(exp)}
      aria-label={`View details for ${exp.company} (${exp.title})`}
      className="group relative w-64 sm:w-72 flex-shrink-0 flex flex-col items-center justify-center text-center p-6 sm:p-7 rounded-2xl bg-transparent hover:bg-accent-subtle border border-border-card hover:border-accent/40 transition-all duration-300 cursor-pointer focus:outline-none focus:border-accent group-hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_rgba(52,211,153,0.2)]"
    >
      {/* TOP: Large, centered raw logo that breathes without bounding boxes */}
      <div className="relative w-full h-28 sm:h-32 mb-5 flex items-center justify-center">
        {exp.image ? (
          <Image
            src={exp.image}
            alt={`${exp.company} logo`}
            width={240}
            height={120}
            quality={85}
            className="w-auto h-auto max-w-full max-h-full object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="font-primary text-3xl text-text-primary font-bold z-10">
            {exp.company}
          </span>
        )}
      </div>

      {/* MIDDLE & BOTTOM: Centered Editorial Typography Hierarchy */}
      <div className="space-y-1.5 w-full">
        <h4 className="font-primary text-2xl sm:text-3xl font-normal text-text-primary group-hover:text-accent tracking-wide transition-colors">
          {exp.company}
        </h4>
        <p className="font-secondary text-xs sm:text-sm text-text-secondary font-medium line-clamp-1">
          {exp.title}
        </p>
      </div>

      {/* Optional Subtle Editorial Status Tag */}
      <div className="mt-4 pt-3 border-t border-border-card w-full flex justify-center">
        <span className="font-mono text-xs uppercase tracking-widest font-semibold text-text-secondary group-hover:text-accent transition-colors">
          {exp.date.split("—")[0].trim()}
        </span>
      </div>
    </button>
  );
}
