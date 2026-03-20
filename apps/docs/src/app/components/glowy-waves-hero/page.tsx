"use client";

import { GlowyWavesHero } from "@sapira/ui";

export default function GlowyWavesHeroPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">GlowyWavesHero</h1>
        <p className="text-muted-foreground mt-2">
          Reactive canvas waves hero section with glow orbs, stats counters, and CTA buttons.
          Extends/replaces AnimatedBackground for full hero layouts. Mouse-interactive.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Full Hero</h2>
        <GlowyWavesHero
          title="Build AI Agents That Actually Work"
          subtitle="Pharo is the agentic operating system for enterprise. Deploy, monitor, and scale AI agents across your organization."
          ctas={[
            { label: "Get Started", variant: "primary", onClick: () => console.log("CTA primary") },
            { label: "View Docs", variant: "secondary", onClick: () => console.log("CTA secondary") },
          ]}
          stats={[
            { label: "Enterprise Clients", value: "120+" },
            { label: "Agents Deployed", value: "3.4K" },
            { label: "Uptime", value: "99.9%" },
          ]}
          className="border border-border"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Custom Colors</h2>
        <GlowyWavesHero
          title="Procurement Intelligence"
          subtitle="AI-powered procurement optimization for industrial companies."
          waveColor="rgba(16, 185, 129, 0.6)"
          waveColorSecondary="rgba(6, 182, 212, 0.6)"
          ctas={[{ label: "Learn More", variant: "primary" }]}
          className="border border-border min-h-[360px]"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Minimal (Title Only)</h2>
        <GlowyWavesHero
          title="Coming Soon"
          waveColor="rgba(244, 63, 94, 0.5)"
          waveColorSecondary="rgba(251, 146, 60, 0.5)"
          className="border border-border min-h-[280px]"
        />
      </section>
    </div>
  );
}
