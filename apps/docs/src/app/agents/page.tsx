export default function AgentsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">For AI Agents</h1>
        <p className="text-muted-foreground mt-2">
          Complete guide for AI coding agents building enterprise UIs with Sapira Design System.
          This page covers component selection, layout patterns, theming, and best practices.
        </p>
      </div>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Quick Start</h2>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`# Install
pnpm add @sapira/ui

# Required peer dependencies
pnpm add react react-dom framer-motion lucide-react`}</code>
        </pre>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`// Root layout — import global styles
import "@sapira/ui/tokens/globals.css";

// Wrap app with providers
import { ThemeProvider, ToastProvider } from "@sapira/ui";

<ThemeProvider>
  <ToastProvider>
    <App />
  </ToastProvider>
</ThemeProvider>`}</code>
        </pre>
      </section>

      {/* Full Component Inventory */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Component Inventory</h2>
        <p className="text-sm text-muted-foreground">
          All 49 components organized by category. Import any component directly from <code>@sapira/ui</code>.
        </p>

        <div className="space-y-6 text-sm">
          <div>
            <h3 className="font-medium mb-2">Primitives (14)</h3>
            <div className="bg-muted rounded-md p-4 space-y-1">
              <p><code>Button</code> — Primary action element. Variants: <code>default</code>, <code>secondary</code>, <code>outline</code>, <code>ghost</code>, <code>destructive</code>, <code>link</code>. Sizes: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>icon</code>.</p>
              <p><code>Input</code> — Text input with label, error state, helper text, and icon support.</p>
              <p><code>Badge</code> — Small label/tag. Variants: <code>default</code>, <code>secondary</code>, <code>outline</code>, <code>destructive</code>, <code>success</code>, <code>warning</code>.</p>
              <p><code>Avatar</code> — User avatar with image, fallback initials, and size variants.</p>
              <p><code>Separator</code> — Horizontal or vertical divider line.</p>
              <p><code>Select</code> — Native-style select dropdown.</p>
              <p><code>Breadcrumbs</code> — Navigation breadcrumb trail. Accepts <code>items: &#123; label, href? &#125;[]</code>.</p>
              <p><code>Tabs</code> — Tab navigation. Uses <code>Tabs</code>, <code>TabsList</code>, <code>TabsTrigger</code>, <code>TabsContent</code>.</p>
              <p><code>Checkbox</code> — Checkbox with label support.</p>
              <p><code>CardSelector</code> — Selectable card for option picking (radio-style or multi-select).</p>
              <p><code>SelectDropdown</code> — Searchable dropdown with option filtering.</p>
              <p><code>UserProfile</code> — Displays user avatar + name + role in a compact format.</p>
              <p><code>Tooltip</code> — Hover tooltip. Uses <code>TooltipProvider</code>, <code>Tooltip</code>, <code>TooltipTrigger</code>, <code>TooltipContent</code>.</p>
              <p><code>CustomSelect</code> — Styled select alternative with custom rendering.</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Overlay (5)</h3>
            <div className="bg-muted rounded-md p-4 space-y-1">
              <p><code>Dialog</code> — Modal dialog. Uses <code>Dialog</code>, <code>DialogTrigger</code>, <code>DialogContent</code>, <code>DialogHeader</code>, <code>DialogTitle</code>, <code>DialogDescription</code>, <code>DialogFooter</code>.</p>
              <p><code>Sheet</code> — Slide-out panel (right side). Same sub-component pattern as Dialog.</p>
              <p><code>DropdownMenu</code> — Context menu / action menu. Uses <code>DropdownMenu</code>, <code>DropdownMenuTrigger</code>, <code>DropdownMenuContent</code>, <code>DropdownMenuItem</code>.</p>
              <p><code>Popover</code> — Floating content panel. Uses <code>Popover</code>, <code>PopoverTrigger</code>, <code>PopoverContent</code>.</p>
              <p><code>CommandPalette</code> — Searchable command list (Cmd+K style). Uses <code>CommandPalette</code>, <code>CommandInput</code>, <code>CommandList</code>, <code>CommandGroup</code>, <code>CommandItem</code>.</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Layout (6)</h3>
            <div className="bg-muted rounded-md p-4 space-y-1">
              <p><code>AppShell</code> — Main app layout wrapper. Props: <code>sidebar</code>, <code>header</code>, <code>children</code>. Handles responsive sidebar collapse.</p>
              <p><code>Sidebar</code> — Animated navigation sidebar with Framer Motion. Supports collapsible groups, active indicators, separators. Use <code>renderLink</code> for Next.js <code>&lt;Link&gt;</code>.</p>
              <p><code>Header</code> — Top bar with title, user info, actions.</p>
              <p><code>PageHeader</code> — Page title with breadcrumbs and optional action buttons.</p>
              <p><code>GuidedPanel</code> — Side panel with step-by-step guidance content.</p>
              <p><code>HeroSection</code> — Full-width hero banner for landing pages. Props: <code>title</code>, <code>subtitle</code>, <code>cta</code>, <code>backgroundVariant</code>.</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Data Display (8)</h3>
            <div className="bg-muted rounded-md p-4 space-y-1">
              <p><code>DataTable</code> — Feature-rich table. Props: <code>columns: ColumnDef&lt;T&gt;[]</code>, <code>data: T[]</code>, <code>keyField</code>, <code>onRowClick</code>, <code>sortable</code>, <code>pagination</code>. <strong>Custom ColumnDef</strong> with <code>&#123; id, header, accessor, cell &#125;</code> — NOT TanStack.</p>
              <p><code>MetricsCard</code> — KPI card with value, trend, and icon.</p>
              <p><code>StatCard</code> — Simpler stat display with label + value + optional change indicator.</p>
              <p><code>Timeline</code> — Vertical event timeline. Events have <code>variant</code>: <code>default</code>, <code>success</code>, <code>warning</code>, <code>error</code>.</p>
              <p><code>StatusBadge</code> — Colored status indicator with dot + label.</p>
              <p><code>EmptyState</code> — Empty content placeholder with icon, title, description, and action.</p>
              <p><code>Skeleton</code> — Loading placeholder. Variants for text, circle, card, table rows.</p>
              <p><code>ProgressBar</code> — Horizontal progress bar with label and percentage.</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Feedback &amp; Navigation (9)</h3>
            <div className="bg-muted rounded-md p-4 space-y-1">
              <p><code>Toast</code> / <code>ToastProvider</code> / <code>useToast()</code> — Toast notifications. Variants: <code>default</code>, <code>success</code>, <code>error</code>, <code>warning</code>.</p>
              <p><code>ConfirmDialog</code> — Confirmation modal with configurable variant. Props: <code>open</code>, <code>title</code>, <code>description</code>, <code>variant</code>, <code>onConfirm</code>.</p>
              <p><code>FilterBar</code> — Dropdown filter chips. <strong>API:</strong> <code>filters: &#123; label, value, options: &#123; label, value &#125;[] &#125;[]</code>. Props: <code>activeFilters</code>, <code>onChange</code>, <code>onClear</code>.</p>
              <p><code>SearchBox</code> — Search input with debounce. Props: <code>onSearch</code>, <code>placeholder</code>, <code>debounceMs</code>.</p>
              <p><code>DrawerPanel</code> — Slide-out detail panel. Props: <code>open</code>, <code>onClose</code>, <code>title</code>, <code>width</code>.</p>
              <p><code>WizardStepper</code> — Multi-step progress indicator. <code>onStepClick</code> only allows clicking back to completed steps.</p>
              <p><code>CompactStepper</code> — Minimal step indicator (dots or numbers) for tight spaces.</p>
              <p><code>NotificationCard</code> — Individual notification item with type, message, timestamp, read state.</p>
              <p><code>NotificationBell</code> — Bell icon button with unread count badge.</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">AI (3)</h3>
            <div className="bg-muted rounded-md p-4 space-y-1">
              <p><code>AIBadge</code> — "AI Generated" indicator badge with sparkle animation.</p>
              <p><code>StreamingText</code> — Typewriter-style text reveal for AI responses.</p>
              <p><code>AIGenerationPreview</code> — Preview card for AI-generated content with accept/reject/regenerate actions.</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Landing Page (5)</h3>
            <div className="bg-muted rounded-md p-4 space-y-1">
              <p><code>HeroSection</code> — Hero banner with title, subtitle, CTA button, and background variants.</p>
              <p><code>IconTile</code> — Card tile with icon, title, and description. Great for feature grids.</p>
              <p><code>RoleCard</code> — Selectable card for role/persona selection with icon and description.</p>
              <p><code>TrustBar</code> — Row of trust signals (certifications, security badges, partner logos).</p>
              <p><code>LanguageSelector</code> — Language picker with flag icons and hover effects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Selection Decision Tree */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Component Selection Guide</h2>
        <div className="bg-muted rounded-md p-6 text-sm space-y-3">
          <p className="font-semibold">What are you building? Pick the right components:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li><strong>Full app shell?</strong> → <code>AppShell</code> + <code>Sidebar</code> + <code>Header</code></li>
            <li><strong>Page title + breadcrumbs?</strong> → <code>PageHeader</code></li>
            <li><strong>KPIs / metrics?</strong> → <code>MetricsCard</code> (detailed) or <code>StatCard</code> (simple)</li>
            <li><strong>Data table?</strong> → <code>DataTable</code> with <code>SearchBox</code> + <code>FilterBar</code></li>
            <li><strong>Item detail view?</strong> → <code>DrawerPanel</code> (side panel) or <code>Dialog</code> (modal)</li>
            <li><strong>Confirm destructive action?</strong> → <code>ConfirmDialog</code></li>
            <li><strong>Multi-step process?</strong> → <code>WizardStepper</code> (full) or <code>CompactStepper</code> (minimal)</li>
            <li><strong>Notifications?</strong> → <code>NotificationBell</code> + <code>NotificationCard</code> list + <code>Toast</code> for real-time</li>
            <li><strong>AI-generated content?</strong> → <code>AIGenerationPreview</code> + <code>StreamingText</code> + <code>AIBadge</code></li>
            <li><strong>Empty / loading states?</strong> → <code>EmptyState</code> / <code>Skeleton</code></li>
            <li><strong>Status indicators?</strong> → <code>StatusBadge</code> or <code>Badge</code> with variant</li>
            <li><strong>Activity / history log?</strong> → <code>Timeline</code></li>
            <li><strong>Progress tracking?</strong> → <code>ProgressBar</code></li>
            <li><strong>Navigation breadcrumbs?</strong> → <code>Breadcrumbs</code></li>
            <li><strong>Tab sections?</strong> → <code>Tabs</code></li>
            <li><strong>Option selection (cards)?</strong> → <code>CardSelector</code></li>
            <li><strong>Searchable dropdown?</strong> → <code>SelectDropdown</code></li>
            <li><strong>User display?</strong> → <code>UserProfile</code> or <code>Avatar</code></li>
            <li><strong>Tooltips?</strong> → Wrap area in <code>TooltipProvider</code>, then <code>Tooltip</code> + <code>TooltipTrigger</code> + <code>TooltipContent</code></li>
            <li><strong>Landing / welcome page?</strong> → <code>HeroSection</code> + <code>IconTile</code> + <code>RoleCard</code> + <code>TrustBar</code></li>
            <li><strong>Guided walkthrough?</strong> → <code>GuidedPanel</code></li>
          </ul>
        </div>
      </section>

      {/* Pattern Pages */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Pattern Pages</h2>
        <p className="text-sm text-muted-foreground">
          Full-page reference implementations. Copy these as starting points for new pages.
        </p>
        <div className="bg-muted rounded-md p-4 text-sm space-y-2">
          <p><strong><a href="/patterns/dashboard" className="underline">Dashboard</a></strong> — MetricsCards grid + DataTable + PageHeader. Classic admin overview.</p>
          <p><strong><a href="/patterns/crud" className="underline">CRUD</a></strong> — DataTable + SearchBox + FilterBar + DrawerPanel + ConfirmDialog. Full list-detail-edit flow.</p>
          <p><strong><a href="/patterns/form" className="underline">Form</a></strong> — Input fields + validation + error states + submit handling. Standard form layout.</p>
          <p><strong><a href="/patterns/wizard" className="underline">Wizard</a></strong> — WizardStepper + multi-step form + validation per step. Guided multi-page flow.</p>
          <p><strong><a href="/patterns/project-landing" className="underline">Project Landing</a></strong> — IconTile grid + metrics + glass-morphism + Framer Motion animations. Internal project homepage.</p>
          <p><strong><a href="/patterns/welcome" className="underline">Welcome / Onboarding</a></strong> — LanguageSelector + RoleCard + TrustBar + animated heading. First-time user experience.</p>
        </div>
      </section>

      {/* Layout Templates */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Layout Templates</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Standard App Page</h3>
            <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
              <code>{`import {
  AppShell, Sidebar, Header, PageHeader,
  MetricsCard, DataTable, SearchBox, FilterBar
} from "@sapira/ui";
import Link from "next/link";

const navItems = [
  { id: "home", label: "Home", icon: <Home />, href: "/" },
  { id: "projects", label: "Projects", icon: <FolderKanban />, href: "/projects",
    children: [
      { id: "proj-1", label: "Project A", href: "/projects/a" },
      { id: "proj-2", label: "Project B", href: "/projects/b" },
    ]
  },
  { type: "separator" },
  { id: "settings", label: "Settings", icon: <Settings />, href: "/settings" },
];

<AppShell
  sidebar={
    <Sidebar
      items={navItems}
      activeItemId="home"
      renderLink={({ href, className, children }) => (
        <Link href={href} className={className}>{children}</Link>
      )}
      logo={<span className="font-semibold">My App</span>}
    />
  }
  header={<Header title="Dashboard" />}
>
  <PageHeader
    title="Overview"
    breadcrumbs={[
      { label: "Home", href: "/" },
      { label: "Overview" },
    ]}
    actions={<Button>New Item</Button>}
  />
  <div className="grid grid-cols-4 gap-4 mb-6">
    <MetricsCard title="Users" value="1,234" icon={<Users />} />
    <MetricsCard title="Revenue" value="$45K" trend={12} icon={<TrendingUp />} />
  </div>
  <div className="flex items-center gap-4 mb-4">
    <SearchBox onSearch={setQuery} placeholder="Search..." />
    <FilterBar
      filters={[
        { label: "Status", value: "status", options: [
          { label: "Active", value: "active" },
          { label: "Archived", value: "archived" },
        ]},
      ]}
      activeFilters={active}
      onChange={setActive}
      onClear={() => setActive({})}
    />
  </div>
  <DataTable columns={columns} data={data} keyField="id" />
</AppShell>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="font-medium mb-2">List + Detail Panel</h3>
            <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
              <code>{`const [selected, setSelected] = useState(null);

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
  <div className="space-y-4">
    <StatusBadge status="active" />
    <Timeline events={selected?.history} />
  </div>
</DrawerPanel>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="font-medium mb-2">Multi-step Wizard</h3>
            <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
              <code>{`const [step, setStep] = useState(0);
const steps = [
  { label: "Details" },
  { label: "Configuration" },
  { label: "Review" },
];

<WizardStepper
  steps={steps}
  currentStep={step}
  onStepClick={(i) => i < step && setStep(i)}  // Only go back
/>
<div className="mt-6">
  {step === 0 && <DetailsForm />}
  {step === 1 && <ConfigForm />}
  {step === 2 && <ReviewStep />}
</div>
<div className="flex justify-between mt-6">
  <Button variant="outline" onClick={() => setStep(s => s - 1)} disabled={step === 0}>
    Back
  </Button>
  <Button onClick={() => step < 2 ? setStep(s => s + 1) : handleSubmit()}>
    {step === 2 ? "Submit" : "Next"}
  </Button>
</div>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="font-medium mb-2">Notifications</h3>
            <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
              <code>{`// In header area
<NotificationBell count={unreadCount} onClick={() => setShowNotifs(true)} />

// Notification panel
<Sheet open={showNotifs} onOpenChange={setShowNotifs}>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Notifications</SheetTitle>
    </SheetHeader>
    <div className="space-y-2 mt-4">
      {notifications.map(n => (
        <NotificationCard
          key={n.id}
          type={n.type}
          title={n.title}
          message={n.message}
          timestamp={n.createdAt}
          read={n.read}
          onClick={() => markRead(n.id)}
        />
      ))}
    </div>
  </SheetContent>
</Sheet>

// Toast for real-time notifications
const { toast } = useToast();
onNewNotification((n) => {
  toast({ title: n.title, description: n.message, variant: "default" });
});`}</code>
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
/>

// For streaming responses
<StreamingText text={streamedContent} speed={30} />

// Mark AI-generated content
<div className="flex items-center gap-2">
  <AIBadge />
  <span>Generated summary</span>
</div>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="font-medium mb-2">Landing Page</h3>
            <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
              <code>{`import {
  HeroSection, IconTile, RoleCard, TrustBar,
  LanguageSelector, TooltipProvider, Tooltip,
  TooltipTrigger, TooltipContent
} from "@sapira/ui";
import { FileText, BarChart3, Settings } from "lucide-react";

<HeroSection
  title="Welcome to ProjectX"
  subtitle="Your intelligent workspace"
  cta={{ label: "Get Started", onClick: handleStart }}
/>

<TooltipProvider>
  <div className="grid grid-cols-3 gap-6 mt-12">
    {modules.map(m => (
      <Tooltip key={m.id}>
        <TooltipTrigger asChild>
          <div>
            <IconTile
              icon={<FileText />}
              title={m.title}
              description={m.description}
              onClick={() => navigate(m.href)}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>{m.tooltip}</TooltipContent>
      </Tooltip>
    ))}
  </div>
</TooltipProvider>

<TrustBar items={[
  { icon: <Shield />, label: "ISO 27001" },
  { icon: <Lock />, label: "SOC 2 Type II" },
]} />`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Theming */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Theming</h2>
        <p className="text-sm text-muted-foreground">
          Every component reads colors from CSS custom properties. Swap the theme to rebrand the entire app.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Apply a Theme</h3>
            <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
              <code>{`import { ThemeProvider, createTheme } from "@sapira/ui";

const myTheme = createTheme({
  name: "ClientX",
  primary: "#2563eb",      // Must be HEX (not HSL)
  secondary: "#7c3aed",    // Must be HEX (not HSL)
  radius: "0.5rem",
});

<ThemeProvider theme={myTheme}>
  <App />
</ThemeProvider>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="font-medium mb-2">CSS Variables (hex only!)</h3>
            <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
              <code>{`/* ⚠️ Tailwind v4 requires HEX values for CSS custom properties */

/* ✅ Correct */
:root {
  --primary: #2563eb;
  --secondary: #7c3aed;
}

/* ❌ Wrong — HSL triplets won't work in Tailwind v4 */
:root {
  --primary: 221 83% 53%;
}`}</code>
            </pre>
          </div>

          <div>
            <h3 className="font-medium mb-2">Use the Interactive Theme Builder</h3>
            <p className="text-sm text-muted-foreground">
              Visit the <a href="/themes" className="underline">Brand Themes</a> page to visually configure colors,
              preview all components live, and copy the generated theme code.
            </p>
          </div>
        </div>
      </section>

      {/* Icons */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Icons</h2>
        <div className="bg-muted rounded-md p-4 text-sm space-y-2">
          <p><strong>Always use Lucide icons</strong> — never use emoji characters in UI components.</p>
          <pre className="overflow-x-auto mt-2">
            <code>{`import { Home, Settings, Users, TrendingUp } from "lucide-react";

// Standard size in nav/buttons
<Home className="h-4 w-4" />

// Larger for feature tiles
<Home className="h-6 w-6" />

// In MetricsCard
<MetricsCard title="Users" value="1,234" icon={<Users className="h-5 w-5" />} />`}</code>
          </pre>
          <p className="text-muted-foreground mt-2">
            See the <a href="/icons" className="underline">Icons</a> page for the full set of commonly used icons.
          </p>
        </div>
      </section>

      {/* Important API Notes */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">API Gotchas</h2>
        <div className="bg-muted rounded-md p-4 text-sm space-y-3">
          <div>
            <p className="font-semibold">DataTable ColumnDef</p>
            <p className="text-muted-foreground">Custom type with 1 generic arg. NOT TanStack&apos;s <code>ColumnDef&lt;T, V&gt;</code>.</p>
            <pre className="overflow-x-auto mt-1">
              <code>{`import { DataTable, ColumnDef } from "@sapira/ui";

const columns: ColumnDef<User>[] = [
  { id: "name", header: "Name", accessor: "name" },
  { id: "email", header: "Email", accessor: "email" },
  { id: "status", header: "Status", cell: (row) => <StatusBadge status={row.status} /> },
];`}</code>
            </pre>
          </div>

          <div>
            <p className="font-semibold">FilterBar filters format</p>
            <pre className="overflow-x-auto mt-1">
              <code>{`// Each filter needs label, value, and options array
const filters = [
  {
    label: "Status",
    value: "status",
    options: [
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" },
    ],
  },
];`}</code>
            </pre>
          </div>

          <div>
            <p className="font-semibold">WizardStepper onStepClick</p>
            <p className="text-muted-foreground">Only allows clicking back to completed steps, not forward.</p>
          </div>

          <div>
            <p className="font-semibold">Sidebar renderLink</p>
            <p className="text-muted-foreground">Required for Next.js client-side navigation:</p>
            <pre className="overflow-x-auto mt-1">
              <code>{`<Sidebar
  renderLink={({ href, className, children }) => (
    <Link href={href} className={className}>{children}</Link>
  )}
/>`}</code>
            </pre>
          </div>

          <div>
            <p className="font-semibold">Tooltip wrapping</p>
            <p className="text-muted-foreground">Always wrap tooltip areas in <code>TooltipProvider</code>. One provider can wrap many tooltips.</p>
          </div>

          <div>
            <p className="font-semibold">Sidebar separators</p>
            <p className="text-muted-foreground">Use <code>&#123; type: &quot;separator&quot; &#125;</code> in the items array to render dividers between nav sections.</p>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Best Practices</h2>
        <ul className="space-y-2 text-sm list-disc pl-5">
          <li>Always wrap your app with <code>ThemeProvider</code> and <code>ToastProvider</code>.</li>
          <li>Import <code>@sapira/ui/tokens/globals.css</code> in your root layout.</li>
          <li>All components accept <code>className</code> for custom styling via <code>cn()</code>.</li>
          <li>Use <code>cn()</code> utility from <code>@sapira/ui</code> for conditional class merging.</li>
          <li>Components are tree-shakeable — import only what you need.</li>
          <li>Use Lucide icons everywhere — never emoji characters.</li>
          <li>CSS variables must be <strong>hex values</strong> (Tailwind v4 requirement).</li>
          <li>Use <code>renderLink</code> on Sidebar for framework-specific link components.</li>
          <li>Prefer pattern pages as starting points — don&apos;t build from scratch.</li>
          <li>For animations, Framer Motion is already a peer dep — use <code>motion</code>, <code>AnimatePresence</code>, spring physics.</li>
          <li>Keep components generic — no domain-specific text or logic in shared components.</li>
          <li>Use <code>Skeleton</code> components for loading states, <code>EmptyState</code> for no-data scenarios.</li>
        </ul>
      </section>

      {/* Imports Cheat Sheet */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Import Cheat Sheet</h2>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`// Everything from one package
import {
  // Layout
  AppShell, Sidebar, Header, PageHeader, GuidedPanel, HeroSection,
  // Primitives
  Button, Input, Badge, Avatar, Separator, Select, Breadcrumbs,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Checkbox, CardSelector, SelectDropdown, UserProfile,
  Tooltip, TooltipProvider, TooltipTrigger, TooltipContent,
  // Overlay
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle,
  Sheet, SheetContent, SheetHeader, SheetTitle,
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
  Popover, PopoverTrigger, PopoverContent,
  CommandPalette, CommandInput, CommandList, CommandGroup, CommandItem,
  // Data Display
  DataTable, MetricsCard, StatCard, Timeline,
  StatusBadge, EmptyState, Skeleton, ProgressBar,
  // Feedback
  ToastProvider, useToast, ConfirmDialog,
  FilterBar, SearchBox, DrawerPanel,
  WizardStepper, CompactStepper,
  NotificationCard, NotificationBell,
  // AI
  AIBadge, StreamingText, AIGenerationPreview,
  // Landing
  IconTile, RoleCard, TrustBar, LanguageSelector,
  // Theming
  ThemeProvider, createTheme, useTheme,
  // Utilities
  cn,
} from "@sapira/ui";

// Types
import type { ColumnDef, ThemeConfig } from "@sapira/ui";`}</code>
        </pre>
      </section>
    </div>
  );
}
