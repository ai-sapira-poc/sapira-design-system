"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

/* Shared tooltip */
export function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className={cn(
      "rounded-lg border border-border bg-popover px-3 py-2 shadow-lg",
      "text-popover-foreground text-sm"
    )}>
      {label && <p className="font-medium mb-1 text-xs text-muted-foreground">{label}</p>}
      {payload.map((entry: any, i: number) => (
        <div key={i} className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="font-medium">{typeof entry.value === "number" ? entry.value.toLocaleString() : entry.value}</span>
        </div>
      ))}
    </div>
  );
}

/* Shared legend */
export function ChartLegend({ payload }: any) {
  if (!payload?.length) return null;
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-sm">
      {payload.map((entry: any, i: number) => (
        <div key={i} className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
          <span className="text-muted-foreground">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

/* Default chart colors using CSS variables */
export const defaultChartColors = [
  "var(--chart-1, hsl(220, 70%, 50%))",
  "var(--chart-2, hsl(160, 60%, 45%))",
  "var(--chart-3, hsl(30, 80%, 55%))",
  "var(--chart-4, hsl(280, 65%, 60%))",
  "var(--chart-5, hsl(340, 75%, 55%))",
];

export function getColor(colors: string[] | undefined, index: number): string {
  const c = colors?.length ? colors : defaultChartColors;
  return c[index % c.length];
}
