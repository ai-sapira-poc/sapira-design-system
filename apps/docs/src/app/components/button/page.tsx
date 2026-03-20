"use client";

import { useState } from "react";
import { Button } from "@sapira/ui";

const variants = ["default", "destructive", "outline", "secondary", "ghost", "link"] as const;
const sizes = ["default", "sm", "lg", "icon"] as const;

export default function ButtonPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Button</h1>
        <p className="text-muted-foreground mt-2">
          Displays a button or a component that looks like a button. Supports multiple variants
          and sizes. Uses Radix Slot for composition via <code>asChild</code>.
        </p>
      </div>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <div className="flex gap-3 items-center flex-wrap">
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}</code>
        </pre>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>
        <div className="flex gap-3 items-center flex-wrap">
          {sizes.map((size) => (
            <Button key={size} size={size}>
              {size === "icon" ? "★" : size.charAt(0).toUpperCase() + size.slice(1)}
            </Button>
          ))}
        </div>
      </section>

      {/* Loading */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Loading State</h2>
        <p className="text-sm text-muted-foreground">
          Applies Doherty Threshold — instant visual feedback on action. The button preserves its width during loading.
        </p>
        <div className="flex gap-3 items-center flex-wrap">
          <Button loading>Save</Button>
          <Button loading loadingText="Saving…">Save</Button>
          <Button loading variant="outline">Submit</Button>
          <Button loading variant="secondary" loadingText="Processing…">Process</Button>
        </div>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`<Button loading>Save</Button>
<Button loading loadingText="Saving…">Save</Button>`}</code>
        </pre>

      </section>

      {/* Props Table */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-3 font-medium">Prop</th>
                <th className="text-left p-3 font-medium">Type</th>
                <th className="text-left p-3 font-medium">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs">
                  &quot;default&quot; | &quot;destructive&quot; | &quot;outline&quot; |
                  &quot;secondary&quot; | &quot;ghost&quot; | &quot;link&quot;
                </td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs">
                  &quot;default&quot; | &quot;sm&quot; | &quot;lg&quot; | &quot;icon&quot; |
                  &quot;icon-sm&quot; | &quot;icon-lg&quot;
                </td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-mono text-xs">asChild</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
