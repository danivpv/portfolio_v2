"use client";

import React from "react";
import Image from "next/image";
import { AcademicInstitutionItem } from "@/lib/types";

interface AcademicCardProps {
  inst: AcademicInstitutionItem;
  onSelect: (inst: AcademicInstitutionItem) => void;
}

export default function AcademicCard({ inst, onSelect }: AcademicCardProps) {
  return (
    <button
      onClick={() => onSelect(inst)}
      aria-label={`View curriculum for ${inst.institutionAcronym}`}
      className="group relative w-64 sm:w-72 flex-shrink-0 flex flex-col items-center justify-center text-center p-6 sm:p-7 rounded-2xl bg-transparent hover:bg-accent-subtle border border-border-card hover:border-accent/40 transition-all duration-300 cursor-pointer focus:outline-none focus:border-accent group-hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_rgba(52,211,153,0.2)]"
    >
      {/* TOP: Large, centered raw logo that breathes without bounding boxes */}
      <div className="relative w-full h-28 sm:h-32 mb-5 flex items-center justify-center">
        {inst.image ? (
          <Image
            src={inst.image}
            alt={`${inst.institutionAcronym} logo`}
            width={240}
            height={120}
            quality={85}
            className="w-auto h-auto max-w-full max-h-full object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="font-primary text-3xl text-text-primary font-bold z-10">
            {inst.institutionAcronym}
          </span>
        )}
      </div>

      {/* MIDDLE & BOTTOM: Centered Editorial Typography Hierarchy */}
      <div className="space-y-1.5 w-full">
        <p className="font-secondary text-xs sm:text-sm text-text-secondary font-medium line-clamp-1 group-hover:text-accent transition-colors">
          {inst.degree || "UNAM"}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-border-card w-full flex justify-center">
        <span className="font-mono text-xs uppercase tracking-widest font-semibold text-text-secondary group-hover:text-accent transition-colors">
          {inst.startDate}-{inst.endDate}
        </span>
      </div>
    </button>
  );
}
