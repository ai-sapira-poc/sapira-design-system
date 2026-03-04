"use client";

import { GlowingEffect } from "@sapira/ui";

export default function GlowingEffectPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">GlowingEffect</h1>
        <p className="text-muted-foreground mt-2">
          A cursor-following glow effect that adds an animated border on hover. Wrap any container to add a premium hover interaction.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Analytics", "Revenue", "Users"].map((label) => (
            <GlowingEffect key={label} className="rounded-lg">
              <div className="rounded-lg border border-border bg-background p-6">
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="text-2xl font-semibold mt-2">1,234</p>
              </div>
            </GlowingEffect>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Custom Spread &amp; Color</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlowingEffect spread={80} color="hsl(var(--destructive))" className="rounded-lg">
            <div className="rounded-lg border border-border bg-background p-6">
              <p className="text-sm text-muted-foreground">Wide spread, destructive color</p>
              <p className="text-2xl font-semibold mt-2">spread=80</p>
            </div>
          </GlowingEffect>
          <GlowingEffect spread={20} borderWidth={3} className="rounded-lg">
            <div className="rounded-lg border border-border bg-background p-6">
              <p className="text-sm text-muted-foreground">Tight spread, thick border</p>
              <p className="text-2xl font-semibold mt-2">spread=20</p>
            </div>
          </GlowingEffect>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">On Input</h2>
        <GlowingEffect className="rounded-md max-w-sm">
          <input
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            placeholder="Hover me for glow..."
          />
        </GlowingEffect>
      </section>
    </div>
  );
}
