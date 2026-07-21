import React from "react";

export default function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden transform-gpu will-change-transform">
      {/* High-performance hardware composite layers using radial-gradient plus GPU blur */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06)_0%,transparent_70%)] blur-[60px] transform-gpu will-change-transform" />
      <div className="absolute top-1/3 -right-40 h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.06)_0%,transparent_70%)] blur-[60px] transform-gpu will-change-transform" />
      <div className="absolute -bottom-40 left-1/4 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] blur-[60px] transform-gpu will-change-transform" />
    </div>
  );
}
