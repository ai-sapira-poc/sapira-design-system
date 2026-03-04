"use client";

import { useState } from "react";
import { RoleCard } from "@sapira/ui";

export default function RoleCardPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">RoleCard</h1>
        <p className="text-muted-foreground mt-2">
          Navigation card with icon, title, and description. Ideal for role-based or category selection screens.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Interactive Selection</h2>
        <div className="space-y-3 max-w-md">
          {[
            { id: "admin", icon: "👤", title: "Administrator", description: "Full access to all settings and data" },
            { id: "reviewer", icon: "🔍", title: "Reviewer", description: "Can review and approve submissions" },
            { id: "viewer", icon: "👁️", title: "Viewer", description: "Read-only access to dashboards" },
          ].map((role) => (
            <RoleCard
              key={role.id}
              icon={<span>{role.icon}</span>}
              title={role.title}
              description={role.description}
              selected={selected === role.id}
              onClick={() => setSelected(role.id)}
            />
          ))}
        </div>
        {selected && <p className="text-sm text-muted-foreground">Selected: <strong>{selected}</strong></p>}
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-md">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 border-b border-border">Prop</th>
                <th className="text-left p-3 border-b border-border">Type</th>
                <th className="text-left p-3 border-b border-border">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border-b border-border">icon</td><td className="p-3 border-b border-border">ReactNode</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">title</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">description</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">href</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">onClick</td><td className="p-3 border-b border-border">() =&gt; void</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">selected</td><td className="p-3 border-b border-border">boolean</td><td className="p-3 border-b border-border">false</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
