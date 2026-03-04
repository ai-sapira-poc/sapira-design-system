"use client";
import { GuidedPanel } from "@sapira/ui";

export default function GuidedPanelPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">GuidedPanel</h1>
        <p className="text-muted-foreground mt-2">Side panel for guided walkthroughs and simulations with step tracking and context cards.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Full Example</h2>
        <div className="border rounded-lg overflow-hidden inline-block">
          <GuidedPanel
            user={{ name: "Jane Smith", role: "Procurement Manager" }}
            step={2}
            title="Review Supplier Bids"
            description="Compare the submitted proposals and select the best match for your requirements."
            context={[
              { label: "Budget", content: "$50,000 allocated" },
              { label: "Deadline", content: "March 15, 2026" },
            ]}
            action="Open comparison view and review the top 3 bids"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Minimal</h2>
        <div className="border rounded-lg overflow-hidden inline-block">
          <GuidedPanel step={1} title="Getting Started" description="Follow the instructions to complete setup." />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted"><th className="text-left p-3 font-medium">Prop</th><th className="text-left p-3 font-medium">Type</th><th className="text-left p-3 font-medium">Default</th></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono text-xs">user</td><td className="p-3 font-mono text-xs">{"{ name: string; role?: string; avatar?: string }"}</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">step</td><td className="p-3 font-mono text-xs">number</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">title</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">description</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">context</td><td className="p-3 font-mono text-xs">{"{ label: string; content: string }[]"}</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">action</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
