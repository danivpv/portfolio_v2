"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { LOOP_INDUSTRY, LOOP_ACADEMIC } from "@/lib/data";
import { IndustryExperienceItem, AcademicInstitutionItem } from "@/lib/types";
import { LuGraduationCap, LuBriefcase } from "react-icons/lu";
import MarqueeGallery from "@/components/MarqueeGallery";
import ExperienceCard from "@/components/experience/ExperienceCard";
import AcademicCard from "@/components/experience/AcademicCard";

const ExperienceModal = dynamic(() => import("./ExperienceModal"), {
  ssr: false,
});
const AcademicModal = dynamic(() => import("./AcademicModal"), {
  ssr: false,
});

export default function ExperienceTrackers() {
  const [selectedExp, setSelectedExp] = useState<IndustryExperienceItem | null>(null);
  const [selectedInst, setSelectedInst] = useState<AcademicInstitutionItem | null>(null);

  return (
    <div className="space-y-12 sm:space-y-14">
      {/* Part 1: Industry Track Record Marquee Gallery */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 border-l-2 border-accent/80 pl-3.5">
          <LuBriefcase className="w-5 h-5 text-accent shrink-0" />
          <h3 className="font-primary text-2xl sm:text-3xl font-normal text-text-primary leading-relaxed tracking-wide">
            Industry
          </h3>
        </div>

        {/* Animated Marquee Gallery */}
        <MarqueeGallery direction="left" speed="normal">
          {LOOP_INDUSTRY.map((exp: IndustryExperienceItem, idx: number) => (
            <ExperienceCard
              key={`${exp.company}-${idx}`}
              exp={exp}
              onSelect={setSelectedExp}
            />
          ))}
        </MarqueeGallery>
      </div>

      {/* Part 2: Academic Foundations Marquee Gallery */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 border-l-2 border-accent/80 pl-3.5">
          <LuGraduationCap className="w-6 h-6 text-accent shrink-0" />
          <h3 className="font-primary text-2xl sm:text-3xl font-normal text-text-primary leading-relaxed tracking-wide">
            Education
          </h3>
        </div>

        {/* Animated Marquee Gallery */}
        <MarqueeGallery direction="right" speed="slow">
          {LOOP_ACADEMIC.map((inst: AcademicInstitutionItem, idx: number) => (
            <AcademicCard
              key={`${inst.institutionAcronym}-${idx}`}
              inst={inst}
              onSelect={setSelectedInst}
            />
          ))}
        </MarqueeGallery>
      </div>

      {/* Progressive Disclosure Modals (Lazily loaded via next/dynamic) */}
      <ExperienceModal exp={selectedExp} onClose={() => setSelectedExp(null)} />
      <AcademicModal inst={selectedInst} onClose={() => setSelectedInst(null)} />
    </div>
  );
}
