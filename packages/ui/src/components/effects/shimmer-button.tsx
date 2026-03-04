"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface ShimmerButtonProps extends React.ComponentProps<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  background?: string;
}

function ShimmerButton({
  shimmerColor = "rgba(255,255,255,0.3)",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  background = "var(--primary, #2563eb)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-9 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-primary-foreground transition-all disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      style={{ background }}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          ["--shimmer-color" as string]: shimmerColor,
          ["--shimmer-size" as string]: shimmerSize,
          ["--shimmer-duration" as string]: shimmerDuration,
        }}
      >
        <div
          className="absolute inset-0 animate-[shimmer-sweep_var(--shimmer-duration)_ease-in-out_infinite]"
          style={{
            background: `linear-gradient(
              120deg,
              transparent 25%,
              var(--shimmer-color) 50%,
              transparent 75%
            )`,
            backgroundSize: "200% 100%",
          }}
        />
      </div>
      <span className="relative z-10">{children}</span>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes shimmer-sweep {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `,
        }}
      />
    </button>
  );
}

export { ShimmerButton };
