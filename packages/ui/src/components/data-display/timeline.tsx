"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const timelineIconVariants = cva(
  "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        ai: "bg-violet-500/10 text-violet-600",
        user: "bg-blue-500/10 text-blue-600",
        system: "bg-muted text-muted-foreground",
        success: "bg-emerald-500/10 text-emerald-600",
        warning: "bg-amber-500/10 text-amber-600",
        error: "bg-red-500/10 text-red-600",
      },
    },
    defaultVariants: {
      variant: "system",
    },
  }
);

export interface TimelineEvent {
  id: string;
  title: string;
  description?: string;
  timestamp: string;
  icon?: React.ReactNode;
  variant?: "ai" | "user" | "system" | "success" | "warning" | "error";
  meta?: React.ReactNode;
}

export interface TimelineProps extends React.ComponentProps<"div"> {
  events: TimelineEvent[];
  maxItems?: number;
  formatTimestamp?: (timestamp: string) => string;
}

function Timeline({
  events,
  maxItems,
  formatTimestamp,
  className,
  ...props
}: TimelineProps) {
  const displayed = maxItems ? events.slice(0, maxItems) : events;

  const defaultFormat = (ts: string) => {
    const date = new Date(ts);
    return date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const fmt = formatTimestamp ?? defaultFormat;

  return (
    <div className={cn("space-y-0", className)} {...props}>
      {displayed.map((event, index) => (
        <div key={event.id} className="relative flex gap-3 pb-4">
          {/* Vertical line */}
          {index < displayed.length - 1 && (
            <div className="absolute left-4 top-8 h-full w-px bg-border" />
          )}

          {/* Icon */}
          <div className={cn(timelineIconVariants({ variant: event.variant }))}>
            {event.icon ?? (
              <span className="h-2 w-2 rounded-full bg-current" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pt-1">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">{fmt(event.timestamp)}</span>
              {event.meta}
            </div>
            <p className="text-sm text-foreground mt-0.5 leading-tight font-medium">
              {event.title}
            </p>
            {event.description && (
              <p className="text-xs text-muted-foreground mt-0.5">{event.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export { Timeline, timelineIconVariants };
