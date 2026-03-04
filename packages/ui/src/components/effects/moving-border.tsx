"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export interface MovingBorderProps {
  duration?: number;
  borderRadius?: string;
  colors?: string[];
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
}

function MovingBorder({
  duration = 3000,
  borderRadius = "1rem",
  colors,
  className,
  children,
  as: Component = "div",
}: MovingBorderProps) {
  const c = colors ?? ["var(--primary, #2563eb)", "transparent", "var(--primary, #2563eb)"];

  return (
    <Component
      className={cn("relative overflow-hidden p-[2px]", className)}
      style={{ borderRadius }}
    >
      <div className="absolute inset-0 overflow-hidden" style={{ borderRadius }}>
        <motion.div
          className="absolute h-[300%] w-[300%]"
          style={{
            top: "-100%",
            left: "-100%",
            background: `conic-gradient(from 0deg, ${c.join(", ")})`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div
        className="relative z-10 bg-background"
        style={{ borderRadius: `calc(${borderRadius} - 2px)` }}
      >
        {children}
      </div>
    </Component>
  );
}

export { MovingBorder };
