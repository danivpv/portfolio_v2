import React from "react";
import { SOCIAL_LINKS } from "@/lib/data";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { SiHuggingface } from "react-icons/si";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-10 sm:py-12 border-border-card">
      <div className="flex items-baseline justify-between border-b border-border-card pb-4 mb-8 sm:mb-10">
        <h2 className="font-primary text-4xl sm:text-5xl lg:text-6xl font-normal text-text-primary tracking-wide leading-relaxed">
          Contact
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          04 // NOW
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Outreach & Systems Context */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h3 className="font-primary text-2xl sm:text-3xl font-normal text-text-primary">
              Start a Conversation
            </h3>
            <p className="font-secondary text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
              Whether you are a hiring manager recruiting senior ML platform and AI engineering talent, or an existing business exploring platform solutions and architectural discovery, I would love to connect. I engage directly on full-time roles, contract projects, and complex engineering challenges.
            </p>
          </div>

          <div className="pt-2">
            <div className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4 font-semibold">
              Direct Channels
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Email", url: `mailto:${SOCIAL_LINKS.email}`, value: SOCIAL_LINKS.email, icon: LuMail },
                { label: "GitHub", url: SOCIAL_LINKS.github, value: "danivpv", icon: LuGithub },
                { label: "LinkedIn", url: SOCIAL_LINKS.linkedin, value: "in/danivpv", icon: LuLinkedin },
                { label: "Hugging Face", url: SOCIAL_LINKS.huggingface, value: "danivpv", icon: SiHuggingface },
              ].map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith("mailto:") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl bg-bg-card hover:bg-accent-subtle border border-border-card hover:border-accent/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2 rounded-lg bg-bg-card text-text-secondary group-hover:text-accent transition-colors">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="font-secondary text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-text-muted group-hover:text-accent transition-colors">
                      {link.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Structured Discovery Form */}
        <div className="lg:col-span-7 bg-bg-card p-8 sm:p-10 rounded-2xl border border-border-card shadow-2xl hover:border-accent/40 transition-colors duration-300">
          <h3 className="font-primary text-2xl sm:text-3xl font-normal text-text-primary mb-2">
            Send a Message
          </h3>
          <p className="font-secondary text-sm text-text-secondary mb-8 font-normal">
            Tell me about your team, your open role, or the systems you are looking to build.
          </p>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

