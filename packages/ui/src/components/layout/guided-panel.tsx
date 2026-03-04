"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface GuidedPanelProps {
  user?: { name: string; role?: string; avatar?: string };
  step: number;
  title: string;
  description?: string;
  context?: { label: string; content: string }[];
  action?: string;
  className?: string;
}

function getInitials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function GuidedPanel({ user, step, title, description, context, action, className }: GuidedPanelProps) {
  return (
    <div className={cn("w-80 border-l border-border bg-card p-6 space-y-5 overflow-y-auto", className)}>
      {user && (
        <div className="flex items-center gap-3">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="size-10 rounded-full object-cover" />
          ) : (
            <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
              {getInitials(user.name)}
            </div>
          )}
          <div>
            <p className="font-semibold text-sm">{user.name}</p>
            {user.role && <p className="text-xs text-muted-foreground">{user.role}</p>}
          </div>
        </div>
      )}

      <div className="space-y-2">
        <span className="inline-flex items-center justify-center size-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
          {step}
        </span>
        <h3 className="font-semibold text-base">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>

      {context && context.length > 0 && (
        <div className="space-y-2">
          {context.map((item, i) => (
            <div key={i} className="rounded-md border bg-muted/50 p-3">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
              <p className="text-sm">{item.content}</p>
            </div>
          ))}
        </div>
      )}

      {action && (
        <div className="rounded-md border-2 border-primary bg-primary/5 p-3">
          <p className="text-[10px] font-medium uppercase tracking-wider text-primary mb-1">Next Action</p>
          <p className="text-sm font-medium">{action}</p>
        </div>
      )}
    </div>
  );
}

export { GuidedPanel };
