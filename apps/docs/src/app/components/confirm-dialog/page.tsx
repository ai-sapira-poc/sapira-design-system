"use client";

import { useState } from "react";
import { ConfirmDialog, Button } from "@sapira/ui";

export default function ConfirmDialogPage() {
  const [open, setOpen] = useState(false);
  const [openDestructive, setOpenDestructive] = useState(false);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ConfirmDialog</h1>
        <p className="text-muted-foreground mt-2">
          A pre-built dialog for confirmation prompts, especially destructive actions. Wraps the Dialog component.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Demo</h2>
        <div className="flex gap-3">
          <Button onClick={() => setOpen(true)}>Confirm Action</Button>
          <Button variant="destructive" onClick={() => setOpenDestructive(true)}>Delete Item</Button>
        </div>

        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="Are you sure?"
          description="This action will proceed with the operation."
          onConfirm={() => setOpen(false)}
        />

        <ConfirmDialog
          open={openDestructive}
          onOpenChange={setOpenDestructive}
          title="Delete this item?"
          description="This action cannot be undone. This will permanently delete the item."
          confirmLabel="Delete"
          variant="destructive"
          onConfirm={() => setOpenDestructive(false)}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Props</h2>
        <div className="border rounded-md overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted"><th className="text-left p-3 font-medium">Prop</th><th className="text-left p-3 font-medium">Type</th><th className="text-left p-3 font-medium">Default</th></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono text-xs">open</td><td className="p-3 font-mono text-xs">boolean</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">title</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">description</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">—</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">variant</td><td className="p-3 font-mono text-xs">&quot;default&quot; | &quot;destructive&quot;</td><td className="p-3 font-mono text-xs">&quot;default&quot;</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">confirmLabel</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">&quot;Confirm&quot;</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">cancelLabel</td><td className="p-3 font-mono text-xs">string</td><td className="p-3 font-mono text-xs">&quot;Cancel&quot;</td></tr>
              <tr className="border-t"><td className="p-3 font-mono text-xs">onConfirm</td><td className="p-3 font-mono text-xs">() =&gt; void</td><td className="p-3 font-mono text-xs">—</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
