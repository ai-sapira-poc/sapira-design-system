"use client";
import { CompactStepper } from "@sapira/ui";

const steps = [
  { label: "Configure" },
  { label: "Review" },
  { label: "Submit" },
  { label: "Complete" },
];

export default function CompactStepperPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">CompactStepper</h1>
        <p className="text-muted-foreground mt-2">Minimal horizontal step bar for toolbars and narrow spaces.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Steps</h2>
        <div className="space-y-6">
          <div><p className="text-xs text-muted-foreground mb-2">Step 1 of 4</p><CompactStepper steps={steps} currentStep={0} /></div>
          <div><p className="text-xs text-muted-foreground mb-2">Step 2 of 4</p><CompactStepper steps={steps} currentStep={1} /></div>
          <div><p className="text-xs text-muted-foreground mb-2">Step 3 of 4</p><CompactStepper steps={steps} currentStep={2} /></div>
          <div><p className="text-xs text-muted-foreground mb-2">All complete</p><CompactStepper steps={steps} currentStep={4} /></div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted"><th className="text-left p-3 font-medium">Prop</th><th className="text-left p-3 font-medium">Type</th><th className="text-left p-3 font-medium">Default</th></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono text-xs">steps</td><td className="p-3 font-mono text-xs">{"{ label: string; icon?: ReactNode }[]"}</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">currentStep</td><td className="p-3 font-mono text-xs">number</td><td className="p-3 font-mono text-xs">—</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
