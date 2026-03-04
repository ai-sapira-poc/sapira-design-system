"use client";

import * as React from "react";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "../../lib/utils";
import { ChartTooltip, ChartLegend, getColor } from "./chart-shared";

export interface AreaChartArea {
  key: string;
  label?: string;
  color?: string;
  dashed?: boolean;
}

export interface AreaChartProps extends React.ComponentProps<"div"> {
  data: Record<string, any>[];
  xKey: string;
  areas: AreaChartArea[];
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  height?: number;
  animate?: boolean;
  curved?: boolean;
  colors?: string[];
  stacked?: boolean;
}

function AreaChart({
  data,
  xKey,
  areas,
  showGrid = true,
  showLegend = false,
  showTooltip = true,
  height = 300,
  animate = true,
  curved = true,
  colors,
  stacked = false,
  className,
  ...props
}: AreaChartProps) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsAreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <defs>
            {areas.map((area, i) => {
              const color = area.color ?? getColor(colors, i);
              return (
                <linearGradient key={area.key} id={`gradient-${area.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={color} stopOpacity={0.02} />
                </linearGradient>
              );
            })}
          </defs>
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="var(--border, #e5e7eb)" opacity={0.5} />}
          <XAxis dataKey={xKey} tick={{ fontSize: 12, fill: "var(--muted-foreground, #71717a)" }} />
          <YAxis tick={{ fontSize: 12, fill: "var(--muted-foreground, #71717a)" }} />
          {showTooltip && <Tooltip content={<ChartTooltip />} />}
          {showLegend && <Legend content={<ChartLegend />} />}
          {areas.map((area, i) => {
            const color = area.color ?? getColor(colors, i);
            return (
              <Area
                key={area.key}
                type={curved ? "monotone" : "linear"}
                dataKey={area.key}
                name={area.label ?? area.key}
                stroke={color}
                strokeWidth={2}
                fill={`url(#gradient-${area.key})`}
                stackId={stacked ? "stack" : undefined}
                strokeDasharray={area.dashed ? "5 5" : undefined}
                dot={false}
                activeDot={{ r: 4, strokeWidth: 0 }}
                isAnimationActive={animate}
              />
            );
          })}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export { AreaChart };
