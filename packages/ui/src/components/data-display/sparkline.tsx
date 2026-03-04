"use client";

import * as React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { cn } from "../../lib/utils";

export interface SparklineProps extends React.ComponentProps<"div"> {
  data: number[];
  width?: number;
  height?: number;
  color?: string;
  filled?: boolean;
}

function Sparkline({
  data,
  width = 120,
  height = 32,
  color = "var(--primary, #18181b)",
  filled = false,
  className,
  ...props
}: SparklineProps) {
  const chartData = data.map((v, i) => ({ i, v }));

  return (
    <div className={cn("inline-block", className)} style={{ width, height }} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
          <defs>
            <linearGradient id={`spark-${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={filled ? 0.3 : 0} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="v"
            stroke={color}
            strokeWidth={1.5}
            fill={`url(#spark-${color})`}
            dot={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export { Sparkline };
