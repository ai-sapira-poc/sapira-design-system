"use client";

import { AnimatedBackground } from "@sapira/ui";

const variants = ["gradient", "aurora", "dots", "grid"] as const;

export default function AnimatedBackgroundPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">AnimatedBackground</h1>
        <p className="text-muted-foreground mt-2">
          Animated gradient backgrounds for hero sections and landing pages. Four variants available.
        </p>
      </div>

      {variants.map((v) => (
        <section key={v} className="space-y-4">
          <h2 className="text-lg font-semibold capitalize">{v}</h2>
          <AnimatedBackground
            variant={v}
            speed="medium"
            interactive={v === "gradient"}
            className="h-64 rounded-xl border border-border"
          >
            <div className="flex items-center justify-center h-64">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold">{v} variant</h3>
                <p className="text-sm text-muted-foreground">
                  {v === "gradient" && "Move your mouse over this area"}
                  {v === "aurora" && "Northern lights wave effect"}
                  {v === "dots" && "Animated dot grid pattern"}
                  {v === "grid" && "Subtle moving grid lines"}
                </p>
              </div>
            </div>
          </AnimatedBackground>
        </section>
      ))}
    </div>
  );
}
