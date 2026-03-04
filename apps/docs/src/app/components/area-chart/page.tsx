"use client";

import { AreaChart } from "@sapira/ui";

const data = [
  { month: "Jan", revenue: 4000, profit: 2400 },
  { month: "Feb", revenue: 3000, profit: 1398 },
  { month: "Mar", revenue: 5000, profit: 3800 },
  { month: "Apr", revenue: 4780, profit: 3908 },
  { month: "May", revenue: 5890, profit: 4800 },
  { month: "Jun", revenue: 6390, profit: 3800 },
];

export default function AreaChartPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">AreaChart</h1>
        <p className="text-muted-foreground mt-2">Filled area charts with gradient fills.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Single Area</h2>
        <div className="border rounded-lg p-6 bg-background">
          <AreaChart data={data} xKey="month" areas={[{ key: "revenue", label: "Revenue" }]} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Stacked Areas</h2>
        <div className="border rounded-lg p-6 bg-background">
          <AreaChart data={data} xKey="month" areas={[{ key: "revenue", label: "Revenue" }, { key: "profit", label: "Profit" }]} stacked showLegend />
        </div>
      </section>
    </div>
  );
}
