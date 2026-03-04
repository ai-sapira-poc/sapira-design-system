"use client";

import * as React from "react";
import { Bell } from "lucide-react";
import { cn } from "../../lib/utils";

export interface NotificationBellProps {
  count?: number;
  onClick?: () => void;
  maxCount?: number;
  className?: string;
}

function NotificationBell({ count = 0, onClick, maxCount = 99, className }: NotificationBellProps) {
  const display = count > maxCount ? `${maxCount}+` : String(count);
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("relative inline-flex items-center justify-center size-9 rounded-md hover:bg-accent transition-colors", className)}
    >
      <Bell className="size-5" />
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[16px] h-4 rounded-full bg-red-500 text-white text-[10px] font-bold px-1">
          {display}
        </span>
      )}
    </button>
  );
}

export { NotificationBell };
