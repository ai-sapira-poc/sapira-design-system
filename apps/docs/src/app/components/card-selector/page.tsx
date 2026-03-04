"use client";
import { useState } from "react";
import { CardSelector } from "@sapira/ui";

const options = [
  { id: "plan-a", title: "Basic", description: "For small teams", badge: "$9/mo" },
  { id: "plan-b", title: "Pro", description: "For growing businesses", badge: "$29/mo" },
  { id: "plan-c", title: "Enterprise", description: "Custom solutions", badge: "Contact us" },
];

export default function CardSelectorPage() {
  const [single, setSingle] = useState("plan-a");
  const [multi, setMulti] = useState<string[]>(["plan-a"]);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">CardSelector</h1>
        <p className="text-muted-foreground mt-2">Selectable option cards for single or multi-select scenarios.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Single Select</h2>
        <CardSelector options={options} selected={single} onChange={(v) => setSingle(v as string)} />
        <p className="text-sm text-muted-foreground">Selected: {single}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Multi Select</h2>
        <CardSelector options={options} selected={multi} onChange={(v) => setMulti(v as string[])} multiple />
        <p className="text-sm text-muted-foreground">Selected: {multi.join(", ")}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted"><th className="text-left p-3 font-medium">Prop</th><th className="text-left p-3 font-medium">Type</th><th className="text-left p-3 font-medium">Default</th></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono text-xs">options</td><td className="p-3 font-mono text-xs">CardSelectorOption[]</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">selected</td><td className="p-3 font-mono text-xs">string | string[]</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">onChange</td><td className="p-3 font-mono text-xs">{"(selected: string | string[]) => void"}</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">multiple</td><td className="p-3 font-mono text-xs">boolean</td><td className="p-3 font-mono text-xs">false</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
