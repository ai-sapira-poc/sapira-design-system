import { PageHeader, Button } from "@sapira/ui";

export default function PageHeaderPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">PageHeader</h1>
        <p className="text-muted-foreground mt-2">
          Page title with optional description, actions, and breadcrumbs.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Breadcrumbs & Actions</h2>
        <div className="border rounded-lg p-6">
          <PageHeader
            title="Project Settings"
            description="Manage your project configuration and team members."
            breadcrumbs={[
              { label: "Home", href: "#" },
              { label: "Projects", href: "#" },
              { label: "Settings" },
            ]}
            actions={
              <>
                <Button variant="outline" size="sm">Cancel</Button>
                <Button size="sm">Save Changes</Button>
              </>
            }
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Simple</h2>
        <div className="border rounded-lg p-6">
          <PageHeader title="Dashboard" description="Overview of your key metrics." />
        </div>
      </section>
    </div>
  );
}
