"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../primitives/tooltip";
import { cn } from "../../lib/utils";

export interface AIBadgeProps {
  label?: string;
  size?: "sm" | "md";
  tooltip?: string;
  showTooltip?: boolean;
  animated?: boolean;
  className?: string;
}

export function AIBadge({
  label = "AI",
  size = "sm",
  tooltip = "AI-generated content",
  showTooltip = true,
  animated = true,
  className,
}: AIBadgeProps) {
  const badge = (
    <motion.span
      className={cn(
        "inline-flex items-center gap-1 rounded-sm bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-600",
        size === "sm" && "px-1.5 py-0.5 text-[10px]",
        size === "md" && "px-2 py-1 text-xs",
        className
      )}
      initial={animated ? { opacity: 0, scale: 0.8 } : undefined}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        animate={animated ? { rotate: [0, 15, -15, 0] } : undefined}
        transition={
          animated
            ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
      >
        <Sparkles className={cn(size === "sm" ? "h-2.5 w-2.5" : "h-3 w-3")} />
      </motion.span>
      <span className="font-semibold">{label}</span>
    </motion.span>
  );

  if (!showTooltip) return badge;

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>{badge}</TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs text-xs">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
