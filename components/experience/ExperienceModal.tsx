"use client";

import React from "react";
import Image from "next/image";
import { IndustryExperienceItem } from "@/lib/types";
import { LuX, LuCircleCheck, LuExternalLink } from "react-icons/lu";

interface ExperienceModalProps {
  exp: IndustryExperienceItem | null;
  onClose: () => void;
}

export default function ExperienceModal({ exp, onClose }: ExperienceModalProps) {
  if (!exp) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/60 animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-bg-primary border border-border-card p-6 sm:p-8 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-bg-card hover:bg-accent-subtle border border-border-card text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
        >
          <LuX className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 border-b border-border-card pb-5">
          {exp.image && (
            <div className="relative w-12 h-12 rounded-xl bg-bg-card border border-border-card shrink-0 overflow-hidden">
              <Image
                src={exp.image}
                alt={`${exp.company} logo`}
                width={48}
                height={48}
                quality={85}
                className="w-auto h-auto max-w-full max-h-full object-contain p-2"
              />
            </div>
          )}
          <div>
            <h3 className="font-primary text-3xl sm:text-4xl font-normal text-text-primary tracking-wide">
              {exp.company}
            </h3>
            <p className="font-secondary text-sm text-text-secondary mt-1">
              {exp.title} — {exp.date}
            </p>
          </div>
        </div>

        {/* Main Tech Stack */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted">
            Core Technologies & Infrastructure Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, i) => (
              <span
                key={i}
                className="font-secondary text-sm text-text-secondary bg-bg-card px-3 py-1 rounded-full border border-border-card"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Verifiable Achievements */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted">
            Architectural Scope & Verifiable Achievements
          </h4>
          <ul className="space-y-3">
            {exp.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-3 font-secondary text-sm text-text-secondary leading-relaxed">
                <LuCircleCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Domain Keywords */}
        <div className="space-y-3 pt-2 border-t border-border-card">
          <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted">
            Domain Keywords
          </h4>
          <div className="flex flex-wrap gap-2">
            {exp.keywords.map((kw, i) => (
              <span
                key={i}
                className="font-secondary text-sm text-text-secondary bg-bg-card px-3 py-1 rounded-full border border-border-card"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-6 border-t border-border-card mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-bg-card border border-border-card hover:bg-accent-subtle font-secondary text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
          >
            Close
          </button>
          {exp.externalUrl && (
            <a
              href={exp.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-accent/50 text-accent hover:bg-accent-subtle bg-transparent font-secondary text-xs font-semibold tracking-wide transition-all cursor-pointer"
            >
              <span>Visit Company</span>
              <LuExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
