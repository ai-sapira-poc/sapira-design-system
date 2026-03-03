import { StatusBadge } from "@sapira/ui";

const statuses = ["active", "pending", "error", "inactive", "info", "processing", "success", "warning", "draft", "failed"];

export default function StatusBadgePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StatusBadge</h1>
        <p className="text-muted-foreground mt-2">
          A colored badge for displaying workflow states. Supports custom color maps.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Built-in Statuses</h2>
        <div className="flex gap-2 flex-wrap">
          {statuses.map((status) => (
            <StatusBadge key={status} status={status} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Custom Label</h2>
        <div className="flex gap-2 flex-wrap">
          <StatusBadge status="active" label="Online" />
          <StatusBadge status="error" label="Disconnected" />
          <StatusBadge status="pending" label="Awaiting Review" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Without Dot</h2>
        <div className="flex gap-2 flex-wrap">
          <StatusBadge status="active" label="Active" dot={false} />
          <StatusBadge status="pending" label="Pending" dot={false} />
        </div>
      </section>
    </div>
  );
}
