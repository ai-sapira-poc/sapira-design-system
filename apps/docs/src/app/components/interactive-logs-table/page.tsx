"use client";

import { InteractiveLogsTable, type LogEntry } from "@sapira/ui";

const sampleLogs: LogEntry[] = [
  { id: "1", timestamp: "2026-03-20 14:23:01.123", level: "info", message: "GET /api/users — 200 OK (12ms)", service: "api-gateway", statusCode: 200 },
  { id: "2", timestamp: "2026-03-20 14:23:01.456", level: "debug", message: "Cache hit for user:1234", service: "cache-service", traceId: "abc-123-def" },
  { id: "3", timestamp: "2026-03-20 14:23:02.789", level: "warn", message: "Rate limit approaching for client 10.0.1.5 (90/100 req/min)", service: "api-gateway", statusCode: 429, details: { clientIp: "10.0.1.5", currentRate: 90, limit: 100, window: "1m" } },
  { id: "4", timestamp: "2026-03-20 14:23:03.012", level: "error", message: "Connection refused to postgres:5432", service: "order-service", statusCode: 500, details: { error: "ECONNREFUSED", host: "postgres", port: 5432, retryCount: 3, stack: "Error: connect ECONNREFUSED 10.0.2.3:5432\n    at TCPConnectWrap..." }, traceId: "xyz-789-abc" },
  { id: "5", timestamp: "2026-03-20 14:23:03.345", level: "info", message: "POST /api/orders — 201 Created (45ms)", service: "order-service", statusCode: 201 },
  { id: "6", timestamp: "2026-03-20 14:23:04.678", level: "info", message: "Email sent to user@example.com", service: "notification-service", statusCode: 200, details: { template: "order_confirmation", recipient: "user@example.com", deliveryTime: "1.2s" } },
  { id: "7", timestamp: "2026-03-20 14:23:05.901", level: "trace", message: "Entering middleware chain: auth → rate-limit → cors → handler", service: "api-gateway" },
  { id: "8", timestamp: "2026-03-20 14:23:06.234", level: "error", message: "Unhandled rejection in worker thread #3", service: "worker-pool", statusCode: 500, details: { worker: 3, error: "TypeError: Cannot read properties of undefined", taskId: "task-5678" } },
  { id: "9", timestamp: "2026-03-20 14:23:07.567", level: "info", message: "Health check passed — all dependencies healthy", service: "api-gateway", statusCode: 200 },
  { id: "10", timestamp: "2026-03-20 14:23:08.890", level: "warn", message: "Slow query detected: SELECT * FROM orders WHERE ... (2.3s)", service: "order-service", details: { query: "SELECT * FROM orders WHERE created_at > ... LIMIT 1000", duration: "2.3s", rows: 847 } },
];

export default function InteractiveLogsTablePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">InteractiveLogsTable</h1>
        <p className="text-muted-foreground mt-2">
          Extends DataTable with observability features: log-level badges, expandable rows,
          service filtering, and color-coded status codes. Perfect for debugging and monitoring UIs.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Full Demo</h2>
        <p className="text-sm text-muted-foreground">
          Try filtering by level or service, search for keywords, and click rows with details to expand them.
        </p>
        <InteractiveLogsTable
          logs={sampleLogs}
          title="Application Logs"
          maxHeight="400px"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Errors Only</h2>
        <InteractiveLogsTable
          logs={sampleLogs.filter((l) => l.level === "error")}
          title="Error Logs"
        />
      </section>
    </div>
  );
}
