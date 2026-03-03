import { EmptyState, Button } from "@sapira/ui";
import { Inbox, Search } from "lucide-react";

export default function EmptyStatePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">EmptyState</h1>
        <p className="text-muted-foreground mt-2">
          A placeholder for when there is no data to display. Supports icon, title, description, and action.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">With Action</h2>
        <div className="border rounded-lg">
          <EmptyState
            icon={<Inbox />}
            title="No messages"
            description="You don't have any messages yet. Start a conversation to get going."
            action={<Button>New Message</Button>}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Search Results</h2>
        <div className="border rounded-lg">
          <EmptyState
            icon={<Search />}
            title="No results found"
            description="Try adjusting your search or filter criteria."
          />
        </div>
      </section>
    </div>
  );
}
