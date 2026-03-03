"use client";

import { Popover, PopoverTrigger, PopoverContent, Button } from "@sapira/ui";

export default function PopoverPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Popover</h1>
        <p className="text-muted-foreground mt-2">
          A floating panel positioned relative to a trigger. Built on Radix UI Popover.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default</h2>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Popover Title</h4>
              <p className="text-sm text-muted-foreground">
                This is a popover with some content inside.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </section>
    </div>
  );
}
