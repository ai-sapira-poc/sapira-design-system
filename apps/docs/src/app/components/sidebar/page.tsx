"use client";

import { useState } from "react";
import { Home, Settings, Users, FileText, BarChart3, Mail } from "lucide-react";
import { Sidebar, type SidebarItem } from "@sapira/ui";

const demoItems: SidebarItem[] = [
  { id: "home", label: "Home", icon: <Home className="h-4 w-4" />, href: "#" },
  { id: "analytics", label: "Analytics", icon: <BarChart3 className="h-4 w-4" />, href: "#" },
  { type: "separator" },
  {
    id: "team",
    label: "Team",
    icon: <Users className="h-4 w-4" />,
    children: [
      { id: "members", label: "Members", href: "#" },
      { id: "invites", label: "Invitations", href: "#" },
    ],
  },
  {
    id: "content",
    label: "Content",
    icon: <FileText className="h-4 w-4" />,
    children: [
      { id: "pages", label: "Pages", href: "#" },
      { id: "posts", label: "Blog Posts", href: "#" },
      { id: "media", label: "Media Library", href: "#" },
    ],
  },
  { type: "separator" },
  { id: "messages", label: "Messages", icon: <Mail className="h-4 w-4" />, href: "#", badge: <span className="text-[10px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">3</span> },
  { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" />, href: "#" },
];

export default function SidebarPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeId, setActiveId] = useState("home");

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sidebar</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          A collapsible navigation sidebar with Framer Motion animations, expandable groups,
          active indicators, and separator support.
        </p>
      </div>

      {/* Interactive demo */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Interactive Example</h2>
        <div className="border border-border rounded-lg overflow-hidden bg-background" style={{ height: 480 }}>
          <div className="flex h-full">
            <Sidebar
              items={demoItems}
              collapsed={collapsed}
              onToggle={() => setCollapsed(!collapsed)}
              activeItemId={activeId}
              onItemClick={(item) => {
                if (item.href) setActiveId(item.id);
              }}
              logo={
                <div>
                  <p className="text-sm font-semibold">Acme Corp</p>
                  {!collapsed && <p className="text-[10px] text-muted-foreground">Dashboard</p>}
                </div>
              }
              className="border-r border-border"
            />
            <div className="flex-1 p-6 flex items-center justify-center text-muted-foreground text-sm">
              Click nav items to change active state. Toggle collapse with the bottom button.
            </div>
          </div>
        </div>
      </section>

      {/* Props */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-3 font-medium">Prop</th>
                <th className="text-left p-3 font-medium">Type</th>
                <th className="text-left p-3 font-medium">Default</th>
                <th className="text-left p-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 font-mono text-xs">items</td><td className="p-3 font-mono text-xs">SidebarItem[]</td><td className="p-3">—</td><td className="p-3">Navigation items (nav items or separators)</td></tr>
              <tr><td className="p-3 font-mono text-xs">collapsed</td><td className="p-3 font-mono text-xs">boolean</td><td className="p-3">false</td><td className="p-3">Whether sidebar is collapsed</td></tr>
              <tr><td className="p-3 font-mono text-xs">onToggle</td><td className="p-3 font-mono text-xs">() =&gt; void</td><td className="p-3">—</td><td className="p-3">Collapse toggle callback. Shows toggle button when provided.</td></tr>
              <tr><td className="p-3 font-mono text-xs">logo</td><td className="p-3 font-mono text-xs">ReactNode</td><td className="p-3">—</td><td className="p-3">Logo area content</td></tr>
              <tr><td className="p-3 font-mono text-xs">footer</td><td className="p-3 font-mono text-xs">ReactNode</td><td className="p-3">—</td><td className="p-3">Footer area content</td></tr>
              <tr><td className="p-3 font-mono text-xs">activeItemId</td><td className="p-3 font-mono text-xs">string</td><td className="p-3">—</td><td className="p-3">ID of the currently active item</td></tr>
              <tr><td className="p-3 font-mono text-xs">onItemClick</td><td className="p-3 font-mono text-xs">(item) =&gt; void</td><td className="p-3">—</td><td className="p-3">Callback when an item is clicked</td></tr>
              <tr><td className="p-3 font-mono text-xs">renderLink</td><td className="p-3 font-mono text-xs">(props) =&gt; ReactNode</td><td className="p-3">—</td><td className="p-3">Custom link renderer for framework integration (e.g. Next.js Link)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Types */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Item Types</h2>
        <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto"><code>{`// Navigation item
interface SidebarNavItem {
  id: string;
  label: string;
  icon?: ReactNode;
  href?: string;
  badge?: ReactNode;
  children?: SidebarNavItem[];
}

// Separator
interface SidebarSeparator {
  type: "separator";
}

// Union type
type SidebarItem = SidebarNavItem | SidebarSeparator;`}</code></pre>
      </section>

      {/* Usage */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Usage with Next.js</h2>
        <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto"><code>{`import Link from "next/link";
import { Sidebar } from "@sapira/ui";

<Sidebar
  items={items}
  activeItemId={pathname}
  renderLink={({ href, className, children }) => (
    <Link href={href} className={className}>{children}</Link>
  )}
  logo={<span className="font-bold">My App</span>}
/>`}</code></pre>
      </section>
    </div>
  );
}
