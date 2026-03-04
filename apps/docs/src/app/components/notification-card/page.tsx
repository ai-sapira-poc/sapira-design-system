"use client";
import { NotificationCard } from "@sapira/ui";

export default function NotificationCardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">NotificationCard</h1>
        <p className="text-muted-foreground mt-2">Actionable notification card with icon, badge, timestamp and variant-colored border accent.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <div className="space-y-3 max-w-lg">
          <NotificationCard variant="info" title="New update available" description="Version 2.1 is ready to install." timestamp="2m ago" />
          <NotificationCard variant="warning" title="Storage running low" description="Only 2GB remaining." badge={{ label: "Warning" }} timestamp="1h ago" />
          <NotificationCard variant="error" title="Payment failed" description="Please update your billing information." badge={{ label: "Critical" }} />
          <NotificationCard variant="success" title="Deployment complete" description="All services are running." timestamp="5m ago" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Clickable</h2>
        <div className="max-w-lg">
          <NotificationCard variant="info" title="Click me" description="This card has an onClick handler and shows a chevron." onClick={() => alert("Clicked!")} timestamp="Just now" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted"><th className="text-left p-3 font-medium">Prop</th><th className="text-left p-3 font-medium">Type</th><th className="text-left p-3 font-medium">Default</th></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono text-xs">title</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">description</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">variant</td><td className="p-3 font-mono text-xs">&quot;info&quot; | &quot;warning&quot; | &quot;error&quot; | &quot;success&quot;</td><td className="p-3 font-mono text-xs">&quot;info&quot;</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">icon</td><td className="p-3 font-mono text-xs">ReactNode</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">badge</td><td className="p-3 font-mono text-xs">{"{ label: string; variant?: string }"}</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">timestamp</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">onClick</td><td className="p-3 font-mono text-xs">{"() => void"}</td><td className="p-3 font-mono text-xs">—</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
