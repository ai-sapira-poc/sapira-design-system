"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../../lib/utils";

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  className?: string;
}

function Checkbox({ checked, onChange, label, disabled, indeterminate, className }: CheckboxProps) {
  const state = indeterminate ? "indeterminate" : checked;
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckboxPrimitive.Root
        checked={state}
        onCheckedChange={(v) => onChange(v === true)}
        disabled={disabled}
        className={cn(
          "peer size-4 shrink-0 rounded border border-primary shadow-xs transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground"
        )}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center">
          {indeterminate ? (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && (
        <label className={cn("text-sm select-none", disabled && "opacity-50 cursor-not-allowed")}>{label}</label>
      )}
    </div>
  );
}

export { Checkbox };
