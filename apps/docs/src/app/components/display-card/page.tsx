"use client";

import { DisplayCards, DisplayCard } from "@sapira/ui";
import { Zap, Shield, BarChart3 } from "lucide-react";

export default function DisplayCardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">DisplayCard</h1>
        <p className="text-muted-foreground mt-2">
          Premium stacked/tilted showcase cards with hover effects. Great for feature highlights.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Stacked Cards</h2>
        <DisplayCards className="h-80">
          <DisplayCard
            title="Lightning Fast"
            description="Sub-millisecond response times with edge computing."
            icon={<Zap className="h-5 w-5 text-amber-500" />}
            color="#f59e0b"
          />
          <DisplayCard
            title="Secure by Default"
            description="Enterprise-grade encryption and compliance built in."
            icon={<Shield className="h-5 w-5 text-emerald-500" />}
            color="#10b981"
          />
          <DisplayCard
            title="Real-time Analytics"
            description="Monitor everything with beautiful dashboards."
            icon={<BarChart3 className="h-5 w-5 text-blue-500" />}
            color="#3b82f6"
          />
        </DisplayCards>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Individual Card</h2>
        <div className="flex justify-center py-8">
          <DisplayCard
            title="Standalone Card"
            description="Display cards also work individually with hover effects."
            icon={<Zap className="h-5 w-5 text-violet-500" />}
            color="#8b5cf6"
          />
        </div>
      </section>
    </div>
  );
}
