"use client";

import { useState } from "react";
import { FilterBar } from "@sapira/ui";

const filters = [
  { label: "Status", value: "status", options: [{ label: "Active", value: "active" }, { label: "Pending", value: "pending" }, { label: "Closed", value: "closed" }] },
  { label: "Priority", value: "priority", options: [{ label: "High", value: "high" }, { label: "Medium", value: "medium" }, { label: "Low", value: "low" }] },
];

export default function FilterBarPage() {
  const [active, setActive] = useState<Record<string, string[]>>({});

  const handleChange = (filterValue: string, optionValue: string) => {
    setActive((prev) => {
      const current = prev[filterValue] ?? [];
      const next = current.includes(optionValue)
        ? current.filter((v) => v !== optionValue)
        : [...current, optionValue];
      return { ...prev, [filterValue]: next };
    });
  };

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">FilterBar</h1>
        <p className="text-muted-foreground mt-2">
          Horizontal bar with filter chips. Supports multiple filter groups with toggle behavior and a &quot;Clear all&quot; action.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Demo</h2>
        <FilterBar filters={filters} activeFilters={active} onChange={handleChange} onClear={() => setActive({})} />
        <pre className="bg-muted rounded-md p-4 text-sm">{JSON.stringify(active, null, 2)}</pre>
      </section>
    </div>
  );
}
