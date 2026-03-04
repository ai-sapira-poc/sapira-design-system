"use client";

import * as React from "react";
import { useSpring, useMotionValue } from "framer-motion";
import { cn } from "../../lib/utils";

export interface AnimatedCounterProps {
  value: number;
  className?: string;
}

function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 100, damping: 30 });
  const [display, setDisplay] = React.useState("0");

  React.useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest).toLocaleString("en-US"));
    });
    return unsubscribe;
  }, [spring]);

  React.useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  return <span className={cn("tabular-nums", className)}>{display}</span>;
}

export { AnimatedCounter };
