export default function AgentsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">For AI Agents</h1>
        <p className="text-muted-foreground mt-2">
          A guide for AI coding agents building UIs with Sapira Design System.
        </p>
      </div>

      {/* Decision Tree */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Component Selection</h2>
        <div className="bg-muted rounded-md p-6 text-sm space-y-3">
          <p className="font-semibold">When to use what:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li><strong>Page layout?</strong> → <code>AppShell</code> + <code>Sidebar</code> + <code>Header</code></li>
            <li><strong>Page title with breadcrumbs?</strong> → <code>PageHeader</code></li>
            <li><strong>Show KPIs/numbers?</strong> → <code>MetricsCard</code></li>
            <li><strong>Tabular data?</strong> → <code>DataTable</code></li>
            <li><strong>Show item detail?</strong> → <code>DrawerPanel</code> (side panel) or <code>Dialog</code> (modal)</li>
            <li><strong>Confirm destructive action?</strong> → <code>ConfirmDialog</code></li>
            <li><strong>Filter data?</strong> → <code>FilterBar</code> + <code>SearchBox</code></li>
            <li><strong>Multi-step flow?</strong> → <code>WizardStepper</code></li>
            <li><strong>Notifications?</strong> → <code>ToastProvider</code> + <code>useToast()</code></li>
            <li><strong>AI content?</strong> → <code>AIBadge</code>, <code>StreamingText</code>, <code>AIGenerationPreview</code></li>
            <li><strong>Empty/loading state?</strong> → <code>EmptyState</code> / <code>Skeleton</code></li>
            <li><strong>Status indicator?</strong> → <code>StatusBadge</code></li>
            <li><strong>Activity log?</strong> → <code>Timeline</code></li>
          </ul>
        </div>
      </section>

      {/* Layout Templates */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Layout Templates</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Dashboard</h3>
            <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
              <code>{`import {
  AppShell, Sidebar, Header, PageHeader,
  MetricsCard, DataTable
} from "@sapira/ui";

<AppShell
  sidebar={<Sidebar items={navItems} activeId="dashboard" />}
  header={<Header title="Dashboard" />}
>
  <PageHeader title="Overview" breadcrumbs={[...]} />
  <div className="grid grid-cols-4 gap-4">
    <MetricsCard title="Users" value="1,234" />
    {/* ... */}
  </div>
  <DataTable columns={columns} data={data} keyField="id" />
</AppShell>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="font-medium mb-2">Settings Page</h3>
            <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
              <code>{`<AppShell sidebar={<Sidebar items={navItems} />} header={<Header />}>
  <PageHeader title="Settings" />
  <div className="max-w-2xl space-y-6">
    <section>
      <h3 className="font-semibold mb-3">General</h3>
      <div className="space-y-4">
        <Input label="Name" />
        <Input label="Email" />
      </div>
    </section>
    <Button>Save Changes</Button>
  </div>
</AppShell>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="font-medium mb-2">List + Detail</h3>
            <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
              <code>{`const [selected, setSelected] = useState(null);

<AppShell sidebar={...} header={...}>
  <div className="flex items-center gap-4 mb-4">
    <SearchBox onSearch={setQuery} />
    <FilterBar filters={filters} activeFilters={active} onChange={...} onClear={...} />
  </div>
  <DataTable
    columns={columns}
    data={filtered}
    keyField="id"
    onRowClick={setSelected}
  />
  <DrawerPanel
    open={!!selected}
    onClose={() => setSelected(null)}
    title={selected?.name}
  >
    {/* Detail content */}
  </DrawerPanel>
</AppShell>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Common Patterns</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Toast Notifications</h3>
            <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
              <code>{`// In your app root
<ToastProvider>
  <App />
</ToastProvider>

// In any component
const { toast } = useToast();

const handleSave = async () => {
  try {
    await save();
    toast({ title: "Saved!", variant: "success" });
  } catch {
    toast({ title: "Failed to save", variant: "error" });
  }
};`}</code>
            </pre>
          </div>

          <div>
            <h3 className="font-medium mb-2">Delete Confirmation</h3>
            <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
              <code>{`const [confirmOpen, setConfirmOpen] = useState(false);

<Button variant="destructive" onClick={() => setConfirmOpen(true)}>
  Delete
</Button>

<ConfirmDialog
  open={confirmOpen}
  onOpenChange={setConfirmOpen}
  title="Delete item?"
  description="This cannot be undone."
  variant="destructive"
  confirmLabel="Delete"
  onConfirm={handleDelete}
/>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="font-medium mb-2">AI Content Generation</h3>
            <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
              <code>{`<AIGenerationPreview
  title="AI Summary"
  content={generatedText}
  isGenerating={loading}
  onAccept={() => applyContent(generatedText)}
  onReject={() => setGeneratedText("")}
  onRegenerate={() => regenerate()}
/>`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Tips</h2>
        <ul className="space-y-2 text-sm list-disc pl-5">
          <li>Always wrap your app with <code>ThemeProvider</code> for theming support.</li>
          <li>Import <code>@sapira/ui/tokens/globals.css</code> in your root layout.</li>
          <li>All components accept <code>className</code> for custom styling.</li>
          <li>Use <code>cn()</code> utility from <code>@sapira/ui</code> for conditional classes.</li>
          <li>Components are tree-shakeable — import only what you need.</li>
        </ul>
      </section>
    </div>
  );
}
