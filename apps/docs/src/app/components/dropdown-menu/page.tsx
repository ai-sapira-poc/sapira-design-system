"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuShortcut,
  Button,
} from "@sapira/ui";
import { useState } from "react";

export default function DropdownMenuPage() {
  const [showStatus, setShowStatus] = useState(true);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dropdown Menu</h1>
        <p className="text-muted-foreground mt-2">
          A menu of actions triggered by a button. Supports items, checkboxes, radio groups,
          and sub-menus. Built on Radix UI.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Profile <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={showStatus} onCheckedChange={setShowStatus}>
              Show Status Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Delete Account</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </div>
  );
}
