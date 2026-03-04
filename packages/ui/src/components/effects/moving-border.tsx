"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface MovingBorderProps {
  duration?: number;
  borderRadius?: string;
  colors?: string[];
  borderWidth?: number;
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
}

function MovingBorder({
  duration = 3000,
  borderRadius = "1rem",
  colors,
  borderWidth = 2,
  className,
  children,
  as: Component = "div",
}: MovingBorderProps) {
  const c = colors ?? ["var(--primary, #2563eb)", "transparent", "var(--primary, #2563eb)"];
  const id = React.useId().replace(/:/g, "");

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes sapira-moving-border-${id} {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `,
        }}
      />
      <Component
        className={cn("relative overflow-hidden group", className)}
        style={{ borderRadius, padding: borderWidth }}
      >
        {/* Rotating gradient */}
        <div
          className="absolute inset-[-50%] z-0"
          style={{
            background: `conic-gradient(from 0deg, ${c.join(", ")})`,
            animation: `sapira-moving-border-${id} ${duration / 1000}s linear infinite`,
          }}
        />
        {/* Inner content */}
        <div
          className="relative z-10 bg-background transition-colors group-hover:bg-accent/30"
          style={{ borderRadius: `calc(${borderRadius} - ${borderWidth}px)` }}
        >
          {children}
        </div>
      </Component>
    </>
  );
}

export { MovingBorder };
