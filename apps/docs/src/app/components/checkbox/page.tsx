"use client";
import { useState } from "react";
import { Checkbox } from "@sapira/ui";

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Checkbox</h1>
        <p className="text-muted-foreground mt-2">Styled checkbox with label, disabled and indeterminate support. Built on Radix UI.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Interactive</h2>
        <Checkbox checked={checked} onChange={setChecked} label="Accept terms and conditions" />
        <p className="text-sm text-muted-foreground">Checked: {String(checked)}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">States</h2>
        <div className="flex flex-col gap-3">
          <Checkbox checked={true} onChange={() => {}} label="Checked" />
          <Checkbox checked={false} onChange={() => {}} label="Unchecked" />
          <Checkbox checked={true} onChange={() => {}} label="Indeterminate" indeterminate />
          <Checkbox checked={false} onChange={() => {}} label="Disabled" disabled />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted"><th className="text-left p-3 font-medium">Prop</th><th className="text-left p-3 font-medium">Type</th><th className="text-left p-3 font-medium">Default</th></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono text-xs">checked</td><td className="p-3 font-mono text-xs">boolean</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">onChange</td><td className="p-3 font-mono text-xs">{"(checked: boolean) => void"}</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">label</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">disabled</td><td className="p-3 font-mono text-xs">boolean</td><td className="p-3 font-mono text-xs">false</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">indeterminate</td><td className="p-3 font-mono text-xs">boolean</td><td className="p-3 font-mono text-xs">false</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
