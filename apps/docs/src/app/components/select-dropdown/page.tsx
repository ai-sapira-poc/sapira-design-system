"use client";
import { useState } from "react";
import { SelectDropdown } from "@sapira/ui";

const options = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
  { label: "Option C", value: "c" },
];

export default function SelectDropdownPage() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SelectDropdown</h1>
        <p className="text-muted-foreground mt-2">Lightweight styled native select element. No Radix overhead.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default</h2>
        <div className="max-w-xs">
          <SelectDropdown options={options} value={value} onChange={setValue} placeholder="Choose an option…" />
        </div>
        <p className="text-sm text-muted-foreground">Selected: {value || "none"}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Disabled</h2>
        <div className="max-w-xs">
          <SelectDropdown options={options} value="a" disabled />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted"><th className="text-left p-3 font-medium">Prop</th><th className="text-left p-3 font-medium">Type</th><th className="text-left p-3 font-medium">Default</th></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono text-xs">options</td><td className="p-3 font-mono text-xs">{"{ label: string; value: string }[]"}</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">value</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">onChange</td><td className="p-3 font-mono text-xs">{"(value: string) => void"}</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">placeholder</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
