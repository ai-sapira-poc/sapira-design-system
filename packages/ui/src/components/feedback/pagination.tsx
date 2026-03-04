"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { cn } from "../../lib/utils";

export interface PaginationProps extends React.ComponentProps<"nav"> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  showFirst?: boolean;
  showLast?: boolean;
}

function getPages(current: number, total: number, siblings: number): (number | "...")[] {
  const range = (s: number, e: number) => Array.from({ length: e - s + 1 }, (_, i) => s + i);
  const left = Math.max(2, current - siblings);
  const right = Math.min(total - 1, current + siblings);

  const pages: (number | "...")[] = [1];
  if (left > 2) pages.push("...");
  pages.push(...range(left, right));
  if (right < total - 1) pages.push("...");
  if (total > 1) pages.push(total);
  return pages;
}

const btn = "inline-flex items-center justify-center h-8 min-w-[2rem] px-2 rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  showFirst = true,
  showLast = true,
  className,
  ...props
}: PaginationProps) {
  const pages = getPages(currentPage, totalPages, siblingCount);

  return (
    <nav aria-label="Pagination" className={cn("flex items-center gap-1", className)} {...props}>
      {showFirst && (
        <button className={cn(btn, "hover:bg-muted")} disabled={currentPage <= 1} onClick={() => onPageChange(1)}>
          <ChevronsLeft className="h-4 w-4" />
        </button>
      )}
      <button className={cn(btn, "hover:bg-muted")} disabled={currentPage <= 1} onClick={() => onPageChange(currentPage - 1)}>
        <ChevronLeft className="h-4 w-4" />
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`e${i}`} className="px-1 text-muted-foreground text-sm">…</span>
        ) : (
          <button
            key={p}
            className={cn(btn, p === currentPage ? "bg-primary text-primary-foreground" : "hover:bg-muted")}
            onClick={() => onPageChange(p as number)}
          >
            {p}
          </button>
        )
      )}
      <button className={cn(btn, "hover:bg-muted")} disabled={currentPage >= totalPages} onClick={() => onPageChange(currentPage + 1)}>
        <ChevronRight className="h-4 w-4" />
      </button>
      {showLast && (
        <button className={cn(btn, "hover:bg-muted")} disabled={currentPage >= totalPages} onClick={() => onPageChange(totalPages)}>
          <ChevronsRight className="h-4 w-4" />
        </button>
      )}
    </nav>
  );
}

export { Pagination };
