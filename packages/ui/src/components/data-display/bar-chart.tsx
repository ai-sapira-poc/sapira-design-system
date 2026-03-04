"use client";

import * as React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "../../lib/utils";
import { ChartTooltip, ChartLegend, getColor } from "./chart-shared";

export interface BarChartBar {
  key: string;
  label?: string;
  color?: string;
}

export interface BarChartProps extends React.ComponentProps<"div"> {
  data: Record<string, any>[];
  xKey: string;
  yKey?: string;
  bars?: BarChartBar[];
  layout?: "vertical" | "horizontal";
  stacked?: boolean;
  colors?: string[];
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  height?: number;
  animate?: boolean;
}

function BarChart({
  data,
  xKey,
  yKey,
  bars,
  layout = "horizontal",
  stacked = false,
  colors,
  showGrid = true,
  showLegend = false,
  showTooltip = true,
  height = 300,
  animate = true,
  className,
  ...props
}: BarChartProps) {
  const resolvedBars: BarChartBar[] = bars ?? (yKey ? [{ key: yKey }] : []);
  const isVertical = layout === "vertical";

  return (
    <div className={cn("w-full", className)} {...props}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          layout={isVertical ? "vertical" : "horizontal"}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="var(--border, #e5e7eb)" opacity={0.5} />}
          {isVertical ? (
            <>
              <XAxis type="number" tick={{ fontSize: 12, fill: "var(--muted-foreground, #71717a)" }} />
              <YAxis dataKey={xKey} type="category" tick={{ fontSize: 12, fill: "var(--muted-foreground, #71717a)" }} width={80} />
            </>
          ) : (
            <>
              <XAxis dataKey={xKey} tick={{ fontSize: 12, fill: "var(--muted-foreground, #71717a)" }} />
              <YAxis tick={{ fontSize: 12, fill: "var(--muted-foreground, #71717a)" }} />
            </>
          )}
          {showTooltip && <Tooltip content={<ChartTooltip />} />}
          {showLegend && <Legend content={<ChartLegend />} />}
          {resolvedBars.map((bar, i) => (
            <Bar
              key={bar.key}
              dataKey={bar.key}
              name={bar.label ?? bar.key}
              fill={bar.color ?? getColor(colors, i)}
              stackId={stacked ? "stack" : undefined}
              radius={[4, 4, 0, 0]}
              isAnimationActive={animate}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export { BarChart };
