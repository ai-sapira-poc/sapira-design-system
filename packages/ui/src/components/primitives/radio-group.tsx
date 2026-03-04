"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../../lib/utils";

export interface RadioGroupOption {
  label: string;
  value: string;
  description?: string;
}

export interface RadioGroupProps {
  value?: string;
  onValueChange?: (value: string) => void;
  options: RadioGroupOption[];
  orientation?: "vertical" | "horizontal";
  disabled?: boolean;
  className?: string;
}

function RadioGroup({ value, onValueChange, options, orientation = "vertical", disabled, className }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      orientation={orientation}
      className={cn(
        "flex gap-3",
        orientation === "vertical" ? "flex-col" : "flex-row flex-wrap",
        className
      )}
    >
      {options.map((option) => {
        const id = `radio-${option.value}`;
        return (
          <div key={option.value} className="flex items-start gap-2">
            <RadioGroupPrimitive.Item
              id={id}
              value={option.value}
              className={cn(
                "mt-0.5 size-4 shrink-0 rounded-full border border-primary shadow-xs transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "data-[state=checked]:border-primary"
              )}
            >
              <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <span className="block size-2 rounded-full bg-primary" />
              </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
            <div className="flex flex-col">
              <label htmlFor={id} className={cn("text-sm select-none", disabled && "opacity-50 cursor-not-allowed")}>
                {option.label}
              </label>
              {option.description && (
                <p className={cn("text-xs text-muted-foreground", disabled && "opacity-50")}>{option.description}</p>
              )}
            </div>
          </div>
        );
      })}
    </RadioGroupPrimitive.Root>
  );
}

export { RadioGroup };
