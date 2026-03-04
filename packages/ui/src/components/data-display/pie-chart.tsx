"use client";

import * as React from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "../../lib/utils";
import { ChartTooltip, ChartLegend, getColor } from "./chart-shared";

export interface PieChartDatum {
  name: string;
  value: number;
  color?: string;
}

export interface PieChartProps extends React.ComponentProps<"div"> {
  data: PieChartDatum[];
  donut?: boolean;
  showLabels?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  innerRadius?: number;
  height?: number;
  animate?: boolean;
  colors?: string[];
}

function PieChart({
  data,
  donut = false,
  showLabels = false,
  showLegend = true,
  showTooltip = true,
  innerRadius,
  height = 300,
  animate = true,
  colors,
  className,
  ...props
}: PieChartProps) {
  const resolvedInner = innerRadius ?? (donut ? 60 : 0);

  return (
    <div className={cn("w-full", className)} {...props}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={resolvedInner}
            outerRadius="80%"
            paddingAngle={2}
            dataKey="value"
            nameKey="name"
            isAnimationActive={animate}
            label={showLabels ? ({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%` : false}
            labelLine={showLabels}
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color ?? getColor(colors, i)} />
            ))}
          </Pie>
          {showTooltip && <Tooltip content={<ChartTooltip />} />}
          {showLegend && <Legend content={<ChartLegend />} />}
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}

export { PieChart };
