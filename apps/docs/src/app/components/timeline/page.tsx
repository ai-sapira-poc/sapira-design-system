import { Timeline } from "@sapira/ui";

const events = [
  { id: "1", title: "File uploaded", description: "data-export.csv was uploaded", timestamp: "2025-03-01T10:00:00Z", variant: "user" as const },
  { id: "2", title: "Validation complete", description: "All 150 rows passed validation", timestamp: "2025-03-01T10:01:00Z", variant: "ai" as const },
  { id: "3", title: "Processing started", timestamp: "2025-03-01T10:02:00Z", variant: "system" as const },
  { id: "4", title: "Review required", description: "3 items flagged for review", timestamp: "2025-03-01T10:05:00Z", variant: "warning" as const },
  { id: "5", title: "Export completed", description: "Results exported successfully", timestamp: "2025-03-01T10:10:00Z", variant: "success" as const },
];

export default function TimelinePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Timeline</h1>
        <p className="text-muted-foreground mt-2">
          A vertical timeline for displaying a sequence of events with variants for different event types.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Default</h2>
        <div className="border rounded-lg p-6 max-w-md">
          <Timeline events={events} />
        </div>
      </section>
    </div>
  );
}
