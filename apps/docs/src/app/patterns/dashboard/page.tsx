"use client";

import {
  AppShell,
  Sidebar,
  Header,
  MetricsCard,
  DataTable,
  PageHeader,
  BarChart,
  LineChart,
  PieChart,
  Sparkline,
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

const tableData: Row[] = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: "2", name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
  { id: "3", name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
  { id: "4", name: "Dan Brown", email: "dan@example.com", role: "Editor", status: "Active" },
];

const monthlyData = [
  { month: "Jan", revenue: 4200, users: 1800, orders: 320 },
  { month: "Feb", revenue: 3800, users: 2100, orders: 280 },
  { month: "Mar", revenue: 5100, users: 2400, orders: 410 },
  { month: "Apr", revenue: 4700, users: 2200, orders: 380 },
  { month: "May", revenue: 5800, users: 2900, orders: 450 },
  { month: "Jun", revenue: 6400, users: 3100, orders: 520 },
];

const distributionData = [
  { name: "Desktop", value: 45 },
  { name: "Mobile", value: 35 },
  { name: "Tablet", value: 15 },
  { name: "Other", value: 5 },
];

const sparkData = [4, 6, 3, 8, 5, 9, 7, 10, 8, 12, 11, 14];

export default function DashboardPattern() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard Pattern</h1>
        <p className="text-muted-foreground mt-2">
          Full dashboard layout with charts, metrics, and data tables.
        </p>
      </div>

      <div className="border rounded-lg overflow-hidden" style={{ height: "auto", minHeight: 600 }}>
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
              <MetricsCard label="Total Users" value="3,100" change={{ value: 12.5, trend: "positive" }} />
              <MetricsCard label="Revenue" value="$64,200" change={{ value: 8.2, trend: "positive" }} />
              <MetricsCard label="Orders" value="2,360" change={{ value: -3.1, trend: "negative" }} />
              <MetricsCard label="Conversion" value="3.8%" change={{ value: 0.4, trend: "positive" }} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 border rounded-lg p-4 bg-background">
                <h3 className="text-sm font-medium mb-4">Revenue & Orders</h3>
                <BarChart
                  data={monthlyData}
                  xKey="month"
                  bars={[
                    { key: "revenue", label: "Revenue" },
                    { key: "orders", label: "Orders" },
                  ]}
                  showLegend
                  showTooltip
                  height={260}
                />
              </div>
              <div className="border rounded-lg p-4 bg-background">
                <h3 className="text-sm font-medium mb-4">Traffic Sources</h3>
                <PieChart data={distributionData} donut height={260} />
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-background">
              <h3 className="text-sm font-medium mb-4">User Growth</h3>
              <LineChart
                data={monthlyData}
                xKey="month"
                lines={[
                  { key: "users", label: "Users" },
                  { key: "revenue", label: "Revenue", dashed: true },
                ]}
                showLegend
                showTooltip
                height={240}
              />
            </div>

            <DataTable columns={columns} data={tableData} rowKey={(row) => row.id} />
          </div>
        </AppShell>
      </div>
    </div>
  );
}
