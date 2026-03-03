"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  Button,
} from "@sapira/ui";

const sides = ["right", "left", "top", "bottom"] as const;

export default function SheetPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Sheet</h1>
        <p className="text-muted-foreground mt-2">
          A side panel that slides in from any edge. Built on Radix UI Dialog.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sides</h2>
        <div className="flex gap-3 flex-wrap">
          {sides.map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline">{side}</Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Sheet ({side})</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the {side}.
                  </SheetDescription>
                </SheetHeader>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">Sheet content goes here.</p>
                </div>
                <SheetFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </section>
    </div>
  );
}
