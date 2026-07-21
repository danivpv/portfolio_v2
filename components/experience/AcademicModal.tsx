"use client";

import React from "react";
import Image from "next/image";
import { AcademicInstitutionItem } from "@/lib/types";
import { LuX, LuCircleCheck, LuExternalLink } from "react-icons/lu";

interface AcademicModalProps {
  inst: AcademicInstitutionItem | null;
  onClose: () => void;
}

export default function AcademicModal({ inst, onClose }: AcademicModalProps) {
  if (!inst) return null;

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
          {inst.image && (
            <div className="relative w-12 h-12 rounded-xl bg-bg-card border border-border-card shrink-0 overflow-hidden">
              <Image
                src={inst.image}
                alt={`${inst.institutionAcronym} logo`}
                width={48}
                height={48}
                quality={85}
                className="w-auto h-auto max-w-full max-h-full object-contain p-2"
              />
            </div>
          )}
          <div>
            <h3 className="font-primary text-3xl sm:text-4xl font-normal text-text-primary tracking-wide">
              {inst.institutionAcronym} — {inst.institutionName}
            </h3>
            <p className="font-secondary text-sm text-text-secondary mt-1">
              {inst.degree || "Research Scholar"} {inst.major && `(${inst.major})`} • Started {inst.startDate}
            </p>
          </div>
        </div>

        {/* Comprehensive Summary */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted">
            Academic Summary & Research Scope
          </h4>
          <p className="font-secondary text-sm text-text-secondary leading-relaxed whitespace-pre-line">
            {inst.summary}
          </p>
        </div>

        {/* Notable Curriculum */}
        {inst.notableCurriculum && inst.notableCurriculum.length > 0 && (
          <div className="space-y-3 pt-2 border-t border-border-card">
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Notable Curriculum & Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {inst.notableCurriculum.map((item, i) => (
                <span
                  key={i}
                  className="font-secondary text-sm text-text-secondary bg-bg-card px-3 py-1 rounded-full border border-border-card inline-flex items-center gap-2"
                >
                  <LuCircleCheck className="w-4 h-4 text-accent shrink-0" />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-6 border-t border-border-card mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-bg-card border border-border-card hover:bg-accent-subtle font-secondary text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
          >
            Close
          </button>
          {inst.externalLink && (
            <a
              href={inst.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-accent/50 text-accent hover:bg-accent-subtle bg-transparent font-secondary text-xs font-semibold tracking-wide transition-all cursor-pointer"
            >
              <span>Visit Institution</span>
              <LuExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
