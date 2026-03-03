"use client";

import { useState } from "react";
import { WizardStepper, Button, Input } from "@sapira/ui";

const steps = [
  { label: "Details", description: "Basic information" },
  { label: "Configuration", description: "Set up options" },
  { label: "Review", description: "Confirm and create" },
];

export default function WizardPattern() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Wizard Pattern</h1>
        <p className="text-muted-foreground mt-2">
          Multi-step wizard flow using WizardStepper with step content.
        </p>
      </div>

      <div className="border rounded-lg p-8 max-w-2xl space-y-8">
        <WizardStepper steps={steps} currentStep={current} onStepClick={setCurrent} />

        <div className="min-h-[200px]">
          {current === 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Basic Details</h3>
              <div className="space-y-2">
                <label className="text-sm font-medium">Project Name</label>
                <Input placeholder="Enter project name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Input placeholder="Brief description" />
              </div>
            </div>
          )}
          {current === 1 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Configuration</h3>
              <div className="space-y-2">
                <label className="text-sm font-medium">Region</label>
                <Input placeholder="Select region" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tier</label>
                <Input placeholder="Select tier" />
              </div>
            </div>
          )}
          {current === 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Review</h3>
              <p className="text-sm text-muted-foreground">Review your settings before creating the project.</p>
              <div className="bg-muted rounded-md p-4 text-sm space-y-1">
                <p><strong>Project:</strong> My Project</p>
                <p><strong>Region:</strong> US East</p>
                <p><strong>Tier:</strong> Standard</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <Button variant="outline" disabled={current === 0} onClick={() => setCurrent((s) => s - 1)}>Back</Button>
          <Button disabled={current === steps.length - 1} onClick={() => setCurrent((s) => s + 1)}>
            {current === steps.length - 2 ? "Create" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
