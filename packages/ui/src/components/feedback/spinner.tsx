"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

const sizeMap = { sm: "h-4 w-4", md: "h-6 w-6", lg: "h-10 w-10" } as const;

export interface SpinnerProps extends React.ComponentProps<"div"> {
  size?: "sm" | "md" | "lg";
  label?: string;
}

function Spinner({ size = "md", label = "Loading", className, ...props }: SpinnerProps) {
  return (
    <div role="status" className={cn("inline-flex items-center justify-center", className)} {...props}>
      <svg
        className={cn("animate-spin text-primary", sizeMap[size])}
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export { Spinner };
