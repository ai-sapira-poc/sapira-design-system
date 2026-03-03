"use client";

import { ThemeProvider, Button, Badge, MetricsCard, Input } from "@sapira/ui";

const themes = [
  { name: "Default", brand: undefined },
  { name: "Ocean Blue", brand: "210 100% 50%" },
  { name: "Forest Green", brand: "150 60% 40%" },
  { name: "Sunset Orange", brand: "25 95% 55%" },
  { name: "Royal Purple", brand: "270 70% 55%" },
];

function ThemeCard({ name, brand }: { name: string; brand?: string }) {
  const content = (
    <div className="border rounded-lg p-6 space-y-4">
      <h3 className="font-semibold text-lg">{name}</h3>
      <div className="flex gap-2 flex-wrap">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div className="flex gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <Input placeholder="Input field" className="max-w-xs" />
      <div className="grid grid-cols-2 gap-3">
        <MetricsCard label="Revenue" value="$12,450" change={{ value: 5.2, trend: "positive" }} />
        <MetricsCard label="Users" value="843" change={{ value: -1.3, trend: "negative" }} />
      </div>
    </div>
  );

  if (!brand) return content;

  return (
    <ThemeProvider brand={brand}>
      {content}
    </ThemeProvider>
  );
}

export default function ThemesPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Themes</h1>
        <p className="text-muted-foreground mt-2">
          The same components rendered with different brand colors. Use <code>ThemeProvider</code> to apply a theme at any level.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Usage</h2>
        <pre className="bg-muted rounded-md p-4 text-sm overflow-x-auto">
          <code>{`import { ThemeProvider, createTheme } from "@sapira/ui";

// Simple
<ThemeProvider brand="210 100% 50%">
  <App />
</ThemeProvider>

// Full config
const theme = createTheme({
  name: "ocean",
  brand: "210 100% 50%",
  radius: 8,
  fontSans: "'Inter', sans-serif",
});`}</code>
        </pre>
      </section>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold">Examples</h2>
        {themes.map((t) => (
          <ThemeCard key={t.name} name={t.name} brand={t.brand} />
        ))}
      </section>
    </div>
  );
}
