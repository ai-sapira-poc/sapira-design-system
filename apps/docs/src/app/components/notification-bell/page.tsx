"use client";
import { NotificationBell } from "@sapira/ui";

export default function NotificationBellPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">NotificationBell</h1>
        <p className="text-muted-foreground mt-2">Bell icon button with unread count badge.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Examples</h2>
        <div className="flex items-center gap-6">
          <div className="text-center space-y-2">
            <NotificationBell onClick={() => alert("Bell clicked")} />
            <p className="text-xs text-muted-foreground">No count</p>
          </div>
          <div className="text-center space-y-2">
            <NotificationBell count={3} onClick={() => {}} />
            <p className="text-xs text-muted-foreground">Count: 3</p>
          </div>
          <div className="text-center space-y-2">
            <NotificationBell count={42} onClick={() => {}} />
            <p className="text-xs text-muted-foreground">Count: 42</p>
          </div>
          <div className="text-center space-y-2">
            <NotificationBell count={150} onClick={() => {}} />
            <p className="text-xs text-muted-foreground">Count: 150 (99+)</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted"><th className="text-left p-3 font-medium">Prop</th><th className="text-left p-3 font-medium">Type</th><th className="text-left p-3 font-medium">Default</th></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono text-xs">count</td><td className="p-3 font-mono text-xs">number</td><td className="p-3 font-mono text-xs">0</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">onClick</td><td className="p-3 font-mono text-xs">{"() => void"}</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">maxCount</td><td className="p-3 font-mono text-xs">number</td><td className="p-3 font-mono text-xs">99</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
