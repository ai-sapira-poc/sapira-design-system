"use client";

import * as React from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts";
import { cn } from "../../lib/utils";
import { ChartTooltip, ChartLegend, getColor } from "./chart-shared";

export interface LineChartLine {
  key: string;
  label?: string;
  color?: string;
  dashed?: boolean;
  area?: boolean;
}

export interface LineChartProps extends React.ComponentProps<"div"> {
  data: Record<string, any>[];
  xKey: string;
  lines: LineChartLine[];
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  height?: number;
  animate?: boolean;
  curved?: boolean;
  colors?: string[];
}

function LineChart({
  data,
  xKey,
  lines,
  showGrid = true,
  showLegend = false,
  showTooltip = true,
  height = 300,
  animate = true,
  curved = true,
  colors,
  className,
  ...props
}: LineChartProps) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="var(--border, #e5e7eb)" opacity={0.5} />}
          <XAxis dataKey={xKey} tick={{ fontSize: 12, fill: "var(--muted-foreground, #71717a)" }} />
          <YAxis tick={{ fontSize: 12, fill: "var(--muted-foreground, #71717a)" }} />
          {showTooltip && <Tooltip content={<ChartTooltip />} />}
          {showLegend && <Legend content={<ChartLegend />} />}
          {lines.map((line, i) => {
            const color = line.color ?? getColor(colors, i);
            return (
              <Line
                key={line.key}
                type={curved ? "monotone" : "linear"}
                dataKey={line.key}
                name={line.label ?? line.key}
                stroke={color}
                strokeWidth={2}
                strokeDasharray={line.dashed ? "5 5" : undefined}
                dot={false}
                activeDot={{ r: 4, strokeWidth: 0 }}
                isAnimationActive={animate}
              />
            );
          })}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}

export { LineChart };
