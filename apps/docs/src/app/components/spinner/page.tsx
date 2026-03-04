"use client";

import { Spinner } from "@sapira/ui";

export default function SpinnerPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Spinner</h1>
        <p className="text-muted-foreground mt-2">Loading spinner in multiple sizes.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Sizes</h2>
        <div className="border rounded-lg p-6 bg-background flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Spinner size="sm" />
            <span className="text-xs text-muted-foreground">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="md" />
            <span className="text-xs text-muted-foreground">Medium</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <span className="text-xs text-muted-foreground">Large</span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">With Label</h2>
        <div className="border rounded-lg p-6 bg-background flex items-center gap-3">
          <Spinner size="md" label="Loading data..." />
          <span className="text-sm text-muted-foreground">Loading data...</span>
        </div>
      </section>
    </div>
  );
}
