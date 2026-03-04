"use client";

import * as React from "react";
import { useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { cn } from "../../lib/utils";

export interface NumberTickerProps {
  value: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  direction?: "up" | "down";
}

function NumberTicker({
  value,
  duration = 1500,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  direction = "up",
}: NumberTickerProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "up" ? 0 : value);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [displayValue, setDisplayValue] = React.useState(
    direction === "up" ? "0" : formatNumber(value, decimals)
  );

  const rounded = useTransform(motionValue, (latest) =>
    formatNumber(latest, decimals)
  );

  React.useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(v);
    });
    return unsubscribe;
  }, [rounded]);

  React.useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const controls = animate(motionValue, direction === "up" ? value : 0, {
        duration: duration / 1000,
        ease: "easeOut",
      });
      return () => controls.stop();
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, value, duration, delay, direction, motionValue]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

function formatNumber(n: number, decimals: number): string {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export { NumberTicker };
