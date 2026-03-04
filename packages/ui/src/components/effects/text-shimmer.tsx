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
  duration = 2,
  spread = 2,
  className,
}: TextShimmerProps) {
  return (
    <span
      className={cn("inline-block bg-clip-text text-transparent", className)}
      style={{
        backgroundImage: `linear-gradient(
          110deg,
          hsl(var(--foreground)) 35%,
          hsl(var(--foreground) / 0.5) 50%,
          hsl(var(--foreground)) 65%
        )`,
        backgroundSize: `${spread * 100}% 100%`,
        animation: `text-shimmer-sweep ${duration}s ease-in-out infinite`,
      }}
    >
      {children}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes text-shimmer-sweep {
              0% { background-position: 100% 0; }
              100% { background-position: -100% 0; }
            }
          `,
        }}
      />
    </span>
  );
}

export { TextShimmer };
