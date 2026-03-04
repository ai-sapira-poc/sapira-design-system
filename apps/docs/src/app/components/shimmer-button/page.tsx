"use client";

import { ShimmerButton, Button } from "@sapira/ui";

export default function ShimmerButtonPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ShimmerButton</h1>
        <p className="text-muted-foreground mt-2">
          A button with a subtle animated shimmer sweep effect. Premium and professional.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default</h2>
        <div className="flex gap-4 items-center">
          <ShimmerButton>Get Started</ShimmerButton>
          <Button>Regular Button</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Custom Colors</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <ShimmerButton background="hsl(var(--destructive))" shimmerColor="rgba(255,255,255,0.4)">
            Delete Account
          </ShimmerButton>
          <ShimmerButton background="#059669" shimmerColor="rgba(255,255,255,0.25)">
            Confirm Payment
          </ShimmerButton>
          <ShimmerButton background="#7c3aed">
            Upgrade Plan
          </ShimmerButton>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Custom Duration</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <ShimmerButton shimmerDuration="1s">Fast (1s)</ShimmerButton>
          <ShimmerButton shimmerDuration="3s">Default (3s)</ShimmerButton>
          <ShimmerButton shimmerDuration="6s">Slow (6s)</ShimmerButton>
        </div>
      </section>
    </div>
  );
}
