"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface TrustBarItem {
  icon?: React.ReactNode;
  label: string;
}

export interface TrustBarProps extends React.ComponentProps<"div"> {
  items: TrustBarItem[];
  separator?: string;
}

function TrustBar({
  items,
  separator = "·",
  className,
  ...props
}: TrustBarProps) {
  return (
    <div
      data-slot="trust-bar"
      className={cn(
        "flex items-center justify-center gap-3 text-xs text-muted-foreground",
        className
      )}
      {...props}
    >
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <span className="select-none opacity-40">{separator}</span>
          )}
          <span className="inline-flex items-center gap-1.5">
            {item.icon && (
              <span className="flex items-center text-muted-foreground/70">
                {item.icon}
              </span>
            )}
            {item.label}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

export { TrustBar };
