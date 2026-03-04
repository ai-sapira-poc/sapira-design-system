"use client";

import {
  MetricsCard,
  DataTable,
  PageHeader,
  BarChart,
  LineChart,
  PieChart,
  StatusBadge,
  type ColumnDef,
} from "@sapira/ui";
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

interface Row { id: string; name: string; email: string; role: string; status: string }

const columns: ColumnDef<Row>[] = [
  { id: "name", header: "Name", accessor: "name", sortable: true },
  { id: "email", header: "Email", accessor: "email" },
  { id: "role", header: "Role", accessor: "role" },
  {
    id: "status",
    header: "Status",
    accessor: "status",
    cell: (_value: unknown, row: Row) => (
      <StatusBadge
        status={row.status === "Active" ? "success" : "default"}
        label={row.status}
      />
    ),
  },
];

const tableData: Row[] = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: "2", name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
  { id: "3", name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
  { id: "4", name: "Dan Brown", email: "dan@example.com", role: "Editor", status: "Active" },
  { id: "5", name: "Eva Martinez", email: "eva@example.com", role: "Admin", status: "Active" },
  { id: "6", name: "Frank Lee", email: "frank@example.com", role: "Viewer", status: "Inactive" },
];

const monthlyData = [
  { month: "Jan", revenue: 42000, users: 1800, orders: 320 },
  { month: "Feb", revenue: 38000, users: 2100, orders: 280 },
  { month: "Mar", revenue: 51000, users: 2400, orders: 410 },
  { month: "Apr", revenue: 47000, users: 2200, orders: 380 },
  { month: "May", revenue: 58000, users: 2900, orders: 450 },
  { month: "Jun", revenue: 64000, users: 3100, orders: 520 },
];

const distributionData = [
  { name: "Desktop", value: 45 },
  { name: "Mobile", value: 35 },
  { name: "Tablet", value: 15 },
  { name: "Other", value: 5 },
];

export default function DashboardPattern() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard Pattern</h1>
        <p className="text-muted-foreground mt-2">
          Full dashboard layout with charts, metrics, and data tables. This pattern shows
          the content area — in a real app, wrap with <code>AppShell</code> + <code>Sidebar</code> + <code>Header</code>.
        </p>
      </div>

      {/* Live preview */}
      <div className="border rounded-lg overflow-hidden bg-background">
        <div className="p-6 space-y-6">
          <PageHeader
            title="Overview"
            description="Key metrics and recent activity"
            breadcrumbs={[{ label: "Home", href: "#" }, { label: "Dashboard" }]}
          />

          {/* Metrics row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricsCard
              label="Total Users"
              value="3,100"
              change={{ value: 12.5, trend: "positive" }}
              icon={<Users className="h-4 w-4" />}
            />
            <MetricsCard
              label="Revenue"
              value="$64,200"
              change={{ value: 8.2, trend: "positive" }}
              icon={<DollarSign className="h-4 w-4" />}
            />
            <MetricsCard
              label="Orders"
              value="2,360"
              change={{ value: -3.1, trend: "negative" }}
              icon={<ShoppingCart className="h-4 w-4" />}
            />
            <MetricsCard
              label="Conversion"
              value="3.8%"
              change={{ value: 0.4, trend: "positive" }}
              icon={<TrendingUp className="h-4 w-4" />}
            />
          </div>

          {/* Charts row */}
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
                height={280}
              />
            </div>
            <div className="border rounded-lg p-4 bg-background">
              <h3 className="text-sm font-medium mb-4">Traffic Sources</h3>
              <PieChart data={distributionData} donut showLegend height={280} />
            </div>
          </div>

          {/* Line chart */}
          <div className="border rounded-lg p-4 bg-background">
            <h3 className="text-sm font-medium mb-4">User Growth Trend</h3>
            <LineChart
              data={monthlyData}
              xKey="month"
              lines={[
                { key: "users", label: "Users" },
                { key: "revenue", label: "Revenue", dashed: true },
              ]}
              showLegend
              showTooltip
              curved
              height={260}
            />
          </div>

          {/* Data table */}
          <div className="border rounded-lg p-4 bg-background">
            <h3 className="text-sm font-medium mb-4">Recent Users</h3>
            <DataTable columns={columns} data={tableData} rowKey={(row) => row.id} />
          </div>
        </div>
      </div>

      {/* Code snippet */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Usage</h2>
        <p className="text-sm text-muted-foreground">
          Wrap the content above with <code>AppShell</code> for a complete page:
        </p>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`import {
  AppShell, Sidebar, Header, PageHeader,
  MetricsCard, DataTable, BarChart, LineChart, PieChart,
} from "@sapira/ui";

<AppShell
  sidebar={<Sidebar items={navItems} activeItemId="dashboard" />}
  header={<Header title="Dashboard" />}
>
  <PageHeader title="Overview" breadcrumbs={[...]} />
  <div className="grid grid-cols-4 gap-4">
    <MetricsCard label="Users" value="3,100" icon={<Users />} />
    ...
  </div>
  <div className="grid grid-cols-3 gap-6">
    <BarChart data={data} xKey="month" bars={[...]} />
    <PieChart data={dist} donut />
  </div>
  <LineChart data={data} xKey="month" lines={[...]} curved />
  <DataTable columns={columns} data={rows} rowKey={(r) => r.id} />
</AppShell>`}</code>
        </pre>
      </section>
    </div>
  );
}
