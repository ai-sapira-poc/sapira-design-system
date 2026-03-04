"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps extends React.ComponentProps<"nav"> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

function Breadcrumbs({ items, separator = "/", className, ...props }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5 text-sm", className)} {...props}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {i > 0 && <span className="text-muted-foreground select-none">{separator}</span>}
            {isLast || !item.href ? (
              <span className={cn(isLast ? "text-foreground font-medium" : "text-muted-foreground")}>{item.label}</span>
            ) : (
              <a href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">{item.label}</a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export { Breadcrumbs };
