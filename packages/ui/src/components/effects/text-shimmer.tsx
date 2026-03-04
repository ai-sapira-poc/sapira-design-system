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
              0% { background-position: 100% 0; }
              100% { background-position: -100% 0; }
            }
          `,
        }}
      />
      <span
        className={cn("inline-block bg-clip-text text-transparent", className)}
        style={{
          backgroundImage: `linear-gradient(110deg, var(--foreground, #111) 35%, var(--primary, #2563eb) 50%, var(--foreground, #111) 65%)`,
          backgroundSize: `${spread * 100}% 100%`,
          animation: `sapira-text-shimmer ${duration}s ease-in-out infinite`,
        }}
      >
        {children}
      </span>
    </>
  );
}

export { TextShimmer };
