"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export interface BentoGridProps extends React.ComponentProps<"div"> {
  className?: string;
  children: React.ReactNode;
}

function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 w-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface BentoGridItemProps extends Omit<React.ComponentProps<"div">, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  header?: React.ReactNode;
  children?: React.ReactNode;
}

const colSpanMap = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
} as const;

const rowSpanMap = {
  1: "row-span-1",
  2: "row-span-2",
} as const;

function BentoGridItem({
  title,
  description,
  icon,
  className,
  colSpan = 1,
  rowSpan = 1,
  header,
  children,
  ...props
}: BentoGridItemProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "rounded-xl border border-border bg-background/80 backdrop-blur-sm p-6",
        "transition-shadow duration-200 hover:shadow-lg hover:border-foreground/10",
        "flex flex-col gap-4 overflow-hidden",
        colSpanMap[colSpan],
        rowSpanMap[rowSpan],
        className,
      )}
      {...props}
    >
      {header && <div className="w-full">{header}</div>}
      <div className="flex flex-col gap-2 flex-1">
        {(icon || title) && (
          <div className="flex items-center gap-3">
            {icon && (
              <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary/10 text-primary shrink-0">
                {icon}
              </div>
            )}
            {title && (
              <h3 className="text-sm font-semibold tracking-tight text-foreground">
                {title}
              </h3>
            )}
          </div>
        )}
        {description && (
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </motion.div>
  );
}

export { BentoGrid, BentoGridItem };
