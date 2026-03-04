"use client";

import { LineChart } from "@sapira/ui";

const data = [
  { month: "Jan", users: 400, sessions: 240 },
  { month: "Feb", users: 300, sessions: 139 },
  { month: "Mar", users: 500, sessions: 380 },
  { month: "Apr", users: 478, sessions: 390 },
  { month: "May", users: 589, sessions: 480 },
  { month: "Jun", users: 639, sessions: 380 },
];

export default function LineChartPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">LineChart</h1>
        <p className="text-muted-foreground mt-2">Line charts with smooth curves, dashed lines, and tooltips.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Multiple Lines</h2>
        <div className="border rounded-lg p-6 bg-background">
          <LineChart data={data} xKey="month" lines={[{ key: "users", label: "Users" }, { key: "sessions", label: "Sessions" }]} showLegend />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Straight Lines</h2>
        <div className="border rounded-lg p-6 bg-background">
          <LineChart data={data} xKey="month" lines={[{ key: "users", label: "Users" }]} curved={false} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Dashed</h2>
        <div className="border rounded-lg p-6 bg-background">
          <LineChart data={data} xKey="month" lines={[{ key: "users", label: "Users" }, { key: "sessions", label: "Sessions", dashed: true }]} showLegend />
        </div>
      </section>
    </div>
  );
}
