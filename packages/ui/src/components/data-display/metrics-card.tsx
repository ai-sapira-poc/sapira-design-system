"use client";

import * as React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "../../lib/utils";

export interface MetricsCardProps extends React.ComponentProps<"div"> {
  label: string;
  value: string | number;
  change?: {
    value: number;
    trend: "positive" | "negative" | "neutral";
  };
  icon?: React.ReactNode;
  description?: string;
}

function MetricsCard({
  label,
  value,
  change,
  icon,
  description,
  className,
  ...props
}: MetricsCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-background p-4 transition-colors hover:bg-muted/30",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{label}</span>
        {icon && <span className="text-muted-foreground [&_svg]:h-4 [&_svg]:w-4">{icon}</span>}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold tabular-nums">{value}</span>
        {change && (
          <span
            className={cn(
              "flex items-center gap-0.5 text-xs font-medium",
              change.trend === "positive" && "text-emerald-600",
              change.trend === "negative" && "text-red-600",
              change.trend === "neutral" && "text-muted-foreground"
            )}
          >
            {change.trend === "positive" && <TrendingUp className="h-3 w-3" />}
            {change.trend === "negative" && <TrendingDown className="h-3 w-3" />}
            {change.value > 0 ? "+" : ""}
            {change.value}%
          </span>
        )}
      </div>
      {description && <p className="mt-1 text-xs text-muted-foreground">{description}</p>}
    </div>
  );
}

export { MetricsCard };
