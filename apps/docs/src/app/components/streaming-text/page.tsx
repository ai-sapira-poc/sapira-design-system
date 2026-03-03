"use client";

import { useState } from "react";
import { StreamingText, Button } from "@sapira/ui";

const sampleText = "This is an example of AI-generated streaming text. Each word appears one at a time, creating a typewriter effect that makes the content feel dynamic and engaging. This pattern is commonly used in AI chat interfaces and content generation previews.";

export default function StreamingTextPage() {
  const [key, setKey] = useState(0);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">StreamingText</h1>
        <p className="text-muted-foreground mt-2">
          Typewriter effect for AI-generated text. Includes a blinking cursor and configurable speed. Also exports a <code>useStreamingText()</code> hook.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Demo</h2>
        <div className="border rounded-lg p-4 min-h-[100px]">
          <StreamingText key={key} text={sampleText} speed={40} />
        </div>
        <Button variant="outline" size="sm" onClick={() => setKey((k) => k + 1)}>Restart</Button>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Usage</h2>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`<StreamingText text="Hello world" speed={30} cursor />

// Or use the hook directly
const { displayed, isStreaming } = useStreamingText({
  text: "Hello world",
  speed: 30,
  onComplete: () => console.log("done"),
});`}</code>
        </pre>
      </section>
    </div>
  );
}
