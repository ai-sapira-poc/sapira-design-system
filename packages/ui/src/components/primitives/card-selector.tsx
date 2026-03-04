"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface CardSelectorOption {
  id: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  badge?: string;
}

export interface CardSelectorProps {
  options: CardSelectorOption[];
  selected: string | string[];
  onChange: (selected: string | string[]) => void;
  multiple?: boolean;
  className?: string;
}

function CardSelector({ options, selected, onChange, multiple = false, className }: CardSelectorProps) {
  const selectedSet = new Set(Array.isArray(selected) ? selected : [selected]);

  function toggle(id: string) {
    if (multiple) {
      const arr = Array.isArray(selected) ? selected : [selected];
      onChange(selectedSet.has(id) ? arr.filter((s) => s !== id) : [...arr, id]);
    } else {
      onChange(id);
    }
  }

  return (
    <div className={cn("grid gap-3 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {options.map((opt) => {
        const isSelected = selectedSet.has(opt.id);
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => toggle(opt.id)}
            className={cn(
              "flex flex-col items-center gap-2 rounded-lg border p-4 text-center transition-all",
              isSelected
                ? "border-primary bg-primary/5 ring-1 ring-primary"
                : "border-border hover:border-primary/50"
            )}
          >
            {opt.icon && <div className="text-2xl">{opt.icon}</div>}
            <span className="font-medium text-sm">{opt.title}</span>
            {opt.description && <span className="text-xs text-muted-foreground">{opt.description}</span>}
            {opt.badge && (
              <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium">{opt.badge}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export { CardSelector };
