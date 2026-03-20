"use client";

import { WorkflowBuilder } from "@sapira/ui";

export default function WorkflowBuilderPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">WorkflowBuilder</h1>
        <p className="text-muted-foreground mt-2">
          Visual workflow builder with a horizontal draggable canvas, SVG bezier connections,
          and repositionable nodes. Inspired by n8n-style workflow editors.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Interactive Demo</h2>
        <p className="text-sm text-muted-foreground">
          Drag nodes to reposition them on the canvas. Click &quot;+ Add Node&quot; to add more.
        </p>
        <WorkflowBuilder className="w-full" />
      </section>
    </div>
  );
}
