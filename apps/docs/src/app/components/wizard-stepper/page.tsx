"use client";

import { useState } from "react";
import { WizardStepper, Button } from "@sapira/ui";

const steps = [
  { label: "Account", description: "Create your account" },
  { label: "Profile", description: "Set up your profile" },
  { label: "Settings", description: "Configure preferences" },
  { label: "Complete", description: "Review and finish" },
];

export default function WizardStepperPage() {
  const [current, setCurrent] = useState(1);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">WizardStepper</h1>
        <p className="text-muted-foreground mt-2">
          Multi-step indicator for wizard flows. Supports horizontal and vertical orientation.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Horizontal</h2>
        <WizardStepper steps={steps} currentStep={current} onStepClick={setCurrent} />
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled={current === 0} onClick={() => setCurrent((s) => s - 1)}>Previous</Button>
          <Button size="sm" disabled={current === steps.length - 1} onClick={() => setCurrent((s) => s + 1)}>Next</Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Vertical</h2>
        <WizardStepper steps={steps} currentStep={current} orientation="vertical" onStepClick={setCurrent} />
      </section>
    </div>
  );
}
