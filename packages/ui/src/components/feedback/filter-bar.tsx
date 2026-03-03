"use client";

import * as React from "react";
import { XIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../primitives/button";
import { Badge } from "../primitives/badge";

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterDefinition {
  label: string;
  value: string;
  options: FilterOption[];
}

export interface FilterBarProps {
  filters: FilterDefinition[];
  activeFilters: Record<string, string[]>;
  onChange: (filterValue: string, optionValue: string) => void;
  onClear: () => void;
  className?: string;
}

export function FilterBar({
  filters,
  activeFilters,
  onChange,
  onClear,
  className,
}: FilterBarProps) {
  const hasActive = Object.values(activeFilters).some((v) => v.length > 0);

  return (
    <div
      className={cn(
        "flex items-center gap-2 flex-wrap rounded-lg border border-border bg-background p-2",
        className
      )}
    >
      {filters.map((filter) => (
        <div key={filter.value} className="flex items-center gap-1">
          <span className="text-xs font-medium text-muted-foreground px-1">
            {filter.label}:
          </span>
          {filter.options.map((option) => {
            const isActive = activeFilters[filter.value]?.includes(option.value) ?? false;
            return (
              <button
                key={option.value}
                onClick={() => onChange(filter.value, option.value)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {option.label}
                {isActive && <XIcon className="h-3 w-3" />}
              </button>
            );
          })}
        </div>
      ))}

      {hasActive && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="ml-auto text-xs h-7"
        >
          Clear all
        </Button>
      )}
    </div>
  );
}
