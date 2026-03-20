"use client";

import { useState, useCallback } from "react";
import { WorkflowBuilder, type WorkflowNode, type WorkflowConnection } from "@sapira/ui";
import { Mail, Database, Globe, GitBranch, Filter, Webhook } from "lucide-react";

const demoNodes: WorkflowNode[] = [
  { id: "1", label: "Webhook Trigger", description: "POST /api/orders", type: "trigger", icon: Webhook, status: "success" },
  { id: "2", label: "Validate Payload", description: "Check required fields", type: "condition", icon: Filter, status: "success" },
  { id: "3", label: "Save to Database", description: "Insert into orders table", type: "action", icon: Database, status: "running" },
  { id: "4", label: "Send Confirmation", description: "Email to customer", type: "action", icon: Mail, status: "waiting" },
  { id: "5", label: "Notify Slack", description: "#orders channel", type: "action", icon: Globe, status: "idle" },
];

const demoConnections: WorkflowConnection[] = [
  { from: "1", to: "2" },
  { from: "2", to: "3" },
  { from: "3", to: "4" },
  { from: "4", to: "5" },
];

export default function WorkflowBuilderPage() {
  const [nodes, setNodes] = useState(demoNodes);

  const handleExecute = useCallback(() => {
    // Reset all to running sequentially
    setNodes((prev) => prev.map((n, i) => ({ ...n, status: i === 0 ? "running" as const : "idle" as const })));
    let i = 0;
    const interval = setInterval(() => {
      setNodes((prev) =>
        prev.map((n, j) => ({
          ...n,
          status: j < i ? "success" as const : j === i ? "running" as const : j === i + 1 ? "waiting" as const : "idle" as const,
        })),
      );
      i++;
      if (i > prev.length) {
        clearInterval(interval);
        setNodes((prev) => prev.map((n) => ({ ...n, status: "success" as const })));
      }
    }, 1200);
    const prev = nodes;
  }, [nodes]);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">WorkflowBuilder</h1>
        <p className="text-muted-foreground mt-2">
          Visual workflow automation builder with animated nodes, connections, and execution monitoring.
          Inspired by n8n/Zapier-style workflow editors.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Live Demo</h2>
        <p className="text-sm text-muted-foreground">
          Click &quot;Execute&quot; to see the animated execution flow. Nodes show real-time status with
          pulse animations and color-coded borders.
        </p>
        <WorkflowBuilder
          nodes={nodes}
          connections={demoConnections}
          onExecute={handleExecute}
          onNodeClick={(node) => console.log("Clicked:", node.label)}
          onAddNode={() => console.log("Add node")}
          onRemoveNode={(id) => setNodes((prev) => prev.filter((n) => n.id !== id))}
          executing={nodes.some((n) => n.status === "running")}
          title="Order Processing Workflow"
          className="max-w-lg mx-auto"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Idle State</h2>
        <WorkflowBuilder
          nodes={[
            { id: "a", label: "HTTP Request", type: "trigger" },
            { id: "b", label: "Transform Data", type: "transform" },
            { id: "c", label: "Branch Logic", type: "condition" },
          ]}
          connections={[
            { from: "a", to: "b" },
            { from: "b", to: "c" },
          ]}
          title="Simple Pipeline"
          className="max-w-lg mx-auto"
        />
      </section>
    </div>
  );
}
