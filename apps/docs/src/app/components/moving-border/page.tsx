"use client";

import { MovingBorder } from "@sapira/ui";

export default function MovingBorderPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">MovingBorder</h1>
        <p className="text-muted-foreground mt-2">
          An animated border that continuously traces around an element. Inspired by Aceternity UI.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MovingBorder>
            <div className="p-6">
              <p className="font-semibold">Default</p>
              <p className="text-sm text-muted-foreground mt-1">Default speed and colors</p>
            </div>
          </MovingBorder>
          <MovingBorder duration={1000} colors={["#ef4444", "#f97316", "#ef4444"]}>
            <div className="p-6">
              <p className="font-semibold">Fast &amp; Warm</p>
              <p className="text-sm text-muted-foreground mt-1">1s duration, warm colors</p>
            </div>
          </MovingBorder>
          <MovingBorder duration={4000} colors={["#8b5cf6", "#06b6d4", "#8b5cf6"]}>
            <div className="p-6">
              <p className="font-semibold">Slow &amp; Cool</p>
              <p className="text-sm text-muted-foreground mt-1">4s duration, cool colors</p>
            </div>
          </MovingBorder>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Button</h2>
        <MovingBorder as="button" borderRadius="0.5rem" duration={1500}>
          <div className="px-6 py-2 text-sm font-medium">
            Hover me
          </div>
        </MovingBorder>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Badge</h2>
        <MovingBorder borderRadius="9999px" duration={1200}>
          <div className="px-4 py-1 text-xs font-medium">
            ✨ Premium
          </div>
        </MovingBorder>
      </section>
    </div>
  );
}
