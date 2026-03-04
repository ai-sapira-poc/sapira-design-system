"use client";

import { MovingBorder } from "@sapira/ui";

export default function MovingBorderPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">MovingBorder</h1>
        <p className="text-muted-foreground mt-2">
          An animated border that continuously traces around an element. Great for highlighting featured cards, CTAs, or premium content.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MovingBorder>
            <div className="p-6">
              <p className="font-semibold">Default</p>
              <p className="text-sm text-muted-foreground mt-1">3s duration, primary color</p>
            </div>
          </MovingBorder>
          <MovingBorder duration={2000} colors={["#ef4444", "#f97316", "#ef4444"]}>
            <div className="p-6">
              <p className="font-semibold">Warm Colors</p>
              <p className="text-sm text-muted-foreground mt-1">2s duration, red/orange</p>
            </div>
          </MovingBorder>
          <MovingBorder duration={4000} colors={["#8b5cf6", "#06b6d4", "#8b5cf6"]}>
            <div className="p-6">
              <p className="font-semibold">Cool Colors</p>
              <p className="text-sm text-muted-foreground mt-1">4s duration, purple/cyan</p>
            </div>
          </MovingBorder>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Button</h2>
        <MovingBorder as="button" borderRadius="0.5rem" duration={2000}>
          <div className="px-6 py-2 text-sm font-medium">
            Get Started
          </div>
        </MovingBorder>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Badge</h2>
        <MovingBorder borderRadius="0.75rem" duration={1500} borderWidth={1}>
          <div className="px-4 py-1.5 text-xs font-medium">
            Premium
          </div>
        </MovingBorder>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Custom Border Width</h2>
        <div className="flex gap-6 flex-wrap">
          <MovingBorder borderWidth={1}>
            <div className="p-6">
              <p className="text-sm font-medium">Thin (1px)</p>
            </div>
          </MovingBorder>
          <MovingBorder borderWidth={3} colors={["#8b5cf6", "transparent", "#8b5cf6"]}>
            <div className="p-6">
              <p className="text-sm font-medium">Thick (3px)</p>
            </div>
          </MovingBorder>
        </div>
      </section>
    </div>
  );
}
