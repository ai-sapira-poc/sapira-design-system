"use client";

import { ToastProvider, useToast, Button } from "@sapira/ui";

function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="flex gap-3 flex-wrap">
      <Button onClick={() => toast({ title: "Default notification", description: "Something happened." })}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast({ title: "Saved successfully", variant: "success" })}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast({ title: "Something went wrong", description: "Please try again.", variant: "error" })}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast({ title: "Watch out", variant: "warning" })}>
        Warning
      </Button>
    </div>
  );
}

export default function ToastPage() {
  return (
    <ToastProvider>
      <div className="space-y-10">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Toast</h1>
          <p className="text-muted-foreground mt-2">
            Non-blocking notifications with auto-dismiss. Supports default, success, error, and warning variants.
            Uses a <code>ToastProvider</code> and <code>useToast()</code> hook.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Demo</h2>
          <ToastDemo />
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Usage</h2>
          <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
            <code>{`// Wrap your app
<ToastProvider defaultDuration={5000}>
  <App />
</ToastProvider>

// In any component
const { toast, dismiss } = useToast();
toast({ title: "Saved!", variant: "success" });`}</code>
          </pre>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Props</h2>
          <div className="border rounded-md overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-muted"><th className="text-left p-3 font-medium">Prop</th><th className="text-left p-3 font-medium">Type</th><th className="text-left p-3 font-medium">Default</th></tr></thead>
              <tbody>
                <tr className="border-t"><td className="p-3 font-mono text-xs">title</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
                <tr className="border-t"><td className="p-3 font-mono text-xs">description</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
                <tr className="border-t"><td className="p-3 font-mono text-xs">variant</td><td className="p-3 font-mono text-xs">&quot;default&quot; | &quot;success&quot; | &quot;error&quot; | &quot;warning&quot;</td><td className="p-3 font-mono text-xs">&quot;default&quot;</td></tr>
                <tr className="border-t"><td className="p-3 font-mono text-xs">duration</td><td className="p-3 font-mono text-xs">number (ms)</td><td className="p-3 font-mono text-xs">5000</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </ToastProvider>
  );
}
