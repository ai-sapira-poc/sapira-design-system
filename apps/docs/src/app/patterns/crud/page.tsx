"use client";

import { useState } from "react";
import { DataTable, DrawerPanel, Button, SearchBox, type ColumnDef } from "@sapira/ui";

interface Item { id: string; name: string; category: string; status: string; updated: string }

const items: Item[] = [
  { id: "1", name: "Widget Alpha", category: "Hardware", status: "Active", updated: "2024-01-15" },
  { id: "2", name: "Service Beta", category: "Software", status: "Draft", updated: "2024-01-14" },
  { id: "3", name: "Component Gamma", category: "Hardware", status: "Active", updated: "2024-01-13" },
  { id: "4", name: "Module Delta", category: "Software", status: "Archived", updated: "2024-01-12" },
  { id: "5", name: "Tool Epsilon", category: "Tools", status: "Active", updated: "2024-01-11" },
];

const columns: ColumnDef<Item>[] = [
  { id: "name", header: "Name", accessor: "name", sortable: true },
  { id: "category", header: "Category", accessor: "category" },
  { id: "status", header: "Status", accessor: "status" },
  { id: "updated", header: "Updated", accessor: "updated" },
];

export default function CrudPattern() {
  const [selected, setSelected] = useState<Item | null>(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const filtered = items.filter((i) => i.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">CRUD Pattern</h1>
        <p className="text-muted-foreground mt-2">
          Table with search, row click to open a DrawerPanel detail view.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <SearchBox placeholder="Search items…" onSearch={setQuery} className="max-w-sm" />
          <Button
            variant="outline"
            onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000); }}
          >
            Simulate Loading
          </Button>
          <Button className="ml-auto">Add Item</Button>
        </div>

        <DataTable
          columns={columns}
          data={filtered}
          loading={loading}
          rowKey={(row) => row.id}
          onRowClick={(row) => setSelected(row)}
        />

        <DrawerPanel
          open={!!selected}
          onClose={() => setSelected(null)}
          title={selected?.name ?? ""}
          description={`Category: ${selected?.category ?? ""}`}
          footer={
            <div className="flex gap-2 w-full justify-end">
              <Button variant="outline" onClick={() => setSelected(null)}>Close</Button>
              <Button>Edit</Button>
            </div>
          }
        >
          {selected && (
            <div className="space-y-4">
              <div><label className="text-sm font-medium">Name</label><p className="text-sm">{selected.name}</p></div>
              <div><label className="text-sm font-medium">Category</label><p className="text-sm">{selected.category}</p></div>
              <div><label className="text-sm font-medium">Status</label><p className="text-sm">{selected.status}</p></div>
              <div><label className="text-sm font-medium">Last Updated</label><p className="text-sm">{selected.updated}</p></div>
            </div>
          )}
        </DrawerPanel>
      </div>
    </div>
  );
}
