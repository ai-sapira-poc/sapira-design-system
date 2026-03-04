"use client";

import { Marquee } from "@sapira/ui";

const logos = ["Acme Corp", "Globex", "Initech", "Umbrella", "Cyberdyne", "Stark Industries", "Wayne Enterprises", "Aperture Science"];

export default function MarqueePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Marquee</h1>
        <p className="text-muted-foreground mt-2">
          Auto-scrolling horizontal strip for logos, testimonials, and announcements.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Logo Strip</h2>
        <Marquee className="py-4">
          {logos.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-background/80 text-sm font-medium text-muted-foreground whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </Marquee>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Reverse Direction</h2>
        <Marquee direction="right" speed={25} className="py-4">
          {logos.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-background/80 text-sm font-medium text-muted-foreground whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </Marquee>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Fast Announcements</h2>
        <Marquee speed={80} gap={48} className="py-4 text-sm text-muted-foreground">
          <span>🎉 New feature released</span>
          <span>📦 v2.0 now available</span>
          <span>🔒 Security update applied</span>
          <span>🚀 Performance improved by 40%</span>
        </Marquee>
      </section>
    </div>
  );
}
