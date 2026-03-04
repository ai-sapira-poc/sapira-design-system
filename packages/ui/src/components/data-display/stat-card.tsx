"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface StatCardProps {
  value: string | number;
  label: string;
  onClick?: () => void;
  highlight?: boolean;
  color?: string;
  className?: string;
}

function StatCard({ value, label, onClick, highlight, color, className }: StatCardProps) {
  const Comp = onClick ? "button" : "div";
  return (
    <Comp
      onClick={onClick}
      className={cn(
        "rounded-lg border bg-card p-4 text-left transition-all",
        onClick && "cursor-pointer hover:shadow-md hover:border-primary/50",
        highlight && "border-primary bg-primary/5",
        className
      )}
    >
      <p className={cn("text-2xl font-bold tabular-nums", color)} style={color?.startsWith("#") ? { color } : undefined}>
        {value}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </Comp>
  );
}

export { StatCard };
