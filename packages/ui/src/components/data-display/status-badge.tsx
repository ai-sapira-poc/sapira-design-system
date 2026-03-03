"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const defaultColorMap: Record<string, string> = {
  active: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  success: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  pending: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  warning: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  error: "bg-red-500/10 text-red-700 border-red-500/20",
  failed: "bg-red-500/10 text-red-700 border-red-500/20",
  inactive: "bg-muted text-muted-foreground border-border",
  draft: "bg-muted text-muted-foreground border-border",
  info: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  processing: "bg-violet-500/10 text-violet-700 border-violet-500/20",
};

export interface StatusBadgeProps extends React.ComponentProps<"span"> {
  status: string;
  label?: string;
  colorMap?: Record<string, string>;
  dot?: boolean;
}

function StatusBadge({
  status,
  label,
  colorMap,
  dot = true,
  className,
  ...props
}: StatusBadgeProps) {
  const colors = { ...defaultColorMap, ...colorMap };
  const colorClass = colors[status] ?? "bg-muted text-muted-foreground border-border";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        colorClass,
        className
      )}
      {...props}
    >
      {dot && (
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      )}
      {label ?? status}
    </span>
  );
}

export { StatusBadge };
