"use client";

import * as React from "react";
import { CheckIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export interface WizardStep {
  label: string;
  description?: string;
}

export interface WizardStepperProps {
  steps: WizardStep[];
  currentStep: number;
  orientation?: "horizontal" | "vertical";
  onStepClick?: (step: number) => void;
  className?: string;
}

export function WizardStepper({
  steps,
  currentStep,
  orientation = "horizontal",
  onStepClick,
  className,
}: WizardStepperProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "flex",
        isHorizontal ? "flex-row items-start" : "flex-col",
        className
      )}
    >
      {steps.map((step, index) => {
        const status =
          index < currentStep
            ? "complete"
            : index === currentStep
              ? "current"
              : "upcoming";

        return (
          <div
            key={index}
            className={cn(
              "flex",
              isHorizontal ? "flex-1 flex-col items-center" : "flex-row items-start gap-3",
              isHorizontal && index < steps.length - 1 && "relative"
            )}
          >
            {/* Connector line (horizontal) */}
            {isHorizontal && index < steps.length - 1 && (
              <div className="absolute top-4 left-[calc(50%+16px)] right-[calc(-50%+16px)] h-0.5">
                <div
                  className={cn(
                    "h-full w-full",
                    status === "complete" ? "bg-primary" : "bg-border"
                  )}
                />
              </div>
            )}

            <div className="flex flex-col items-center">
              {/* Step circle */}
              <button
                type="button"
                disabled={!onStepClick}
                onClick={() => onStepClick?.(index)}
                className={cn(
                  "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-semibold transition-colors",
                  status === "complete" &&
                    "border-primary bg-primary text-primary-foreground",
                  status === "current" &&
                    "border-primary bg-background text-primary",
                  status === "upcoming" &&
                    "border-border bg-background text-muted-foreground",
                  onStepClick && "cursor-pointer hover:opacity-80"
                )}
              >
                {status === "complete" ? (
                  <CheckIcon className="h-4 w-4" />
                ) : (
                  index + 1
                )}
              </button>

              {/* Connector line (vertical) */}
              {!isHorizontal && index < steps.length - 1 && (
                <div
                  className={cn(
                    "w-0.5 h-8 my-1",
                    status === "complete" ? "bg-primary" : "bg-border"
                  )}
                />
              )}
            </div>

            {/* Label */}
            <div
              className={cn(
                isHorizontal ? "mt-2 text-center" : "",
                "min-w-0"
              )}
            >
              <p
                className={cn(
                  "text-sm font-medium",
                  status === "upcoming" && "text-muted-foreground"
                )}
              >
                {step.label}
              </p>
              {step.description && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  {step.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
