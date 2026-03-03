"use client";

import { useState } from "react";
import { SearchBox } from "@sapira/ui";

export default function SearchBoxPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">SearchBox</h1>
        <p className="text-muted-foreground mt-2">
          Search input with keyboard shortcut hint and debounced onChange.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Demo</h2>
        <SearchBox placeholder="Search items…" shortcut="⌘K" onSearch={setQuery} className="max-w-sm" />
        <p className="text-sm text-muted-foreground">Debounced value: <code>{query || "—"}</code></p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Usage</h2>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`<SearchBox
  placeholder="Search…"
  shortcut="⌘K"
  onSearch={(value) => console.log(value)}
  debounceMs={300}
/>`}</code>
        </pre>
      </section>
    </div>
  );
}
