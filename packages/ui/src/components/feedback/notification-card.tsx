"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface NotificationCardProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  badge?: { label: string; variant?: string };
  timestamp?: string;
  onClick?: () => void;
  variant?: "info" | "warning" | "error" | "success";
  className?: string;
}

const borderColors: Record<string, string> = {
  info: "border-l-blue-500",
  warning: "border-l-yellow-500",
  error: "border-l-red-500",
  success: "border-l-green-500",
};

const badgeColors: Record<string, string> = {
  info: "bg-blue-100 text-blue-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
  success: "bg-green-100 text-green-800",
};

function NotificationCard({ icon, title, description, badge, timestamp, onClick, variant = "info", className }: NotificationCardProps) {
  const Comp = onClick ? "button" : "div";
  return (
    <Comp
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-lg border border-l-4 bg-card p-4 text-left transition-colors",
        borderColors[variant],
        onClick && "cursor-pointer hover:bg-accent",
        className
      )}
    >
      {icon && <div className="shrink-0 text-muted-foreground">{icon}</div>}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm">{title}</p>
        {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {badge && (
          <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium", badgeColors[badge.variant ?? variant])}>
            {badge.label}
          </span>
        )}
        {timestamp && <span className="text-[10px] text-muted-foreground whitespace-nowrap">{timestamp}</span>}
        {onClick && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="m9 18 6-6-6-6"/></svg>
        )}
      </div>
    </Comp>
  );
}

export { NotificationCard };
