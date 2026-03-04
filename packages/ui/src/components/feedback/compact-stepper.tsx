"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface CompactStep {
  label: string;
  icon?: React.ReactNode;
}

export interface CompactStepperProps {
  steps: CompactStep[];
  currentStep: number;
  className?: string;
}

function CompactStepper({ steps, currentStep, className }: CompactStepperProps) {
  return (
    <div className={cn("flex items-center gap-0", className)}>
      {steps.map((step, i) => {
        const status = i < currentStep ? "completed" : i === currentStep ? "active" : "upcoming";
        return (
          <React.Fragment key={i}>
            {i > 0 && (
              <div className={cn("h-px w-6 shrink-0", status === "upcoming" ? "bg-border" : "bg-primary")} />
            )}
            <div className="flex flex-col items-center gap-1 min-w-0">
              <div
                className={cn(
                  "flex items-center justify-center size-6 rounded-full text-[10px] font-bold shrink-0 transition-colors",
                  status === "completed" && "bg-primary text-primary-foreground",
                  status === "active" && "bg-primary text-primary-foreground ring-2 ring-primary/30",
                  status === "upcoming" && "bg-muted text-muted-foreground"
                )}
              >
                {step.icon ?? i + 1}
              </div>
              <span className="text-[10px] text-muted-foreground truncate max-w-[60px] text-center">{step.label}</span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export { CompactStepper };
