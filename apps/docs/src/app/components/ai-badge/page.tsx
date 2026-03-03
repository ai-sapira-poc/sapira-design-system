"use client";

import { AIBadge } from "@sapira/ui";

export default function AIBadgePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">AIBadge</h1>
        <p className="text-muted-foreground mt-2">
          Animated violet badge with sparkle icon. Used to indicate AI-generated or AI-suggested content.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2"><span className="text-sm">Small:</span><AIBadge size="sm" /></div>
          <div className="flex items-center gap-2"><span className="text-sm">Medium:</span><AIBadge size="md" /></div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Variants</h2>
        <div className="flex items-center gap-4 flex-wrap">
          <AIBadge label="AI" tooltip="Default AI badge" />
          <AIBadge label="Generated" size="md" tooltip="Content was AI-generated" />
          <AIBadge label="AI" animated={false} tooltip="Static (no animation)" />
          <AIBadge label="AI" showTooltip={false} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Usage</h2>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`<AIBadge />
<AIBadge label="Generated" size="md" />
<AIBadge animated={false} showTooltip={false} />`}</code>
        </pre>
      </section>
    </div>
  );
}
