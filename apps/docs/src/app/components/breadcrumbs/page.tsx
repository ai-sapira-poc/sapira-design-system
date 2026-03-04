"use client";
import { Breadcrumbs } from "@sapira/ui";

export default function BreadcrumbsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Breadcrumbs</h1>
        <p className="text-muted-foreground mt-2">Navigation trail showing the current page location within a hierarchy.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default</h2>
        <Breadcrumbs items={[{ label: "Home", href: "#" }, { label: "Products", href: "#" }, { label: "Detail" }]} />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Custom Separator</h2>
        <Breadcrumbs separator="›" items={[{ label: "Dashboard", href: "#" }, { label: "Settings", href: "#" }, { label: "Profile" }]} />
        <Breadcrumbs separator="→" items={[{ label: "Home", href: "#" }, { label: "Category", href: "#" }, { label: "Item" }]} />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted"><th className="text-left p-3 font-medium">Prop</th><th className="text-left p-3 font-medium">Type</th><th className="text-left p-3 font-medium">Default</th></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono text-xs">items</td><td className="p-3 font-mono text-xs">{"{ label: string; href?: string }[]"}</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">separator</td><td className="p-3 font-mono text-xs">ReactNode</td><td className="p-3 font-mono text-xs">&quot;/&quot;</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
