"use client";

import { PieChart } from "@sapira/ui";

const data = [
  { name: "Desktop", value: 400 },
  { name: "Mobile", value: 300 },
  { name: "Tablet", value: 200 },
  { name: "Other", value: 100 },
];

export default function PieChartPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">PieChart</h1>
        <p className="text-muted-foreground mt-2">Pie and donut charts for distribution data.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Pie</h2>
        <div className="border rounded-lg p-6 bg-background">
          <PieChart data={data} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Donut</h2>
        <div className="border rounded-lg p-6 bg-background">
          <PieChart data={data} donut />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">With Labels</h2>
        <div className="border rounded-lg p-6 bg-background">
          <PieChart data={data} donut showLabels />
        </div>
      </section>
    </div>
  );
}
