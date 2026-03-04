"use client";
import { useState } from "react";
import { Tabs } from "@sapira/ui";

const sampleTabs = [
  { id: "all", label: "All", count: 42 },
  { id: "active", label: "Active", count: 28 },
  { id: "draft", label: "Draft", count: 8 },
  { id: "archived", label: "Archived", count: 6 },
];

export default function TabsPage() {
  const [active, setActive] = useState("all");
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Tabs</h1>
        <p className="text-muted-foreground mt-2">Tab bar with underline active indicator and optional count badges.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Counts</h2>
        <Tabs tabs={sampleTabs} activeTab={active} onChange={setActive} />
        <p className="text-sm text-muted-foreground">Active: {active}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Without Counts</h2>
        <Tabs tabs={[{ id: "overview", label: "Overview" }, { id: "details", label: "Details" }, { id: "history", label: "History" }]} activeTab={active === "overview" || active === "details" || active === "history" ? active : "overview"} onChange={setActive} />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted"><th className="text-left p-3 font-medium">Prop</th><th className="text-left p-3 font-medium">Type</th><th className="text-left p-3 font-medium">Default</th></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono text-xs">tabs</td><td className="p-3 font-mono text-xs">{"{ id: string; label: string; count?: number }[]"}</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">activeTab</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">onChange</td><td className="p-3 font-mono text-xs">{"(id: string) => void"}</td><td className="p-3 font-mono text-xs">—</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
