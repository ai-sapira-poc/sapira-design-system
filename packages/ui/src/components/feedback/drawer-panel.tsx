"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "../overlay/sheet";
import { cn } from "../../lib/utils";

export interface DrawerPanelProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  side?: "left" | "right";
  width?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function DrawerPanel({
  open,
  onClose,
  title,
  description,
  side = "right",
  width,
  footer,
  children,
  className,
}: DrawerPanelProps) {
  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side={side}
        className={cn("flex flex-col", className)}
        style={width ? { maxWidth: width, width: "100%" } : undefined}
      >
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>
        {footer && <SheetFooter>{footer}</SheetFooter>}
      </SheetContent>
    </Sheet>
  );
}
