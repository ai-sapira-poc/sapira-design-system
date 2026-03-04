"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
  spread = 40,
  glow = true,
  proximity = 64,
  borderWidth = 2,
  disabled = false,
  className,
  color = "hsl(var(--primary))",
  children,
}: GlowingEffectProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const opacity = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const distX = Math.max(0, -x, x - rect.width);
      const distY = Math.max(0, -y, y - rect.height);
      const dist = Math.sqrt(distX * distX + distY * distY);

      if (dist < proximity) {
        mouseX.set(x);
        mouseY.set(y);
        opacity.set(1);
      } else {
        opacity.set(0);
      }
    },
    [disabled, proximity, mouseX, mouseY, opacity]
  );

  const handleMouseLeave = React.useCallback(() => {
    opacity.set(0);
  }, [opacity]);

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
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] overflow-hidden"
        style={{ opacity }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: useMotionValue(""),
            ...(({} as any)),
          }}
        />
        {/* Glow border overlay */}
        <motion.div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            opacity,
            background: `radial-gradient(circle at var(--gx) var(--gy), ${color}, transparent ${spread}%)`,
            mask: `
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0)
            `,
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
            padding: borderWidth,
          }}
        />
      </motion.div>
      {/* Separate effect layer using CSS custom properties driven by motion values */}
      <GlowOverlay
        mouseX={mouseX}
        mouseY={mouseY}
        opacity={opacity}
        spread={spread}
        borderWidth={borderWidth}
        color={color}
      />
      {children}
    </div>
  );
}

function GlowOverlay({
  mouseX,
  mouseY,
  opacity,
  spread,
  borderWidth,
  color,
}: {
  mouseX: any;
  mouseY: any;
  opacity: any;
  spread: number;
  borderWidth: number;
  color: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const unsubX = mouseX.on("change", (v: number) => {
      el.style.setProperty("--gx", `${v}px`);
    });
    const unsubY = mouseY.on("change", (v: number) => {
      el.style.setProperty("--gy", `${v}px`);
    });
    const unsubO = opacity.on("change", (v: number) => {
      el.style.opacity = String(v);
    });

    return () => {
      unsubX();
      unsubY();
      unsubO();
    };
  }, [mouseX, mouseY, opacity]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] overflow-hidden"
      style={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `radial-gradient(circle ${spread}px at var(--gx, -100px) var(--gy, -100px), ${color}, transparent)`,
          mask: `
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0)
          `,
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: borderWidth,
        }}
      />
    </div>
  );
}

export { GlowingEffect };
