"use client";

import { Sidebar } from "@sapira/ui";
import { Home, Settings, Users, BarChart3 } from "lucide-react";

const sidebarItems = [
  { id: "home", label: "Home", icon: <Home className="h-4 w-4" />, href: "#" },
  { id: "analytics", label: "Analytics", icon: <BarChart3 className="h-4 w-4" />, href: "#" },
  { id: "users", label: "Users", icon: <Users className="h-4 w-4" />, href: "#" },
  { type: "separator" as const },
  { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" />, href: "#" },
];

export default function AppShellPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">AppShell</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          A <strong>layout shell</strong> that provides the structural frame of an application —
          a sidebar, a header slot, and a content area. It contains <em>no content</em> by itself.
        </p>
        <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
          <strong>AppShell vs Dashboard:</strong> Think of AppShell as a <em>blank picture frame</em>.
          The <a href="/patterns/dashboard" className="underline font-medium">Dashboard pattern</a> is
          that frame filled with real furniture — MetricsCards, DataTables, charts, etc.
        </div>
      </div>

      {/* Live preview — simulated with relative positioning */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Preview</h2>
        <p className="text-sm text-muted-foreground">
          AppShell composed with Sidebar + Header + content area.
        </p>
        <div className="border rounded-lg overflow-hidden" style={{ height: 400 }}>
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-60 border-r border-border bg-background shrink-0 h-full">
              <Sidebar
                items={sidebarItems}
                activeItemId="home"
                logo={<span className="font-semibold text-sm px-3 py-4 block">Acme Inc</span>}
              />
            </div>
            {/* Main area */}
            <div className="flex-1 flex flex-col">
              {/* Header */}
              <header className="flex h-12 items-center justify-between border-b border-border px-4 bg-background shrink-0">
                <span className="text-sm font-medium">Dashboard</span>
                <span className="text-xs text-muted-foreground">admin@acme.com</span>
              </header>
              {/* Content */}
              <div className="flex-1 p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Welcome back</h3>
                    <p className="text-sm text-muted-foreground">Here&apos;s what&apos;s happening today.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {["Users", "Revenue", "Orders"].map((label) => (
                      <div key={label} className="rounded-lg border border-border p-3">
                        <p className="text-xs text-muted-foreground">{label}</p>
                        <p className="text-lg font-semibold mt-1">1,234</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border border-border p-4 h-24 flex items-center justify-center text-sm text-muted-foreground">
                    Content area
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slots */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Slots</h2>
        <p className="text-sm text-muted-foreground">
          AppShell has three slots you fill with your own content:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
          <li><code className="text-foreground">sidebar</code> — Fixed left panel (navigation, branding)</li>
          <li><code className="text-foreground">header</code> — Top bar (breadcrumbs, user menu)</li>
          <li><code className="text-foreground">children</code> — Main content area (pages, forms, dashboards)</li>
        </ul>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`import { AppShell, Sidebar, Header } from "@sapira/ui";

<AppShell
  sidebar={
    <Sidebar
      items={navItems}
      activeItemId="dashboard"
      logo={<span>My App</span>}
      renderLink={({ href, className, children }) => (
        <Link href={href} className={className}>{children}</Link>
      )}
    />
  }
  header={<Header title="Dashboard" />}
>
  <PageContent />
</AppShell>`}</code>
        </pre>
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-3 font-medium">Prop</th>
                <th className="text-left p-3 font-medium">Type</th>
                <th className="text-left p-3 font-medium">Default</th>
                <th className="text-left p-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["sidebar", "ReactNode", "—", "Content for the fixed left sidebar"],
                ["header", "ReactNode", "—", "Content for the top header bar"],
                ["children", "ReactNode", "—", "Main content area"],
                ["sidebarWidth", "number", "240", "Sidebar width in pixels"],
                ["sidebarCollapsed", "boolean", "false", "Collapse sidebar to icon-only mode"],
                ["collapsedWidth", "number", "64", "Width when collapsed"],
              ].map(([prop, type, def, desc]) => (
                <tr key={prop} className="border-t">
                  <td className="p-3 font-mono text-xs">{prop}</td>
                  <td className="p-3 font-mono text-xs">{type}</td>
                  <td className="p-3 font-mono text-xs">{def}</td>
                  <td className="p-3 text-xs text-muted-foreground">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="rounded-lg border border-muted bg-muted/30 p-4 text-sm text-muted-foreground">
        💡 See the <a href="/patterns/dashboard" className="underline font-medium text-foreground">Dashboard pattern</a> for
        a fully composed example with MetricsCards, DataTable, Charts, and more.
      </div>
    </div>
  );
}
