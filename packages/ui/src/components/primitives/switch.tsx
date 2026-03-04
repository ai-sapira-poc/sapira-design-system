"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../../lib/utils";

export interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { root: "h-4 w-7", thumb: "size-3 data-[state=checked]:translate-x-3" },
  md: { root: "h-5 w-9", thumb: "size-4 data-[state=checked]:translate-x-4" },
  lg: { root: "h-6 w-11", thumb: "size-5 data-[state=checked]:translate-x-5" },
};

function Switch({ checked, onCheckedChange, label, description, disabled, size = "md", className }: SwitchProps) {
  const id = React.useId();
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <SwitchPrimitive.Root
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={cn(
          "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          sizeMap[size].root
        )}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
            sizeMap[size].thumb
          )}
        />
      </SwitchPrimitive.Root>
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label htmlFor={id} className={cn("text-sm font-medium select-none", disabled && "opacity-50 cursor-not-allowed")}>
              {label}
            </label>
          )}
          {description && (
            <p className={cn("text-xs text-muted-foreground", disabled && "opacity-50")}>{description}</p>
          )}
        </div>
      )}
    </div>
  );
}

export { Switch };
