"use client";

import {
  AppShell,
  Sidebar,
  Header,
  MetricsCard,
  DataTable,
  PageHeader,
  type ColumnDef,
} from "@sapira/ui";
import { LayoutDashboard, Users, Settings, BarChart3 } from "lucide-react";

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" />, href: "#" },
  { id: "users", label: "Users", icon: <Users className="h-4 w-4" />, href: "#" },
  { id: "analytics", label: "Analytics", icon: <BarChart3 className="h-4 w-4" />, href: "#" },
  { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" />, href: "#" },
];

interface Row { id: string; name: string; email: string; role: string; status: string }

const columns: ColumnDef<Row>[] = [
  { id: "name", header: "Name", accessor: "name", sortable: true },
  { id: "email", header: "Email", accessor: "email" },
  { id: "role", header: "Role", accessor: "role" },
  { id: "status", header: "Status", accessor: "status" },
];

const data: Row[] = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: "2", name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
  { id: "3", name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
  { id: "4", name: "Dan Brown", email: "dan@example.com", role: "Editor", status: "Active" },
];

export default function DashboardPattern() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard Pattern</h1>
        <p className="text-muted-foreground mt-2">
          Full dashboard layout using AppShell, Sidebar, Header, MetricsCard, and DataTable.
        </p>
      </div>

      <div className="border rounded-lg overflow-hidden h-[600px]">
        <AppShell
          sidebar={
            <Sidebar
              items={sidebarItems}
              activeItemId="dashboard"
              logo={<span className="font-semibold text-sm">Acme Inc</span>}
            />
          }
          header={<Header title="Dashboard" />}
        >
          <div className="p-6 space-y-6">
            <PageHeader
              title="Overview"
              description="Key metrics and recent activity"
              breadcrumbs={[{ label: "Home", href: "#" }, { label: "Dashboard" }]}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricsCard label="Total Users" value="2,847" change={{ value: 12.5, trend: "positive" }} />
              <MetricsCard label="Revenue" value="$48,290" change={{ value: 8.2, trend: "positive" }} />
              <MetricsCard label="Orders" value="1,234" change={{ value: -3.1, trend: "negative" }} />
              <MetricsCard label="Conversion" value="3.2%" change={{ value: 0.4, trend: "positive" }} />
            </div>

            <DataTable columns={columns} data={data} rowKey={(row) => row.id} />
          </div>
        </AppShell>
      </div>
    </div>
  );
}
