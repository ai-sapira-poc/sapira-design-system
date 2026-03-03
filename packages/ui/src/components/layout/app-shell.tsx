"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface AppShellProps extends React.ComponentProps<"div"> {
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  sidebarWidth?: number;
  sidebarCollapsed?: boolean;
  collapsedWidth?: number;
}

function AppShell({
  sidebar,
  header,
  sidebarWidth = 240,
  sidebarCollapsed = false,
  collapsedWidth = 64,
  className,
  children,
  ...props
}: AppShellProps) {
  const currentWidth = sidebarCollapsed ? collapsedWidth : sidebarWidth;

  return (
    <div className={cn("flex min-h-screen", className)} {...props}>
      {sidebar && (
        <aside
          style={{ width: currentWidth }}
          className="fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-border bg-background transition-[width] duration-200"
        >
          {sidebar}
        </aside>
      )}
      <div
        className="flex flex-1 flex-col"
        style={{ marginLeft: sidebar ? currentWidth : 0 }}
      >
        {header}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

export { AppShell };
