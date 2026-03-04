"use client";

import { BarChart } from "@sapira/ui";

const data = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 5000, expenses: 3800 },
  { month: "Apr", revenue: 4780, expenses: 3908 },
  { month: "May", revenue: 5890, expenses: 4800 },
  { month: "Jun", revenue: 6390, expenses: 3800 },
];

export default function BarChartPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">BarChart</h1>
        <p className="text-muted-foreground mt-2">Vertical and horizontal bar charts powered by Recharts.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Simple</h2>
        <div className="border rounded-lg p-6 bg-background">
          <BarChart data={data} xKey="month" yKey="revenue" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Grouped</h2>
        <div className="border rounded-lg p-6 bg-background">
          <BarChart data={data} xKey="month" bars={[{ key: "revenue", label: "Revenue" }, { key: "expenses", label: "Expenses" }]} showLegend showTooltip />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Stacked</h2>
        <div className="border rounded-lg p-6 bg-background">
          <BarChart data={data} xKey="month" bars={[{ key: "revenue", label: "Revenue" }, { key: "expenses", label: "Expenses" }]} stacked showLegend />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Horizontal Layout</h2>
        <div className="border rounded-lg p-6 bg-background">
          <BarChart data={data} xKey="month" yKey="revenue" layout="vertical" height={350} />
        </div>
      </section>
    </div>
  );
}
