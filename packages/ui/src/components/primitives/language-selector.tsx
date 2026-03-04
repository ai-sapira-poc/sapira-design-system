"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface LanguageSelectorOption {
  id: string;
  label: string;
}

export interface LanguageSelectorProps extends Omit<React.ComponentProps<"div">, "onChange"> {
  options: LanguageSelectorOption[];
  selected?: string;
  onChange?: (id: string) => void;
  variant?: "inline" | "dropdown";
}

function LanguageSelector({
  options,
  selected,
  onChange,
  variant = "inline",
  className,
  ...props
}: LanguageSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const selectedOption = options.find((o) => o.id === selected);

  if (variant === "dropdown") {
    return (
      <div data-slot="language-selector" className={cn("relative inline-block", className)} {...props}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-accent transition-colors"
        >
          {selectedOption?.label ?? "Select"}
          <svg className="h-3 w-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="absolute top-full left-0 mt-1 min-w-[120px] rounded-md border border-border bg-background shadow-md z-50">
            {options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => { onChange?.(opt.id); setOpen(false); }}
                className={cn(
                  "block w-full text-left px-3 py-1.5 text-sm hover:bg-accent transition-colors",
                  opt.id === selected && "bg-accent font-medium"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // inline variant
  return (
    <div
      data-slot="language-selector"
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => onChange?.(opt.id)}
          className={cn(
            "px-3 py-1.5 text-sm rounded-md transition-colors",
            "hover:bg-accent hover:text-accent-foreground",
            opt.id === selected
              ? "font-semibold text-foreground underline underline-offset-4 decoration-primary decoration-2"
              : "text-muted-foreground"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export { LanguageSelector };
