import React from "react";
import ExperienceTrackers from "@/components/experience/ExperienceTrackers";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 py-8 sm:py-10 relative">
      {/* Section Header */}
      <div className="flex items-baseline justify-between border-b border-border-card pb-4 mb-8 sm:mb-10">
        <h2 className="font-primary text-4xl sm:text-5xl font-normal text-text-primary tracking-wide leading-relaxed">
          Experience
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          02 // Where
        </span>
      </div>

      <ExperienceTrackers />
    </section>
  );
}

