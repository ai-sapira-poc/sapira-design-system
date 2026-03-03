import { AppShell, PageHeader } from "@sapira/ui";

export default function AppShellPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">AppShell</h1>
        <p className="text-muted-foreground mt-2">
          Main layout wrapper combining a sidebar, header, and content area.
          Accepts sidebar, header, and children as slots.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Preview</h2>
        <div className="border rounded-lg overflow-hidden h-80 relative">
          <AppShell
            className="h-full !min-h-0"
            sidebar={
              <div className="p-4 space-y-2">
                <div className="h-6 w-20 bg-muted rounded" />
                <div className="space-y-1">
                  {["Home", "Projects", "Settings"].map((item) => (
                    <div key={item} className="px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground cursor-pointer rounded hover:bg-accent">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            }
            header={
              <header className="flex h-14 items-center justify-between border-b px-4 bg-background/80 backdrop-blur-sm">
                <span className="text-sm font-medium">App Name</span>
                <span className="text-xs text-muted-foreground">User</span>
              </header>
            }
          >
            <div className="p-6">
              <PageHeader title="Dashboard" description="Welcome to the application." />
              <div className="grid grid-cols-3 gap-4 mt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-20 rounded-lg border bg-muted/30" />
                ))}
              </div>
            </div>
          </AppShell>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-3 font-medium">Prop</th>
                <th className="text-left p-3 font-medium">Type</th>
                <th className="text-left p-3 font-medium">Default</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["sidebar", "ReactNode", "—"],
                ["header", "ReactNode", "—"],
                ["sidebarWidth", "number", "240"],
                ["sidebarCollapsed", "boolean", "false"],
                ["collapsedWidth", "number", "64"],
              ].map(([prop, type, def]) => (
                <tr key={prop} className="border-t">
                  <td className="p-3 font-mono text-xs">{prop}</td>
                  <td className="p-3 font-mono text-xs">{type}</td>
                  <td className="p-3 font-mono text-xs">{def}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
