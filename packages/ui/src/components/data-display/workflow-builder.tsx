"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  CheckCircle2,
  XCircle,
  Clock,
  Loader2,
  Plus,
  Trash2,
  GripVertical,
  Zap,
  Mail,
  Database,
  Globe,
  GitBranch,
  Filter,
  Code,
  Webhook,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../../lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type NodeStatus = "idle" | "running" | "success" | "error" | "waiting";

export interface WorkflowNode {
  id: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
  type?: "trigger" | "action" | "condition" | "transform";
  status?: NodeStatus;
  /** Position on the canvas (relative %, or px) */
  x?: number;
  y?: number;
}

export interface WorkflowConnection {
  from: string;
  to: string;
  label?: string;
}

export interface WorkflowBuilderProps extends React.ComponentProps<"div"> {
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
  /** Called when execution is triggered */
  onExecute?: () => void;
  /** Called when a node is clicked */
  onNodeClick?: (node: WorkflowNode) => void;
  /** Called when add-node button is clicked */
  onAddNode?: () => void;
  /** Called when a node is removed */
  onRemoveNode?: (nodeId: string) => void;
  /** Whether the workflow is currently executing */
  executing?: boolean;
  /** Title shown above the builder */
  title?: string;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const statusConfig: Record<
  NodeStatus,
  { color: string; bg: string; border: string; Icon: LucideIcon | null; pulse: boolean }
> = {
  idle: { color: "text-muted-foreground", bg: "bg-muted/50", border: "border-border", Icon: null, pulse: false },
  running: { color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/50", Icon: Loader2, pulse: true },
  success: { color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/50", Icon: CheckCircle2, pulse: false },
  error: { color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/50", Icon: XCircle, pulse: false },
  waiting: { color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/50", Icon: Clock, pulse: true },
};

const typeIconMap: Record<string, LucideIcon> = {
  trigger: Webhook,
  action: Zap,
  condition: GitBranch,
  transform: Filter,
};

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function WorkflowNodeCard({
  node,
  onClick,
  onRemove,
}: {
  node: WorkflowNode;
  onClick?: () => void;
  onRemove?: () => void;
}) {
  const status = node.status ?? "idle";
  const cfg = statusConfig[status];
  const Icon = node.icon ?? typeIconMap[node.type ?? "action"] ?? Code;
  const StatusIcon = cfg.Icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={onClick}
      className={cn(
        "group relative flex items-center gap-3 rounded-xl border-2 px-4 py-3 cursor-pointer",
        "bg-background shadow-sm transition-shadow hover:shadow-md",
        cfg.border,
      )}
    >
      {/* Status pulse ring */}
      {cfg.pulse && (
        <span className={cn("absolute -top-1 -right-1 flex h-3 w-3")}>
          <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-75", cfg.bg)} />
          <span className={cn("relative inline-flex h-3 w-3 rounded-full", cfg.bg)} />
        </span>
      )}

      {/* Icon */}
      <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", cfg.bg)}>
        <Icon className={cn("h-4 w-4", cfg.color)} />
      </div>

      {/* Label & description */}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium truncate">{node.label}</p>
        {node.description && (
          <p className="text-xs text-muted-foreground truncate">{node.description}</p>
        )}
      </div>

      {/* Status icon */}
      {StatusIcon && (
        <StatusIcon
          className={cn("h-4 w-4 shrink-0", cfg.color, status === "running" && "animate-spin")}
        />
      )}

      {/* Remove button */}
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="absolute -top-2 -right-2 hidden h-5 w-5 items-center justify-center rounded-full bg-destructive text-destructive-foreground group-hover:flex"
        >
          <Trash2 className="h-3 w-3" />
        </button>
      )}
    </motion.div>
  );
}

function ConnectionLine({ animated }: { animated?: boolean }) {
  return (
    <div className="flex items-center justify-center py-1">
      <div className="relative flex flex-col items-center">
        <div className={cn("h-6 w-0.5 rounded-full bg-border", animated && "bg-blue-500/60")} />
        {animated && (
          <motion.div
            className="absolute top-0 h-2 w-0.5 rounded-full bg-blue-500"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        <svg className="h-2 w-3" viewBox="0 0 12 8">
          <path
            d="M6 8L0 0h12z"
            fill={animated ? "rgb(59 130 246 / 0.6)" : "hsl(var(--border))"}
          />
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

function WorkflowBuilder({
  nodes,
  connections,
  onExecute,
  onNodeClick,
  onAddNode,
  onRemoveNode,
  executing = false,
  title,
  className,
  ...props
}: WorkflowBuilderProps) {
  // Build ordered list using connections
  const orderedNodes = React.useMemo(() => {
    if (connections.length === 0) return nodes;
    const nodeMap = new Map(nodes.map((n) => [n.id, n]));
    const toSet = new Set(connections.map((c) => c.to));
    // Find root (not a "to" target)
    const roots = nodes.filter((n) => !toSet.has(n.id));
    const ordered: WorkflowNode[] = [];
    const visited = new Set<string>();
    const queue = roots.length > 0 ? [...roots] : [nodes[0]];

    while (queue.length > 0) {
      const current = queue.shift()!;
      if (visited.has(current.id)) continue;
      visited.add(current.id);
      ordered.push(current);
      // Find children
      for (const conn of connections) {
        if (conn.from === current.id) {
          const child = nodeMap.get(conn.to);
          if (child && !visited.has(child.id)) queue.push(child);
        }
      }
    }
    // Add any remaining
    for (const n of nodes) {
      if (!visited.has(n.id)) ordered.push(n);
    }
    return ordered;
  }, [nodes, connections]);

  const hasRunning = nodes.some((n) => n.status === "running");

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background/80 backdrop-blur-sm p-6",
        className,
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          <p className="text-xs text-muted-foreground">
            {nodes.length} node{nodes.length !== 1 && "s"} · {connections.length} connection{connections.length !== 1 && "s"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {onAddNode && (
            <button
              onClick={onAddNode}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted transition-colors"
            >
              <Plus className="h-3 w-3" />
              Add Node
            </button>
          )}
          {onExecute && (
            <button
              onClick={onExecute}
              disabled={executing}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white transition-colors",
                executing
                  ? "bg-amber-500 hover:bg-amber-600"
                  : "bg-emerald-500 hover:bg-emerald-600",
              )}
            >
              {executing ? (
                <>
                  <Pause className="h-3 w-3" />
                  Running…
                </>
              ) : (
                <>
                  <Play className="h-3 w-3" />
                  Execute
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Nodes */}
      <div className="flex flex-col items-center">
        <AnimatePresence mode="popLayout">
          {orderedNodes.map((node, i) => (
            <React.Fragment key={node.id}>
              {i > 0 && <ConnectionLine animated={hasRunning} />}
              <div className="w-full max-w-xs">
                <WorkflowNodeCard
                  node={node}
                  onClick={() => onNodeClick?.(node)}
                  onRemove={onRemoveNode ? () => onRemoveNode(node.id) : undefined}
                />
              </div>
            </React.Fragment>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export { WorkflowBuilder };
export type { WorkflowBuilderProps as WorkflowBuilderComponentProps };
