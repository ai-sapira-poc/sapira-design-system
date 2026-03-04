import { AppShell } from "@sapira/ui";

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
          AppShell gives you the skeleton; patterns fill it with life.
        </div>
      </div>

      {/* Minimal example */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Minimal Example</h2>
        <p className="text-sm text-muted-foreground">
          AppShell with placeholder content — just the structural frame.
        </p>
        <div className="border rounded-lg overflow-hidden h-72 relative">
          <AppShell
            className="h-full !min-h-0"
            sidebar={
              <div className="p-4 space-y-3">
                <div className="text-sm font-semibold tracking-tight">Logo</div>
                <nav className="space-y-1 text-sm text-muted-foreground">
                  <div className="px-2 py-1.5 rounded bg-accent text-accent-foreground">Home</div>
                  <div className="px-2 py-1.5 rounded hover:bg-accent cursor-pointer">Settings</div>
                  <div className="px-2 py-1.5 rounded hover:bg-accent cursor-pointer">Users</div>
                </nav>
              </div>
            }
            header={
              <header className="flex h-12 items-center justify-between border-b px-4 bg-background">
                <span className="text-sm font-medium">Page Title</span>
                <span className="text-xs text-muted-foreground">user@example.com</span>
              </header>
            }
          >
            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
              Your content here
            </div>
          </AppShell>
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
          <code>{`<AppShell
  sidebar={<MySidebar />}
  header={<MyHeader />}
>
  <MyPageContent />
</AppShell>`}</code>
        </pre>
      </section>

      {/* Collapsed sidebar */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Collapsed Sidebar</h2>
        <div className="border rounded-lg overflow-hidden h-48 relative">
          <AppShell
            className="h-full !min-h-0"
            sidebarCollapsed
            sidebar={
              <div className="p-2 flex flex-col items-center gap-2 pt-4">
                <div className="w-8 h-8 rounded bg-muted" />
                <div className="w-8 h-8 rounded bg-muted" />
                <div className="w-8 h-8 rounded bg-muted" />
              </div>
            }
            header={
              <header className="flex h-12 items-center border-b px-4 bg-background">
                <span className="text-sm font-medium">Collapsed Mode</span>
              </header>
            }
          >
            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
              Content with collapsed sidebar
            </div>
          </AppShell>
        </div>
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
        a fully composed example with MetricsCards, DataTable, and more.
      </div>
    </div>
  );
}
