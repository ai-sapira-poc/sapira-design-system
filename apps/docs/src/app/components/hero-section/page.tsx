"use client";

import { HeroSection } from "@sapira/ui";

export default function HeroSectionPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">HeroSection</h1>
        <p className="text-muted-foreground mt-2">
          Full-screen hero section with optional background image and overlay.
          Perfect for landing pages and project entry points.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default (Gradient)</h2>
        <div className="border rounded-lg overflow-hidden h-[300px]">
          <HeroSection className="min-h-[300px]">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Welcome</h2>
              <p className="text-muted-foreground mt-2">A hero with subtle gradient background</p>
            </div>
          </HeroSection>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Dark Overlay</h2>
        <div className="border rounded-lg overflow-hidden h-[300px]">
          <HeroSection
            backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
            overlay="dark"
            className="min-h-[300px]"
          >
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold">Dark Overlay</h2>
              <p className="mt-2 opacity-80">Content over a dark overlay</p>
            </div>
          </HeroSection>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Light Overlay</h2>
        <div className="border rounded-lg overflow-hidden h-[300px]">
          <HeroSection
            backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
            overlay="light"
            className="min-h-[300px]"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold">Light Overlay</h2>
              <p className="text-muted-foreground mt-2">Content over a light overlay</p>
            </div>
          </HeroSection>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-md">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 border-b border-border">Prop</th>
                <th className="text-left p-3 border-b border-border">Type</th>
                <th className="text-left p-3 border-b border-border">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border-b border-border">backgroundImage</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">overlay</td><td className="p-3 border-b border-border">&quot;light&quot; | &quot;dark&quot; | &quot;none&quot;</td><td className="p-3 border-b border-border">&quot;light&quot;</td></tr>
              <tr><td className="p-3 border-b border-border">children</td><td className="p-3 border-b border-border">ReactNode</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">className</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">—</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
