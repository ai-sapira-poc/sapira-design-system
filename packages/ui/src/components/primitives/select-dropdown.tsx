"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface SelectDropdownOption {
  label: string;
  value: string;
}

export interface SelectDropdownProps extends Omit<React.ComponentProps<"select">, "onChange"> {
  options: SelectDropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

function SelectDropdown({ options, value, onChange, placeholder, className, ...props }: SelectDropdownProps) {
  return (
    <select
      value={value ?? ""}
      onChange={(e) => onChange?.(e.target.value)}
      className={cn(
        "h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-xs",
        "transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}

export { SelectDropdown };
