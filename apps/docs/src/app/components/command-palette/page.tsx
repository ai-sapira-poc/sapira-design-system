"use client";

import { useState } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
  Button,
} from "@sapira/ui";

export default function CommandPalettePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Command Palette</h1>
        <p className="text-muted-foreground mt-2">
          A searchable command menu with keyboard navigation. Built on cmdk.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default</h2>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Command Palette
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem>
                New File <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                Open File <CommandShortcut>⌘O</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </section>
    </div>
  );
}
