import React from "react";
import Image from "next/image";
import { SkillItem } from "@/lib/types";

interface SkillBadgeProps {
  skill: SkillItem;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <a
      href={skill.url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-border-card bg-bg-card hover:border-accent/40 hover:bg-accent-subtle text-text-secondary transition-all duration-200 shrink-0 shadow-sm"
    >
      {skill.logo && (
        <div className="relative w-6 h-6 flex-shrink-0 opacity-90 group-hover:opacity-100 transition-opacity">
          <Image
            src={skill.logo}
            alt={`${skill.name} logo`}
            fill
            sizes="24px"
            className="object-contain"
          />
        </div>
      )}
      <span className="font-secondary text-xs sm:text-sm font-medium text-text-secondary group-hover:text-text-primary tracking-wide transition-colors whitespace-nowrap">
        {skill.name}
      </span>
    </a>
  );
}
