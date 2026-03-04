"use client";

import { Sparkline } from "@sapira/ui";

const data1 = [4, 6, 3, 8, 5, 9, 7, 10, 8, 12];
const data2 = [10, 8, 12, 7, 9, 5, 8, 3, 6, 4];

export default function SparklinePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Sparkline</h1>
        <p className="text-muted-foreground mt-2">Tiny inline charts for data at a glance.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Default</h2>
        <div className="border rounded-lg p-6 bg-background flex items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Users</span>
            <Sparkline data={data1} />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Revenue</span>
            <Sparkline data={data2} color="var(--chart-2, hsl(160, 60%, 45%))" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Filled</h2>
        <div className="border rounded-lg p-6 bg-background flex items-center gap-6">
          <Sparkline data={data1} filled width={160} height={40} />
          <Sparkline data={data2} filled width={160} height={40} color="var(--chart-3, hsl(30, 80%, 55%))" />
        </div>
      </section>
    </div>
  );
}
