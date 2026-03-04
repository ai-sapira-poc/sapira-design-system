"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  label?: string;
  error?: string;
  helperText?: string;
  resize?: "none" | "vertical" | "both";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, resize = "vertical", maxLength, ...props }, ref) => {
    const [length, setLength] = React.useState(0);
    const id = React.useId();
    const inputId = props.id || id;

    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          maxLength={maxLength}
          aria-invalid={error ? true : undefined}
          className={cn(
            "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            resize === "none" && "resize-none",
            resize === "vertical" && "resize-y",
            resize === "both" && "resize",
            className
          )}
          onChange={(e) => {
            setLength(e.target.value.length);
            props.onChange?.(e);
          }}
          {...props}
        />
        <div className="flex justify-between">
          <div>
            {error && <p className="text-xs text-destructive">{error}</p>}
            {!error && helperText && <p className="text-xs text-muted-foreground">{helperText}</p>}
          </div>
          {maxLength != null && (
            <p className="text-xs text-muted-foreground">{length}/{maxLength}</p>
          )}
        </div>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
