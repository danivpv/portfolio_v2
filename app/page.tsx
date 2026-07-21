import React from "react";
import { SOCIAL_LINKS } from "@/lib/data";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import SideNav from "@/components/SideNav";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function PortfolioSPA() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Iván Parra Verde",
    url: "https://danivpv.com",
    jobTitle: "Senior ML & AI Engineer",
    sameAs: [
      SOCIAL_LINKS.github,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.huggingface,
    ],
    description:
      "Production machine learning systems, and autonomous AI agent architectures.",
  };

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Ambient glowing background aura (adapts between Dark & Light themes) */}
      <BackgroundOrbs />

      {/* Fixed Vertical Navigation with integrated Theme Switcher & ScrollSpy */}
      <SideNav />

      {/* Main Single Page Application Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:pl-10 md:pr-40 lg:pl-14 lg:pr-44 xl:pl-16 xl:pr-36 2xl:pr-24 py-8 md:py-12 space-y-16 md:space-y-24">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
