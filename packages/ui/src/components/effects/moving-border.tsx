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
  duration = 2000,
  borderRadius = "1.75rem",
  colors = ["hsl(var(--primary))", "hsl(var(--primary) / 0.3)", "hsl(var(--primary))"],
  className,
  children,
  as: Component = "div",
}: MovingBorderProps) {
  return (
    <Component
      className={cn("relative overflow-hidden p-[2px]", className)}
      style={{ borderRadius }}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius }}
      >
        <motion.div
          className="absolute h-[200%] w-[200%]"
          style={{
            top: "-50%",
            left: "-50%",
            background: `conic-gradient(from 0deg, ${colors.join(", ")}, transparent)`,
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
