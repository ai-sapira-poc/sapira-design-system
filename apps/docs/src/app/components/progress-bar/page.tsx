"use client";
import { ProgressBar } from "@sapira/ui";

export default function ProgressBarPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ProgressBar</h1>
        <p className="text-muted-foreground mt-2">Linear progress bar with auto-coloring, variants, and size options.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Auto Color (Default Variant)</h2>
        <div className="space-y-3 max-w-md">
          <ProgressBar value={90} max={100} label="High" showValue />
          <ProgressBar value={50} max={100} label="Medium" showValue />
          <ProgressBar value={20} max={100} label="Low" showValue />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <div className="space-y-3 max-w-md">
          <ProgressBar value={75} max={100} variant="success" label="Success" showValue />
          <ProgressBar value={75} max={100} variant="warning" label="Warning" showValue />
          <ProgressBar value={75} max={100} variant="danger" label="Danger" showValue />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>
        <div className="space-y-3 max-w-md">
          <ProgressBar value={60} max={100} size="sm" />
          <ProgressBar value={60} max={100} size="md" />
          <ProgressBar value={60} max={100} size="lg" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted"><th className="text-left p-3 font-medium">Prop</th><th className="text-left p-3 font-medium">Type</th><th className="text-left p-3 font-medium">Default</th></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono text-xs">value</td><td className="p-3 font-mono text-xs">number</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">max</td><td className="p-3 font-mono text-xs">number</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">label</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">showValue</td><td className="p-3 font-mono text-xs">boolean</td><td className="p-3 font-mono text-xs">false</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">size</td><td className="p-3 font-mono text-xs">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</td><td className="p-3 font-mono text-xs">&quot;md&quot;</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">variant</td><td className="p-3 font-mono text-xs">&quot;default&quot; | &quot;success&quot; | &quot;warning&quot; | &quot;danger&quot;</td><td className="p-3 font-mono text-xs">&quot;default&quot;</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
