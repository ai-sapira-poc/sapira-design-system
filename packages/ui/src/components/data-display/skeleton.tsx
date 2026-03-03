"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const skeletonVariants = cva("animate-pulse bg-muted", {
  variants: {
    variant: {
      text: "h-4 w-full rounded",
      circular: "rounded-full",
      rectangular: "rounded-md",
      card: "h-32 w-full rounded-lg",
    },
  },
  defaultVariants: {
    variant: "text",
  },
});

export interface SkeletonProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof skeletonVariants> {
  width?: string | number;
  height?: string | number;
}

function Skeleton({ variant, width, height, className, style, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(skeletonVariants({ variant }), className)}
      style={{ width, height, ...style }}
      {...props}
    />
  );
}

export { Skeleton, skeletonVariants };
