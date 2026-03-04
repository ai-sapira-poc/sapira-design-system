"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface GlowingEffectProps {
  spread?: number;
  glow?: boolean;
  proximity?: number;
  borderWidth?: number;
  disabled?: boolean;
  className?: string;
  color?: string;
  children?: React.ReactNode;
}

function GlowingEffect({
  spread = 80,
  glow = true,
  proximity = 100,
  borderWidth = 2,
  disabled = false,
  className,
  color = "var(--primary)",
  children,
}: GlowingEffectProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || !containerRef.current || !overlayRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      overlayRef.current.style.setProperty("--gx", `${x}px`);
      overlayRef.current.style.setProperty("--gy", `${y}px`);
      overlayRef.current.style.opacity = "1";
    },
    [disabled]
  );

  const handleMouseLeave = React.useCallback(() => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "0";
    }
  }, []);

  if (disabled || !glow) {
    return <div className={cn("relative", className)}>{children}</div>;
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", className)}
    >
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] overflow-hidden transition-opacity duration-300"
        style={{ opacity: 0 }}
      >
        <div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background: `radial-gradient(${spread}px circle at var(--gx, -100px) var(--gy, -100px), ${color}, transparent)`,
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: borderWidth,
          }}
        />
      </div>
      {children}
    </div>
  );
}

export { GlowingEffect };
