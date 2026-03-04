import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sapira Design System",
  description: "Themeable component library for Sapira demos",
};

const navigation = [
  { label: "Overview", href: "/" },
  { label: "Brand Themes", href: "/themes" },
  { label: "For Agents", href: "/agents" },
  { type: "separator" },
  {
    label: "Primitives",
    children: [
      { label: "Button", href: "/components/button" },
      { label: "Input", href: "/components/input" },
    ],
  },
  {
    label: "Overlay",
    children: [
      { label: "Dialog", href: "/components/dialog" },
      { label: "Sheet", href: "/components/sheet" },
      { label: "Dropdown Menu", href: "/components/dropdown-menu" },
      { label: "Popover", href: "/components/popover" },
      { label: "Command Palette", href: "/components/command-palette" },
    ],
  },
  {
    label: "Layout",
    children: [
      { label: "AppShell", href: "/components/app-shell" },
      { label: "PageHeader", href: "/components/page-header" },
    ],
  },
  {
    label: "Data Display",
    children: [
      { label: "DataTable", href: "/components/data-table" },
      { label: "MetricsCard", href: "/components/metrics-card" },
      { label: "Timeline", href: "/components/timeline" },
      { label: "StatusBadge", href: "/components/status-badge" },
      { label: "EmptyState", href: "/components/empty-state" },
      { label: "Skeleton", href: "/components/skeleton" },
    ],
  },
  {
    label: "Feedback",
    children: [
      { label: "Toast", href: "/components/toast" },
      { label: "ConfirmDialog", href: "/components/confirm-dialog" },
      { label: "FilterBar", href: "/components/filter-bar" },
      { label: "SearchBox", href: "/components/search-box" },
      { label: "DrawerPanel", href: "/components/drawer-panel" },
      { label: "WizardStepper", href: "/components/wizard-stepper" },
    ],
  },
  {
    label: "AI",
    children: [
      { label: "AIBadge", href: "/components/ai-badge" },
      { label: "StreamingText", href: "/components/streaming-text" },
      { label: "AIGenerationPreview", href: "/components/ai-generation-preview" },
    ],
  },
  {
    label: "Patterns",
    children: [
      { label: "Dashboard", href: "/patterns/dashboard" },
      { label: "CRUD", href: "/patterns/crud" },
      { label: "Wizard", href: "/patterns/wizard" },
      { label: "Form", href: "/patterns/form" },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 border-r border-border bg-sidebar p-6 flex-shrink-0">
            <div className="mb-8">
              <h1 className="text-lg font-semibold tracking-tight">Sapira DS</h1>
              <p className="text-xs text-muted-foreground mt-1">Design System</p>
            </div>
            <nav className="space-y-4">
              {navigation.map((section, idx) =>
                "type" in section && section.type === "separator" ? (
                  <hr key={`sep-${idx}`} className="border-border" />
                ) : "children" in section && section.children ? (
                  <div key={section.label}>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1 px-3">
                      {section.label}
                    </p>
                    <div className="space-y-0.5">
                      {section.children.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block px-3 py-1.5 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={"href" in section ? section.href : `item-${idx}`}
                    href={"href" in section ? section.href : "#"}
                    className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
                  >
                    {"label" in section ? section.label : ""}
                  </a>
                )
              )}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-8 max-w-4xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
