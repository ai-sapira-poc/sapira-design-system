"use client";

import {
  Button,
  Badge,
  MetricsCard,
  DataTable,
  StatusBadge,
  AIBadge,
  Input,
  Timeline,
  EmptyState,
  Skeleton,
  PageHeader,
  SearchBox,
} from "@sapira/ui";
import type { ColumnDef } from "@sapira/ui";
import { Users, Package, TrendingUp, BarChart3, FileText } from "lucide-react";

type DemoRow = { name: string; role: string; status: string };

const demoCols: ColumnDef<DemoRow>[] = [
  { id: "name", header: "Name", accessor: "name" },
  { id: "role", header: "Role", accessor: "role" },
  { id: "status", header: "Status", accessor: "status", cell: (_v, r) => <StatusBadge status={r.status as "active" | "pending" | "inactive"} /> },
];

const demoRows: DemoRow[] = [
  { name: "Alice Johnson", role: "Engineer", status: "active" },
  { name: "Bob Smith", role: "Designer", status: "pending" },
  { name: "Carol Lee", role: "Manager", status: "inactive" },
];

export default function OverviewPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Sapira Design System</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          A themeable, production-ready component library for building professional demo
          applications. Built with React, Tailwind CSS, Radix UI, and CVA.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Quick Start</h2>
        <p className="text-sm text-muted-foreground">
          Install directly from the GitHub repo (no npm registry needed):
        </p>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`# Install from GitHub
pnpm add ai-sapira-poc/sapira-design-system

# Then import in your app
import "@sapira/ui/tokens/globals.css";
import { Button, Badge, ThemeProvider } from "@sapira/ui";`}</code>
        </pre>
        <p className="text-xs text-muted-foreground">
          You can also pin a specific commit: <code className="text-xs bg-muted px-1 py-0.5 rounded">pnpm add ai-sapira-poc/sapira-design-system#commit-sha</code>
        </p>
      </div>

      {/* Component Showcase */}
      <details className="space-y-8 group">
        <summary className="text-lg font-semibold cursor-pointer list-none flex items-center gap-2 select-none">
          <svg className="h-4 w-4 transition-transform group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" /></svg>
          Component Showcase
        </summary>
        <div className="space-y-8 pt-4">

        {/* Page Header */}
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Page Header</p>
          <div className="border rounded-lg p-4">
            <PageHeader
              title="Project Dashboard"
              description="Overview of all active projects and key metrics"
              actions={
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Export</Button>
                  <Button size="sm">New Project</Button>
                </div>
              }
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Buttons</p>
          <div className="flex gap-3 items-center flex-wrap">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* Badges */}
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Badges &amp; Status</p>
          <div className="flex gap-2 items-center flex-wrap">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <StatusBadge status="active" />
            <StatusBadge status="pending" />
            <StatusBadge status="error" />
            <StatusBadge status="info" />
            <AIBadge />
          </div>
        </div>

        {/* Search */}
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Search</p>
          <SearchBox placeholder="Search projects, users, documents..." shortcut="⌘K" onSearch={() => {}} />
        </div>

        {/* Form Inputs */}
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Form Inputs</p>
          <div className="grid grid-cols-2 gap-4 max-w-lg">
            <div className="space-y-1">
              <label className="text-sm font-medium">Name</label>
              <Input placeholder="Enter name..." />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="you@company.com" />
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Metrics Cards</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <MetricsCard label="Revenue" value="$48,200" change={{ value: 12.5, trend: "positive" }} icon={<TrendingUp className="h-4 w-4" />} />
            <MetricsCard label="Orders" value="1,243" change={{ value: -2.1, trend: "negative" }} icon={<Package className="h-4 w-4" />} />
            <MetricsCard label="Users" value="8,491" change={{ value: 4.3, trend: "positive" }} icon={<Users className="h-4 w-4" />} />
            <MetricsCard label="Reports" value="342" description="This quarter" icon={<BarChart3 className="h-4 w-4" />} />
          </div>
        </div>

        {/* Data Table */}
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Data Table</p>
          <DataTable columns={demoCols} data={demoRows} />
        </div>

        {/* Timeline */}
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Timeline</p>
          <div className="max-w-md">
            <Timeline
              events={[
                { id: "1", title: "Project created", description: "Initial setup completed", timestamp: "2026-03-04T09:00:00Z", variant: "success" as const },
                { id: "2", title: "AI analysis started", description: "Processing 1,200 documents", timestamp: "2026-03-04T09:15:00Z", variant: "ai" as const },
                { id: "3", title: "Review required", description: "3 items flagged for review", timestamp: "2026-03-04T09:30:00Z", variant: "warning" as const },
              ]}
            />
          </div>
        </div>

        {/* Skeletons */}
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Loading Skeletons</p>
          <div className="flex gap-4 items-start max-w-md">
            <Skeleton variant="circular" width={48} height={48} />
            <div className="space-y-2 flex-1">
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="40%" />
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Empty State</p>
          <div className="border rounded-lg p-4">
            <EmptyState
              icon={<FileText className="h-10 w-10" />}
              title="No documents yet"
              description="Upload your first document to get started with the analysis."
              action={<Button>Upload Document</Button>}
            />
          </div>
        </div>
        </div>
      </details>
    </div>
  );
}
