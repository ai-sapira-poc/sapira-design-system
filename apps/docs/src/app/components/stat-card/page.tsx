"use client";
import { StatCard } from "@sapira/ui";

export default function StatCardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StatCard</h1>
        <p className="text-muted-foreground mt-2">Compact clickable stat display for dashboards and summaries.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Examples</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard value={42} label="Open Items" />
          <StatCard value="$12.4k" label="Revenue" highlight />
          <StatCard value={3} label="Alerts" color="text-red-500" onClick={() => alert("Alerts clicked")} />
          <StatCard value="98%" label="Uptime" color="text-green-500" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted"><th className="text-left p-3 font-medium">Prop</th><th className="text-left p-3 font-medium">Type</th><th className="text-left p-3 font-medium">Default</th></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono text-xs">value</td><td className="p-3 font-mono text-xs">string | number</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">label</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">onClick</td><td className="p-3 font-mono text-xs">{"() => void"}</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">highlight</td><td className="p-3 font-mono text-xs">boolean</td><td className="p-3 font-mono text-xs">false</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">color</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
