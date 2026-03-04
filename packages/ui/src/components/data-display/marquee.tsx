"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface MarqueeProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  gap?: number;
}

function Marquee({
  children,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  className,
  gap = 16,
  ...props
}: MarqueeProps) {
  const animationDirection = direction === "left" ? "normal" : "reverse";
  // Duration based on a reasonable content width estimate; CSS handles the loop
  const duration = `${1000 / speed * 10}s`;

  return (
    <div
      className={cn("overflow-hidden relative w-full", className)}
      {...props}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes sapira-marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `,
        }}
      />
      <div
        className={cn(
          "flex w-max",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={{
          animation: `sapira-marquee ${duration} linear infinite`,
          animationDirection,
          gap: `${gap}px`,
        }}
      >
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ gap: `${gap}px` }} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

export { Marquee };
