"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const sizeVariants = cva("w-full rounded-full bg-muted overflow-hidden", {
  variants: {
    size: { sm: "h-1.5", md: "h-2.5", lg: "h-4" },
  },
  defaultVariants: { size: "md" },
});

export interface ProgressBarProps extends React.ComponentProps<"div"> {
  value: number;
  max: number;
  label?: string;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning" | "danger";
}

function getAutoColor(pct: number) {
  if (pct > 66) return "bg-green-500";
  if (pct > 33) return "bg-yellow-500";
  return "bg-red-500";
}

const variantColors: Record<string, string> = {
  success: "bg-green-500",
  warning: "bg-yellow-500",
  danger: "bg-red-500",
};

function ProgressBar({ value, max, label, showValue, size = "md", variant = "default", className, ...props }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  const barColor = variant === "default" ? getAutoColor(pct) : variantColors[variant] ?? "bg-primary";

  return (
    <div className={cn("space-y-1", className)} {...props}>
      {(label || showValue) && (
        <div className="flex justify-between text-sm">
          {label && <span className="text-muted-foreground">{label}</span>}
          {showValue && <span className="font-medium">{value}/{max}</span>}
        </div>
      )}
      <div className={sizeVariants({ size })}>
        <div className={cn("h-full rounded-full transition-all", barColor)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export { ProgressBar };
