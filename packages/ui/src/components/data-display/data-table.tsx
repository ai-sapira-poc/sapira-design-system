"use client";

import * as React from "react";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "../../lib/utils";

export interface ColumnDef<T> {
  id: string;
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  sortable?: boolean;
  cell?: (value: unknown, row: T) => React.ReactNode;
  className?: string;
}

export type SortDirection = "asc" | "desc" | null;

export interface SortState {
  columnId: string;
  direction: SortDirection;
}

export interface DataTableProps<T> extends React.ComponentProps<"div"> {
  columns: ColumnDef<T>[];
  data: T[];
  onSort?: (sort: SortState) => void;
  sortState?: SortState;
  emptyMessage?: string;
  rowKey?: (row: T, index: number) => string | number;
  onRowClick?: (row: T, index: number) => void;
}

function DataTable<T>({
  columns,
  data,
  onSort,
  sortState,
  emptyMessage = "No data available",
  rowKey,
  onRowClick,
  className,
  ...props
}: DataTableProps<T>) {
  const getCellValue = (row: T, col: ColumnDef<T>): React.ReactNode => {
    const raw =
      typeof col.accessor === "function"
        ? col.accessor(row)
        : row[col.accessor];
    if (col.cell) return col.cell(raw, row);
    return raw as React.ReactNode;
  };

  const handleSort = (col: ColumnDef<T>) => {
    if (!col.sortable || !onSort) return;
    const newDir: SortDirection =
      sortState?.columnId === col.id
        ? sortState.direction === "asc"
          ? "desc"
          : sortState.direction === "desc"
            ? null
            : "asc"
        : "asc";
    onSort({ columnId: col.id, direction: newDir });
  };

  const SortIcon = ({ columnId }: { columnId: string }) => {
    if (sortState?.columnId !== columnId || !sortState.direction) {
      return <ArrowUpDown className="h-3 w-3 opacity-50" />;
    }
    return sortState.direction === "asc" ? (
      <ArrowUp className="h-3 w-3" />
    ) : (
      <ArrowDown className="h-3 w-3" />
    );
  };

  return (
    <div className={cn("w-full overflow-auto", className)} {...props}>
      <table className="w-full caption-bottom text-sm">
        <thead>
          <tr className="border-b border-border">
            {columns.map((col) => (
              <th
                key={col.id}
                className={cn(
                  "h-10 px-3 text-left align-middle font-medium text-muted-foreground",
                  col.sortable && "cursor-pointer select-none hover:text-foreground",
                  col.className
                )}
                onClick={() => handleSort(col)}
              >
                <div className="flex items-center gap-1">
                  {col.header}
                  {col.sortable && <SortIcon columnId={col.id} />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="h-24 text-center text-muted-foreground"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr
                key={rowKey ? rowKey(row, i) : i}
                className={cn(
                  "border-b border-border transition-colors hover:bg-muted/50",
                  onRowClick && "cursor-pointer"
                )}
                onClick={() => onRowClick?.(row, i)}
              >
                {columns.map((col) => (
                  <td key={col.id} className={cn("p-3 align-middle", col.className)}>
                    {getCellValue(row, col)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export { DataTable };
