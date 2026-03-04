"use client";

import { IconTile } from "@sapira/ui";

export default function IconTilePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">IconTile</h1>
        <p className="text-muted-foreground mt-2">
          Square icon tile for navigation grids. Supports solid, outline, and dashed (coming soon) variants.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <div className="flex gap-4 flex-wrap">
          <IconTile icon={<span>📋</span>} label="Solid" variant="solid" />
          <IconTile icon={<span>📦</span>} label="Outline" variant="outline" />
          <IconTile icon={<span>🔒</span>} label="Coming Soon" variant="dashed" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>
        <div className="flex gap-4 items-end flex-wrap">
          <IconTile icon={<span>⚡</span>} label="Small" size="sm" />
          <IconTile icon={<span>⚡</span>} label="Medium" size="md" />
          <IconTile icon={<span>⚡</span>} label="Large" size="lg" />
        </div>
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
              <tr><td className="p-3 border-b border-border">label</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">href</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">onClick</td><td className="p-3 border-b border-border">() =&gt; void</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">variant</td><td className="p-3 border-b border-border">&quot;solid&quot; | &quot;outline&quot; | &quot;dashed&quot;</td><td className="p-3 border-b border-border">&quot;solid&quot;</td></tr>
              <tr><td className="p-3 border-b border-border">size</td><td className="p-3 border-b border-border">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</td><td className="p-3 border-b border-border">&quot;md&quot;</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
