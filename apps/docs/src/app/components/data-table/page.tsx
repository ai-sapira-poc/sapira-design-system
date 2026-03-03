"use client";

import { useState } from "react";
import { DataTable, type ColumnDef, type SortState } from "@sapira/ui";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const data: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "David Brown", email: "david@example.com", role: "Editor", status: "Active" },
];

const columns: ColumnDef<User>[] = [
  { id: "name", header: "Name", accessor: "name", sortable: true },
  { id: "email", header: "Email", accessor: "email" },
  { id: "role", header: "Role", accessor: "role", sortable: true },
  { id: "status", header: "Status", accessor: "status", sortable: true },
];

export default function DataTablePage() {
  const [sort, setSort] = useState<SortState>({ columnId: "name", direction: "asc" });

  const sorted = [...data].sort((a, b) => {
    if (!sort.direction) return 0;
    const key = sort.columnId as keyof User;
    const cmp = String(a[key]).localeCompare(String(b[key]));
    return sort.direction === "asc" ? cmp : -cmp;
  });

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">DataTable</h1>
        <p className="text-muted-foreground mt-2">
          A generic sortable table for displaying tabular data. Supports custom cell renderers,
          sorting, and empty states.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sortable Table</h2>
        <div className="border rounded-lg overflow-hidden">
          <DataTable
            columns={columns}
            data={sorted}
            sortState={sort}
            onSort={setSort}
            rowKey={(row) => row.id}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Empty State</h2>
        <div className="border rounded-lg overflow-hidden">
          <DataTable columns={columns} data={[]} emptyMessage="No users found." />
        </div>
      </section>
    </div>
  );
}
