"use client";
import { UserProfile } from "@sapira/ui";

export default function UserProfilePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">UserProfile</h1>
        <p className="text-muted-foreground mt-2">User avatar with name and role. Shows initials when no avatar image is provided.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>
        <div className="flex flex-col gap-4">
          <UserProfile name="Alice Johnson" role="Administrator" size="sm" />
          <UserProfile name="Bob Williams" role="Developer" size="md" />
          <UserProfile name="Carol Davis" role="Designer" size="lg" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Avatar</h2>
        <UserProfile name="Demo User" role="Product Manager" avatar="https://i.pravatar.cc/100?img=12" />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Name Only</h2>
        <UserProfile name="Simple Name" />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted"><th className="text-left p-3 font-medium">Prop</th><th className="text-left p-3 font-medium">Type</th><th className="text-left p-3 font-medium">Default</th></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono text-xs">name</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">role</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">avatar</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">size</td><td className="p-3 font-mono text-xs">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</td><td className="p-3 font-mono text-xs">&quot;md&quot;</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
