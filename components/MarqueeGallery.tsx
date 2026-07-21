import React from "react";

interface MarqueeGalleryProps {
  children: React.ReactNode;
  speed?: "normal" | "slow";
  direction?: "left" | "right";
  className?: string;
}

export default function MarqueeGallery({
  children,
  speed = "normal",
  direction = "left",
  className = "",
}: MarqueeGalleryProps) {
  const animationClass =
    direction === "left"
      ? speed === "slow"
        ? "animate-marquee-left-to-right-slow"
        : "animate-marquee-left-to-right"
      : speed === "slow"
      ? "animate-marquee-right-to-left-slow"
      : "animate-marquee-right-to-left";

  return (
    <div
      className={`group/marquee relative -mx-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)] py-2 ${className}`}
    >
      <div className="flex overflow-hidden">
        <div
          className={`flex gap-5 sm:gap-6 w-max ${animationClass} group-hover/marquee:[animation-play-state:paused] items-stretch transform-gpu will-change-transform`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
