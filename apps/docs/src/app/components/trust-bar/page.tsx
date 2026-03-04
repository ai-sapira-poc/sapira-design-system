"use client";

import { TrustBar } from "@sapira/ui";

export default function TrustBarPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">TrustBar</h1>
        <p className="text-muted-foreground mt-2">
          Horizontal bar of trust/feature badges. Use at the bottom of onboarding or landing screens for reassurance.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default</h2>
        <div className="border rounded-lg p-6">
          <TrustBar
            items={[
              { icon: <span>🔒</span>, label: "Secure data" },
              { icon: <span>⏱️</span>, label: "5 minutes" },
              { icon: <span>📋</span>, label: "Guided process" },
            ]}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Custom Separator</h2>
        <div className="border rounded-lg p-6">
          <TrustBar
            separator="|"
            items={[
              { label: "Free trial" },
              { label: "No credit card" },
              { label: "Cancel anytime" },
            ]}
          />
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
              <tr><td className="p-3 border-b border-border">items</td><td className="p-3 border-b border-border">{`{ icon?: ReactNode; label: string }[]`}</td><td className="p-3 border-b border-border">—</td></tr>
              <tr><td className="p-3 border-b border-border">separator</td><td className="p-3 border-b border-border">string</td><td className="p-3 border-b border-border">&quot;·&quot;</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
