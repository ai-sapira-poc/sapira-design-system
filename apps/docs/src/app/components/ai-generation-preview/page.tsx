"use client";

import { useState } from "react";
import { AIGenerationPreview, Button } from "@sapira/ui";

const sampleContent = "Based on the analysis of historical data and current market trends, we recommend increasing the inventory allocation by 15% for Q3. This adjustment accounts for the projected seasonal demand spike and supply chain lead times observed in previous years.";

export default function AIGenerationPreviewPage() {
  const [generating, setGenerating] = useState(false);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">AIGenerationPreview</h1>
        <p className="text-muted-foreground mt-2">
          Panel showing AI-generated content with accept, reject, and regenerate actions.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Static</h2>
        <AIGenerationPreview
          content={sampleContent}
          onAccept={() => alert("Accepted")}
          onReject={() => alert("Rejected")}
          onRegenerate={() => alert("Regenerating")}
          className="max-w-2xl"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Streaming</h2>
        <Button variant="outline" size="sm" onClick={() => setGenerating(true)}>Generate</Button>
        <AIGenerationPreview
          content={generating ? sampleContent : ""}
          isGenerating={generating}
          onAccept={() => setGenerating(false)}
          onReject={() => setGenerating(false)}
          onRegenerate={() => { setGenerating(false); setTimeout(() => setGenerating(true), 100); }}
          className="max-w-2xl"
        />
      </section>
    </div>
  );
}
