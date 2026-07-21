import React from "react";
import { SKILLS_DATA } from "@/lib/data";
import SkillsMarquee from "@/components/SkillsMarquee";

export default function AboutSection() {
  const categories = Array.from(new Set(SKILLS_DATA.map((s) => s.category)));

  return (
    <section id="about" className="scroll-mt-20 py-8 sm:py-10">
      <div className="flex items-baseline justify-between border-b border-border-card pb-4 mb-8 sm:mb-10">
        <h2 className="font-primary text-4xl sm:text-5xl font-normal text-text-primary tracking-wide leading-relaxed">
          Motivation
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          01 // Why
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Editorial Bio Text */}
        <div className="lg:col-span-6 space-y-5 text-text-secondary leading-relaxed font-secondary text-base sm:text-lg font-normal">
          <p>
            Early in my career developing RAG pipelines and forecasting algorithms at Kuona and Entropía, I learned a hard truth: mathematical modeling is only the &apos;last mile&apos; of enterprise AI. A state-of-the-art model has zero business impact if it suffers from training-serving skew, no lineage of data to model lineage or event tracing in production.
          </p>
          <p>
            To own true end-to-end impact across the analytics value chain, I built deep platform capabilities, from cloud infrastructure to fullstack integration and from data pipelines to model serving. I partner directly with teams through technical and business discovery to build and ship production AI/ML systems that deliver measurable bottom-line value.
          </p>
          <p className="font-secondary text-xs sm:text-sm text-text-primary pt-2 border-l-2 border-accent/60 pl-4 italic">
            Focus: Bridging last mile AI and ML models to the operational reality of a business.
          </p>
        </div>

        {/* Categorized Skills & Ecosystem Marquee Galleries */}
        <SkillsMarquee categories={categories} skills={SKILLS_DATA} />
      </div>
    </section>
  );
}
