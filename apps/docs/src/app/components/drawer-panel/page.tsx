"use client";

import { useState } from "react";
import { DrawerPanel, Button } from "@sapira/ui";

export default function DrawerPanelPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">DrawerPanel</h1>
        <p className="text-muted-foreground mt-2">
          A detail side panel built on Sheet. Useful for item detail views, forms, and inspectors.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Demo</h2>
        <Button onClick={() => setOpen(true)}>Open Panel</Button>

        <DrawerPanel
          open={open}
          onClose={() => setOpen(false)}
          title="Item Details"
          description="View and edit item properties"
          footer={
            <div className="flex gap-2 w-full justify-end">
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </div>
          }
        >
          <div className="space-y-4">
            <div><label className="text-sm font-medium">Name</label><p className="text-sm text-muted-foreground">Example Item</p></div>
            <div><label className="text-sm font-medium">Status</label><p className="text-sm text-muted-foreground">Active</p></div>
            <div><label className="text-sm font-medium">Description</label><p className="text-sm text-muted-foreground">This is a detail panel for viewing and editing item information.</p></div>
          </div>
        </DrawerPanel>
      </section>
    </div>
  );
}
