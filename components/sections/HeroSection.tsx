import React from "react";
import Image from "next/image";
import { HERO_DATA } from "@/lib/data";
import { LuArrowRight, LuDownload } from "react-icons/lu";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[auto] lg:min-h-[68vh] flex items-center pt-8 pb-10 sm:pt-10 sm:pb-12 overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-12 items-center w-full">
        {/* Editorial Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="font-mono text-xs uppercase tracking-widest text-accent font-normal mb-4 sm:mb-5">
            {HERO_DATA.badge}
          </div>

          <h1 className="font-primary text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal tracking-normal text-text-primary mb-5 sm:mb-6 leading-[1.16]">
            {HERO_DATA.headlinePrefix}
            <br className="hidden md:block" />
            <span className="italic font-normal text-text-primary/90">{HERO_DATA.headlineHighlight}</span>
          </h1>

          <p className="font-secondary text-sm sm:text-base md:text-lg text-text-secondary max-w-xl mb-6 sm:mb-8 leading-relaxed font-normal">
            {HERO_DATA.bioPrefix}
            <span className="italic text-text-primary">{HERO_DATA.bioHighlight}</span>
            {HERO_DATA.bioSuffix}
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={HERO_DATA.ctaLink}
              className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-accent/80 text-accent font-secondary text-xs sm:text-sm font-medium hover:bg-accent-subtle hover:border-accent hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 tracking-wide cursor-pointer"
            >
              <span>{HERO_DATA.ctaText}</span>
              <LuArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={HERO_DATA.secondaryCtaLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-bg-card hover:bg-accent-subtle text-text-secondary hover:text-text-primary font-secondary text-xs sm:text-sm font-normal border border-border-card hover:border-accent/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 tracking-wide cursor-pointer"
            >
              {HERO_DATA.secondaryCtaText}
            </a>
            <a
              href="/cv.pdf"
              download="Daniel_Parra_CV.pdf"
              aria-label="Download Curriculum Vitae"
              className="group inline-flex items-center gap-2 px-4 py-2.5 sm:py-3 rounded-lg bg-bg-card hover:bg-accent-subtle text-text-secondary hover:text-accent font-secondary text-xs font-semibold uppercase tracking-wider border border-border-card hover:border-accent/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shrink-0 cursor-pointer"
            >
              <span>CV</span>
              <LuDownload className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Editorial Portrait Frame */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-start xl:justify-center pt-6 sm:pt-8 lg:pt-0">
          <div className="relative z-0 w-60 sm:w-72 md:w-80 lg:w-[320px] xl:w-[380px] aspect-square">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-bg-card border border-accent/40 shadow-[0_0_50px_-10px_rgba(52,211,153,0.35)] select-none">
              <Image
                src="/hero_square_v2.jpg"
                alt="Daniel Parra — Editorial Portrait"
                fill
                priority
                sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 380px"
                quality={90}
                className="object-cover object-center drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
