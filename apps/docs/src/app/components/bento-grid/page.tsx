"use client";

import { BentoGrid, BentoGridItem } from "@sapira/ui";
import { FileText, BarChart3, Settings, Users, TrendingUp, Shield } from "lucide-react";

const items = [
  { title: "Documents", description: "Manage and organize all your project documents in one place.", icon: <FileText className="h-4 w-4" />, colSpan: 2 as const, rowSpan: 1 as const },
  { title: "Analytics", description: "Track performance metrics and KPIs.", icon: <BarChart3 className="h-4 w-4" />, colSpan: 1 as const, rowSpan: 1 as const },
  { title: "Security", description: "Enterprise-grade security with SSO and RBAC.", icon: <Shield className="h-4 w-4" />, colSpan: 1 as const, rowSpan: 2 as const },
  { title: "Team", description: "Collaborate with your team in real-time.", icon: <Users className="h-4 w-4" />, colSpan: 1 as const, rowSpan: 1 as const },
  { title: "Growth", description: "Scale your operations with confidence.", icon: <TrendingUp className="h-4 w-4" />, colSpan: 1 as const, rowSpan: 1 as const },
  { title: "Settings", description: "Configure every aspect of your workspace.", icon: <Settings className="h-4 w-4" />, colSpan: 3 as const, rowSpan: 1 as const },
];

export default function BentoGridPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">BentoGrid</h1>
        <p className="text-muted-foreground mt-2">
          A responsive grid layout for feature showcases with mixed-size items.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Feature Showcase</h2>
        <BentoGrid>
          {items.map((item) => (
            <BentoGridItem
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              colSpan={item.colSpan}
              rowSpan={item.rowSpan}
            />
          ))}
        </BentoGrid>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Custom Headers</h2>
        <BentoGrid>
          <BentoGridItem
            colSpan={2}
            title="Revenue Growth"
            description="Track your revenue across all channels."
            header={
              <div className="h-24 w-full rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <BarChart3 className="h-10 w-10 text-primary/40" />
              </div>
            }
          />
          <BentoGridItem
            title="Quick Stats"
            description="At-a-glance metrics for your team."
            header={
              <div className="h-24 w-full rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center text-2xl font-bold text-foreground/20">
                42K
              </div>
            }
          />
        </BentoGrid>
      </section>
    </div>
  );
}
