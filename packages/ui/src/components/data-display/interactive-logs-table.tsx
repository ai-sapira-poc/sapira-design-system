"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Filter, Search, X } from "lucide-react";
import { cn } from "../../lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type LogLevel = "info" | "warn" | "error" | "debug" | "trace";

export interface LogEntry {
  id: string;
  timestamp: string;
  level: LogLevel;
  message: string;
  service?: string;
  statusCode?: number;
  /** Additional details shown in expanded row */
  details?: Record<string, unknown>;
  /** Optional trace / request ID */
  traceId?: string;
}

export interface InteractiveLogsTableProps extends React.ComponentProps<"div"> {
  logs: LogEntry[];
  /** Available services for filtering */
  services?: string[];
  /** Title */
  title?: string;
  /** Max height before scroll */
  maxHeight?: string;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const levelConfig: Record<LogLevel, { label: string; className: string }> = {
  error: { label: "ERR", className: "bg-red-500/15 text-red-500 border-red-500/30" },
  warn: { label: "WRN", className: "bg-amber-500/15 text-amber-500 border-amber-500/30" },
  info: { label: "INF", className: "bg-blue-500/15 text-blue-500 border-blue-500/30" },
  debug: { label: "DBG", className: "bg-gray-500/15 text-gray-400 border-gray-500/30" },
  trace: { label: "TRC", className: "bg-gray-500/10 text-gray-500 border-gray-500/20" },
};

function statusCodeColor(code?: number): string {
  if (!code) return "";
  if (code >= 500) return "text-red-500 font-semibold";
  if (code >= 400) return "text-amber-500";
  if (code >= 300) return "text-blue-400";
  if (code >= 200) return "text-emerald-500";
  return "text-muted-foreground";
}

function LogLevelBadge({ level }: { level: LogLevel }) {
  const cfg = levelConfig[level];
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded border px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider",
        cfg.className,
      )}
    >
      {cfg.label}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Row                                                                */
/* ------------------------------------------------------------------ */

function LogRow({ log }: { log: LogEntry }) {
  const [expanded, setExpanded] = React.useState(false);
  const hasDetails = log.details && Object.keys(log.details).length > 0;

  return (
    <>
      <tr
        onClick={() => hasDetails && setExpanded(!expanded)}
        className={cn(
          "border-b border-border/50 text-sm transition-colors",
          hasDetails && "cursor-pointer hover:bg-muted/50",
          log.level === "error" && "bg-red-500/5",
        )}
      >
        {/* Expand indicator */}
        <td className="w-8 pl-3 py-2">
          {hasDetails ? (
            expanded ? (
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
            )
          ) : null}
        </td>
        {/* Timestamp */}
        <td className="py-2 pr-3 font-mono text-xs text-muted-foreground whitespace-nowrap">
          {log.timestamp}
        </td>
        {/* Level */}
        <td className="py-2 pr-3">
          <LogLevelBadge level={log.level} />
        </td>
        {/* Service */}
        <td className="py-2 pr-3 text-xs text-muted-foreground whitespace-nowrap">
          {log.service ?? "—"}
        </td>
        {/* Status */}
        <td className={cn("py-2 pr-3 text-xs font-mono whitespace-nowrap", statusCodeColor(log.statusCode))}>
          {log.statusCode ?? "—"}
        </td>
        {/* Message */}
        <td className="py-2 pr-3 truncate max-w-xs font-mono text-xs">
          {log.message}
        </td>
      </tr>

      {/* Expandable details */}
      <AnimatePresence>
        {expanded && hasDetails && (
          <tr>
            <td colSpan={6} className="p-0">
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="bg-muted/30 px-6 py-3 border-b border-border/50">
                  <pre className="text-xs font-mono whitespace-pre-wrap text-muted-foreground overflow-auto max-h-48">
                    {JSON.stringify(log.details, null, 2)}
                  </pre>
                  {log.traceId && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Trace ID: <code className="text-foreground">{log.traceId}</code>
                    </p>
                  )}
                </div>
              </motion.div>
            </td>
          </tr>
        )}
      </AnimatePresence>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

function InteractiveLogsTable({
  logs,
  services,
  title,
  maxHeight = "500px",
  className,
  ...props
}: InteractiveLogsTableProps) {
  const [search, setSearch] = React.useState("");
  const [levelFilter, setLevelFilter] = React.useState<LogLevel | "all">("all");
  const [serviceFilter, setServiceFilter] = React.useState<string>("all");

  const allServices = React.useMemo(
    () => services ?? [...new Set(logs.map((l) => l.service).filter(Boolean) as string[])],
    [logs, services],
  );

  const filtered = React.useMemo(() => {
    return logs.filter((log) => {
      if (levelFilter !== "all" && log.level !== levelFilter) return false;
      if (serviceFilter !== "all" && log.service !== serviceFilter) return false;
      if (search && !log.message.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [logs, levelFilter, serviceFilter, search]);

  const hasFilters = levelFilter !== "all" || serviceFilter !== "all" || search !== "";

  return (
    <div className={cn("rounded-xl border border-border bg-background overflow-hidden", className)} {...props}>
      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
        <div className="flex items-center gap-3">
          {title && <h3 className="text-sm font-semibold">{title}</h3>}
          <span className="text-xs text-muted-foreground">
            {filtered.length} of {logs.length} entries
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search logs..."
              className="h-7 rounded-md border border-border bg-background pl-7 pr-2 text-xs focus:outline-none focus:ring-1 focus:ring-ring w-40"
            />
          </div>

          {/* Level filter */}
          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value as LogLevel | "all")}
            className="h-7 rounded-md border border-border bg-background px-2 text-xs focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option value="all">All levels</option>
            {(Object.keys(levelConfig) as LogLevel[]).map((l) => (
              <option key={l} value={l}>{levelConfig[l].label}</option>
            ))}
          </select>

          {/* Service filter */}
          {allServices.length > 0 && (
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="h-7 rounded-md border border-border bg-background px-2 text-xs focus:outline-none focus:ring-1 focus:ring-ring"
            >
              <option value="all">All services</option>
              {allServices.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          )}

          {/* Clear */}
          {hasFilters && (
            <button
              onClick={() => { setSearch(""); setLevelFilter("all"); setServiceFilter("all"); }}
              className="inline-flex h-7 items-center gap-1 rounded-md border border-border px-2 text-xs hover:bg-muted"
            >
              <X className="h-3 w-3" /> Clear
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto" style={{ maxHeight }}>
        <table className="w-full text-left">
          <thead className="sticky top-0 bg-muted/80 backdrop-blur-sm border-b border-border">
            <tr className="text-xs font-medium text-muted-foreground">
              <th className="w-8 pl-3 py-2" />
              <th className="py-2 pr-3">Timestamp</th>
              <th className="py-2 pr-3">Level</th>
              <th className="py-2 pr-3">Service</th>
              <th className="py-2 pr-3">Status</th>
              <th className="py-2 pr-3">Message</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((log) => (
              <LogRow key={log.id} log={log} />
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="py-8 text-center text-sm text-muted-foreground">
                  No log entries match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { InteractiveLogsTable };
