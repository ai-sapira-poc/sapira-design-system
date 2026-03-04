"use client";

import { NumberTicker } from "@sapira/ui";

export default function NumberTickerPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">NumberTicker</h1>
        <p className="text-muted-foreground mt-2">
          Animated number counter that rolls up from 0 to a target value when scrolled into view.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default</h2>
        <p className="text-4xl font-bold">
          <NumberTicker value={12847} />
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Prefix &amp; Suffix</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border p-6 text-center">
            <p className="text-3xl font-bold">
              <NumberTicker value={99.9} decimals={1} prefix="$" />
            </p>
            <p className="text-sm text-muted-foreground mt-1">Revenue (M)</p>
          </div>
          <div className="rounded-lg border p-6 text-center">
            <p className="text-3xl font-bold">
              <NumberTicker value={87} suffix="%" />
            </p>
            <p className="text-sm text-muted-foreground mt-1">Satisfaction</p>
          </div>
          <div className="rounded-lg border p-6 text-center">
            <p className="text-3xl font-bold">
              <NumberTicker value={2450000} />
            </p>
            <p className="text-sm text-muted-foreground mt-1">Total Users</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Different Speeds</h2>
        <div className="flex gap-8 items-baseline flex-wrap">
          <div>
            <p className="text-2xl font-bold"><NumberTicker value={500} duration={500} /></p>
            <p className="text-xs text-muted-foreground">Fast (500ms)</p>
          </div>
          <div>
            <p className="text-2xl font-bold"><NumberTicker value={500} duration={1500} /></p>
            <p className="text-xs text-muted-foreground">Default (1500ms)</p>
          </div>
          <div>
            <p className="text-2xl font-bold"><NumberTicker value={500} duration={4000} /></p>
            <p className="text-xs text-muted-foreground">Slow (4000ms)</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Count Down</h2>
        <p className="text-4xl font-bold">
          <NumberTicker value={100} direction="down" />
        </p>
      </section>
    </div>
  );
}
