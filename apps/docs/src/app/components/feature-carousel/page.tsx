"use client";

import { FeatureCarousel } from "@sapira/ui";

const features = [
  {
    id: "analytics",
    label: "Analytics",
    title: "Real-time Analytics Dashboard",
    description: "Track key metrics with live data feeds, customizable widgets, and exportable reports that keep your team aligned.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "#2563eb",
  },
  {
    id: "automation",
    label: "Automation",
    title: "Workflow Automation Engine",
    description: "Build complex automation pipelines with a visual editor. Connect your tools and eliminate repetitive tasks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "#7c3aed",
  },
  {
    id: "collaboration",
    label: "Collaboration",
    title: "Team Collaboration Hub",
    description: "Shared workspaces, real-time editing, threaded comments, and integrations with the tools your team already uses.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    color: "#059669",
  },
  {
    id: "security",
    label: "Security",
    title: "Enterprise-Grade Security",
    description: "SOC 2 compliant, end-to-end encryption, role-based access control, and audit logging for complete visibility.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
    color: "#dc2626",
  },
];

export default function FeatureCarouselPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">FeatureCarousel</h1>
        <p className="text-muted-foreground mt-2">
          Animated feature carousel with smooth slide transitions, pill-shaped feature labels, and stacked image cards.
          Great for landing pages and feature showcases.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Auto-playing Demo</h2>
        <FeatureCarousel items={features} autoPlay={5000} />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Manual Navigation Only</h2>
        <FeatureCarousel items={features.slice(0, 3)} autoPlay={0} />
      </section>
    </div>
  );
}
