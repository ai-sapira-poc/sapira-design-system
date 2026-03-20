"use client";

import { motion, type PanInfo } from "framer-motion";
import type React from "react";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "../../lib/utils";

import {
  ArrowRight,
  Database,
  Mail,
  Plus,
  Settings,
  Webhook,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface WorkflowNode {
  id: string;
  type: "trigger" | "action" | "condition";
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  position: { x: number; y: number };
}

export interface WorkflowConnection {
  from: string;
  to: string;
}

export interface WorkflowBuilderProps extends React.ComponentProps<"div"> {}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const NODE_WIDTH = 200;
const NODE_HEIGHT = 100;

const nodeTemplates: Omit<WorkflowNode, "id" | "position">[] = [
  {
    type: "trigger",
    title: "Webhook",
    description: "Receive data from external service",
    icon: Webhook,
    color: "emerald",
  },
  {
    type: "action",
    title: "Database Query",
    description: "Fetch user records",
    icon: Database,
    color: "blue",
  },
  {
    type: "condition",
    title: "Condition",
    description: "Check user status",
    icon: Settings,
    color: "amber",
  },
  {
    type: "action",
    title: "Send Email",
    description: "Notify user",
    icon: Mail,
    color: "purple",
  },
  {
    type: "action",
    title: "Log Event",
    description: "Record activity",
    icon: Zap,
    color: "indigo",
  },
];

const initialNodes: WorkflowNode[] = [
  {
    id: "node-1",
    type: "trigger",
    title: "Webhook",
    description: "Receive data from external service",
    icon: Webhook,
    color: "emerald",
    position: { x: 50, y: 100 },
  },
  {
    id: "node-2",
    type: "action",
    title: "Database Query",
    description: "Fetch user records",
    icon: Database,
    color: "blue",
    position: { x: 300, y: 100 },
  },
  {
    id: "node-3",
    type: "condition",
    title: "Condition",
    description: "Check user status",
    icon: Settings,
    color: "amber",
    position: { x: 550, y: 100 },
  },
];

const initialConnections: WorkflowConnection[] = [
  { from: "node-1", to: "node-2" },
  { from: "node-2", to: "node-3" },
];

const colorClasses: Record<string, string> = {
  emerald: "border-emerald-400/40 bg-emerald-400/10 text-emerald-400",
  blue: "border-blue-400/40 bg-blue-400/10 text-blue-400",
  amber: "border-amber-400/40 bg-amber-400/10 text-amber-400",
  purple: "border-purple-400/40 bg-purple-400/10 text-purple-400",
  indigo: "border-indigo-400/40 bg-indigo-400/10 text-indigo-400",
};

const badgeColors: Record<string, string> = {
  emerald: "bg-emerald-400/20 text-emerald-400 border-emerald-400/30",
  blue: "bg-blue-400/20 text-blue-400 border-blue-400/30",
  amber: "bg-amber-400/20 text-amber-400 border-amber-400/30",
  purple: "bg-purple-400/20 text-purple-400 border-purple-400/30",
  indigo: "bg-indigo-400/20 text-indigo-400 border-indigo-400/30",
};

const iconBg: Record<string, string> = {
  emerald: "bg-emerald-400/15",
  blue: "bg-blue-400/15",
  amber: "bg-amber-400/15",
  purple: "bg-purple-400/15",
  indigo: "bg-indigo-400/15",
};

/* ------------------------------------------------------------------ */
/*  SVG Connection                                                     */
/* ------------------------------------------------------------------ */

function ConnectionSVG({
  nodes,
  connections,
}: {
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
}) {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  return (
    <svg className="absolute inset-0 pointer-events-none" style={{ overflow: "visible" }}>
      {connections.map((conn) => {
        const from = nodeMap.get(conn.from);
        const to = nodeMap.get(conn.to);
        if (!from || !to) return null;

        const x1 = from.position.x + NODE_WIDTH;
        const y1 = from.position.y + NODE_HEIGHT / 2;
        const x2 = to.position.x;
        const y2 = to.position.y + NODE_HEIGHT / 2;
        const midX = (x1 + x2) / 2;

        return (
          <path
            key={`${conn.from}-${conn.to}`}
            d={`M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeDasharray="6 4"
            className="text-border"
          />
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Draggable Node                                                     */
/* ------------------------------------------------------------------ */

function DraggableNode({
  node,
  onDrag,
}: {
  node: WorkflowNode;
  onDrag: (id: string, info: PanInfo) => void;
}) {
  const Icon = node.icon;
  const colors = colorClasses[node.color] ?? colorClasses.blue;

  return (
    <motion.div
      drag
      dragMomentum={false}
      onDrag={(_e, info) => onDrag(node.id, info)}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "absolute cursor-grab active:cursor-grabbing select-none",
        "rounded-xl border bg-background/90 backdrop-blur-sm shadow-md",
        "flex flex-col gap-2 p-4",
        colors,
      )}
      style={{
        left: node.position.x,
        top: node.position.y,
        width: NODE_WIDTH,
        minHeight: NODE_HEIGHT,
      }}
    >
      {/* Type badge */}
      <span
        className={cn(
          "inline-flex self-start items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
          badgeColors[node.color] ?? badgeColors.blue,
        )}
      >
        {node.type}
      </span>

      {/* Icon + Title */}
      <div className="flex items-center gap-2">
        <div className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-lg", iconBg[node.color])}>
          <Icon className="h-3.5 w-3.5" />
        </div>
        <span className="text-sm font-medium truncate">{node.title}</span>
      </div>

      {/* Description */}
      <p className="text-xs opacity-70 truncate">{node.description}</p>

      {/* Connected indicator */}
      <div className="flex items-center gap-1 text-[10px] opacity-50">
        <ArrowRight className="h-3 w-3" />
        <span>CONNECTED</span>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

function WorkflowBuilder({ className, ...props }: WorkflowBuilderProps) {
  const [nodes, setNodes] = useState<WorkflowNode[]>(initialNodes);
  const [connections, setConnections] = useState<WorkflowConnection[]>(initialConnections);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (id: string, info: PanInfo) => {
    setNodes((prev) =>
      prev.map((n) =>
        n.id === id
          ? {
              ...n,
              position: {
                x: n.position.x + info.delta.x,
                y: n.position.y + info.delta.y,
              },
            }
          : n,
      ),
    );
  };

  const addNode = () => {
    const template = nodeTemplates[nodes.length % nodeTemplates.length];
    const newId = `node-${Date.now()}`;
    const lastNode = nodes[nodes.length - 1];
    const newNode: WorkflowNode = {
      ...template,
      id: newId,
      position: {
        x: lastNode ? lastNode.position.x + 250 : 50,
        y: lastNode ? lastNode.position.y : 100,
      },
    };

    flushSync(() => {
      setNodes((prev) => [...prev, newNode]);
      if (lastNode) {
        setConnections((prev) => [...prev, { from: lastNode.id, to: newId }]);
      }
    });
  };

  // Compute canvas size
  const maxX = Math.max(...nodes.map((n) => n.position.x + NODE_WIDTH + 50), 800);
  const maxY = Math.max(...nodes.map((n) => n.position.y + NODE_HEIGHT + 50), 400);

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background/80 backdrop-blur-sm overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-emerald-400/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
            Active
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Workflow Builder
          </span>
        </div>
        <button
          onClick={addNode}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted transition-colors"
        >
          <Plus className="h-3 w-3" />
          Add Node
        </button>
      </div>

      {/* Canvas */}
      <div ref={containerRef} className="overflow-auto" style={{ maxHeight: 500 }}>
        <div className="relative" style={{ width: maxX, height: maxY }}>
          <ConnectionSVG nodes={nodes} connections={connections} />
          {nodes.map((node) => (
            <DraggableNode key={node.id} node={node} onDrag={handleDrag} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border px-5 py-2.5 text-[10px] uppercase tracking-wider text-muted-foreground">
        <span>
          {nodes.length} nodes • {connections.length} connections
        </span>
        <span>Drag nodes to reposition</span>
      </div>
    </div>
  );
}

export { WorkflowBuilder };
