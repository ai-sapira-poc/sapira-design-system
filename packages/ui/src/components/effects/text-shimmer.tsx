"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface TextShimmerProps {
  children: React.ReactNode;
  duration?: number;
  spread?: number;
  className?: string;
}

function TextShimmer({
  children,
  duration = 2.5,
  spread = 2,
  className,
}: TextShimmerProps) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes sapira-text-shimmer {
              0% { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
          `,
        }}
      />
      <span
        className={cn("inline-block", className)}
        style={{
          backgroundImage: `linear-gradient(110deg, currentColor 35%, #60a5fa 45%, #a78bfa 50%, #60a5fa 55%, currentColor 65%)`,
          backgroundSize: `${spread * 100}% 100%`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: `sapira-text-shimmer ${duration}s ease-in-out infinite`,
        }}
      >
        {children}
      </span>
    </>
  );
}

export { TextShimmer };
