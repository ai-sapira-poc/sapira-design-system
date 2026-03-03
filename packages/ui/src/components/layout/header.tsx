"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface HeaderProps extends React.ComponentProps<"header"> {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

function Header({ left, right, className, children, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/80 backdrop-blur-sm px-4",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3">{left}</div>
      {children}
      <div className="flex items-center gap-1">{right}</div>
    </header>
  );
}

export { Header };
